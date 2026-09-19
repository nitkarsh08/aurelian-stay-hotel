import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Bed,
  Users,
  CreditCard,
  User
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Rooms", path: "/rooms", icon: Bed },
  { name: "Guests", path: "/guests", icon: Users },
  { name: "Payments", path: "/payments", icon: CreditCard },
  { name: "Profile", path: "/profile", icon: User },
];

export default function Sidebar() {
  return (
    <aside className="glass w-64 min-h-screen hidden lg:block fixed left-0 top-0 pt-24 px-5">
      <h2 className="gradient text-3xl font-bold mb-10">
        Aurelian Stay
      </h2>

      <div className="space-y-3">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  : "hover:bg-yellow-500/10 text-white"
              }`
            }
          >
            <item.icon size={26} />
            <span className="text-lg">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}