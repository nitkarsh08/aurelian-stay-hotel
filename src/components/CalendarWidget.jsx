import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function CalendarWidget() {
  const today = 19;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="glass rounded-3xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="text-yellow-400" size={28} />
        <h2 className="text-2xl font-bold gradient">
          September 2026
        </h2>
      </div>

      <div className="grid grid-cols-7 gap-3 text-center">
        {["S","M","T","W","T","F","S"].map((d)=>(
          <div key={d} className="text-gray-400 text-sm font-semibold">
            {d}
          </div>
        ))}

        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl transition cursor-pointer ${
              i + 1 === today
                ? "bg-yellow-500 text-black font-bold"
                : "hover:bg-yellow-500/10"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
        <p className="text-yellow-400 font-semibold">
          Next Available Check-in
        </p>
        <p className="text-gray-300">20 September 2026</p>
      </div>
    </motion.div>
  );
}