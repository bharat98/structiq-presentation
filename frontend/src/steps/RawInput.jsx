import { motion } from "framer-motion";
import { Video } from "lucide-react";

const RawInput = () => {
  // Generate 96 frame cells (12x8 grid)
  const frames = Array.from({ length: 96 }, (_, i) => i);
  
  // Slight variation in shades for visual interest
  const getFrameShade = (index) => {
    const shades = [
      "bg-blueprint-ink/10",
      "bg-blueprint-ink/15",
      "bg-blueprint-ink/12",
      "bg-blueprint-ink/18",
      "bg-blueprint-ink/8",
    ];
    return shades[index % shades.length];
  };

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-testid="step-raw-input"
    >
      <div className="flex items-center gap-8 w-full max-w-6xl">
        {/* Video Camera Icon */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="p-6 border-2 border-blueprint-ink rounded-md shadow-retro-dark">
            <Video className="w-16 h-16 text-blueprint-ink" strokeWidth={1.5} />
          </div>
          <span className="font-mono text-sm text-blueprint-ink/70">Walkthrough Video</span>
        </motion.div>

        {/* Arrow */}
        <motion.svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          className="flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.line
            x1="0"
            y1="20"
            x2="100"
            y2="20"
            stroke="#2C2C2C"
            strokeWidth="2"
            strokeDasharray="8 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.polygon
            points="100,12 120,20 100,28"
            fill="#2C2C2C"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          />
        </motion.svg>

        {/* Frame Grid Container */}
        <div className="flex flex-col items-center gap-4 flex-1">
          <motion.span
            className="font-mono text-sm text-blueprint-ink/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            9,000 raw frames at 30fps
          </motion.span>

          {/* 12x8 Grid of Frames */}
          <div className="grid grid-cols-12 gap-1.5 p-4 border border-blueprint-ink rounded-md bg-blueprint-bg/50">
            {frames.map((frame, index) => (
              <motion.div
                key={frame}
                className={`w-8 h-6 rounded-sm border border-blueprint-ink/40 ${getFrameShade(index)}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 0.9 + (Math.floor(index / 12) * 0.08) + ((index % 12) * 0.02),
                }}
              />
            ))}
          </div>

          <motion.span
            className="font-mono text-xs text-blueprint-ink/50 text-center max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Motion blur. Repeated views. Frames of the floor.
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default RawInput;
