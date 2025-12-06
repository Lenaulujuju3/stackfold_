"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FC } from 'react';
import { Sparkline } from '../../../app/(components)/components';

interface Index {
  id: string;
  name: string;
  category: string;
  lastUpdated: string;
  coverage: string;
  status: 'active' | 'draft' | 'locked';
}

interface IndexDetailSlideOverProps {
  index: Index | null;
  isOpen: boolean;
  onClose: () => void;
}

export const IndexDetailSlideOver: FC<IndexDetailSlideOverProps> = ({ index, isOpen, onClose }) => {
  const sparkData = [10, 25, 40, 30, 50, 70, 90, 85, 95, 88];

  if (!index) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-96 bg-midnight/90 backdrop-blur-xl border-l border-white/10 p-6 shadow-2xl z-50 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">{index.name}</h2>
              <button 
                onClick={onClose}
                className="text-white/60 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Status and metadata */}
            <div className="mb-6">
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-4 ${
                index.status === 'active' ? 'bg-emerald-400/20 text-emerald-300' :
                index.status === 'draft' ? 'bg-amber-400/20 text-amber-300' :
                'bg-white/10 text-white/60'
              }`}>
                {index.status}
              </span>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Category:</span>
                  <span className="text-white">{index.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Coverage:</span>
                  <span className="text-white">{index.coverage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Last Updated:</span>
                  <span className="text-white">{index.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Histogram/Sparkline */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white mb-3">Score Distribution</h3>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <Sparkline data={sparkData} color="var(--accent-teal)" />
              </div>
            </div>

            {/* Coverage mini-map (placeholder) */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white mb-3">Coverage Map</h3>
              <div className="h-32 rounded-lg border border-white/10 bg-gradient-to-br from-accent-2/15 via-transparent to-amber-300/10 flex items-center justify-center">
                <span className="text-white/60 text-sm">Coverage visualization</span>
              </div>
            </div>

            {/* Upsell banner for locked indices */}
            {index.status === 'locked' && (
              <div className="mb-6 rounded-lg border border-amber-400/20 bg-amber-400/10 p-4">
                <h3 className="text-sm font-semibold text-amber-300 mb-2">Upgrade Required</h3>
                <p className="text-xs text-white/70 mb-3">
                  This index is available on higher-tier plans. Upgrade to unlock full access.
                </p>
                <button 
                  onClick={() => window.location.href = '/dashboard/usage?upgrade=true'}
                  className="w-full px-3 py-2 rounded-lg bg-amber-400/20 text-amber-300 hover:bg-amber-400/30 transition text-sm font-medium"
                >
                  Upgrade Plan
                </button>
              </div>
            )}

            <button 
              onClick={onClose}
              className="w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
