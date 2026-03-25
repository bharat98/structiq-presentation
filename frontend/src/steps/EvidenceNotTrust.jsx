import { motion } from "framer-motion";
import DashboardMockup from "@/components/structiq/DashboardMockup";

const EvidenceNotTrust = () => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-testid="step-evidence-not-trust"
    >
      {/* Dimmed background elements (from previous step) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        {/* Simplified silhouettes */}
        <div className="flex gap-32">
          <div className="w-32 h-32 border border-blueprint-ink/30 rounded-lg" />
          <div className="w-24 h-24 border border-blueprint-ink/30 rounded-full" />
          <div className="w-32 h-48 border border-blueprint-ink/30 rounded-lg" />
        </div>
      </motion.div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring", damping: 20 }}
      >
        <DashboardMockup />
      </motion.div>

      {/* Closing Line */}
      <motion.div
        className="mt-12 max-w-4xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <p className="text-3xl md:text-4xl font-bold text-blueprint-ink leading-tight">
          We don&apos;t give you a number to trust — 
          <br />
          <span className="text-blueprint-green">we give you evidence to check.</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EvidenceNotTrust;
