export default function Newsletter() {
  return (
    <section 
      className="w-full py-20 md:py-32 min-h-[400px] bg-cover bg-right bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/ddfa1e555fb85cf78981d3c95c90cd690216946b.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl space-y-3">
          <h2 className="text-3xl md:text-[38px] lg:text-[42px] font-medium text-black tracking-tight leading-tight">
            Join our Glowcare family
          </h2>
          <p className="text-[17px] md:text-[19px] text-gray-700 font-light mb-6">
            Get exclusive offers, skincare tips & more!
          </p>
          
          <div className="flex w-full max-w-md shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] pt-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3.5 rounded-l-md border-0 focus:ring-2 focus:ring-[#3252A2] outline-none text-gray-700 text-sm md:text-base placeholder:font-light"
            />
            <button className="bg-[#3252A2] hover:bg-blue-800 text-white font-medium px-8 py-3.5 rounded-r-md transition-colors text-sm tracking-wide">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
