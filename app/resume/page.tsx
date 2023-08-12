import ResumePDF from "@/Components/Resume/Resume";

const Resume = () => {
  return (
    <section className=" pt-16 min-h-screen">
      <div className=" container px-11  text-white mx-auto">
        <h2 className=" text-center my-5 mt-14 text-md sm:text-xl">
          Checkout My resume
        </h2>
          <ResumePDF />
      </div>
    </section>
  );
};

export default Resume;
