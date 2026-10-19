import React from 'react';
import type { CartItem } from '../utils/cartStore';

interface QuickCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string | number, size: string | number, delta: number) => void;
  onRemoveItem: (id: string | number, size: string | number) => void;
  onGoToBag: () => void;
  onCheckout: () => void;
}

export const QuickCartDrawer: React.FC<QuickCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onGoToBag,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end transition-opacity duration-300">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-in panel */}
      <div className="relative w-full max-w-md bg-white text-zinc-900 h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              <i className="fa-solid fa-bag-shopping text-sm"></i>
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-zinc-800">Keranjang Belanja</h3>
              <p className="text-xs text-zinc-500">{totalItems} produk terpilih</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup keranjang"
            className="w-8 h-8 rounded-full hover:bg-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-zinc-400 gap-3 text-center">
              <i className="fa-solid fa-basket-shopping text-5xl stroke-1 opacity-40"></i>
              <p className="text-sm font-medium">Keranjang belanja Anda masih kosong</p>
              <button
                onClick={onClose}
                className="text-xs font-bold text-orange-600 underline cursor-pointer mt-1"
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-center gap-4 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 transition-all hover:border-zinc-200"
              >
                <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center p-1.5 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    style={{ filter: item.filter || 'none' }}
                    className="w-full h-full object-contain -rotate-12 transition-transform duration-200 hover:scale-110"
                    alt={item.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-zinc-900 truncate">{item.name}</h4>
                  <p className="text-xs text-zinc-500">
                    {item.variantName || item.color || 'Standard'} • US {item.size}
                  </p>
                  <span className="text-sm font-extrabold text-orange-600 mt-1 block">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-zinc-200 px-1 py-0.5 shadow-sm">
                    <button
                      onClick={() => onUpdateQty(item.id, item.size, -1)}
                      aria-label="Kurangi kuantitas"
                      className="w-5 h-5 flex items-center justify-center text-xs font-bold text-zinc-600 hover:text-zinc-900 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-zinc-800 w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.size, 1)}
                      aria-label="Tambah kuantitas"
                      className="w-5 h-5 flex items-center justify-center text-xs font-bold text-zinc-600 hover:text-zinc-900 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id, item.size)}
                    className="text-[11px] text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                  >
                    <i className="fa-regular fa-trash-can"></i> Hapus
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-600">Total Pembayaran</span>
              <span className="text-2xl font-black text-zinc-900">${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold rounded-2xl shadow-lg hover:shadow-orange-500/25 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Checkout Sekarang</span>
              <i className="fa-solid fa-credit-card text-xs"></i>
            </button>
            <button
              onClick={() => {
                onClose();
                onGoToBag();
              }}
              className="w-full py-2.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-bold rounded-2xl transition-all text-xs uppercase tracking-wider cursor-pointer"
            >
              Buka Tas Belanja Lengkap (Cart Page)
            </button>
            <p className="text-[11px] text-zinc-400 text-center">
              Gratis pengiriman ke seluruh Indonesia &amp; garansi 100% original.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
