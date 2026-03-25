import { motion } from "framer-motion";
import { Sparkles, Contrast, Shuffle } from "lucide-react";

const FrameSelection = () => {
  // Total 96 frames, 21 survive (green), 75 rejected (red)
  const totalFrames = 96;
  const survivingIndices = [
    3, 7, 12, 18, 23, 29, 34, 
    38, 44, 49, 55, 60, 65, 71,
    76, 80, 85, 89, 91, 93, 95
  ];

  const frames = Array.from({ length: totalFrames }, (_, i) => ({
    id: i,
    surviving: survivingIndices.includes(i),
  }));

  const survivingFrames = frames.filter(f => f.surviving);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-testid="step-frame-selection"
    >
      {/* Badge Tags */}
      <motion.div 
        className="flex gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.3 }}
      >
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-blueprint-green bg-blueprint-green/10 rounded-md">
          <Sparkles className="w-4 h-4 text-blueprint-green" />
          <span className="font-mono text-sm text-blueprint-green">Sharpness</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-blueprint-blue bg-blueprint-blue/10 rounded-md">
          <Contrast className="w-4 h-4 text-blueprint-blue" />
          <span className="font-mono text-sm text-blueprint-blue">Contrast</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-blueprint-amber bg-blueprint-amber/10 rounded-md">
          <Shuffle className="w-4 h-4 text-blueprint-amber" />
          <span className="font-mono text-sm text-blueprint-amber">Diversity</span>
        </div>
      </motion.div>

      {/* Frame Grid - showing all 96 frames with filtering animation */}
      <div className="relative">
        {/* Original grid position */}
        <div className="grid grid-cols-12 gap-1.5 p-4 border border-blueprint-ink/30 rounded-md bg-blueprint-bg/50">
          {frames.map((frame, index) => (
            <motion.div
              key={frame.id}
              className={`w-8 h-6 rounded-sm border ${
                frame.surviving 
                  ? "border-blueprint-green border-2 bg-blueprint-green/10" 
                  : "border-blueprint-red bg-blueprint-red/20"
              }`}
              initial={{ 
                opacity: 1, 
                scale: 1,
                borderColor: "#2C2C2C",
                backgroundColor: "rgba(44,44,44,0.1)"
              }}
              animate={{ 
                opacity: frame.surviving ? 1 : 0,
                scale: frame.surviving ? 1 : 0.3,
                borderColor: frame.surviving ? "#27AE60" : "#C0392B",
                backgroundColor: frame.surviving ? "rgba(39,174,96,0.1)" : "rgba(192,57,43,0.2)"
              }}
              transition={{
                duration: 0.4,
                delay: frame.surviving ? 2.5 : 0.3 + (index * 0.025),
              }}
            />
          ))}
        </div>
      </div>

      {/* Surviving frames in clean row */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        {survivingFrames.map((frame, index) => (
          <motion.div
            key={`survivor-${frame.id}`}
            className="w-10 h-8 rounded-sm border-2 border-blueprint-green bg-blueprint-green/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7 + (index * 0.05) }}
          />
        ))}
      </motion.div>

      {/* Bottom annotation */}
      <motion.div
        className="mt-8 font-mono text-lg text-blueprint-ink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
      >
        <span className="text-blueprint-red">9,000</span>
        <span className="mx-2">→</span>
        <span className="text-blueprint-green font-semibold">25 best frames per zone</span>
      </motion.div>
    </motion.div>
  );
};

export default FrameSelection;
