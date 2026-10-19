import React, { useState } from 'react';
import type { CartItem } from '../../utils/cartStore';
import { calculateOrderSummary, validatePromoCode } from '../../utils/cartStore';
import { CURATED_PAIRINGS } from '../../data/products';

interface ShoppingBagScreenProps {
  items: CartItem[];
  onUpdateQty: (id: string | number, size: string | number, delta: number) => void;
  onRemoveItem: (id: string | number, size: string | number) => void;
  onClearCart: () => void;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onNavigate: (screen: 'lebron' | 'collections' | 'discount' | 'about' | 'bag') => void;
  onCheckout: () => void;
  onShowToast: (title: string, sub: string) => void;
}

export const ShoppingBagScreen: React.FC<ShoppingBagScreenProps> = ({
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onAddToCart,
  onNavigate,
  onCheckout,
  onShowToast,
}) => {
  const [promoCodeInput, setPromoCodeInput] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>('MAKLO10');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>({
    text: 'Coupon MAKLO10 applied: 10% discount subtracted.',
    isError: false,
  });

  const summary = calculateOrderSummary(items, appliedPromo);

  const handleApplyPromo = () => {
    const res = validatePromoCode(promoCodeInput);
    if (res.valid) {
      setAppliedPromo(promoCodeInput.trim().toUpperCase());
      setPromoMessage({ text: res.message, isError: false });
      onShowToast('VIP Voucher Applied', res.message);
    } else {
      setPromoMessage({ text: res.message, isError: true });
    }
  };

  const handleAddCurated = (product: (typeof CURATED_PAIRINGS)[0]) => {
    onAddToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      size: product.defaultSize,
      color: product.color,
      sku: product.sku,
      badge: 'CURATED',
      image: product.image,
    });
    onShowToast('Added Pair', `${product.title} added to your bag.`);
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-[#191c1d] min-h-screen py-8">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#444748] mb-4">
          <button
            onClick={() => onNavigate('lebron')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate('collections')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Collections
          </button>
          <span>/</span>
          <span className="text-black font-bold">Shopping Bag</span>
        </div>

        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-block text-[11px] font-bold text-[#a63500] uppercase tracking-widest bg-[#ffdbcf]/60 px-3 py-0.5 rounded-full mb-1">
              Authentic Lab Release
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              YOUR SHOPPING BAG{' '}
              <span className="text-[#444748] font-normal text-2xl sm:text-3xl">
                ({summary.totalItems} {summary.totalItems === 1 ? 'Item' : 'Items'})
              </span>
            </h1>
          </div>
          <p className="text-sm text-[#444748] max-w-sm">
            Review selected silhouettes, adjust sizing, and proceed to priority dispatch.
          </p>
        </div>

        {/* Main Grid: 8 Cols Items List, 4 Cols Order Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of items */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Free Shipping Alert Banner */}
            <div className="bg-[#f3f4f5] rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#a63500] shadow-sm flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </span>
                <div>
                  <p className="font-bold text-base text-black">Free Priority Express Unlocked</p>
                  <p className="text-xs text-[#444748]">Your order qualifies for complimentary insured delivery.</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[11px] font-extrabold bg-black text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  EST. 2-3 DAYS
                </span>
              </div>
            </div>

            {/* Cart Items List */}
            {items.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#f3f4f5] mx-auto flex items-center justify-center text-[#444748] mb-4">
                  <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
                </div>
                <h3 className="text-xl font-black text-black mb-2">Your Bag is Empty</h3>
                <p className="text-sm text-[#444748] max-w-sm mx-auto mb-6">
                  Discover lightweight silhouettes, carbon plate race shoes, and classic street sneakers.
                </p>
                <button
                  onClick={() => onNavigate('collections')}
                  className="inline-block bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-full transition-all cursor-pointer"
                >
                  EXPLORE COLLECTIONS
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-zinc-100 transition-all hover:border-zinc-200"
                  >
                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                      {/* Image Box */}
                      <div className="w-full sm:w-40 h-36 bg-[#eceff1] rounded-xl flex items-center justify-center p-3 relative overflow-hidden group flex-shrink-0">
                        <img
                          src={item.image}
                          style={{ filter: item.filter || 'none' }}
                          alt={item.name}
                          className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.badge && (
                          <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-black text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Info & Quantity */}
                      <div className="flex-1 w-full flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h2 className="font-extrabold text-base text-black">{item.name}</h2>
                            <p className="text-xs text-[#444748]">
                              Color: {item.variantName || item.color || 'Standard'} • SKU: {item.sku || 'MK-001'}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-black text-black">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <p className="text-xs text-[#444748]">(${item.price}/pair)</p>
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-[#444748] uppercase mr-1">Size:</span>
                            <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-[#f3f4f5] text-black">
                              {String(item.size).startsWith('US') ? item.size : `US ${item.size}`}
                            </span>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center bg-[#f3f4f5] rounded-full p-1 border border-zinc-200">
                              <button
                                aria-label={`Kurangi kuantitas ${item.name}`}
                                onClick={() => onUpdateQty(item.id, item.size, -1)}
                                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors cursor-pointer"
                              >
                                <span className="material-symbols-outlined text-[16px]">remove</span>
                              </button>
                              <span className="w-8 text-center font-bold text-sm text-black">
                                {item.quantity}
                              </span>
                              <button
                                aria-label={`Tambah kuantitas ${item.name}`}
                                onClick={() => onUpdateQty(item.id, item.size, 1)}
                                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors cursor-pointer"
                              >
                                <span className="material-symbols-outlined text-[16px]">add</span>
                              </button>
                            </div>

                            <button
                              aria-label={`Hapus ${item.name}`}
                              onClick={() => onRemoveItem(item.id, item.size)}
                              className="w-8 h-8 rounded-full text-[#747878] hover:text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                onClick={() => onNavigate('collections')}
                className="inline-flex items-center gap-2 font-bold text-sm text-black hover:text-[#a63500] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">west</span>
                <span>Continue Shopping</span>
              </button>

              {items.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs font-bold text-[#747878] hover:text-red-600 transition-colors uppercase flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">remove_shopping_cart</span>
                  <span>Clear Shopping Bag</span>
                </button>
              )}
            </div>

            {/* Curated Pairings: "YOU MIGHT ALSO LIKE" */}
            <div className="mt-8 pt-8 border-t border-zinc-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[11px] font-bold text-[#a63500] uppercase tracking-wider">
                    Curated Pairings
                  </span>
                  <h2 className="text-xl font-black text-black">YOU MIGHT ALSO LIKE</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CURATED_PAIRINGS.map((pairing) => (
                  <div
                    key={pairing.id}
                    className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-between group border border-zinc-100"
                  >
                    <div className="w-full h-44 bg-[#eceff1] rounded-xl flex items-center justify-center p-4 relative overflow-hidden mb-3">
                      <img
                        src={pairing.image}
                        alt={pairing.title}
                        className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-extrabold text-sm text-black">{pairing.title}</h3>
                        <span className="font-black text-base text-black">${pairing.price}</span>
                      </div>
                      <p className="text-xs text-[#444748] mb-4">{pairing.description}</p>
                      <button
                        onClick={() => handleAddCurated(pairing)}
                        className="w-full border-2 border-black text-black font-extrabold text-xs py-2.5 rounded-full hover:bg-black hover:text-white transition-colors text-center uppercase cursor-pointer"
                      >
                        + Add to Bag
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: ORDER SUMMARY */}
          <div className="lg:col-span-4 sticky top-28 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-200">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <h2 className="text-xl font-black text-black tracking-tight">ORDER SUMMARY</h2>
                <span className="text-xs font-bold bg-[#f3f4f5] text-[#444748] px-2.5 py-1 rounded-full">
                  USD
                </span>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="my-4 p-3 bg-[#f3f4f5] rounded-xl">
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-black flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#a63500]">
                      local_shipping
                    </span>
                    Free Shipping Progress
                  </span>
                  <span className="text-[#a63500]">100%</span>
                </div>
                <div className="w-full bg-[#e1e3e4] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#a63500] h-full rounded-full transition-all duration-500 w-full" />
                </div>
                <p className="text-[11px] text-[#444748] mt-1.5">
                  Unlocked! Priority packaging &amp; courier tracking included.
                </p>
              </div>

              {/* Line items summary */}
              <div className="space-y-2.5 py-3 text-sm text-[#444748] border-b border-zinc-100">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-extrabold text-black">${summary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated Shipping</span>
                  <span className="text-xs font-extrabold text-[#a63500]">FREE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-extrabold text-black">${summary.tax.toFixed(2)}</span>
                </div>
                {summary.discount > 0 && (
                  <div className="flex items-center justify-between text-[#a63500]">
                    <span className="flex items-center gap-1 font-bold">
                      <span className="material-symbols-outlined text-[16px]">sell</span>
                      Promo ({appliedPromo} -10%)
                    </span>
                    <span className="font-extrabold">-${summary.discount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              {/* Voucher / Promo code */}
              <div className="py-4">
                <label className="block text-xs font-bold text-[#444748] uppercase mb-2">
                  Voucher or Promo Code
                </label>
                <div className="flex items-center gap-2">
                  <input
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                    placeholder="Try 'MAKLO10'"
                    type="text"
                    className="flex-1 bg-[#f3f4f5] border border-zinc-300 rounded-full px-4 py-2 text-xs font-bold text-black uppercase placeholder:normal-case focus:outline-none focus:border-black transition-colors"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="bg-[#e7e8e9] hover:bg-black hover:text-white text-black font-extrabold text-xs px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    APPLY
                  </button>
                </div>
                {promoMessage && (
                  <p
                    className={`text-xs mt-1.5 ${
                      promoMessage.isError ? 'text-red-600' : 'text-[#a63500] font-bold'
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Total Price */}
              <div className="flex items-baseline justify-between pt-2 pb-4 border-t border-zinc-100">
                <div>
                  <span className="block text-xl font-black text-black">TOTAL</span>
                  <span className="text-[11px] text-[#444748]">Includes all taxes and duties</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-black">${summary.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Proceed to checkout button */}
              <button
                onClick={onCheckout}
                className="w-full bg-black hover:bg-zinc-800 text-white font-extrabold text-xs tracking-wider uppercase py-4 rounded-full flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 mb-4 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">lock</span>
                <span>PROCEED TO CHECKOUT</span>
              </button>

              {/* Guaranteed Encrypted Payments */}
              <div className="space-y-2 text-center border-t border-zinc-100 pt-4">
                <p className="text-[11px] font-bold text-[#444748] uppercase tracking-wider">
                  Guaranteed Encrypted Payments
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 text-[#444748]">
                  <span className="px-2 py-0.5 bg-[#f3f4f5] rounded font-extrabold text-[10px]">
                    APPLE PAY
                  </span>
                  <span className="px-2 py-0.5 bg-[#f3f4f5] rounded font-extrabold text-[10px]">
                    G PAY
                  </span>
                  <span className="px-2 py-0.5 bg-[#f3f4f5] rounded font-extrabold text-[10px]">
                    VISA
                  </span>
                  <span className="px-2 py-0.5 bg-[#f3f4f5] rounded font-extrabold text-[10px]">
                    MASTERCARD
                  </span>
                  <span className="px-2 py-0.5 bg-[#f3f4f5] rounded font-extrabold text-[10px]">
                    PAYPAL
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-[#f3f4f5] p-4 rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-black">verified</span>
                <div>
                  <p className="font-bold text-xs text-black">100% Authentic Guaranteed</p>
                  <p className="text-[11px] text-[#444748]">
                    Verified directly by Nike Lab athletic warehouse.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-black">cached</span>
                <div>
                  <p className="font-bold text-xs text-black">30-Day Free Return Window</p>
                  <p className="text-[11px] text-[#444748]">
                    Return unwashed and unworn with zero penalty fee.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-black">support_agent</span>
                <div>
                  <p className="font-bold text-xs text-black">24/7 Dedicated Concierge</p>
                  <p className="text-[11px] text-[#444748]">
                    Live sizing advice and courier drop rescheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
