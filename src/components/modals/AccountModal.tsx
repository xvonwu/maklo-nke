import React from 'react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToBag: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onNavigateToBag,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-lg">
              ML
            </div>
            <div>
              <h3 className="font-black text-base text-black">MAKLO Lab Member</h3>
              <p className="text-xs text-zinc-500">Tier: VIP Archival Access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-black cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Member Digital Pass Card */}
        <div className="mt-5 p-5 bg-gradient-to-br from-zinc-900 to-black text-white rounded-2xl shadow-lg relative overflow-hidden border border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <span className="font-black tracking-tight text-lg">MAKLO × NIKE LAB</span>
            <span className="text-[10px] bg-[#a63500] text-white font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              PRIORITY #8921
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
              Pass Holder
            </span>
            <p className="font-extrabold text-sm tracking-wide">ALEXANDER CHEN</p>
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400">
            <span>DISPATCH: GLOBAL 48H</span>
            <span>RFID: VERIFIED 2025</span>
          </div>
        </div>

        {/* Quick Menu */}
        <div className="mt-6 space-y-2">
          <button
            onClick={() => {
              onClose();
              onNavigateToBag();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-xs font-bold text-zinc-900 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              <span>Active Orders &amp; Shopping Bag</span>
            </span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>

          <div className="p-3 rounded-xl bg-zinc-50 text-xs text-zinc-600 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">lock</span>
              <span>Cryptographic RFID Authentication</span>
            </span>
            <span className="text-emerald-600 font-extrabold text-[10px]">ACTIVE</span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-50 text-xs text-zinc-600 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              <span>Express Delivery Address</span>
            </span>
            <span className="text-zinc-500 font-medium truncate max-w-[150px]">Aoyama / Tokyo</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-full cursor-pointer transition-transform active:scale-95"
        >
          Close Member Hub
        </button>
      </div>
    </div>
  );
};
