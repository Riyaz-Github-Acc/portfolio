import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-2 overflow-hidden"
        >
          <img src={tech.icon} alt={tech.name} className="object-contain w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
