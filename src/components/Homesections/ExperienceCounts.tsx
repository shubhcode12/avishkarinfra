import Image from "next/image";
import { common } from "../../../public/assets/icon";

const stats = [
  { value: "10", label: "Awards Gained" },
  { value: "20", label: "Years of Experience" },
  { value: "598", label: "Rented Home Stay" },
];

const ExperienceCounts = () => {
  return (
    <section className="w-full flex pt-12 pb-24 justify-start px-4 lg:px-10">
      <div className="w-full max-w-screen-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-4 items-start">
              <div className="flex items-end gap-2">
                <div className="text-7xl">{stat.value}</div>
                <Image src={common.plus} alt="" />
              </div>
              <div className="text-secondaryLight text-lg font-semibold text-opacity-50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCounts;
