"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IndexDetailSlideOver } from '../../../../../components/dashboard/IndexDetailSlideOver';

interface Index {
  id: string;
  name: string;
  category: string;
  lastUpdated: string;
  coverage: string;
  status: 'active' | 'draft' | 'locked';
}

const mockIndices: Index[] = [
  { id: '1', name: 'High Net Worth', category: 'Wealth', lastUpdated: '2025-11-25', coverage: '95%', status: 'active' },
  { id: '2', name: 'Solar Readiness', category: 'Energy', lastUpdated: '2025-11-24', coverage: '94%', status: 'active' },
  { id: '3', name: 'Credit Intent', category: 'Financial', lastUpdated: '2025-11-22', coverage: '93%', status: 'active' },
  { id: '4', name: 'HELOC Appetite', category: 'Financial', lastUpdated: '2025-11-20', coverage: '92%', status: 'locked' },
  { id: '5', name: 'Auto Refi Propensity', category: 'Automotive', lastUpdated: '2025-11-18', coverage: '91%', status: 'draft' },
];

export default function IndicesPage() {
  const [selectedIndex, setSelectedIndex] = useState<Index | null>(null);
  const [showSlideOver, setShowSlideOver] = useState(false);

  const handleViewDetails = (index: Index) => {
    setSelectedIndex(index);
    setShowSlideOver(true);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Market Indices</h1>
        <p className="text-white/70">Browse and analyze your available market indices</p>
      </div>

      <div className="grid gap-4">
        {mockIndices.map((index, i) => (
          <motion.div
            key={index.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-white">{index.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    index.status === 'active' ? 'bg-emerald-400/20 text-emerald-300' :
                    index.status === 'draft' ? 'bg-amber-400/20 text-amber-300' :
                    'bg-white/10 text-white/60'
                  }`}>
                    {index.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-white/60">Category:</span>
                    <span className="ml-2 text-white">{index.category}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Coverage:</span>
                    <span className="ml-2 text-white">{index.coverage}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Updated:</span>
                    <span className="ml-2 text-white">{index.lastUpdated}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleViewDetails(index)}
                className="ml-6 px-4 py-2 rounded-lg bg-accent/80 hover:bg-accent transition text-sm font-medium"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedIndex && (
        <IndexDetailSlideOver 
          index={selectedIndex}
          isOpen={showSlideOver}
          onClose={() => setShowSlideOver(false)}
        />
      )}
    </div>
  );
}
