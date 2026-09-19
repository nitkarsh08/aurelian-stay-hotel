import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl p-8 mb-8 bg-gradient-to-r from-[#111111] via-[#1b1810] to-[#111111] border border-yellow-500/20"
    >
      <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold gradient">Welcome Back</h1>
          <p className="text-gray-400 mt-2">
            Manage your luxury hotel in one place.
          </p>
        </div>

        <Sparkles size={50} className="text-yellow-400" />
      </div>
    </motion.div>
  );
}