import React, { useState } from 'react';
import { COLLECTION_PRODUCTS, DISCOUNT_PRODUCTS, Product } from '../../data/products';
import type { CartItem } from '../../utils/cartStore';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onAddToCart,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const allProducts = [...COLLECTION_PRODUCTS, ...DISCOUNT_PRODUCTS];
  const results = query.trim()
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.color.toLowerCase().includes(query.toLowerCase()) ||
          p.sku.toLowerCase().includes(query.toLowerCase()) ||
          p.category.some((c) => c.toLowerCase().includes(query.toLowerCase()))
      )
    : allProducts.slice(0, 4);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 z-10 flex flex-col gap-4 max-h-[80vh] overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-3">
          <span className="material-symbols-outlined text-[24px] text-zinc-500">search</span>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by shoe model, category (Air Max, Zoom), or colorway..."
            className="flex-1 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-bold text-zinc-400 hover:text-black cursor-pointer"
            >
              CLEAR
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-black cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto space-y-3 no-scrollbar py-2">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
            {query.trim() ? `Search Results (${results.length})` : 'Popular Silhouettes'}
          </p>

          {results.length === 0 ? (
            <div className="py-12 text-center text-zinc-400">
              <span className="material-symbols-outlined text-[36px] mb-2">search_off</span>
              <p className="text-sm font-medium">No silhouettes matching "{query}"</p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={`${product.id}-${product.sku}`}
                className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors group cursor-pointer"
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1 border border-zinc-200 flex-shrink-0">
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-zinc-900">{product.title}</h4>
                    <p className="text-xs text-zinc-500">{product.color} • {product.sku}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-black text-sm text-zinc-900">${product.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart({
                        id: product.id,
                        name: product.title,
                        price: product.price,
                        size: product.defaultSize,
                        color: product.color,
                        sku: product.sku,
                        image: product.image,
                      });
                      onClose();
                    }}
                    className="bg-black hover:bg-zinc-800 text-white text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-full cursor-pointer"
                  >
                    + Bag
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
