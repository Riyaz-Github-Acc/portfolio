import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { monitor } from "../assets";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            iconStyle={{ background: "#888" }}
            icon={
                <div className="p-2 lg:p-3">
                    <img src={monitor} alt="monitor" />
                </div>
            }
        >
            <div>
                <h3 className="text-[20px] font-bold">{experience.title}</h3>
                <p>{experience.company_name}</p>
            </div>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
