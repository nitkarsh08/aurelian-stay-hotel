import { useState } from "react";
import CalendarWidget from "../components/CalendarWidget";
import { motion } from "framer-motion";

export default function Booking(){

const[guests,setGuests]=useState(2);

const[room,setRoom]=useState(4999);

const total=guests*room;

return(

<div className="min-h-screen pt-28">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

<CalendarWidget/>

<motion.div
initial={{opacity:0,x:80}}
animate={{opacity:1,x:0}}
className="glass rounded-3xl p-8"
>

<h1 className="gradient text-5xl font-bold">
Book Your Stay
</h1>

<div className="space-y-5 mt-8">

<input
placeholder="Guest Name"
className="bg-black/30 border border-yellow-600/20 rounded-xl p-3 w-full"
/>

<input
type="date"
className="bg-black/30 border border-yellow-600/20 rounded-xl p-3 w-full"
/>

<input
type="date"
className="bg-black/30 border border-yellow-600/20 rounded-xl p-3 w-full"
/>

<select
onChange={e=>setRoom(Number(e.target.value))}
className="bg-black/30 border border-yellow-600/20 rounded-xl p-3 w-full"
>

<option value={4999}>
Deluxe ₹4999
</option>

<option value={7999}>
Executive ₹7999
</option>

<option value={12999}>
Suite ₹12999
</option>

<option value={24999}>
Presidential ₹24999
</option>

</select>

<select
onChange={e=>setGuests(Number(e.target.value))}
className="bg-black/30 border border-yellow-600/20 rounded-xl p-3 w-full"
>

<option value={2}>
2 Guests
</option>

<option value={4}>
4 Guests
</option>

<option value={6}>
6 Guests
</option>

</select>

<div className="glass rounded-xl p-5">

<p className="text-gray-400">
Estimated Price
</p>

<h2 className="text-4xl gradient">
₹{total}
</h2>

</div>

<button className="bg-yellow-500 text-black w-full py-4 rounded-xl font-bold hover:scale-105 transition">
Confirm Booking
</button>

</div>

</motion.div>

</div>

</div>

)

}