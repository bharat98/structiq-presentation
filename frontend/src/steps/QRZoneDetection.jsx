import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

const QRZoneDetection = () => {
  const zones = [
    {
      id: "blue",
      label: "Floor 3 — Bay A",
      payload: '{"work_packages": ["beam_layout", "plumbing"]}',
      color: "blueprint-blue",
      bgClass: "bg-blueprint-blue/10",
      borderClass: "border-blueprint-blue",
      textClass: "text-blueprint-blue",
      frameCount: 8,
    },
    {
      id: "amber",
      label: "Floor 3 — Bay B",
      payload: '{"work_packages": ["electrical", "duct_install"]}',
      color: "blueprint-amber",
      bgClass: "bg-blueprint-amber/10",
      borderClass: "border-blueprint-amber",
      textClass: "text-blueprint-amber",
      frameCount: 9,
    },
    {
      id: "purple",
      label: "Floor 2 — Mechanical",
      payload: '{"work_packages": ["hvac_rough_in"]}',
      color: "blueprint-purple",
      bgClass: "bg-blueprint-purple/10",
      borderClass: "border-blueprint-purple",
      textClass: "text-blueprint-purple",
      frameCount: 8,
    },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-between py-16 px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-testid="step-qr-zone-detection"
    >
      {/* QR Codes and Zones */}
      <div className="flex justify-center gap-16 flex-1 pt-8">
        {zones.map((zone, zoneIndex) => (
          <motion.div
            key={zone.id}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + zoneIndex * 0.2, duration: 0.4 }}
          >
            {/* QR Code Icon */}
            <motion.div
              className={`p-4 border-2 ${zone.borderClass} ${zone.bgClass} rounded-lg shadow-retro-dark`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + zoneIndex * 0.2, type: "spring" }}
            >
              <QrCode className={`w-12 h-12 ${zone.textClass}`} strokeWidth={1.5} />
            </motion.div>

            {/* Zone Label */}
            <motion.span
              className={`font-mono text-sm font-semibold mt-3 ${zone.textClass}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + zoneIndex * 0.2 }}
            >
              {zone.label}
            </motion.span>

            {/* Payload Preview */}
            <motion.code
              className="font-mono text-xs text-blueprint-ink/50 mt-1 max-w-48 truncate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + zoneIndex * 0.2 }}
            >
              {zone.payload}
            </motion.code>

            {/* Dashed Line */}
            <motion.svg
              width="4"
              height="60"
              className="my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + zoneIndex * 0.2 }}
            >
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="60"
                stroke={zone.id === "blue" ? "#2980B9" : zone.id === "amber" ? "#F39C12" : "#8E44AD"}
                strokeWidth="2"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.9 + zoneIndex * 0.2, duration: 0.5 }}
              />
            </motion.svg>

            {/* Frame Cluster */}
            <motion.div
              className={`grid grid-cols-4 gap-1.5 p-3 border-2 ${zone.borderClass} ${zone.bgClass} rounded-lg`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + zoneIndex * 0.15, duration: 0.4 }}
            >
              {Array.from({ length: zone.frameCount }).map((_, frameIndex) => (
                <motion.div
                  key={frameIndex}
                  className={`w-8 h-6 rounded-sm border ${zone.borderClass} ${zone.bgClass}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + zoneIndex * 0.1 + frameIndex * 0.03 }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Annotation */}
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          className="terminal-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <TypingText
            text="The PM controls the resolution of the intelligence with a printer and tape."
            delay={2.3}
            className="font-mono text-xl text-blueprint-ink font-medium"
          />
        </motion.div>

        <motion.p
          className="font-mono text-sm text-blueprint-ink/60 mt-4 pl-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8 }}
        >
          Floor-level tracking? QR at stairwells. Bay-level? QR at every entrance. Add a work package? Print a new sticker.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Typing effect component
const TypingText = ({ text, delay, className }) => {
  return (
    <motion.span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default QRZoneDetection;
