"use client";
import React from "react";
import { Section } from "../../../(components)/components";
import { INDICES } from "../../../../lib/mock/data";
import { Card, CardHeader, CardContent, Table, THead, TH, TBody, TR, TD } from "../../../../components/ui/shadcn";

export default function AdminIndicesPage() {
  return (
    <div className="py-8">
      <Section title="Indices" subtitle="Mock indices list">
        <Card>
          <CardHeader>Indices</CardHeader>
          <CardContent>
            <Table>
              <THead>
                <TH>Name</TH>
                <TH>Category</TH>
                <TH>Version</TH>
                <TH>Last Updated</TH>
                <TH>Status</TH>
              </THead>
              <TBody>
                {INDICES.map((i) => (
                  <TR key={i.id}>
                    <TD>{i.name}</TD>
                    <TD>{i.category}</TD>
                    <TD>{i.version}</TD>
                    <TD>{new Date(i.lastUpdated).toLocaleDateString()}</TD>
                    <TD>{i.status}</TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
