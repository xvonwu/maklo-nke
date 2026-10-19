import React, { useState, useMemo } from 'react';
import { COLLECTION_PRODUCTS, Product } from '../../data/products';
import type { CartItem } from '../../utils/cartStore';

interface CollectionsScreenProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onBuyNow: (item: Omit<CartItem, 'quantity'>) => void;
  searchQuery?: string;
  onClearSearch?: () => void;
}

export const CollectionsScreen: React.FC<CollectionsScreenProps> = ({
  onAddToCart,
  onBuyNow,
  searchQuery = '',
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [localSearch, setLocalSearch] = useState<string>(searchQuery);
  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low'>('featured');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number | string>>({});

  const filterCategories = [
    { id: 'all', label: 'All Collections' },
    { id: 'running', label: 'Running' },
    { id: 'basketball', label: 'Basketball' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'air-max', label: 'Air Max' },
    { id: 'zoom', label: 'Zoom' },
  ];

  const handleSelectSize = (productId: string, size: number | string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const filteredProducts = useMemo(() => {
    let list = [...COLLECTION_PRODUCTS];

    // Filter by category
    if (selectedFilter !== 'all') {
      list = list.filter((p) => p.category.includes(selectedFilter));
    }

    // Filter by search
    const query = localSearch.toLowerCase().trim();
    if (query) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.color.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === 'low-high') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedFilter, localSearch, sortBy]);

  const handleAdd = (product: Product) => {
    const size = selectedSizes[product.id] || product.defaultSize;
    onAddToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      size,
      color: product.color,
      sku: product.sku,
      badge: product.subBadge,
      image: product.image,
    });
  };

  const handleBuy = (product: Product) => {
    const size = selectedSizes[product.id] || product.defaultSize;
    onBuyNow({
      id: product.id,
      name: product.title,
      price: product.price,
      size,
      color: product.color,
      sku: product.sku,
      badge: product.subBadge,
      image: product.image,
    });
  };

  return (
    <div className="w-full flex flex-col bg-[#f8f9fa] text-[#191c1d]">
      {/* Hero Header & Filter Bar Section */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e1e3e4] pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7e8e9] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#a63500] animate-pulse" />
              <span className="text-[11px] font-bold text-[#444748] tracking-wider uppercase">
                SPRING / SUMMER '25
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase">
              Sneaker Collections
            </h1>
            <p className="text-sm sm:text-base text-[#444748] mt-2">
              Discover performance footwear engineered for elite athletes and progressive street culture.
            </p>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-[#747878] text-[18px]">
                search
              </span>
              <input
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search shoes..."
                type="text"
                className="bg-[#f3f4f5] border-0 text-[#191c1d] text-sm rounded-full pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-black focus:bg-white transition-all w-48 sm:w-60 placeholder:text-[#747878] outline-none"
              />
              {localSearch && (
                <button
                  onClick={() => setLocalSearch('')}
                  aria-label="Hapus pencarian"
                  className="absolute right-3 text-xs text-[#747878] hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Urutkan sepatu"
                className="appearance-none bg-[#f3f4f5] border-0 text-[#191c1d] font-bold text-xs rounded-full pl-4 pr-9 py-2.5 cursor-pointer focus:ring-2 focus:ring-black transition-all outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#747878] pointer-events-none text-[18px]">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto py-5 no-scrollbar">
          {filterCategories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-black text-white shadow-sm scale-105'
                    : 'bg-[#f3f4f5] text-[#191c1d] hover:bg-[#e7e8e9] hover:scale-105'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Product Grid: 4-Column Layout exactly matching inspiration image */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 pb-24">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-[#edeeef] flex items-center justify-center text-[#747878] mb-4">
              <span className="material-symbols-outlined text-[32px]">search_off</span>
            </div>
            <h3 className="text-xl font-black text-black mb-1">No Footwear Found</h3>
            <p className="text-sm text-[#444748] max-w-sm mb-6">
              We couldn't find matching models in our collaborative vault. Try adjusting your search query or filters.
            </p>
            <button
              onClick={() => {
                setSelectedFilter('all');
                setLocalSearch('');
              }}
              className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase hover:bg-zinc-800 transition-transform cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => {
              const currentSize = selectedSizes[product.id] || product.defaultSize;
              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Card Container */}
                    <div className="relative w-full aspect-square bg-[#eceff1] rounded-2xl flex items-center justify-center p-6 overflow-hidden cursor-pointer transition-transform duration-300 group-hover:shadow-lg">
                      {product.subBadge && (
                        <span
                          className={`absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur ${
                            product.subBadge === 'ICONIC DROP'
                              ? 'bg-black text-white'
                              : product.subBadge === 'DYNAMIC FIT'
                              ? 'bg-[#ffdbcf] text-[#390c00]'
                              : product.subBadge === 'FULL AIR'
                              ? 'bg-[#a63500] text-white'
                              : 'bg-white/90 text-black'
                          }`}
                        >
                          {product.subBadge}
                        </span>
                      )}

                      {/* Shoe Visual */}
                      <div className="w-full h-full flex items-center justify-center relative transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-w-[92%] max-h-[92%] object-contain drop-shadow-[0_18px_20px_rgba(0,0,0,0.18)]"
                        />
                      </div>

                      {/* Quick Size Floating Strip on Hover */}
                      <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-2 flex items-center justify-around opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-md">
                        <span className="text-[10px] text-[#444748] font-bold">US</span>
                        {product.availableSizes.map((s) => {
                          const isSelected = String(currentSize) === String(s);
                          return (
                            <button
                              key={s}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectSize(product.id, s);
                              }}
                              className={`text-[11px] font-bold w-6 h-6 rounded transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-black text-white'
                                  : 'text-black hover:bg-black hover:text-white'
                              }`}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Shoe Title & Price */}
                    <div className="mt-4 flex flex-col">
                      <h3 className="font-extrabold text-base text-black tracking-tight truncate">
                        {product.title}
                      </h3>
                      <div className="flex items-baseline justify-end mt-1">
                        <span className="text-2xl font-black text-black">${product.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Twin Pill Buttons */}
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => handleAdd(product)}
                      className="flex-1 py-2.5 px-3 rounded-full bg-white text-black font-extrabold text-[12px] tracking-tight uppercase border-[1.5px] border-black hover:bg-black hover:text-white active:scale-95 transition-all duration-150 text-center cursor-pointer"
                    >
                      ADD CART
                    </button>
                    <button
                      onClick={() => handleBuy(product)}
                      className="flex-1 py-2.5 px-3 rounded-full bg-black text-white font-extrabold text-[12px] tracking-tight uppercase hover:bg-zinc-800 hover:scale-[1.02] active:scale-95 transition-all duration-150 text-center cursor-pointer shadow-sm"
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* MAKLO Innovation Tech Banner */}
      <section className="w-full bg-black text-white px-6 sm:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#ffdbcf]">
              <span className="material-symbols-outlined text-[24px]">air</span>
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-white mb-1">Full-Length Air Sole</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Pressurized air units absorb impact instantly, propelling maximum energy returns per stride.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#ffdbcf]">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-white mb-1">Guaranteed Authentic</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Every silhouette carries MAKLO x Nike encrypted authenticity tagging for collector security.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#ffdbcf]">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-white mb-1">Express Dispatch</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Same-day prioritization with climate-controlled, protective double-boxed delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
