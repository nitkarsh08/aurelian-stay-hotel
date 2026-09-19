import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-yellow-500/10">

      <div className="max-w-7xl mx-auto px-5 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="gradient text-3xl font-bold">
              Aurelian Stay
            </h2>

            <p className="text-gray-400 mt-4">
              Experience timeless luxury and premium hospitality.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>Rooms</p>
              <p>Booking</p>
              <p>Dashboard</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-yellow-400">
              <Facebook/>
              <Instagram/>
              <Linkedin/>
              <Mail/>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10">
          © 2026 Aurelian Stay
        </div>

      </div>

    </footer>
  );
}