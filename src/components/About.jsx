import React from "react";
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { services } from "../constants";
import {fadeIn,textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
       <motion.div
         variants={fadeIn("right","spring",0.5 * index,0.75)}
         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
       >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>
        
        </motion.div> 
    </Tilt>
  )
}
 const About = () => {
  return(
    <>
    <motion.div variantss = {textVariant()}
     className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      <p className={styles.heroSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview.</h2><br />
    </motion.div>

    <motion.p
      variants={fadeIn("","",0.1,1)}
    >
      Experienced full-stack developer adept in HTML, CSS, and JavaScript for building captivating user interfaces. Proficient in backend development with Node.js, along with expertise in React for dynamic frontend experiences. Skilled in Java and Python for robust server-side solutions, with a keen interest and knowledge in machine learning (ML) and deep learning (DL) technologies. Passionate about creating innovative web applications that seamlessly integrate frontend and backend functionalities to deliver exceptional user experiences.


    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}

    </div>
    </>
  )
 }

 export default SectionWrapper(About,"about")