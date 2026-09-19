import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Login Successful");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">

      <img
        src="/images/lobby.jpg"
        className="absolute inset-0 w-full h-full object-cover brightness-40"
      />

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 w-full max-w-md relative z-10"
      >
        <h1 className="gradient text-4xl font-bold text-center mb-10">
          Welcome Back
        </h1>

        <div className="relative mb-5">
          <Mail className="absolute left-4 top-4 text-yellow-400"/>
          <input
            {...register("email")}
            placeholder="Email"
            className="pl-12 w-full p-4 rounded-xl bg-black/20 border border-yellow-600/20"
          />
        </div>

        <div className="relative mb-8">
          <Lock className="absolute left-4 top-4 text-yellow-400"/>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="pl-12 w-full p-4 rounded-xl bg-black/20 border border-yellow-600/20"
          />
        </div>

        <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold hover:scale-105 transition">
          Login
        </button>
      </motion.form>
    </div>
  );
}