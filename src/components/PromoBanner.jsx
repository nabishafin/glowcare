import Link from "next/link";

export default function PromoBanner() {
  return (
    <section 
      className="w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/e51af6d51dc4577269a2687d57f852ed6b9489e7.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight">
            Your Skin, Your Confidence
          </h2>
          <p className="text-lg md:text-[22px] text-gray-800 leading-relaxed max-w-md">
            Because you deserve to feel beautiful in your own skin.
          </p>
          <div className="pt-2">
            <Link 
              href="/discover" 
              className="inline-block bg-[#3252A2] hover:bg-blue-800 text-white text-sm md:text-base font-medium px-8 py-3 rounded-md transition-colors shadow-sm"
            >
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
