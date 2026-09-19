import { Bar } from "react-chartjs-2";
import {
Chart,
BarElement,
CategoryScale,
LinearScale,
Tooltip
} from "chart.js";

Chart.register(
BarElement,
CategoryScale,
LinearScale,
Tooltip
);

const data={

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{

label:"Revenue",

data:[12,18,16,24,28,32]

}]

};

export default function Payments(){

return(

<div className="min-h-screen pt-28 px-6 max-w-7xl mx-auto">

<h1 className="gradient text-5xl font-bold mb-10">
Revenue Dashboard
</h1>

<div className="glass rounded-3xl p-8">

<Bar data={data}/>

</div>

</div>

)

}