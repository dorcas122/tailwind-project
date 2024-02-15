import { useState } from "react"
import slide from "../assets/Slide button (2).png"
import green from "../assets/Rectangle 28.png"
import pink from "../assets/Rectangle 32.png"


const Pricing = () => {


    const packages = [
        { name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "A simple paragraph is comprised of three major:The which is often, a declarative sentence." },
        { name: "Advance", monthlyPrice: 19, yearlyPrice: 199, description: "A simple paragraph is comprised of three major components:The which is often, a declarative sentence." },
        { name: "Premium", monthlyPrice: 19, yearlyPrice: 199, description: "A simple paragraph is comprised of three major components:The which is often, a declarative sentence." },

    ]








    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10 " id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold">Here are all our plans
                </h2>
                <p className="text-tertiary md:w-1/3 mx-auto px-4">A simple paragraph is comprised of three major components. The which is often a declarative sentence.
                </p>

                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="ml-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full">
                            <img src={slide} alt="" />
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                </div>
            </div>

            {/* pricing cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map(({ name, index }) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                        <h3 className="text-3xl font-bold text-center text-primary ">{name}</h3>
                        <p className="text-primary text-center my-5">A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="mt-5 text-center text-secondary text-4xl  font-bold">85$</p>

                        <ul className="mt-4 space-y-2 px-4">
                            <li className="flex gap-3 items-center"><img src={green} alt="" className="w-5 h-4" />Videos of Lessons</li>
                            <li className="flex gap-3 items-center"><img src={green} alt="" className="w-5 h-4" />Homework check</li>
                            <li className="flex gap-3 items-center"><img src={green} alt="" className="w-5 h-4" />Additional practical task</li>
                            <li className="flex gap-3 items-center"><img src={green} alt="" className="w-5 h-4" />Monthly conferences</li>
                            <li className=" flex  gap-3 items-center"> <img src={pink} alt="" className="w-5 h-4" />Personal advice from teachers</li>
                        </ul>

                        <button className="py-3 items-center mt-5 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">Get started</button>
                    </div>)
                }

            </div>

        </div>
    )
}

export default Pricing