import Image from "next/image";
import Accounting from "/public/AboutLogos/icons8-ledger-100.png";
import Tax from "/public/AboutLogos/icons8-tax-100.png";
import Finance from "@/public/AboutLogos/icons8-equity-security-100.png";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Knowledge = () => {
  return (
    <section className="">
      <div className=" container px-9 mx-auto py-16  min-h-[80vh] flex flex-col justify-center items-center">
        <h3 className=" text-3 text-center  text-white font-semibold  " data-aos="fade-up" data-aos-duration="500">
          The Accounting Avenger
        </h3>
        <div className=" mx-auto flex justify-center gap-6 sm:gap-9 text-gray-100 mt-11">
          <div className="flex flex-col items-center gap-2"data-aos="fade-left"   >
            <div className=" max-sm:w-[40px] aspect-square" >
              <Image
                alt="Accounting Logo"
                src={Accounting}
                width={70}
                height={70}
              />
            </div>
            <span className=" max-sm:text-sm">Accounting</span>
          </div>

          <div className="flex flex-col items-center gap-2" data-aos="fade-left" data-aos-delay="400" >
            <div className="max-sm:w-[40px] aspect-square">
              <Image alt="Finance Logo" src={Finance} width={70} height={70} />
            </div>
            <span className=" max-sm:text-sm">Finance</span>
          </div>

          <div className="flex flex-col items-center gap-2" data-aos="fade-left" data-aos-delay="700">
            <div className="max-sm:w-[40px] aspect-square">
            <Image alt="Taxation Logo" src={Tax} width={70} height={70} />
            </div>
            <span className=" max-sm:text-sm">Taxation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
