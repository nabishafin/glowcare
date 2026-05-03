import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#274FA8] text-white pt-16 pb-8 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand & description */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="text-2xl font-bold tracking-tight flex items-center">
            GlowCa<span className="text-[#3252A2] relative"><span className="absolute -top-1 -right-1 text-[10px]">♥</span>r</span>e
          </Link>
          <p className="text-sm text-white leading-relaxed max-w-xs">
            Clean beauty products for a healthy, glowing you.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-[#3252A2] text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-4 text-sm text-white">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/skincare" className="hover:text-white transition-colors">Skincare</Link></li>
            <li><Link href="/makeup" className="hover:text-white transition-colors">Makeup</Link></li>
            <li><Link href="/new-launch" className="hover:text-white transition-colors">New Launch</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Customer Service</h3>
          <ul className="flex flex-col gap-4 text-sm text-white">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
            <li><Link href="/returns" className="hover:text-white transition-colors">Return Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* My Account & Contact */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-6">My Account</h3>
            <ul className="flex flex-col gap-4 text-sm text-white">
              <li><Link href="/account/orders" className="hover:text-white transition-colors">My Orders</Link></li>
              <li><Link href="/account/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
              <li><Link href="/account/track" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Login / Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-white">
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <a href="mailto:hello@glowcare.com" className="hover:text-white transition-colors">hello@glowcare.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                <a href="tel:01612028192" className="hover:text-white transition-colors">01612028192</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>123 Glow Street, Beauty City,</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-sm text-white">
        <p>2026 Glowcare. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
