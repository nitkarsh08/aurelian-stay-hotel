const guests = [
  "Sophia Wilson",
  "Alexander Brown",
  "Emma Taylor"
];

export default function VipGuests() {
  return (
    <div className="glass rounded-3xl p-8">
      <h3 className="text-xl font-semibold mb-6">
        VIP Guests
      </h3>

      <div className="space-y-4">
        {guests.map((g) => (
          <div
            key={g}
            className="flex justify-between items-center"
          >
            <span>{g}</span>

            <span className="text-yellow-400">
              VIP
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}