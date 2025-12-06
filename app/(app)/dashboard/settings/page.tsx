"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardContent, Label, Input, Switch } from "../../../../components/ui/shadcn";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Corp",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: false,
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>Profile Information</CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input 
                  value={profile.name}
                  onChange={(e) => handleProfileChange('name', e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input 
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label>Company</Label>
                <Input 
                  value={profile.company}
                  onChange={(e) => handleProfileChange('company', e.target.value)}
                  placeholder="Enter your company"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Notification Preferences</CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Email Notifications</Label>
                <Switch 
                  checked={notifications.email}
                  onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>SMS Notifications</Label>
                <Switch 
                  checked={notifications.sms}
                  onCheckedChange={(checked) => handleNotificationChange('sms', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>Push Notifications</Label>
                <Switch 
                  checked={notifications.push}
                  onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>Marketing Updates</Label>
                <Switch 
                  checked={notifications.marketing}
                  onCheckedChange={(checked) => handleNotificationChange('marketing', checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Privacy Settings</CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Data Sharing</Label>
                <Switch checked={true} onCheckedChange={() => {}} />
              </div>
              <div className="flex items-center justify-between">
                <Label>Analytics Tracking</Label>
                <Switch checked={true} onCheckedChange={() => {}} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
