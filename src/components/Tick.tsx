import { motion } from "framer-motion";

type Props = {
  isSelected: boolean;
};

function Tick({ isSelected }: Props) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <motion.path
          opacity="0.34"
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          initial={{ pathLength: 0 }}
          animate={{
            stroke: isSelected ? "#0b980e" : "#ffffff",
            pathLength: 1,
          }}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></motion.path>{" "}
        <motion.path
          d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
          initial={{ pathLength: 0 }}
          animate={{
            stroke: isSelected ? "#0b980e" : "#ffffff",
            transition: {
              delay: 0.5,
            },
            pathLength: 1,
          }}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></motion.path>{" "}
      </g>
    </motion.svg>
  );
}

export default Tick;
