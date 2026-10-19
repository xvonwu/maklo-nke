import React, { useState } from 'react';
import type { CartItem } from '../../utils/cartStore';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  total,
  onOrderComplete,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'card' | 'gpay'>('apple');
  const [processing, setProcessing] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setOrderDone(true);
      setTimeout(() => {
        onOrderComplete();
        onClose();
        setOrderDone(false);
      }, 1800);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10">
        {!orderDone ? (
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <div>
                  <h3 className="font-black text-lg text-black">256-Bit Encrypted Checkout</h3>
                  <p className="text-xs text-zinc-500">Nike Lab priority bonded dispatch</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Order Items Snapshot */}
            <div className="my-4 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 max-h-40 overflow-y-auto no-scrollbar space-y-2">
              {items.map((i) => (
                <div key={`${i.id}-${i.size}`} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <img src={i.image} alt={i.name} className="w-8 h-8 object-contain" />
                    <span className="font-bold text-zinc-900 truncate max-w-[200px]">
                      {i.name} (US {i.size}) × {i.quantity}
                    </span>
                  </div>
                  <span className="font-extrabold text-zinc-900">
                    ${(i.price * i.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-600 mb-1.5">
                  Express Shipping Address
                </label>
                <input
                  type="text"
                  required
                  defaultValue="Aoyama 5-Chome, Minato-ku, Tokyo, Japan"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-600 mb-2">
                  Select Payment Option
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'apple'
                        ? 'border-black bg-black text-white shadow-md'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100'
                    }`}
                  >
                    <i className="fa-brands fa-apple text-base"></i>
                    <span>Apple Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gpay')}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'gpay'
                        ? 'border-black bg-black text-white shadow-md'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100'
                    }`}
                  >
                    <i className="fa-brands fa-google text-base"></i>
                    <span>G Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-black bg-black text-white shadow-md'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">credit_card</span>
                    <span>Card</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-600">Total Authorized</span>
                <span className="text-2xl font-black text-black">${total.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-full transition-transform active:scale-95 cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                {processing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing with Bank...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Authorize &amp; Dispatch Order</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg mb-4 animate-bounce">
              <span className="material-symbols-outlined text-[36px]">check</span>
            </div>
            <h3 className="text-2xl font-black text-black mb-1">Order Confirmed!</h3>
            <p className="text-sm text-zinc-500 max-w-xs mb-4">
              Cryptographic tracking ID <strong className="text-black">#MK-90218</strong> has been
              issued. Your pairs are being climate-packaged for express dispatch.
            </p>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">
              24-Hour Expedited Delivery
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
