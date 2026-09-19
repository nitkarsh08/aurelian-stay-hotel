import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import BookingCard from "./BookingCard";
import FloatingParticles from "./FloatingParticles";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      <img
        src="/images/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover brightness-40"
      />

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-bold leading-tight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-8xl"
        >
          Luxury Beyond

          <span className="gradient block">
            Imagination
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-6 text-gray-300
          text-base
          sm:text-lg
          md:text-xl
          max-w-2xl mx-auto"
        >
          Experience elegance, comfort and world-class hospitality.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link to="/booking">
            <AnimatedButton>Book Now</AnimatedButton>
          </Link>
          <Link to="/rooms">
            <AnimatedButton>Explore Rooms</AnimatedButton>
          </Link>
        </div>

        <div className="mt-12">
          <BookingCard />
        </div>

      </div>

    </section>
  );
}