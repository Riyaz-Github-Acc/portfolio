import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      style={{
        height: "900px",
      }}
      className="relative w-full h-screen mx-auto"
    >
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0 max-w-7xl  flex flex-row items-start gap-5 mx-auto`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m <span className="text-[#915eff]">Riyaz</span>
            <p className={`${styles.heroSubText} mt-3 text-white-100`}>
              A highly motivated and skilled MERN stack developer with a passion
              for building innovative and user-friendly web applications. Proven
              ability to learn new technologies quickly and apply them to
              real-world projects. Strong communication and problem-solving
              skills.
            </p>
          </h1>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div
        className="absolute xs:bottom-10
                bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
