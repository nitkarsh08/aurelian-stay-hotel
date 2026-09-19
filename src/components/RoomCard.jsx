import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

export default function RoomCard({ room }) {

  return (

    <motion.div
      whileHover={{
        y: -12,
        rotateX: 3,
        rotateY: -3
      }}
      transition={{
        type: "spring",
        stiffness: 180
      }}
      className="glass rounded-3xl overflow-hidden"
    >

      <div className="overflow-hidden">

        <motion.img
          src={room.image}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: .6 }}
          className="w-full h-72 object-cover"
        />

      </div>

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold">
            {room.name}
          </h3>

          <div className="flex items-center gap-1 text-yellow-400">

            <Star size={18} fill="currentColor"/>
            {room.rating}

          </div>

        </div>

        <p className="text-gray-400 mt-4">
          {room.description}
        </p>

        <div className="flex gap-4 mt-6">

          {room.amenities.map((Icon, i) => (
            <Icon key={i} className="text-yellow-400"/>
          ))}

        </div>

        <div className="flex justify-between items-center mt-8">

          <div>

            <span className="text-gray-400">Starting from</span>

            <h2 className="text-3xl gradient">
              ₹{room.price}
            </h2>

          </div>

        </div>

        <div className="mt-6">
          <AnimatedButton>Book Now</AnimatedButton>
        </div>

      </div>

    </motion.div>

  );

}