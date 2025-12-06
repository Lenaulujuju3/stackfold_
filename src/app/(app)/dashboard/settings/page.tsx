"use client";

import { User, CreditCard, Users, Key, Save, Lock } from 'lucide-react';

type Tab = 'profile' | 'billing' | 'users' | 'api';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [isSaving, setIsSaving] = useState(false);

  const tabs = [
    { id: 'profile' as Tab, label: 'Profile', icon: User },
    { id: 'billing' as Tab, label: 'Billing', icon: CreditCard },
    { id: 'users' as Tab, label: 'Team', icon: Users },
    { id: 'api' as Tab, label: 'API Keys', icon: Key },
  ];

  const handleSave = async (formData: unknown) => {
    setIsSaving(true);
    try {
      // Simulate API call
      console.log('💾 Saving settings:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-white/70">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-accent/20 text-accent'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-4">Profile Settings</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">First Name</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" defaultValue="John" />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Last Name</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" defaultValue="john@company.com" />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Company</label>
                <input className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" defaultValue="Acme Corp" />
              </div>
              <button
                onClick={() => handleSave({ tab: 'profile' })}
                disabled={isSaving}
                className="px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 transition disabled:opacity-50 text-white font-medium flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-4">Billing Information</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Professional Plan</span>
                    <span className="text-white font-semibold">$299/month</span>
                  </div>
                  <p className="text-sm text-white/60">Next billing date: December 15, 2025</p>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Payment Method</label>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white">
                    •••• •••• •••• 4242
                  </div>
                </div>
                <button
                  onClick={() => window.location.href = '/dashboard/usage?upgrade=true'}
                  className="px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 transition text-white font-medium"
                >
                  Upgrade Plan
                </button>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-4">Team Management</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div>
                    <p className="text-white font-medium">john@company.com</p>
                    <p className="text-sm text-white/60">Admin</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div>
                    <p className="text-white font-medium">jane@company.com</p>
                    <p className="text-sm text-white/60">Viewer</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs">Active</span>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white font-medium">
                Invite Team Member
              </button>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-4">API Keys</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Production Key</span>
                    <span className="px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs">Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 px-3 py-2 rounded bg-black/50 text-sm text-white font-mono">
                      sk_live_••••••••••••••••
                    </code>
                    <button className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white text-sm">
                      <Lock className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 transition text-white font-medium">
                  Generate New Key
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
