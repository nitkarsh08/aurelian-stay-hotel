import { motion } from "framer-motion";

export default function DashboardCard({ title, value, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="glass rounded-3xl p-6 border border-yellow-600/20"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400">{title}</p>
          <h2 className="text-3xl font-bold gradient">{value}</h2>
        </div>

        {Icon && <Icon className="text-yellow-400" size={36} />}
      </div>
    </motion.div>
  );
}