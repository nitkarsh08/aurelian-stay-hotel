import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import GuestModal from "../components/GuestModal";

const guests = [
  { id:1,name:"Rahul Sharma",room:"Suite",status:"Checked In",days:3},
  { id:2,name:"Priya Singh",room:"Deluxe",status:"Pending",days:2},
  { id:3,name:"Sophia Wilson",room:"Executive",status:"Checked In",days:5},
  { id:4,name:"Alex Brown",room:"Presidential",status:"Checked Out",days:1},
];

export default function Guests(){

const[search,setSearch]=useState("");
const[selected,setSelected]=useState(null);

const filtered=guests.filter(g=>
g.name.toLowerCase().includes(search.toLowerCase())
);

return(
<div className="min-h-screen pt-28 px-6 max-w-7xl mx-auto">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-5xl gradient font-bold mb-8"
>
Guest Management
</motion.h1>

<div className="glass rounded-2xl p-4 flex items-center gap-3 mb-8">

<Search className="text-yellow-400"/>

<input
value={search}
onChange={e=>setSearch(e.target.value)}
placeholder="Search Guest"
className="bg-transparent w-full outline-none"
/>

</div>

<div className="glass rounded-3xl overflow-hidden">

<table className="w-full">

<thead className="bg-yellow-500/10">

<tr>

<th className="p-4 text-left">Guest</th>

<th className="p-4 text-left">Room</th>

<th className="p-4 text-left">Status</th>

<th className="p-4 text-left">Action</th>

</tr>

</thead>

<tbody>

{filtered.map(g=>(
<tr
key={g.id}
className="border-t border-yellow-500/10 hover:bg-yellow-500/5"
>

<td className="p-4">{g.name}</td>

<td className="p-4">{g.room}</td>

<td className="p-4">{g.status}</td>

<td className="p-4">
<button
onClick={()=>setSelected(g)}
className="text-yellow-400"
>
View
</button>
</td>

</tr>
))}

</tbody>

</table>

</div>

<GuestModal
guest={selected}
onClose={()=>setSelected(null)}
/>

</div>
)

}