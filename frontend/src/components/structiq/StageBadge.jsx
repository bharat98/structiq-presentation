import { motion } from "framer-motion";

const statusColors = {
  green: "bg-blueprint-green",
  amber: "bg-blueprint-amber",
  blue: "bg-blueprint-blue",
  red: "bg-blueprint-red",
  gray: "bg-gray-400",
};

const StageBadge = ({ stage, status = "gray" }) => {
  return (
    <motion.span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-white ${statusColors[status]}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {stage}
    </motion.span>
  );
};

export default StageBadge;
