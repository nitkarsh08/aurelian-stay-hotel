import { motion } from "framer-motion";

export default function OccupancyCard() {
  const value = 82;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass rounded-3xl p-8 text-center"
    >
      <svg width="170" height="170" className="mx-auto">

        <circle
          cx="85"
          cy="85"
          r="70"
          stroke="#333"
          strokeWidth="12"
          fill="none"
        />

        <circle
          cx="85"
          cy="85"
          r="70"
          stroke="#d4af37"
          strokeWidth="12"
          fill="none"
          strokeDasharray="440"
          strokeDashoffset={440 - (440 * value) / 100}
          strokeLinecap="round"
          transform="rotate(-90 85 85)"
        />

        <text
          x="85"
          y="95"
          textAnchor="middle"
          fontSize="30"
          fill="#d4af37"
          fontWeight="bold"
        >
          {value}%
        </text>

      </svg>

      <h3 className="mt-5 text-xl">
        Occupancy Rate
      </h3>

    </motion.div>
  );
}