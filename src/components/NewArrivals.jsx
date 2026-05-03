import Link from "next/link";

const products = [
  {
    category: "Moisturiser",
    name: "Boosting Toner",
    price: "BD.1500",
    rating: 5,
    image: "/0dca7408424f1747825d6beeeb89aec664a00b35.png",
  },
  {
    category: "Hydration",
    name: "Boosting Toner",
    price: "BD.3000",
    rating: 5,
    image: "/293999f9fe345e7ca6a63c0038a643f089ff9cea.png",
  },
  {
    category: "True Cicalming Serum",
    name: "True Cicalming toner pad",
    price: "BD.3000",
    rating: 5,
    image: "/38c865103ef8a5b54f8fe0d6ae0dfe9dd008a927.png",
  },
  {
    category: "Hydration",
    name: "Boosting Toner",
    price: "BD.1500",
    rating: 5,
    image: "/a800ee38f07e92fec5c53cb503e28992764d5246.png",
  }
];

export default function NewArrivals() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          New Arrivals
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] relative bg-gray-50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4 flex flex-col relative">
                <p className="text-[11px] text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h3>
                <p className="text-xs font-semibold text-gray-600 mb-3">{product.price}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-[2px] text-[#0ea5e9]">
                  {[...Array(product.rating)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Cart Icon */}
                <button 
                  className="absolute bottom-4 right-4 w-7 h-7 rounded-full border border-[#3252A2] text-[#3252A2] flex items-center justify-center hover:bg-[#3252A2] hover:text-white transition-colors"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link 
            href="/new-arrivals" 
            className="bg-[#3252A2] hover:bg-blue-800 text-white text-sm font-medium px-8 py-3 rounded-full transition-colors shadow-sm"
          >
            VIEW ALL PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
