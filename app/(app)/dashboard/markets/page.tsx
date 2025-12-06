"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardContent, Table, THead, TH, TBody, TR, TD, Label, Select, Input, Button } from "../../../../components/ui/shadcn";

export default function MarketsPage() {
  const [selectedIndex, setSelectedIndex] = useState("solar-readiness");
  const [minScore, setMinScore] = useState("0");
  const [maxScore, setMaxScore] = useState("100");
  const [geography, setGeography] = useState("zip");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching markets with:", {
      index: selectedIndex,
      scoreRange: [minScore, maxScore],
      geography,
      query: searchQuery,
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Market Explorer</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div>
          <Label>Index</Label>
          <Select value={selectedIndex} onChange={(e) => setSelectedIndex(e.target.value)}>
            <option value="solar-readiness">Solar Readiness</option>
            <option value="credit-intent">Credit Intent</option>
            <option value="heloc-appetite">HELOC Appetite</option>
            <option value="auto-refi">Auto Refi Propensity</option>
          </Select>
        </div>

        <div>
          <Label>Min Score</Label>
          <Input 
            type="number" 
            value={minScore} 
            onChange={(e) => setMinScore(e.target.value)}
            placeholder="0"
          />
        </div>

        <div>
          <Label>Max Score</Label>
          <Input 
            type="number" 
            value={maxScore} 
            onChange={(e) => setMaxScore(e.target.value)}
            placeholder="100"
          />
        </div>

        <div>
          <Label>Geography</Label>
          <Select value={geography} onChange={(e) => setGeography(e.target.value)}>
            <option value="zip">ZIP Code</option>
            <option value="county">County</option>
            <option value="state">State</option>
          </Select>
        </div>
      </div>

      <div className="mb-8">
        <Label>Search Markets</Label>
        <div className="flex gap-2">
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter ZIP code, city, or state"
            className="flex-1"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>

      <Card>
        <CardHeader>Market Results</CardHeader>
        <CardContent>
          <Table>
            <THead>
              <TH>Location</TH>
              <TH>Index Score</TH>
              <TH>Population</TH>
              <TH>Market Potential</TH>
            </THead>
            <TBody>
              <TR>
                <TD>90210 - Beverly Hills, CA</TD>
                <TD>85</TD>
                <TD>21,500</TD>
                <TD>High</TD>
              </TR>
              <TR>
                <TD>10001 - New York, NY</TD>
                <TD>72</TD>
                <TD>45,200</TD>
                <TD>Medium</TD>
              </TR>
              <TR>
                <TD>33101 - Miami, FL</TD>
                <TD>91</TD>
                <TD>18,700</TD>
                <TD>High</TD>
              </TR>
              <TR>
                <TD>60601 - Chicago, IL</TD>
                <TD>68</TD>
                <TD>32,100</TD>
                <TD>Medium</TD>
              </TR>
              <TR>
                <TD>75001 - Dallas, TX</TD>
                <TD>76</TD>
                <TD>28,900</TD>
                <TD>Medium</TD>
              </TR>
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
