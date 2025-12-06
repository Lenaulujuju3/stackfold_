"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bell, CheckCircle, XCircle, Info, Trash2, Eye } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
  date: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  { id: '1', title: 'Segment Export Complete', message: 'Your HNW_NY_Q2 segment has been successfully exported (125,000 records)', type: 'success', date: '2025-12-01', read: false },
  { id: '2', title: 'File Scoring Complete', message: 'Customer file "prospects_dec.csv" has been scored and is ready for download', type: 'success', date: '2025-11-30', read: false },
  { id: '3', title: 'API Key Expiring Soon', message: 'Your production API key will expire in 7 days. Generate a new key to avoid service interruption.', type: 'info', date: '2025-11-29', read: true },
  { id: '4', title: 'Usage Alert', message: 'You have used 75% of your monthly data credits. Consider upgrading your plan.', type: 'info', date: '2025-11-28', read: true },
  { id: '5', title: 'Export Failed', message: 'Segment export "solar_ca_q4" failed due to insufficient credits. Please top up your account.', type: 'error', date: '2025-11-27', read: true },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filteredNotifications = notifications.filter(n => 
    filter === 'all' ? true : !n.read
  );

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-emerald-400" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-400" />;
      case 'info': return <Info className="h-5 w-5 text-sky-400" />;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
            <p className="text-white/70">Stay updated with your account activity</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setFilter(filter === 'all' ? 'unread' : 'all')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'unread' 
                  ? 'bg-accent/20 text-accent' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filter === 'unread' ? 'Show All' : 'Unread Only'}
            </button>
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
            >
              Mark All Read
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {filteredNotifications.map((notification, i) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ delay: i * 0.05 }}
              className={`p-6 rounded-xl border backdrop-blur transition ${
                notification.read 
                  ? 'border-white/10 bg-white/5' 
                  : 'border-accent/20 bg-accent/5'
              } hover:bg-white/10`}
            >
              <div className="flex items-start gap-4">
                {getIcon(notification.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-white">{notification.title}</h3>
                    <span className="text-sm text-white/60">{notification.date}</span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">{notification.message}</p>
                  <div className="flex items-center gap-2">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="px-3 py-1 rounded-lg bg-accent/20 text-accent text-sm hover:bg-accent/30 transition flex items-center gap-1"
                      >
                        <Eye className="h-3 w-3" />
                        Mark Read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="px-3 py-1 rounded-lg bg-white/10 text-white/70 text-sm hover:bg-red-400/20 hover:text-red-300 transition flex items-center gap-1"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 text-white/20 mx-auto mb-4" />
          <p className="text-white/60">No notifications to display</p>
        </div>
      )}
    </div>
  );
}
