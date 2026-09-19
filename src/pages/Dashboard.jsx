import Sidebar from "../components/Sidebar";
import WelcomeBanner from "../components/WelcomeBanner";
import DashboardCard from "../components/DashboardCard";
import RevenueChart from "../components/RevenueChart";
import OccupancyCard from "../components/OccupancyCard";
import ActivityTimeline from "../components/ActivityTimeline";
import VipGuests from "../components/VipGuests";
import QuickActions from "../components/QuickActions";
import { dashboardCards } from "../data/dashboard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#090909]">

      <Sidebar/>

      <div className="lg:ml-64 p-5 md:p-8 pt-28">

        <WelcomeBanner/>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {dashboardCards.map(card=>(
            <DashboardCard key={card.title}{...card}/>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mt-8">

          <div className="lg:col-span-2">
            <RevenueChart/>
          </div>

          <OccupancyCard/>

        </div>

        <div className="grid lg:grid-cols-3 gap-5 mt-8">

          <ActivityTimeline/>

          <VipGuests/>

          <QuickActions/>

        </div>

      </div>

    </div>
  );
}