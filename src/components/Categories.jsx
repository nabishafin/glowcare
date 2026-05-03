import Link from "next/link";

const categories = [
  {
    title: "Skincare",
    subtitle: "Nourish & Glow",
    link: "/shop/skincare",
    // We are guessing the order of the images based on the ones provided
    image: "/288a0adcd888d16fe467305f9de228796000edef.jpg",
  },
  {
    title: "Makeup",
    subtitle: "Enhance your beauty",
    link: "/shop/makeup",
    image: "/e5879b753ba1c168972b984f60ba5eab9ef08526.jpg",
  },
  {
    title: "Best Sellers",
    subtitle: "Customer Favorites",
    link: "/shop/best-sellers",
    image: "/f104a8dcf622ff5b3b77b9aa70c66e4fe3620e25.jpg",
  }
];

export default function Categories() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-6 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow border border-gray-50 overflow-hidden"
            >
              <div className="flex flex-col z-10 w-1/2 pr-2">
                <h3 className="text-xl md:text-2xl font-medium text-[#0ea5e9] mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-gray-600 mb-8">
                  {cat.subtitle}
                </p>
                <Link 
                  href={cat.link} 
                  className="text-xs font-semibold text-[#3252A2] hover:text-blue-800 transition-colors tracking-wide"
                >
                  SHOP NOW &gt;
                </Link>
              </div>
              <div className="w-1/2 flex justify-end items-center h-32 md:h-40 relative">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-contain object-right" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
