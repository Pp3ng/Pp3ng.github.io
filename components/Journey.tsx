import React from "react";
import { motion } from "framer-motion";

interface JourneyItem {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const journeyData: JourneyItem[] = [
  {
    date: "Spring 2022",
    title: "First Encounter with Linux",
    description:
      "Discovered Linux operating system and was captivated by its design philosophy. This marked the beginning of my passion for system programming and helped me find my true technical interest.",
    icon: "fab fa-linux",
  },
  {
    date: "Spring 2021",
    title: "Beginning Computer Science Journey",
    description:
      "Formally began studying Computer Science and Engineering at university. This marked the start of my systematic exploration of computer science, laying a solid foundation for my future technical pursuits.",
    icon: "fas fa-laptop-code",
  },
  {
    date: "Spring 2021",
    title: "First Study Abroad Experience",
    description:
      "Embarked on my first international journey as an international student. This experience not only broadened my academic horizons but also helped me develop independence and cross-cultural understanding while adapting to a new environment.",
    icon: "fas fa-globe-asia",
  },
  {
    date: "Winter 2019",
    title: "Beginning Independent Living",
    description:
      "Moved into a new place and started living independently. Learned to manage various aspects of life on my own, enjoying solitude while also gaining a deeper appreciation for time spent with family and friends.",
    icon: "fas fa-home",
  },
  {
    date: "Winter 2018",
    title: "Billiards: From Beginner to Enthusiast",
    description:
      "First encountered billiards and was deeply drawn to its precision and strategy. Regular practice became a weekly routine, continuously improving techniques. Through this journey, I learned the importance of patience and focus.",
    icon: "fas fa-circle",
  },
];

const Journey: React.FC = () => {
  return (
    <div className="container" id="journey" data-aos="fade-up">
      <h2>Life Journey</h2>
      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        {journeyData.map((item, index) => (
          <motion.li
            key={`journey-${index}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hover:scale-[1.02] transition-all duration-500 ease-out"
          >
            <div className="timeline-middle">
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-700 group-hover:duration-300 bg-[var(--primary-color)]"></div>
                <div className="relative bg-base-100 rounded-full p-2">
                  <i
                    className={`${item.icon} text-lg transition-all duration-500 group-hover:scale-110 text-[var(--primary-color)]`}
                  ></i>
                </div>
              </div>
            </div>
            <div
              className={`timeline-${
                index % 2 === 0 ? "start" : "end"
              } md:text-end mb-8`}
            >
              <motion.div
                className="p-6 rounded-lg backdrop-blur-md bg-white/10 dark:bg-black/10 transition-all duration-300 ease-out hover:shadow-xl hover:bg-white/20 dark:hover:bg-black/20"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <motion.time
                  className="font-mono italic block mb-2 text-xs tracking-wider text-[var(--primary-color)]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                >
                  {item.date}
                </motion.time>
                <motion.h3
                  className="text-lg font-black mb-3 tracking-tight text-[var(--heading-color)]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="leading-relaxed text-sm/relaxed text-[var(--text-color)]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </div>
            <motion.hr
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
              className="bg-[var(--primary-color)] opacity-20 origin-left"
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Journey;
