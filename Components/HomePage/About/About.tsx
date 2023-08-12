import BatButton from "@/Components/BatButton/BatButton"
// import Bats from '../../../public/AboutLogos/bats.gif'
// import Image from "next/image"
import AOS from 'aos';

const About = () => {
  return (
    <section className="bg-[#FFBF30]" id="about">
<div className=" container mx-auto px-9  py-9 flex flex-col gap-4">
        <h3 className=" font-bold text-3xl text-black relative" data-aos="fade-right">About Me</h3>
      
        <p data-aos="fade-in" className=" text-[#141414]  md:text-lg" data-aos-duration="900" data-aos-delay="300">An exuberant learner with a proactive approach. Effective team player with excellent analytical skills and the important ability to think critically and solve complex problems.I have a good command over Word, Excel, PowerPoint, Access etc. I believe in the uniqueness of executing tasks which is the core competence of today's world. I love discovering new things or tools every day.I am eager to learn more about the intersection of technology and finance, and to explore how I can contribute to this exciting area. I have excellent time management skills and am good observant. If I do not know something I will learn it.</p>
        <div>
        {/* <button className=" bg-black px-4 py-2 rounded-full">Click Here</button> */}
        <BatButton/>
        </div>
    </div>
    </section>
    
  )
}

export default About