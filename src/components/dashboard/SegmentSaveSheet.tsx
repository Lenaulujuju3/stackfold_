"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FC, useState } from "react";

interface SegmentSaveSheetProps {
  isOpen: boolean;
  onClose: () => void;
  recordCount?: number;
}

export const SegmentSaveSheet: FC<SegmentSaveSheetProps> = ({ isOpen, onClose, recordCount = 12345 }) => {
  const [name, setName] = useState('');
  const [format, setFormat] = useState<'CSV' | 'Parquet'>('CSV');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!name.trim()) return;
    
    setIsSaving(true);
    try {
      const response = await fetch('/api/dashboard/segments', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, format, count: recordCount }) 
      });
      
      if (response.ok) {
        onClose();
        setName('');
      }
    } catch (error) {
      console.error('Failed to save segment:', error);
    } finally {
      setIsSaving(false);
    }
  };

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
            className="fixed right-0 top-0 h-full w-96 bg-midnight/90 backdrop-blur-xl border-l border-white/10 p-6 shadow-2xl z-50"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">Save Segment</h2>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Segment name"
              className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <select 
              value={format} 
              onChange={(e) => setFormat(e.target.value as 'CSV' | 'Parquet')}
              className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="CSV">CSV</option>
              <option value="Parquet">Parquet</option>
            </select>
            <div className="mb-6 text-sm text-white/60">
              Estimated records: <span className="text-white font-semibold">{recordCount.toLocaleString()}</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleSave}
                disabled={isSaving || !name.trim()}
                className="flex-1 px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? 'Creating...' : 'Create Export'}
              </button>
              <button 
                onClick={onClose}
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
