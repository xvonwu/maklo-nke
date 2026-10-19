import React, { useState, useEffect, useMemo } from 'react';
import { DISCOUNT_PRODUCTS, Product } from '../../data/products';
import type { CartItem } from '../../utils/cartStore';

interface DiscountScreenProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onBuyNow: (item: Omit<CartItem, 'quantity'>) => void;
  onShowToast: (title: string, sub: string) => void;
}

export const DiscountScreen: React.FC<DiscountScreenProps> = ({
  onAddToCart,
  onBuyNow,
  onShowToast,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 14,
    minutes: 32,
    seconds: 18,
  });
  const [vipEmail, setVipEmail] = useState<string>('');
  const [vipSuccess, setVipSuccess] = useState<boolean>(false);

  // Live countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyVoucher = () => {
    navigator.clipboard?.writeText('MAKLO10').catch(() => {});
    setCopiedCode(true);
    onShowToast('Voucher Copied!', 'MAKLO10 copied. 10% extra discount available at checkout.');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleVipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vipEmail.trim() || !vipEmail.includes('@')) {
      onShowToast('Invalid Email', 'Please provide a valid email address.');
      return;
    }
    setVipSuccess(true);
    onShowToast('VIP Pass Granted', `Private invitation token sent to ${vipEmail}`);
    setVipEmail('');
  };

  const filteredDeals = useMemo(() => {
    if (activeFilter === 'all') return DISCOUNT_PRODUCTS;
    if (activeFilter === '30') return DISCOUNT_PRODUCTS.filter((p) => (p.discountPercentage || 0) <= 30);
    if (activeFilter === '50') return DISCOUNT_PRODUCTS.filter((p) => (p.discountPercentage || 0) > 30);
    if (activeFilter === 'flash') return DISCOUNT_PRODUCTS.filter((p) => p.subBadge === 'HOT RELEASE' || p.subBadge === 'RUNNING SPECIAL');
    if (activeFilter === 'clearance') return DISCOUNT_PRODUCTS.filter((p) => (p.discountPercentage || 0) >= 25);
    return DISCOUNT_PRODUCTS;
  }, [activeFilter]);

  const handleAdd = (product: Product) => {
    onAddToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      size: product.defaultSize,
      color: product.color,
      sku: product.sku,
      badge: product.discountBadge || 'DEAL',
      image: product.image,
    });
  };

  const handleBuy = (product: Product) => {
    onBuyNow({
      id: product.id,
      name: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      size: product.defaultSize,
      color: product.color,
      sku: product.sku,
      badge: product.discountBadge || 'DEAL',
      image: product.image,
    });
  };

  return (
    <div className="w-full flex flex-col bg-[#f8f9fa] text-[#191c1d]">
      {/* Top Header & Voucher Ticker */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-10 pb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#ffdbcf]/60 px-3 py-1 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#a63500] animate-pulse" />
              <span className="text-[11px] font-bold text-[#a63500] uppercase tracking-wider">
                LIMITED TIME DISPATCH — UP TO 45% OFF
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase">
              Promotional Offers &amp; Archive Deals
            </h1>
            <p className="text-sm sm:text-base text-[#444748] mt-2">
              Curated performance footwear and seasonal silhouettes at privileged pricing. Verified authentic, limited
              stock.
            </p>
          </div>

          {/* Live Archive Counter Stats */}
          <div className="flex items-center gap-6 bg-[#f3f4f5] px-5 py-3 rounded-2xl self-start md:self-auto shadow-sm">
            <div>
              <span className="text-[10px] font-bold text-[#444748] block uppercase">Vault Units</span>
              <span className="font-extrabold text-base text-black">142 Pairs</span>
            </div>
            <div className="w-px h-8 bg-zinc-300" />
            <div>
              <span className="text-[10px] font-bold text-[#444748] block uppercase">Dispatch</span>
              <span className="font-extrabold text-base text-[#a63500]">24H Expedited</span>
            </div>
          </div>
        </div>

        {/* Active Voucher Banner with Copy Function */}
        <div className="mt-8 w-full bg-black text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#a63500] flex items-center justify-center flex-shrink-0 text-white shadow-md">
              <span className="material-symbols-outlined text-[24px]">local_offer</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg text-white tracking-tight">
                  EXTRA 10% ARCHIVE VOUCHER
                </span>
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Verified Active
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                Apply code at bag summary for cumulative discount across all listed vault models.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Countdown Clock */}
            <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#ffdbcf]">timer</span>
              <span className="text-xs font-mono font-bold text-white tracking-wider">
                Ends in {timeLeft.hours}h : {timeLeft.minutes < 10 ? '0' : ''}
                {timeLeft.minutes}m : {timeLeft.seconds < 10 ? '0' : ''}
                {timeLeft.seconds}s
              </span>
            </div>

            {/* Voucher Pill Button */}
            <div className="flex items-center bg-white text-black rounded-full px-4 py-1.5 shadow-sm">
              <span className="font-black text-sm tracking-wider mr-3 font-mono">MAKLO10</span>
              <button
                onClick={handleCopyVoucher}
                className="bg-black text-white hover:bg-zinc-800 text-[11px] font-extrabold px-3 py-1 rounded-full transition-transform active:scale-95 flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedCode ? 'check' : 'content_copy'}
                </span>
                <span>{copiedCode ? 'COPIED!' : 'COPY CODE'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center justify-between overflow-x-auto pb-2 no-scrollbar gap-2">
          <div className="flex items-center gap-2">
            {[
              { id: 'all', label: 'All Deals (6)' },
              { id: '30', label: 'Up to 30% Off' },
              { id: '50', label: 'Up to 50% Off' },
              { id: 'flash', label: 'Flash Drops' },
              { id: 'clearance', label: 'Clearance Vault' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`text-xs font-bold uppercase px-4 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-[#e7e8e9] hover:bg-zinc-300 text-black'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[#444748] text-xs font-bold pl-4">
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span>SORT: HIGHEST DISCOUNT</span>
          </div>
        </div>
      </section>

      {/* Product Discount Grid: 3 columns */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredDeals.map((product) => (
            <article key={product.id} className="group flex flex-col">
              <div className="relative bg-[#eceff1] rounded-2xl aspect-square flex items-center justify-center p-8 overflow-hidden transition-all duration-300 group-hover:bg-[#e1e3e4] group-hover:shadow-md cursor-pointer">
                {/* Discount Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
                  <span className="bg-[#a63500] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.discountBadge}
                  </span>
                  {product.subBadge && (
                    <span className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {product.subBadge}
                    </span>
                  )}
                </div>

                <button
                  aria-label={`Favorite ${product.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onShowToast('Saved to Wishlist', `${product.title} saved to your member vault.`);
                  }}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white hover:scale-110 transition-all cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>

                {/* Footwear Image */}
                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[82%] max-w-[85%] object-contain drop-shadow-[0_16px_20px_rgba(0,0,0,0.14)]"
                  />
                </div>

                <div className="absolute bottom-3 left-4 text-[10px] font-bold text-[#444748]/70 tracking-widest uppercase">
                  SKU // {product.sku}
                </div>
              </div>

              {/* Info & Actions */}
              <div className="mt-4 flex flex-col">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-black text-base text-black tracking-tight group-hover:text-[#a63500] transition-colors truncate">
                    {product.title}
                  </h3>
                  <div className="text-right flex items-baseline gap-2">
                    <span className="text-[#444748] line-through text-sm">${product.originalPrice}</span>
                    <span className="text-xl font-black text-black tracking-tight">${product.price.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-xs text-[#444748] mt-0.5">{product.description}</p>

                {/* Twin Action Buttons */}
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => handleAdd(product)}
                    className="flex-1 bg-white border-2 border-black text-black hover:bg-black hover:text-white font-extrabold text-xs py-2.5 rounded-full uppercase tracking-wider transition-all duration-150 cursor-pointer"
                  >
                    ADD CART
                  </button>
                  <button
                    onClick={() => handleBuy(product)}
                    className="flex-1 bg-black text-white hover:bg-zinc-800 font-extrabold text-xs py-2.5 rounded-full uppercase tracking-wider transition-transform duration-150 active:scale-95 cursor-pointer shadow-sm"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Flash Promotion Guarantees */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f3f4f5] p-6 rounded-2xl flex items-start gap-4 border border-zinc-200">
            <span className="material-symbols-outlined text-[28px] text-[#a63500] flex-shrink-0">
              verified
            </span>
            <div>
              <h4 className="font-black text-sm text-black uppercase">100% Certified Authentic</h4>
              <p className="text-xs text-[#444748] mt-1">
                Every silhouette undergoes a double-pass inspection by MAKLO Lab specialists before dispatch.
              </p>
            </div>
          </div>

          <div className="bg-[#f3f4f5] p-6 rounded-2xl flex items-start gap-4 border border-zinc-200">
            <span className="material-symbols-outlined text-[28px] text-[#a63500] flex-shrink-0">
              local_shipping
            </span>
            <div>
              <h4 className="font-black text-sm text-black uppercase">Priority Dispatch</h4>
              <p className="text-xs text-[#444748] mt-1">
                Orders finalized before 15:00 UTC depart from our central distribution point on the same business day.
              </p>
            </div>
          </div>

          <div className="bg-[#f3f4f5] p-6 rounded-2xl flex items-start gap-4 border border-zinc-200">
            <span className="material-symbols-outlined text-[28px] text-[#a63500] flex-shrink-0">
              published_with_changes
            </span>
            <div>
              <h4 className="font-black text-sm text-black uppercase">Archive Exchange Window</h4>
              <p className="text-xs text-[#444748] mt-1">
                Enjoy a friction-free 30-day sizing exchange warranty even on discounted inventory units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Access Pass Banner */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 pb-16">
        <div className="relative bg-[#e1e3e4] rounded-3xl p-8 sm:p-12 overflow-hidden shadow-sm border border-zinc-300">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#a63500]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1 rounded-full mb-3">
              <span className="material-symbols-outlined text-[14px]">stars</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                PRIVATE INVENTORY ACCESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black uppercase tracking-tight">
              MAKLO VIP PASS • NEVER MISS A DROP
            </h2>
            <p className="text-sm sm:text-base text-[#444748] mt-2 max-w-2xl">
              Unlock 60-minute early access to future archival warehouse drops, free express shipping worldwide, and
              invite-only sample sales directly through your mobile wallet.
            </p>

            <form
              onSubmit={handleVipSubmit}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-xl"
            >
              <input
                value={vipEmail}
                onChange={(e) => setVipEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                type="email"
                className="flex-1 bg-white border-2 border-black text-black placeholder:text-[#747878] text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#a63500] transition-all"
              />
              <button
                type="submit"
                className="bg-black hover:bg-zinc-800 text-white font-extrabold text-xs px-8 py-3.5 rounded-full uppercase tracking-wider transition-transform active:scale-95 shadow-sm whitespace-nowrap cursor-pointer"
              >
                UNLOCK PERKS
              </button>
            </form>

            {vipSuccess && (
              <div className="mt-3 text-xs font-bold text-[#a63500] uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Access Granted. Check your inbox for invitation tokens.</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
