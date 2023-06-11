import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap  justify-center gap-10 ">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="w-20 flex items-center justify-center bg-white rounded-full p-3"
        >
          <img src={tech.icon} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
