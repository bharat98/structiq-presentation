import { motion } from "framer-motion";

const TitleCard = () => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-testid="step-title-card"
    >
      {/* Main Title */}
      <motion.h1
        className="title-structiq text-8xl md:text-9xl text-blueprint-ink tracking-wider mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        StructIQ
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-mono text-xl md:text-2xl text-blueprint-ink/70 tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        How the intelligence flows
      </motion.p>

      {/* Press to begin hint */}
      <motion.p
        className="font-mono text-sm text-blueprint-ink/40 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        Press → to begin
      </motion.p>
    </motion.div>
  );
};

export default TitleCard;
