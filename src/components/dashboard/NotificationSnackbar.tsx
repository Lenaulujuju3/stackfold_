"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

export const NotificationSnackbar: FC = () => {
  const show = true;
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-lg"
        >
          <a href="/dashboard/notifications" className="text-white hover:text-accent transition">
            View notifications
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
