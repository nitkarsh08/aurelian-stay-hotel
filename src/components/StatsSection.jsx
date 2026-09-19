import { motion } from "framer-motion";
import CountUp from "react-countup";
import { BedDouble, Users, Star, Hotel } from "lucide-react";

const stats = [
  { icon: BedDouble, value: 248, label: "Luxury Rooms" },
  { icon: Users, value: 1204, label: "Happy Guests" },
  { icon: Star, value: 98, label: "Customer Rating" },
  { icon: Hotel, value: 18, label: "Years Experience" },
];

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-3xl p-6 text-center border border-yellow-500/10"
          >
            <item.icon className="mx-auto text-yellow-400 mb-3" size={34} />

            <h2 className="text-3xl lg:text-5xl font-bold gradient">
              <CountUp end={item.value} duration={2} />
            </h2>

            <p className="mt-3 text-gray-400 text-sm lg:text-base">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}