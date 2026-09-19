import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // ✅ Add this

import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import Guests from "./pages/Guests";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

export default function App() {
    return (
        <>
            <CursorGlow />
            <Navbar />

            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/guests" element={<Guests />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/guests" element={<Guests />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}