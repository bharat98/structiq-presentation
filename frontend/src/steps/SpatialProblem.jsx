import { motion } from "framer-motion";

const SpatialProblem = () => {
  // Dimmed surviving frames from previous step
  const survivingFrames = Array.from({ length: 21 }, (_, i) => i);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-testid="step-spatial-problem"
    >
      {/* Dimmed frames in background */}
      <motion.div
        className="absolute top-1/4 flex flex-wrap justify-center gap-2 max-w-4xl opacity-30"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {survivingFrames.map((frame) => (
          <div
            key={frame}
            className="w-10 h-8 rounded-sm border-2 border-blueprint-green/40 bg-blueprint-green/5"
          />
        ))}
      </motion.div>

      {/* Question Mark */}
      <motion.div
        className="text-9xl font-bold text-blueprint-ink mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.3, 
          duration: 0.4,
          type: "spring",
          stiffness: 300,
          damping: 15
        }}
      >
        ?
      </motion.div>

      {/* Main text */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-blueprint-ink text-center mb-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        25 great frames. Zero spatial context.
      </motion.h2>

      {/* Sub-text */}
      <motion.p
        className="font-mono text-lg text-blueprint-ink/60 text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        GPS doesn&apos;t work indoors. SLAM fails in repetitive environments.
      </motion.p>

      {/* Punchline */}
      <motion.div
        className="border-l-4 border-blueprint-amber pl-6 py-2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      >
        <p className="text-2xl md:text-3xl font-semibold text-blueprint-ink">
          Spatial context is a <span className="text-blueprint-amber">data problem</span>, not an AI problem.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SpatialProblem;
