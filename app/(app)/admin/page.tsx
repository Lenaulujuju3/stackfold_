"use client";
import React from "react";
import { Section } from "../../(components)/components";
import { ADMIN_SUMMARY } from "../../../lib/mock/data";
import { Card, CardHeader, CardContent, Table, THead, TH, TBody, TR, TD } from "../../../components/ui/shadcn";

export default function AdminPage() {
  return (
    <div className="py-8">
      <Section title="Admin Dashboard" subtitle="System overview">
        <Card>
          <CardHeader>Overview</CardHeader>
          <CardContent>
            <Table>
              <THead>
                <TH>Metric</TH>
                <TH>Value</TH>
                <TH>Status</TH>
              </THead>
              <TBody>
                {ADMIN_SUMMARY.map((row) => (
                  <TR key={row.metric}>
                    <TD>{row.metric}</TD>
                    <TD>{row.value}</TD>
                    <TD>{row.status}</TD>
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
