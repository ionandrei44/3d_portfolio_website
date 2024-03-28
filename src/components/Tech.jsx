import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I can work with</p>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-lg leading-[30px]"
      >
        In the dynamic realm of web development, the landscape is constantly
        evolving, with emerging technologies constantly pushing boundaries. I am
        currently using the following technologies while actively enriching my
        knowledge of innovations poised to revolutionize the field.
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-20 md:w-28 h-20 md:h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
