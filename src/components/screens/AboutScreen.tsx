import React from 'react';

interface AboutScreenProps {
  onNavigate: (screen: 'lebron' | 'collections' | 'discount' | 'about' | 'bag') => void;
  onBookAppointment: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onBookAppointment }) => {
  return (
    <div className="w-full flex flex-col bg-[#f8f9fa] text-[#191c1d]">
      {/* Manifesto Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 md:py-16">
        <div className="flex flex-col items-start">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#edeeef] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#a63500] animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-[#191c1d] uppercase">
              OUR PHILOSOPHY &amp; HERITAGE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black max-w-5xl mb-6 leading-[1.05]">
            ENGINEERED PRECISION MEETS HIGH-STREET KINETICS.
          </h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-2">
            <p className="md:col-span-8 text-base sm:text-lg text-[#444748] max-w-3xl leading-relaxed">
              MAKLO was founded at the intersection of progressive athletic innovation and minimal streetwear
              culture. In direct partnership with Nike Lab, we curate, archive, and engineer access to premier
              performance footwear engineered for elite athletes and discerning sneaker connoisseurs globally.
            </p>
            <div className="md:col-span-4 flex md:justify-end items-center gap-3">
              <span className="text-xs font-bold text-[#747878] uppercase tracking-widest">EST. 2010</span>
              <span className="inline-block w-12 h-px bg-[#c4c7c7]" />
              <span className="text-xs font-bold text-black uppercase tracking-widest">
                TOKYO / OREGON / MILAN
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between border border-zinc-100">
            <span className="material-symbols-outlined text-[#a63500] text-[28px] mb-3">verified_user</span>
            <div>
              <div className="text-3xl font-black text-black tracking-tight">100%</div>
              <div className="font-bold text-sm text-[#191c1d] mb-1">Authentic Guarantee</div>
              <p className="text-xs text-[#444748]">Dual-point physical check &amp; cryptographic RFID tag verified.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between border border-zinc-100">
            <span className="material-symbols-outlined text-black text-[28px] mb-3">bolt</span>
            <div>
              <div className="text-3xl font-black text-black tracking-tight">48-HR</div>
              <div className="font-bold text-sm text-[#191c1d] mb-1">Express Dispatch</div>
              <p className="text-xs text-[#444748]">Global priority courier routed through localized bonded facilities.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between border border-zinc-100">
            <span className="material-symbols-outlined text-black text-[28px] mb-3">groups</span>
            <div>
              <div className="text-3xl font-black text-black tracking-tight">120K+</div>
              <div className="font-bold text-sm text-[#191c1d] mb-1">Community Members</div>
              <p className="text-xs text-[#444748]">Exclusive drop notifications and private collector vault access.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between border border-zinc-100">
            <span className="material-symbols-outlined text-black text-[28px] mb-3">history_edu</span>
            <div>
              <div className="text-3xl font-black text-black tracking-tight">15+ YRS</div>
              <div className="font-bold text-sm text-[#191c1d] mb-1">Footwear Curation</div>
              <p className="text-xs text-[#444748]">Archiving rare prototypes, player exclusives, and modern icons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story & Pillars */}
      <section className="w-full bg-[#f3f4f5] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#a63500] tracking-widest block mb-1">
                FOUNDATIONAL PILLARS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-black tracking-tight">
                THE SCIENCE OF SPORT &amp; STREET
              </h2>
            </div>
            <p className="text-sm text-[#444748] max-w-md">
              A relentless pursuit of technical balance. How we engineer the synthesis of competitive track mechanics
              with pure aesthetic minimalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Alliance */}
            <div className="flex flex-col justify-between bg-white rounded-2xl p-6 shadow-sm group hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-square bg-[#eceff1] rounded-xl mb-6 flex items-center justify-center p-6 relative overflow-hidden">
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-[#444748] tracking-widest">
                    MODULE 01
                  </span>
                  <img
                    alt="Nike Air Zoom Kinetic Architecture"
                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjW4Zi4D5WdDuSGpGShjiGT3AujFq9I5oIOZ2XlPVP9zKTkeD0nrZvAjvsbLsgZdgTZqPUHg_SR-iZ1sLV8b62rRy6pimvu75v1LEJsUtLsnvCpX7ATwskch3rKjH4gfqwKa2zvX6pa1ReqIEgZ83_u8Ay6u3Y066mj8alMowFuwHOTLoHjpOwPN3Ap29dPkz46dpyzr1pySG7e_UPk6L4TuZMXemphe_0Tvxo9Q-egaAkQ-enSxOdcAzhjCTryGCe5g"
                  />
                </div>
                <div className="text-[11px] font-bold text-[#a63500] uppercase mb-2">01 / ARCHITECTURE</div>
                <h3 className="text-xl font-black text-black uppercase mb-2">The Nike Lab Alliance</h3>
                <p className="text-sm text-[#444748] leading-relaxed">
                  Exploring next-generation cushioning architecture, from Air Max dual-pressure gas soles to
                  carbon-plated Zoom Air propulsion units calibrated for low-drag urban traversal.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-black">
                <span>LAB PROTOCOL 94.2</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </div>

            {/* Pillar 2: Authenticity */}
            <div className="flex flex-col justify-between bg-white rounded-2xl p-6 shadow-sm group hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-square bg-[#eceff1] rounded-xl mb-6 flex items-center justify-center p-6 relative overflow-hidden">
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-[#444748] tracking-widest">
                    MODULE 02
                  </span>
                  <img
                    alt="Nike Retro High Verification Unit"
                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZJOBRTrNHE-TWoqdatF5t-Nb6uj-c5_x1tAimRThD_M71bhcTg_pBarTOpGn5SGFyEvxKWkUD3oYv1wN0gktbQ-w88Op4x_0FNzhhtQVmJi36OtnyyvSuKW2BuN2kT96EQSCNwCv7wvS0h4t4dJnKts3OGOhz721_zYCRcf0sWulpkciGpQph64MfYj4K7HZOraDdO4uPBzuj_Ho7vbhsK_LFl4HCniKCNRGssuFpqlVZB3-qJa3mzIqgkl2wtn8Mbw"
                  />
                </div>
                <div className="text-[11px] font-bold text-[#a63500] uppercase mb-2">02 / INTEGRITY</div>
                <h3 className="text-xl font-black text-black uppercase mb-2">Uncompromising Authenticity</h3>
                <p className="text-sm text-[#444748] leading-relaxed">
                  Zero replica tolerance. Dual-point physical verification, original factory box serial matching,
                  UV-reactive adhesive validation, and cryptographic certificate of authenticity with every purchase.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-black">
                <span>ZERO TOLERANCE AUDIT</span>
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
            </div>

            {/* Pillar 3: Circularity */}
            <div className="flex flex-col justify-between bg-white rounded-2xl p-6 shadow-sm group hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-square bg-[#eceff1] rounded-xl mb-6 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-[#444748] tracking-widest">
                    MODULE 03
                  </span>
                  {/* Circular Materials Chart */}
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="text-zinc-200"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                      />
                      <circle
                        className="text-black"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        r="40"
                        stroke="currentColor"
                        strokeDasharray="251.2"
                        strokeDashoffset="45"
                        strokeLinecap="round"
                        strokeWidth="8"
                      />
                      <circle
                        className="text-[#a63500]"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        r="40"
                        stroke="currentColor"
                        strokeDasharray="251.2"
                        strokeDashoffset="190"
                        strokeLinecap="round"
                        strokeWidth="8"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-black text-black">82%</span>
                      <span className="text-[10px] font-bold uppercase text-[#444748]">CIRCULAR</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-black" />
                      <span className="text-[10px] font-bold text-[#444748]">Post-Consumer</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#a63500]" />
                      <span className="text-[10px] font-bold text-[#444748]">Bio-Foam</span>
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-[#a63500] uppercase mb-2">03 / RESPONSIBILITY</div>
                <h3 className="text-xl font-black text-black uppercase mb-2">Sustainable Circularity</h3>
                <p className="text-sm text-[#444748] leading-relaxed">
                  Eco-conscious molded pulp packaging, recyclable modular storage cases, and deadstock preservation
                  initiatives aimed at extending the physical life cycle of every silhouette.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-black">
                <span>CLOSED-LOOP VAULT</span>
                <span className="material-symbols-outlined text-[18px]">eco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Spotlight: Lab Innovation Feature */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="bg-black text-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Blueprint Column */}
          <div className="lg:col-span-7 relative bg-zinc-900 flex items-center justify-center p-6 sm:p-10 min-h-[420px]">
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-black text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                INNOVATION BREAKDOWN
              </span>
            </div>
            <img
              alt="Technical Footwear Engineering Blueprint"
              className="w-full h-full object-cover max-h-[500px] rounded-2xl shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxQRpKKoLugWwWUQKovnyJABOY_Tngc57E3fVShlZ9_-NTtGsM53czZWAeFIgBYOQmFrTFqtlxZlk4o9i-TmoRB3ZoXIjt5aBs1YZd3LshBxCqLYJj7wBJs98D0UiomBjlAGnrz7Lddd7wP1dgjFtGRVqF--ccyTskw765XtM9SQQ59S_zzhniyTlCh1VYiKVErfKcJcQz1U7h4eFLD8jCvLGTGVo376YKno90Um7qey4jIVGFCHoRnZ9Ht3WGboDSOA"
            />
          </div>

          {/* Content Specs Column */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#a63500] text-xs font-extrabold tracking-widest uppercase">
                  LAB DISPATCH // 04
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                BATTLEKNIT 2.0 &amp; MAX AIR DYNAMICS
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Engineered specifically for extreme torsional stability without excess structural mass. Tested in
                Tokyo athletic labs under dynamic multidirectional load scenarios.
              </p>

              {/* Specs Breakdown */}
              <div className="space-y-4 border-t border-zinc-800 pt-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdbcf] text-[22px] mt-0.5">straighten</span>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Battleknit 2.0 Tensile Strength</h4>
                    <p className="text-xs text-zinc-400">
                      Woven with high-modulus fibers delivering 40% higher tensile rigidity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdbcf] text-[22px] mt-0.5">compress</span>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Max Air + Zoom Propulsion</h4>
                    <p className="text-xs text-zinc-400">
                      Combined nitrogen-pressurized pods for 88% kinetic energy return.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdbcf] text-[22px] mt-0.5">lock_clock</span>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Anatomical Lockdown Grid</h4>
                    <p className="text-xs text-zinc-400">
                      Integrated ribbing system distributing pressure uniformly across the instep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('lebron')}
                className="bg-white text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-zinc-200 transition-transform active:scale-95 cursor-pointer"
              >
                EXPLORE AIR LAB MODELS
              </button>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                PATENT PENDING
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Studio & Testing Hubs */}
      <section className="w-full bg-[#f3f4f5] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#a63500] tracking-widest block mb-1">
                GLOBAL PRESENCE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-black tracking-tight">
                STUDIO &amp; TESTING HUBS
              </h2>
            </div>
            <p className="text-sm text-[#444748] max-w-sm">
              Physical ateliers dedicated to private fitting sessions, biomechanical foot mapping, and exhibition
              archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Location 1: Tokyo */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-zinc-100">
              <div>
                <div
                  className="w-full h-44 bg-zinc-200 rounded-xl mb-4 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0AMr5ASHg3rvYFrfQf5StrDfFTiv7qgfj4qTbJg0uDyvGzPkbQ6akJykJYizn1QzqxS66wyHoZzp0IpuFlGeNgoRlvdlziY8rJyUZZTiR0V1h2Z3mt9toLg4_mElaTRrymTghmKeGqMkbRO-nIOSNeuIi6vs0D_sUrHgQz658bPf5WsSDn0EfdsCVtVh9JznXsaI5LugRKNI0V1dEXrx_QzQhmW0RhThsHLtIt7apKtBeHGlRYB5I')",
                  }}
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-extrabold text-lg text-black uppercase">Tokyo Lab</h3>
                  <span className="text-[10px] font-bold text-[#390c00] bg-[#ffdbcf] px-2 py-0.5 rounded-full">
                    HQ RESEARCH
                  </span>
                </div>
                <p className="text-xs text-[#444748] mb-4">
                  Aoyama 5-Chome, Minato-ku. Biomechanical motion capture, laser scanning archive, and experimental
                  material prototyping.
                </p>
              </div>
              <div className="border-t border-zinc-100 pt-3 flex items-center justify-between text-xs font-bold text-black">
                <span>TUE – SUN // 11:00 – 20:00</span>
                <span className="text-[#a63500]">MAP ↗</span>
              </div>
            </div>

            {/* Location 2: Milan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-zinc-100">
              <div>
                <div
                  className="w-full h-44 bg-zinc-200 rounded-xl mb-4 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfA3rfWvYh0cNxrUYe4WK70uHo7dIQ4SYeoHGaNXhaYrO_IlzZ-gyv45UNma4NxXKPVngKpSnIBri6gfkyROGNu7zPihXu6SDK9HFtNzmK1Bvx6qGZxDyr3vcqvZVe_q5wbr2-akrMXrp471iLRiuDROh-J5-sNnGhpjXgDUeJ5qSIaqrs-BYSgDPQDCbtzDFPgMpb5x618a1T6WvBAoSTlttGtfc6VBUeBLa7IXP6H-AwMGQ1vFgS')",
                  }}
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-extrabold text-lg text-black uppercase">Milan Atelier</h3>
                  <span className="text-[10px] font-bold text-[#444748] bg-[#e7e8e9] px-2 py-0.5 rounded-full">
                    DESIGN STUDIO
                  </span>
                </div>
                <p className="text-xs text-[#444748] mb-4">
                  Via Tortona District. High-street silhouette development, luxury finish sampling, and European
                  archival showroom.
                </p>
              </div>
              <div className="border-t border-zinc-100 pt-3 flex items-center justify-between text-xs font-bold text-black">
                <span>MON – SAT // 10:00 – 19:00</span>
                <span className="text-[#a63500]">MAP ↗</span>
              </div>
            </div>

            {/* Location 3: Jakarta */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-zinc-100">
              <div>
                <div
                  className="w-full h-44 bg-zinc-200 rounded-xl mb-4 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCH0yTZNZGtZH_ZmImUK1K0aYwFDuMzLfsQNuuaJKeloTqC7Yf9HHr-NOy6StO7LY1d11ZgntDZsBMB0N0ydsVOcTJuOS-iy6TWBYosNnUw9jtMK9sBY9JMvX9mAV99cxpNyUL2lfJqtau68VS72fwWtLIVR_e5y50Luze_u52kTueKxeVtTzhdwbSAPv49c44GgKRHWIBlALfrl2vhpUWrerd-t4NegoCjxxvnxt2JnceJoq3oJ0S8')",
                  }}
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-extrabold text-lg text-black uppercase">Jakarta Vault</h3>
                  <span className="text-[10px] font-bold text-[#444748] bg-[#e7e8e9] px-2 py-0.5 rounded-full">
                    RETAIL HUB
                  </span>
                </div>
                <p className="text-xs text-[#444748] mb-4">
                  Senopati Creative Compound. Southeast Asia logistics node, collector meetup lounge, and express
                  fulfillment depot.
                </p>
              </div>
              <div className="border-t border-zinc-100 pt-3 flex items-center justify-between text-xs font-bold text-black">
                <span>DAILY // 10:00 – 21:00</span>
                <span className="text-[#a63500]">MAP ↗</span>
              </div>
            </div>
          </div>

          {/* Concierge Consultation Bar */}
          <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <div>
                <h4 className="font-black text-base text-black">Private Concierge Consultation</h4>
                <p className="text-xs text-[#444748]">
                  Sizing advice, custom deadstock acquisition, and bespoke private appointments.
                </p>
              </div>
            </div>
            <button
              onClick={onBookAppointment}
              className="w-full md:w-auto bg-black text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-zinc-800 transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="rounded-3xl bg-white p-8 sm:p-12 text-center flex flex-col items-center shadow-sm border border-zinc-200">
          <span className="text-xs font-bold text-[#a63500] uppercase tracking-widest mb-2">
            MAKLO × NIKE LAB PLATFORM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight max-w-3xl mb-4">
            EXPERIENCE THE FUTURE OF FOOTWEAR
          </h2>
          <p className="text-base text-[#444748] max-w-xl mx-auto mb-8">
            Every silhouette is thoroughly verified, preserved in climate-controlled lockers, and ready for immediate
            priority dispatch worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <button
              onClick={() => onNavigate('collections')}
              className="w-full sm:w-auto bg-black text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-sm cursor-pointer"
            >
              EXPLORE COLLECTIONS
            </button>
            <button
              onClick={() => onNavigate('discount')}
              className="w-full sm:w-auto bg-white text-black border-2 border-black text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
            >
              VIEW ARCHIVE DEALS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
