import Link from "next/link"

const SocialLinks = () => {
  return (
    <section className="bg-[#FFBF30] text-[#141414]">

      <div className="  container mx-auto px-9  py-9 flex flex-col gap-4">
          <h3 className="text-black font-bold text-3">
              Bat Signal
          </h3>
          <p>Ready to discuss your financial needs and embark on a successful journey together? Feel free to reach out to me through any of the following channels:</p>
          <div className=" flex gap-4">
  
          <Link href={'/contact'} className=" bg-black px-6 py-2 text-white rounded-full contact_button " >Contact Me</Link>
          <a href={'https://www.linkedin.com/in/nishant-274a77253/'} target="_blank" className=" w-[40px] social_link h-[40px] text-white bg-black rounded-full font-extrabold">
              in
          </a>
          </div>
          
      </div>
    
    </section>)
}

export default SocialLinks