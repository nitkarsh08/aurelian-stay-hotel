import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  ["248", "Luxury Rooms"],
  ["18", "Years Experience"],
  ["1204", "Happy Guests"],
  ["98", "Customer Rating"],
];

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {stats.map(([value, title], i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-3xl p-6 text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold gradient">
              <CountUp end={Number(value)} duration={2}/>
            </h2>

            <p className="mt-3 text-gray-400 text-sm lg:text-base">
              {title}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}