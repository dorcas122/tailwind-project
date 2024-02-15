import bannerimg from '../assets/bannerimg.png'

const Banner = () => {
  return (
    <>
<div className="md:px-12 p-4 max-w-screen-2xl mx-auto my-12">
       <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'> 
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
           
            {/* bannerimage */}
            <div>
                <img src={bannerimg} alt=""  />
                </div>
           
            {/* banner content */}
            <div className="md:w-3/5">
               <h2 className="md:text-5xl text-2xl font-bold text-white mb-6 leading-relaxed">Each student an share their  discount code for friends</h2> 
               <p className="text-[#EBEBEB] text-1xl mb-8">A simple paragraph is comprised of three major components. The first <br />sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
  <div className=" space-x-5 space-y-4">
    <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">i have a code</button>

  </div>
                </div> 
                
        </div>
       </div>
    </div>
    </>
  )
}

export default Banner