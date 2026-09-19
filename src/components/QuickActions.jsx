import {
  Plus,
  Bed,
  UserPlus,
  Receipt
} from "lucide-react";

const actions = [
  { icon: Plus, label: "New Booking" },
  { icon: Bed, label: "Rooms" },
  { icon: UserPlus, label: "Guest" },
  { icon: Receipt, label: "Invoice" }
];

export default function QuickActions() {
  return (
    <div className="glass rounded-3xl p-8">

      <h3 className="text-xl font-semibold mb-6">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((a) => (
          <button
            key={a.label}
            className="bg-yellow-500/10 hover:bg-yellow-500/20 rounded-xl p-5 transition"
          >
            <a.icon className="mx-auto text-yellow-400"/>

            <p className="mt-3 text-sm">
              {a.label}
            </p>

          </button>
        ))}

      </div>

    </div>
  );
}