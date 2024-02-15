import Aboutimg from "../assets/Aboutimg.png"
import Aboutimg2 from "../assets/Aboutimg2.png"



const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8" >
        <div className="md:w-1/2">
          <img src={Aboutimg} alt="" />
        </div>

        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold">We have been improving our product <span className="text-secondary">for many years</span></h2>
          <p className="text-tertiary text-lg mb-7">A good eample of paragraph contains a topic sentence ,details and a conclusion.There are many different kinds of animals that live in china.</p>
          <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">Get started</button>

        </div>
      </div>

      {/* second page */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8" >
        <div className="md:w-1/2">
          <img src={Aboutimg2} alt="" />
        </div>

        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">You can Practice at any
          <span className="text-secondary">time convinient for you.</span></h2>
          <p className="text-tertiary text-lg mb-7">A good eample of paragraph contains a topic sentence ,details and a conclusion.There are many different kinds of animals that live in china.</p>
          <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">Get started</button>

        </div>
      </div>
    </div>
  )
}

export default About