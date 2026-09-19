const events = [
  "VIP Guest checked in",
  "Suite booked",
  "Payment received",
  "Room cleaned",
  "Breakfast order delivered"
];

export default function ActivityTimeline() {
  return (
    <div className="glass rounded-3xl p-8">
      <h3 className="text-xl font-semibold mb-6">
        Recent Activity
      </h3>

      <div className="space-y-6">
        {events.map((e, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2"/>
            <div>{e}</div>
          </div>
        ))}
      </div>
    </div>
  );
}