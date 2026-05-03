import Link from "next/link";

export default function NewLaunch() {
  return (
    <div className="w-full flex flex-col">
      {/* Features Bar */}
      <div className="w-full bg-[#f4f9fb] border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              <path d="M16 11V7a4 4 0 0 0-8 0v4"></path>
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-800">Free Delivery</p>
              <p className="text-xs text-gray-500">On orders over BD.500</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-800">Easy Returns</p>
              <p className="text-xs text-gray-500">14 days return policy</p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-800">Secure Payment</p>
              <p className="text-xs text-gray-500">100% secure checkout</p>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-800">24/7 Support</p>
              <p className="text-xs text-gray-500">We're here to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Banner */}
      <section 
        className="w-full h-[500px] md:h-[600px] bg-cover bg-center flex items-center" 
        style={{ backgroundImage: "url('/a6b86b8db40ab61cf6dc007b0d5cb0282217cb77.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center">
          <div className="max-w-md space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#3252A2]">
              New Launch
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
              Brightening Vitamin C Serum
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Formulated with Vitamin C & Niacinamide to brighten skin and fade dark spots.
            </p>
            <div className="pt-4">
              <Link 
                href="/shop/vitamin-c-serum" 
                className="inline-block bg-[#3252A2] hover:bg-blue-800 text-white text-sm font-medium px-8 py-3 rounded-full transition-colors shadow-sm"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
