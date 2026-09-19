import { motion } from "framer-motion";

export default function AnimatedButton({ children }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(212,175,55,.6)"
      }}
      whileTap={{ scale: .96 }}
      className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold"
    >
      {children}
    </motion.button>
  );
}