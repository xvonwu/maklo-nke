import React from 'react';

interface NavbarProps {
  currentScreen: 'lebron' | 'collections' | 'discount' | 'about' | 'bag';
  onNavigate: (screen: 'lebron' | 'collections' | 'discount' | 'about' | 'bag') => void;
  cartCount: number;
  onOpenCartDrawer: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  isLebronHero?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCartDrawer,
  onOpenSearch,
  onOpenAccount,
  isLebronHero = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // When on LeBron hero screen, the navbar has white text and transparent background matching screen 1
  const isHero = isLebronHero && currentScreen === 'lebron';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHero
          ? 'bg-transparent text-white pt-3 pb-2 px-6 sm:px-12 md:px-16'
          : 'bg-[#f8f9fa]/90 backdrop-blur-xl border-b border-[#c4c7c7]/40 text-[#191c1d]'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between ${
          isHero ? 'py-2' : 'h-20 px-4 sm:px-8 md:px-12'
        }`}
      >
        {/* Brand Logo: MAKLO with Swoosh */}
        <button
          onClick={() => onNavigate('lebron')}
          className="flex items-center gap-2 group cursor-pointer text-left"
          aria-label="MAKLO Home"
        >
          <span
            className={`font-black text-2xl md:text-3xl tracking-tight uppercase flex items-center gap-2 ${
              isHero ? 'text-white' : 'text-black'
            }`}
          >
            MAKLO
            <svg
              className={`w-7 h-4 fill-current transform group-hover:scale-110 transition-transform ${
                isHero ? 'text-white' : 'text-black'
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.707 5.293c-.27-.27-.72-.18-.87.18-1.57 3.73-4.64 6.78-8.47 8.32-2.31.93-4.8.96-7.14.07-.63-.24-1.29.35-1.07.98 1.48 4.22 5.56 7.16 10.28 7.16 6.08 0 11.02-4.94 11.02-11.02 0-2.12-.6-4.09-1.65-5.77-.28-.45-.73-.59-1.1-.92z" />
            </svg>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <button
            onClick={() => onNavigate('lebron')}
            className={`uppercase tracking-wider text-xs lg:text-sm font-bold transition-all relative py-1 cursor-pointer ${
              currentScreen === 'lebron'
                ? isHero
                  ? 'text-white border-b-2 border-white'
                  : 'text-black border-b-2 border-black'
                : isHero
                ? 'text-white/80 hover:text-white'
                : 'text-[#444748] hover:text-black'
            }`}
          >
            LeBron 15
          </button>
          <button
            onClick={() => onNavigate('collections')}
            className={`uppercase tracking-wider text-xs lg:text-sm font-bold transition-all relative py-1 cursor-pointer ${
              currentScreen === 'collections'
                ? isHero
                  ? 'text-white border-b-2 border-white'
                  : 'text-black border-b-2 border-black'
                : isHero
                ? 'text-white/80 hover:text-white'
                : 'text-[#444748] hover:text-black'
            }`}
          >
            Collections
          </button>
          <button
            onClick={() => onNavigate('discount')}
            className={`uppercase tracking-wider text-xs lg:text-sm font-bold transition-all relative py-1 cursor-pointer ${
              currentScreen === 'discount'
                ? isHero
                  ? 'text-white border-b-2 border-white'
                  : 'text-black border-b-2 border-black'
                : isHero
                ? 'text-white/80 hover:text-white'
                : 'text-[#444748] hover:text-black'
            }`}
          >
            Discount
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`uppercase tracking-wider text-xs lg:text-sm font-bold transition-all relative py-1 cursor-pointer ${
              currentScreen === 'about'
                ? isHero
                  ? 'text-white border-b-2 border-white'
                  : 'text-black border-b-2 border-black'
                : isHero
                ? 'text-white/80 hover:text-white'
                : 'text-[#444748] hover:text-black'
            }`}
          >
            About
          </button>
        </nav>

        {/* Right Section: Search, Cart Badge, Profile / Drawer */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search sneakers"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isHero
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'text-[#191c1d] hover:bg-[#e7e8e9]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Cart Button */}
          {isHero ? (
            <button
              onClick={onOpenCartDrawer}
              className="flex items-center gap-2.5 bg-white text-[#E8500A] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group"
              aria-label={`Open shopping cart drawer with ${cartCount} items`}
            >
              <span className="tracking-wide">Cart</span>
              <div className="relative flex items-center justify-center">
                <i className="fa-solid fa-cart-shopping text-xs group-hover:rotate-6 transition-transform"></i>
                <span className="absolute -top-2.5 -right-3.5 bg-zinc-900 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              </div>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('bag')}
              className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white rounded-full px-4 sm:px-5 py-2 transition-all duration-150 shadow-sm cursor-pointer group"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              <span className="font-bold text-xs tracking-wider uppercase">CART</span>
              <span className="bg-[#a63500] text-white px-2 py-0.5 rounded-full text-[11px] font-extrabold leading-tight">
                {cartCount}
              </span>
            </button>
          )}

          {/* Account Button */}
          <button
            onClick={onOpenAccount}
            aria-label="Member Account"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ${
              isHero ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`md:hidden p-1.5 focus:outline-none cursor-pointer ${
              isHero ? 'text-white' : 'text-black'
            }`}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t px-6 py-4 flex flex-col gap-3 transition-all ${
            isHero
              ? 'bg-black/85 backdrop-blur-xl border-white/10 text-white'
              : 'bg-white/95 backdrop-blur-xl border-zinc-200 text-black shadow-xl'
          }`}
        >
          <button
            onClick={() => {
              onNavigate('lebron');
              setMobileMenuOpen(false);
            }}
            className="text-left font-bold text-base py-1 uppercase tracking-wider"
          >
            LeBron 15
          </button>
          <button
            onClick={() => {
              onNavigate('collections');
              setMobileMenuOpen(false);
            }}
            className="text-left font-bold text-base py-1 uppercase tracking-wider"
          >
            Collections
          </button>
          <button
            onClick={() => {
              onNavigate('discount');
              setMobileMenuOpen(false);
            }}
            className="text-left font-bold text-base py-1 uppercase tracking-wider"
          >
            Discount Archive
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setMobileMenuOpen(false);
            }}
            className="text-left font-bold text-base py-1 uppercase tracking-wider"
          >
            About Lab
          </button>
          <button
            onClick={() => {
              onNavigate('bag');
              setMobileMenuOpen(false);
            }}
            className="text-left font-bold text-base py-1 uppercase tracking-wider flex items-center justify-between text-[#a63500]"
          >
            <span>Shopping Bag</span>
            <span className="bg-[#a63500] text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>
          </button>
        </div>
      )}
    </header>
  );
};
