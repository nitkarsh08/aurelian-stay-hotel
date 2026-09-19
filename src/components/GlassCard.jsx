export default function GlassCard({ children }) {
  return (
    <div className="glass rounded-3xl overflow-hidden">
      {children}
    </div>
  );
}