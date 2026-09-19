import { motion } from "framer-motion";

export default function GuestModal({ guest, onClose }) {
  if (!guest) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: .8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass rounded-3xl p-8 w-[420px]"
      >
        <h2 className="gradient text-3xl mb-6">{guest.name}</h2>

        <div className="space-y-3">
          <p>Room: {guest.room}</p>
          <p>Status: {guest.status}</p>
          <p>Stay: {guest.days} days</p>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-yellow-500 text-black py-3 rounded-xl"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}