import Link from "next/link";

const products = [
  {
    name: "Hyaluronic acid serum",
    price: "BD.1000",
    rating: 5,
    image: "/0b729addc47253e5c936d8803a8d4ab5078800ee.jpg", // Mapping to one of the new images
  },
  {
    name: "Makeup",
    price: "BD.3000",
    rating: 5,
    image: "/9320df074a39dc57e986b3b49f2d528ed90d2651.jpg",
  },
  {
    name: "Advanced Night Serum",
    price: "BD.7000",
    rating: 5,
    image: "/d9c8cae0b046e277483b5a4c063924336e22e415.jpg",
  },
  {
    name: "Sunscreem SPF 50",
    price: "BD.2000",
    rating: 5,
    image: "/de20e4fc0c9f236fb19ae391f3a9b72ca9cd733b.jpg",
  }
];

export default function BestSellers() {
  return (
    <section className="w-full py-16 bg-[#eef7fa]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-[#3252A2] mb-12">
          Best Sellers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col gap-3 group cursor-pointer">
              {/* Image Box */}
              <div className="w-full aspect-square bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Product Info (Outside the white box) */}
              <div className="px-1 flex flex-col relative">
                <h3 className="text-sm text-gray-800 mb-1">{product.name}</h3>
                <p className="text-xs font-semibold text-gray-700 mb-3">{product.price}</p>
                
                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center gap-[2px] text-[#0ea5e9]">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Cart Icon */}
                  <button 
                    className="w-7 h-7 rounded-full border border-[#3252A2] text-[#3252A2] flex items-center justify-center hover:bg-[#3252A2] hover:text-white transition-colors"
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
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link 
            href="/best-sellers" 
            className="border border-[#3252A2] text-[#3252A2] bg-white hover:bg-[#3252A2] hover:text-white text-sm font-medium px-10 py-2.5 rounded-full transition-colors shadow-sm"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
