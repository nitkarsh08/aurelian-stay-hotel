import { motion } from "framer-motion";
import RoomCard from "../components/RoomCard";
import { rooms } from "../data/rooms";

export default function Rooms() {

  return (

    <div className="min-h-screen pt-32">

      <section className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          className="text-6xl font-bold text-center gradient"
        >
          Luxury Rooms
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.4 }}
          className="text-center text-gray-400 mt-6"
        >
          Experience unmatched comfort and timeless elegance.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {rooms.map(room => (
            <RoomCard key={room.id} room={room}/>
          ))}

        </div>

      </section>

    </div>

  );

}