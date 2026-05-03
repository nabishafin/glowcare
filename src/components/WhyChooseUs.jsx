export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-[#fbfdfd] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#3252A2] mb-16">
          Why Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
              <h3 className="text-[17px] font-semibold text-gray-900">Natural & Safe</h3>
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[200px]">
              Carefully selected ingredients<br/>for your skin
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
              <h3 className="text-[17px] font-semibold text-gray-900">Loved by Thousands</h3>
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[220px]">
              Trusted by 10,000+ happy customers<br/>you can trust
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
              </svg>
              <h3 className="text-[17px] font-semibold text-gray-900">For All Skin Types</h3>
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[220px]">
              Gentle & suitable for everyone<br/>every day
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <h3 className="text-[17px] font-semibold text-gray-900">Effective Results</h3>
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[200px]">
              Visible results you can see<br/>and feel
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
