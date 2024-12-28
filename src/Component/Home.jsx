import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);
  const textGroups = [
    ["safeguard", "privacy"],
    ["protect", "planet"],
    ["secure", "portfolio"],
    ["supercharge", "performance"],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textGroups.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 mt-10 mb-5">
      <h1 className="text-6xl text-gray-800 font-semibold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          A
        </span>
        rc{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          I
        </span>
        ntelligence.
      </h1>
      <div
        style={{ fontSize: "1em", fontWeight: "bold", textAlign: "center" }}
        className="text-black flex justify-between items-center mb-5"
      >
        <div className="flex items-center gap-3">
          <motion.div
            key={textGroups[index][0]} 
            initial={{ rotateX: 90 }} 
            animate={{ rotateX: 0 }}
            exit={{ rotateX: -90 }}
            transition={{ duration: 1 }}
            className="text-2xl font-semibold"
          >
            {textGroups[index][0]}
          </motion.div>

          <h1 className="text-2xl text-gray-800 font-semibold">
            y
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              ou
            </span>
            r
          </h1>

          <motion.div
            key={textGroups[index][1]} 
            initial={{ rotateX: 90 }} 
            animate={{ rotateX: 0 }} 
            exit={{ rotateX: -90 }} 
            transition={{ duration: 1 }}
            className="text-2xl font-semibold"
          >
            {textGroups[index][1]}
          </motion.div>
        </div>
      </div>
      <Link to='*'>
      <button  className="text-gray-400">
        Learn more
      </button></Link>
    </div>
  );
};

export default Home;
