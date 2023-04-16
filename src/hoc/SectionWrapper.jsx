import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const StarWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section>
        texzt
        <Component />
      </motion.section>
    );
  };


export default StarWrapper 