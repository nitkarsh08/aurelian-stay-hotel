import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = [...Array(30)];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-yellow-400/40"
          style={{
            width: Math.random() * 8 + 2,
            height: Math.random() * 8 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity
          }}
        />
      ))}
    </div>
  );
}