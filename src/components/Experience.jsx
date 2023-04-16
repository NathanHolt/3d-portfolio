import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/motion"
import 'react-vertical-timeline-component/style.min.css'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'none', color: '#fff', border: 'none', }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >

      <Tilt>
        <div className='w-full pink-green-gradient p-[2px] rounded-[20px] shadow-card'>
          <div className='bg-quad rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {experience.title}
              </h3>
              <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                {experience.company_name}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Tilt>

    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          A taste of what I have done
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")