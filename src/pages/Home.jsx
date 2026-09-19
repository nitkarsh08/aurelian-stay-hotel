import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import { Wifi, Utensils, Waves, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Wifi, title: "High-Speed WiFi" },
  { icon: Utensils, title: "Fine Dining" },
  { icon: Waves, title: "Infinity Pool" },
  { icon: Dumbbell, title: "Luxury Gym" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <StatsSection />

      <section className="max-w-7xl mx-auto px-5 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold gradient text-center"
        >
          Luxury Facilities
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-3xl p-8 text-center"
            >
              <f.icon className="mx-auto text-yellow-400" size={42} />

              <h3 className="mt-5 font-semibold">
                {f.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}