import { motion } from "framer-motion";
import { User, Mail, Phone, Shield } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen pt-28 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300 flex items-center justify-center">
            <User size={70} color="black" />
          </div>

          <div>
            <h1 className="text-4xl font-bold gradient">Hotel Administrator</h1>
            <p className="text-gray-400 mt-2">
              Premium Hotel Management Dashboard
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" size={20} />
                admin@aurelianstay.com
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-yellow-400" size={20} />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <Shield className="text-yellow-400" size={20} />
                Super Admin
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}