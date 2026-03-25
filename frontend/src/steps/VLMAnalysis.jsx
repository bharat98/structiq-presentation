import { motion } from "framer-motion";
import { Brain, QrCode } from "lucide-react";
import StageBadge from "@/components/structiq/StageBadge";

const VLMAnalysis = () => {
  const zones = [
    { id: "blue", color: "blueprint-blue", frameCount: 8 },
    { id: "amber", color: "blueprint-amber", frameCount: 9 },
    { id: "purple", color: "blueprint-purple", frameCount: 8 },
  ];

  const outputCards = [
    { name: "Central Beam", stage: "Connected", status: "green", confidence: "High", dots: 3 },
    { name: "Left Beam", stage: "Placed", status: "amber", confidence: "Medium", dots: 2 },
    { name: "Main Supply Pipe", stage: "Complete", status: "green", confidence: "High", dots: 3 },
    { name: "Right Beam", stage: "Not Captured", status: "gray", confidence: "None", dots: 0 },
    { name: "Branch Line 1", stage: "Rough-in Started", status: "blue", confidence: "Low", dots: 1 },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-testid="step-vlm-analysis"
    >
      <div className="flex items-center justify-between w-full max-w-7xl gap-8">
        {/* Left: Zone Clusters (smaller) */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {zones.map((zone, index) => (
            <motion.div
              key={zone.id}
              className={`flex items-center gap-3`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <QrCode 
                className={`w-6 h-6 ${
                  zone.id === "blue" ? "text-blueprint-blue" : 
                  zone.id === "amber" ? "text-blueprint-amber" : "text-blueprint-purple"
                }`} 
                strokeWidth={1.5} 
              />
              <div className={`grid grid-cols-4 gap-1 p-2 border rounded-md ${
                zone.id === "blue" ? "border-blueprint-blue bg-blueprint-blue/10" :
                zone.id === "amber" ? "border-blueprint-amber bg-blueprint-amber/10" :
                "border-blueprint-purple bg-blueprint-purple/10"
              }`}>
                {Array.from({ length: zone.frameCount }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-4 rounded-sm ${
                      zone.id === "blue" ? "border-blueprint-blue bg-blueprint-blue/20" :
                      zone.id === "amber" ? "border-blueprint-amber bg-blueprint-amber/20" :
                      "border-blueprint-purple bg-blueprint-purple/20"
                    } border`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Dashed Arrow */}
        <motion.svg
          width="100"
          height="40"
          viewBox="0 0 100 40"
          className="flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.line
            x1="0"
            y1="20"
            x2="80"
            y2="20"
            stroke="#2C2C2C"
            strokeWidth="2"
            strokeDasharray="8 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
          <motion.polygon
            points="80,12 100,20 80,28"
            fill="#2C2C2C"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </motion.svg>

        {/* Center: Brain/VLM Element */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        >
          <motion.p
            className="font-mono text-sm text-blueprint-ink/70 mb-4 text-center max-w-xs"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            We don&apos;t ask &quot;what do you see?&quot; — we tell it exactly what to look for.
          </motion.p>
          
          <div className="p-8 border-2 border-blueprint-ink rounded-xl shadow-retro-dark bg-blueprint-bg">
            <Brain className="w-20 h-20 text-blueprint-ink" strokeWidth={1} />
            <div className="font-mono text-center mt-2 font-semibold text-blueprint-ink">VLM</div>
          </div>
        </motion.div>

        {/* Animated Dashed Arrow (right) */}
        <motion.svg
          width="100"
          height="40"
          viewBox="0 0 100 40"
          className="flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.line
            x1="0"
            y1="20"
            x2="80"
            y2="20"
            stroke="#2C2C2C"
            strokeWidth="2"
            strokeDasharray="8 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          />
          <motion.polygon
            points="80,12 100,20 80,28"
            fill="#2C2C2C"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          />
        </motion.svg>

        {/* Right: Output Cards */}
        <motion.div className="flex flex-col gap-3">
          {outputCards.map((card, index) => (
            <motion.div
              key={card.name}
              className="flex items-center gap-4 p-3 border border-blueprint-ink rounded-md bg-blueprint-bg shadow-retro-dark min-w-72"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + index * 0.2, duration: 0.3 }}
            >
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold text-blueprint-ink">
                  {card.name}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <StageBadge stage={card.stage} status={card.status} />
                  <span className="font-mono text-xs text-blueprint-ink/50">
                    {card.confidence} 
                    <span className="ml-1">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <span 
                          key={i} 
                          className={i < card.dots ? "text-blueprint-ink" : "text-blueprint-ink/20"}
                        >
                          ●
                        </span>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.p
            className="font-mono text-xs text-blueprint-ink/50 mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            Not percentages. Stages. Visible, categorical, provable.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VLMAnalysis;
