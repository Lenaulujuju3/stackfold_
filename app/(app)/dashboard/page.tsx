"use client";
import { Section } from "../../(components)/components";
import dynamic from "next/dynamic";
import { getUser } from "../../../lib/auth";
import { Card, CardHeader, CardContent, Table, THead, TH, TBody, TR, TD } from "../../../components/ui/shadcn";

const MapExplorer = dynamic(() => import("../../../src/components/dashboard/MapExplorer").then(mod => mod.MapExplorer), { ssr: false });

export default function DashboardPage() {
  const user = getUser();

  return (
    <div className="py-8">
      <Section title="Dashboard" subtitle={`Welcome back, ${user?.email}`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>Quick Stats</CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/80">Active Projects</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Completed This Month</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Team Members</span>
                  <span className="font-semibold">5</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Recent Activity</CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Data upload completed</span>
                  <span className="text-white/60">2h ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">New segment created</span>
                  <span className="text-white/60">5h ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Report generated</span>
                  <span className="text-white/60">1d ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>Map Explorer</CardHeader>
            <CardContent>
              <div className="h-96">
                <MapExplorer />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>Recent Projects</CardHeader>
            <CardContent>
              <Table>
                <THead>
                  <TH>Project Name</TH>
                  <TH>Status</TH>
                  <TH>Progress</TH>
                  <TH>Due Date</TH>
                </THead>
                <TBody>
                  <TR>
                    <TD>Market Analysis Q4</TD>
                    <TD>In Progress</TD>
                    <TD>65%</TD>
                    <TD>Dec 15, 2024</TD>
                  </TR>
                  <TR>
                    <TD>Customer Segmentation</TD>
                    <TD>Review</TD>
                    <TD>90%</TD>
                    <TD>Dec 8, 2024</TD>
                  </TR>
                  <TR>
                    <TD>Competitive Intelligence</TD>
                    <TD>Completed</TD>
                    <TD>100%</TD>
                    <TD>Dec 1, 2024</TD>
                  </TR>
                </TBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
