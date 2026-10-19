import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [hub, setHub] = useState('tokyo');
  const [date, setDate] = useState('2026-10-25');
  const [time, setTime] = useState('14:00');
  const [service, setService] = useState('Biomechanics & Sizing Mapping');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`Appointment booked at ${hub.toUpperCase()} Lab for ${name}! Details sent to ${email}`);
      onClose();
      setSubmitted(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
            </div>
            <div>
              <h3 className="font-black text-lg text-black">Private Concierge Booking</h3>
              <p className="text-xs text-zinc-500">Bespoke fitting, laser scan &amp; archive vault access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-black cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
              Select Studio Hub
            </label>
            <select
              value={hub}
              onChange={(e) => setHub(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="tokyo">Tokyo Lab — Aoyama 5-Chome, Minato-ku (HQ Research)</option>
              <option value="milan">Milan Atelier — Via Tortona District (Design Studio)</option>
              <option value="jakarta">Jakarta Vault — Senopati Creative Compound (Retail Hub)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
              Consultation Focus
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="Biomechanics & Sizing Mapping">Biomechanical Foot Mapping &amp; 3D Scan</option>
              <option value="Deadstock Acquisition">Rare Archival Deadstock Curation</option>
              <option value="VIP Fitting">Private Collection VIP Fitting Session</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">Athlete Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Jordan Sterling"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">Contact Email</label>
            <input
              type="email"
              required
              placeholder="athlete@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full mt-2 bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-full transition-transform active:scale-95 cursor-pointer shadow-md"
          >
            {submitted ? 'Confirming Appointment...' : 'Confirm Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
};
