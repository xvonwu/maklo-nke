import React, { useState, useEffect, useRef } from 'react';
import { LEBRON_VARIANTS, ShoeVariant } from '../../data/products';
import type { CartItem } from '../../utils/cartStore';

interface LeBronHeroScreenProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onOpenCart: () => void;
  onNavigate: (screen: 'lebron' | 'collections' | 'discount' | 'about' | 'bag') => void;
}

export const LeBronHeroScreen: React.FC<LeBronHeroScreenProps> = ({
  onAddToCart,
  onOpenCart,
  onNavigate,
}) => {
  const [activeVariant, setActiveVariant] = useState<ShoeVariant>(LEBRON_VARIANTS[0]);
  const [selectedSize, setSelectedSize] = useState<number>(9);
  const [displayPrice, setDisplayPrice] = useState<number>(185);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const availableSizes = [7, 8, 9, 10, 11, 12, 13];

  // Price count-up animation
  const animatePriceTo = (target: number) => {
    const start = displayPrice;
    const duration = 300;
    const startTime = performance.now();

    const update = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const val = Math.floor(start + (target - start) * progress);
      setDisplayPrice(val);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayPrice(target);
      }
    };
    requestAnimationFrame(update);
  };

  const handleSelectVariant = (variant: ShoeVariant) => {
    setActiveVariant(variant);
    const sizeDelta = selectedSize > 11 ? 10 : 0;
    animatePriceTo(variant.price + sizeDelta);
  };

  const handleSelectSize = (size: number) => {
    setSelectedSize(size);
    const sizeDelta = size > 11 ? 10 : 0;
    animatePriceTo(activeVariant.price + sizeDelta);
  };

  const handleNextVariant = () => {
    const currentIndex = LEBRON_VARIANTS.findIndex((v) => v.id === activeVariant.id);
    const nextIndex = (currentIndex + 1) % LEBRON_VARIANTS.length;
    handleSelectVariant(LEBRON_VARIANTS[nextIndex]);
  };

  const handleBuyNow = () => {
    onAddToCart({
      id: `lebron-15-${activeVariant.id}`,
      name: 'Nike LeBron 15',
      price: displayPrice,
      size: selectedSize,
      variantName: activeVariant.name,
      color: activeVariant.colorName,
      filter: activeVariant.imageFilter,
      badge: 'BATTLEKNIT',
      sku: `LB15-${activeVariant.id.toUpperCase()}`,
      image: activeVariant.image,
    });
    onOpenCart();
  };

  // Parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!heroRef.current || window.innerWidth < 768) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (-y / rect.height) * 20,
      y: (x / rect.width) * 20,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  const variantIndex = LEBRON_VARIANTS.findIndex((v) => v.id === activeVariant.id);

  const currentBg = isDarkMode ? '#0F172A' : activeVariant.bgGradient;
  const currentCircleBg = isDarkMode ? '#1E293B' : activeVariant.circleColor;

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: currentBg,
        transition: 'background 0.5s ease',
      }}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 md:px-16 lg:px-24 text-white overflow-hidden select-none font-poppins"
    >
      {/* Custom Cursor */}
      <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div
        className={`fixed border-2 border-white/80 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 hidden md:block mix-blend-difference ${
          cursorHover ? 'w-12 h-12 bg-white/20' : 'w-7 h-7'
        }`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Main Hero Grid */}
      <main className="relative w-full flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 py-4 my-auto z-10">
        {/* Giant Watermark Background "New" */}
        <div
          className="absolute -top-10 md:top-2 lg:top-8 left-0 md:left-4 z-0 pointer-events-none overflow-hidden transition-transform duration-200"
          style={{
            transform: `translate(${tilt.y * 1.2}px, ${-tilt.x * 0.8}px)`,
          }}
        >
          <span className="block font-black text-[clamp(7rem,22vw,20rem)] leading-none text-white/[0.08] tracking-tighter select-none font-poppins">
            New
          </span>
        </div>

        {/* Left Column: Brand, Model, Description, Variants, Size, Buy Now */}
        <div className="lg:col-span-6 flex flex-col justify-center z-10 order-2 lg:order-1 pt-2 lg:pt-0">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight text-white mb-1 drop-shadow-sm">
              Nike
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight text-white drop-shadow-sm">
              LeBron 15
            </h2>
          </div>

          <p className="text-white/90 font-normal text-sm sm:text-base leading-relaxed max-w-xl mt-6 text-justify sm:text-left drop-shadow-sm">
            {activeVariant.description}
          </p>

          {/* Controls: Color & Size */}
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Color Picker */}
            <div className="flex items-center gap-3 bg-black/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Warna:</span>
              <div className="flex items-center gap-2.5">
                {LEBRON_VARIANTS.map((v) => {
                  const colorMap: Record<string, string> = {
                    orange: '#FF6A13',
                    blue: '#1A56DB',
                    black: '#18181B',
                    white: '#F4F4F5',
                  };
                  const isActive = activeVariant.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => handleSelectVariant(v)}
                      onMouseEnter={() => setCursorHover(true)}
                      onMouseLeave={() => setCursorHover(false)}
                      title={v.name}
                      aria-label={`Pilih warna ${v.name}`}
                      style={{ backgroundColor: colorMap[v.id] || '#FF6A13' }}
                      className={`w-6 h-6 rounded-full border-2 border-white/80 shadow-md cursor-pointer transition-all duration-200 ${
                        isActive ? 'ring-2 ring-white scale-125' : 'hover:scale-110 opacity-80'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex items-center gap-2 bg-black/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">US:</span>
              <div className="flex items-center gap-1.5">
                {availableSizes.map((size) => {
                  const isActive = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => handleSelectSize(size)}
                      onMouseEnter={() => setCursorHover(true)}
                      onMouseLeave={() => setCursorHover(false)}
                      className={`px-2.5 py-1 text-xs rounded-full font-bold cursor-pointer transition-all ${
                        isActive
                          ? 'bg-white text-[#E8500A] shadow-md scale-105'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Price & Buy Now Button */}
          <div className="flex items-center gap-8 mt-7">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-white/70 font-medium">HARGA RESMI</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline">
                ${displayPrice}
              </div>
            </div>

            <button
              onClick={handleBuyNow}
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              className="px-10 py-4 bg-white text-[#E8500A] font-extrabold text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center gap-3 cursor-pointer group"
            >
              <span>Buy Now</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1.5 transition-transform"></i>
            </button>
          </div>
        </div>

        {/* Right Column: Parallax Circle & 3D Interactive Shoe */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] z-10 order-1 lg:order-2">
          {/* Light Grey Background Circle with gentle parallax */}
          <div
            style={{
              backgroundColor: currentCircleBg,
              transform: `translate(${tilt.y * -1.5}px, ${-tilt.x * 1.5}px)`,
              transition: 'background-color 0.4s ease, transform 0.2s cubic-bezier(0.1, 0.5, 0.1, 1)',
            }}
            className="absolute w-[290px] h-[290px] sm:w-[420px] sm:h-[420px] lg:w-[490px] lg:h-[490px] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.18)] z-0 flex items-center justify-center"
          >
            <div className="w-[90%] h-[90%] rounded-full border border-black/5" />
          </div>

          {/* Shoe Tilt & Float Wrapper */}
          <div
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
              transition: 'transform 0.15s cubic-bezier(0.1, 0.5, 0.1, 1)',
            }}
            className="relative z-10 w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <div className="shoe-float-container relative">
              <img
                src={activeVariant.image}
                style={{
                  filter: activeVariant.imageFilter,
                  transition: 'filter 0.4s ease',
                }}
                alt={`Nike LeBron 15 - ${activeVariant.name}`}
                className="w-full h-auto object-contain select-none drop-shadow-[0_35px_35px_rgba(0,0,0,0.38)] pointer-events-none"
              />
            </div>
            {/* Ambient Shadow under shoe */}
            <div className="absolute -bottom-8 w-3/4 h-12 bg-black/25 blur-2xl rounded-full pointer-events-none" />
          </div>

          {/* Dynamic Badge Info on Top Right of Circle */}
          <div className="absolute top-8 right-4 lg:right-10 bg-white/20 backdrop-blur-xl border border-white/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white tracking-wider uppercase shadow-lg pointer-events-none hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{activeVariant.tag}</span>
          </div>

          {/* Theme mode toggle floating button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            aria-label="Toggle dark mode"
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <i className={`fa-solid ${isDarkMode ? 'fa-sun text-amber-300' : 'fa-moon text-white'} text-sm`}></i>
          </button>
        </div>
      </main>

      {/* Footer / Bottom Bar matching Screen 1 */}
      <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10 z-10">
        {/* Social Media Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram MAKLO"
            className="text-white/90 text-2xl hover:scale-125 hover:rotate-12 transition-transform cursor-pointer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook MAKLO"
            className="text-white/90 text-2xl hover:scale-125 hover:rotate-12 transition-transform cursor-pointer"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter X MAKLO"
            className="text-white/90 text-xl hover:scale-125 hover:rotate-12 transition-transform cursor-pointer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        {/* Slider Progress Bar with Labels & Click to Cycle */}
        <div
          onClick={handleNextVariant}
          title="Klik untuk melihat varian berikutnya"
          className="flex-1 max-w-xl mx-0 sm:mx-8 w-full flex flex-col gap-1.5 cursor-pointer group"
        >
          <div className="flex justify-between text-[11px] font-semibold text-white/80 tracking-wider uppercase">
            <span>
              0{variantIndex + 1} / {activeVariant.name}
            </span>
            <span className="group-hover:text-white transition-colors">04 VARIANTS (Click to cycle)</span>
          </div>
          <div className="relative w-full h-[3px] bg-white/25 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-out"
              style={{ width: activeVariant.progressWidth }}
            />
          </div>
        </div>

        {/* Quick Link to Collections / Copyright */}
        <div className="flex items-center gap-4 text-xs text-white/70 font-medium">
          <button
            onClick={() => onNavigate('collections')}
            className="underline hover:text-white transition-colors cursor-pointer"
          >
            Explore Collections →
          </button>
          <span>© 2025 MAKLO x Nike Inc.</span>
        </div>
      </footer>
    </div>
  );
};
