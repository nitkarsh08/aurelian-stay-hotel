import { motion } from "framer-motion";

export default function BookingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .7 }}
      className="glass rounded-3xl p-5
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-4"
    >

      <input type="date" className="bg-transparent outline-none"/>

      <input type="date" className="bg-transparent outline-none"/>

      <select className="bg-transparent outline-none">
        <option>2 Guests</option>
        <option>4 Guests</option>
        <option>6 Guests</option>
      </select>

      <button className="bg-yellow-500 text-black rounded-xl font-bold py-3">
        Check Availability
      </button>

    </motion.div>
  );
}