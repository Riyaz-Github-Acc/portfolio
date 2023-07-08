import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, name, image, certificate_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          onClick={() => window.open(certificate_link, "_blank")}
          className="relative w-full h-[230px] cursor-pointer"
        >
          <img
            src={image}
            alt="certificate_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Certificates So Far</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificate");
