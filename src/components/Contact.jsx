import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { contacts } from "../constants";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] h-[100%] w-[100%] bg-black-100 p-8 rounded-2xl "
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>

                <div className="mt-5 ml-5 flex flex-col gap-4">
                    {contacts.map((contact) => (
                        <div className=" flex items-center gap-4">
                            <img
                                src={contact.icon}
                                alt={contact.title}
                                className="w-8 h-8"
                            />
                            <h2 className="text-[20px]">{contact.title}</h2>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
