import React from 'react';

const OfficialPartner = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="text-center relative z-10">
            <h2 className="text-2xl font-bold text-white mb-12 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
              Official <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">Partners</span>
            </h2>
            <div className="flex items-center justify-center">
              <img
                src="/src/assets/SL+Partner+Badge.png"
                alt="Smartlead Certified Partner Badge"
                className="h-36 md:h-40 select-none pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] animate-floatSoft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialPartner;