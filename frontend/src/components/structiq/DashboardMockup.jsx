import { motion } from "framer-motion";
import StageBadge from "./StageBadge";

const DashboardMockup = () => {
  const rows = [
    {
      element: "Central Beam",
      stage: "Connected",
      status: "green",
      confidence: "High confidence",
      hasThumb: true,
    },
    {
      element: "Left Beam",
      stage: "Placed",
      status: "amber",
      confidence: "Medium confidence",
      hasThumb: true,
    },
    {
      element: "Right Beam",
      stage: "Not Captured",
      status: "gray",
      confidence: "—",
      hasThumb: false,
    },
  ];

  return (
    <div className="w-full max-w-2xl">
      {/* Dashboard Card */}
      <motion.div
        className="border-2 border-blueprint-ink rounded-lg overflow-hidden shadow-retro-dark bg-blueprint-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b-2 border-blueprint-ink bg-blueprint-ink">
          <h3 className="font-mono text-lg font-semibold text-blueprint-bg">
            Floor 3 — Bay A: Beam Layout
          </h3>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-blueprint-ink/20 bg-blueprint-grid/30">
          <span className="font-mono text-xs font-semibold text-blueprint-ink/70 uppercase">Element</span>
          <span className="font-mono text-xs font-semibold text-blueprint-ink/70 uppercase">Stage</span>
          <span className="font-mono text-xs font-semibold text-blueprint-ink/70 uppercase">Confidence</span>
          <span className="font-mono text-xs font-semibold text-blueprint-ink/70 uppercase">Frame</span>
        </div>

        {/* Rows */}
        {rows.map((row, index) => (
          <motion.div
            key={row.element}
            className="grid grid-cols-4 gap-4 items-center px-6 py-4 border-b border-blueprint-ink/10 last:border-b-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.3, duration: 0.3 }}
          >
            <span className="font-mono text-sm font-medium text-blueprint-ink">
              {row.element}
            </span>
            <StageBadge stage={row.stage} status={row.status} />
            <span className="font-mono text-xs text-blueprint-ink/60">
              {row.confidence}
            </span>
            <div>
              {row.hasThumb ? (
                <div className="w-12 h-8 rounded border border-blueprint-ink/30 bg-blueprint-ink/10" />
              ) : (
                <span className="font-mono text-xs text-blueprint-ink/30">—</span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
