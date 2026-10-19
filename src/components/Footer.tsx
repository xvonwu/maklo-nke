import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (screen: 'lebron' | 'collections' | 'discount' | 'about' | 'bag') => void;
  onShowToast: (title: string, sub: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      onShowToast('Invalid Email', 'Please provide a valid email address.');
      return;
    }
    setSubscribed(true);
    onShowToast('VIP Dispatch Granted', `Early access invites will be dispatched to ${email}`);
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#ffffff] border-t border-[#c4c7c7]/40 mt-auto text-[#191c1d]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Manifesto */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-extrabold text-2xl tracking-tighter uppercase text-black">MAKLO</span>
              <span className="text-xs font-bold text-[#444748] tracking-widest uppercase">× NIKE LAB</span>
            </div>
            <p className="text-sm text-[#444748] max-w-sm mb-6 leading-relaxed">
              Engineered precision meets high-street athletic minimalism. Exploring future footwear silhouettes and
              next-generation cushioning architecture.
            </p>
            <div className="flex items-center gap-2.5">
              <button
                aria-label="Share"
                onClick={() => onShowToast('Link Copied', 'MAKLO portal URL copied to clipboard.')}
                className="w-9 h-9 rounded-full bg-[#f3f4f5] hover:bg-[#e7e8e9] flex items-center justify-center text-[#191c1d] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </button>
              <button
                aria-label="Stream Channel"
                onClick={() => onShowToast('Nike Lab Stream', 'Opening high-definition footwear laboratory stream.')}
                className="w-9 h-9 rounded-full bg-[#f3f4f5] hover:bg-[#e7e8e9] flex items-center justify-center text-[#191c1d] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
              </button>
              <button
                aria-label="Global Community"
                onClick={() => onNavigate('about')}
                className="w-9 h-9 rounded-full bg-[#f3f4f5] hover:bg-[#e7e8e9] flex items-center justify-center text-[#191c1d] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </button>
              <button
                aria-label="Official Chat"
                onClick={() => onShowToast('Live Concierge', 'Connecting to 24/7 MAKLO athlete advisor...')}
                className="w-9 h-9 rounded-full bg-[#f3f4f5] hover:bg-[#e7e8e9] flex items-center justify-center text-[#191c1d] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              </button>
            </div>
          </div>

          {/* Collections Column */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm text-[#191c1d] uppercase tracking-wider mb-4">Collections</h4>
            <ul className="space-y-2.5 text-sm text-[#444748]">
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Air Max Velocity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Vaporfly Minimal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Retro High Runners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discount')}
                  className="hover:text-black transition-colors cursor-pointer text-left font-semibold text-[#a63500]"
                >
                  Seasonal Discount
                </button>
              </li>
            </ul>
          </div>

          {/* Care & Support Column */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm text-[#191c1d] uppercase tracking-wider mb-4">Care &amp; Support</h4>
            <ul className="space-y-2.5 text-sm text-[#444748]">
              <li>
                <button
                  onClick={() => onShowToast('Order Tracking', 'Enter your order confirmation number to track.')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Order Tracking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('Sizing Guide', 'US/EU footwear millimeter comparison matrix opened.')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Sizing Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onShowToast('Warranty', '30-day unwashed return policy backed by Nike Lab.')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Returns &amp; Warranty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Store Locator
                </button>
              </li>
            </ul>
          </div>

          {/* Priority Dispatch Newsletter Column */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm text-[#191c1d] uppercase tracking-wider mb-2">Priority Dispatch</h4>
            <p className="text-sm text-[#444748] mb-4">Subscribe to gain private access to limited collaborative drops.</p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                required
                className="flex-1 bg-[#f3f4f5] border border-[#c4c7c7] rounded-full px-4 py-2 text-sm text-[#191c1d] placeholder:text-[#747878] focus:outline-none focus:border-black transition-colors"
              />
              <button
                type="submit"
                className="bg-black text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-transform active:scale-95 cursor-pointer"
              >
                JOIN
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-600 font-bold mt-2">
                ✓ You are on the priority dispatch list.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Credits & Verification Icons */}
        <div className="pt-6 border-t border-[#c4c7c7]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#444748] text-center md:text-left">
            © 2025 MAKLO x Nike Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[#444748]">
            <span title="256-bit SSL Secure" className="material-symbols-outlined text-[20px]">
              lock
            </span>
            <span title="Credit Card Supported" className="material-symbols-outlined text-[20px]">
              credit_card
            </span>
            <span title="Contactless Payment" className="material-symbols-outlined text-[20px]">
              contactless
            </span>
            <span title="Verified Authenticity" className="material-symbols-outlined text-[20px]">
              verified_user
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
