#!/usr/bin/env node
import { promises as fs } from "fs";
import path from "path";

const ROOT = path.resolve(process.cwd());
const DATA_DIR = path.join(ROOT, "data");
const OUT_DIR = path.join(ROOT, "lib", "generated");

function toCamel(name) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, (m) => m.toLowerCase());
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true }).catch(() => {});
}

function parseCSV(text) {
  const rows = [];
  let i = 0, cur = "", cell = "", inQuote = false;
  function pushCell() { row.push(cell); cell = ""; }
  function pushRow() { if (row.length) rows.push(row); row = []; }
  let row = [];
  while (i < text.length) {
    const ch = text[i++];
    if (ch === '"') {
      if (inQuote && text[i] === '"') { cell += '"'; i++; }
      else inQuote = !inQuote;
    } else if (ch === ',' && !inQuote) { pushCell(); }
    else if ((ch === '\n' || ch === '\r') && !inQuote) {
      if (ch === '\r' && text[i] === '\n') i++;
      pushCell(); pushRow();
    } else { cell += ch; }
  }
  if (cell.length || row.length) { pushCell(); pushRow(); }
  if (!rows.length) return [];
  const header = rows[0].map((h) => h.trim());
  return rows.slice(1).filter(r => r.length && r.some(v => v.trim() !== "")).map((r) => {
    const obj = {};
    header.forEach((h, idx) => { obj[h || `col_${idx+1}`] = (r[idx] ?? "").trim(); });
    return obj;
  });
}

async function main() {
  await ensureDir(OUT_DIR);
  const files = await fs.readdir(DATA_DIR).catch(() => []);
  const exports = [];
  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    const base = toCamel(path.basename(f));
    const filePath = path.join(DATA_DIR, f);
    const outPath = path.join(OUT_DIR, `${base}.ts`);
    try {
      const raw = await fs.readFile(filePath, "utf8");
      let data;
      if (ext === ".csv") data = parseCSV(raw);
      else if (ext === ".json") data = JSON.parse(raw);
      else continue; // skip non csv/json

      const content = `// Auto-generated from data/${f} at build time\n` +
`export type Row = Record<string, string | number | boolean | null>;\n` +
`export const ${base} = ${JSON.stringify(data, null, 2)} as const;\n`;
      await fs.writeFile(outPath, content, "utf8");
      exports.push({ base, f });
      console.log(`[ingest-data] Generated lib/generated/${base}.ts from data/${f}`);
    } catch (e) {
      console.warn(`[ingest-data] Failed to process ${f}:`, e.message || e);
    }
  }
  // index barrel
  const barrel = exports.map((e) => `export { ${e.base} } from "./${e.base}";`).join("\n") + "\n";
  await fs.writeFile(path.join(OUT_DIR, "index.ts"), barrel, "utf8");
  console.log(`[ingest-data] Wrote lib/generated/index.ts with ${exports.length} exports`);
}

main();
