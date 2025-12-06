"use client";
import React from "react";
import { Section } from "../../../(components)/components";
import { INVOICES } from "../../../../lib/mock/data";
import { Card, CardHeader, CardContent, Table, THead, TH, TBody, TR, TD } from "../../../../components/ui/shadcn";

export default function AdminInvoicesPage() {
  return (
    <div className="py-8">
      <Section title="Invoices" subtitle="Mock invoices list">
        <Card>
          <CardHeader>Invoices</CardHeader>
          <CardContent>
            <Table>
              <THead>
                <TH>Invoice ID</TH>
                <TH>Customer</TH>
                <TH>Amount</TH>
                <TH>Status</TH>
                <TH>Date</TH>
              </THead>
              <TBody>
                {INVOICES.map((i) => (
                  <TR key={i.id}>
                    <TD>{i.id}</TD>
                    <TD>{i.customer}</TD>
                    <TD>${i.amount.toLocaleString()}</TD>
                    <TD>{i.status}</TD>
                    <TD>{new Date(i.date).toLocaleDateString()}</TD>
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
