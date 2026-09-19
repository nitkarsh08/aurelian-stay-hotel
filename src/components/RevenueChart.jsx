import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
} from "chart.js";

import { Line } from "react-chartjs-2";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun"],
  datasets: [{
    data: [8,12,10,18,22,30],
    borderColor: "#d4af37",
    tension: .45,
    pointRadius: 5
  }]
};

export default function RevenueChart() {
  return (
    <div className="glass rounded-3xl p-8">
      <h3 className="text-xl font-semibold mb-5">
        Revenue Trend
      </h3>

      <Line
        data={data}
        options={{
          plugins:{legend:{display:false}},
          scales:{
            x:{grid:{display:false}},
            y:{grid:{color:"#222"}}
          }
        }}
      />
    </div>
  );
}