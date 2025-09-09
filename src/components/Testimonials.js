import React, { useEffect, useState } from 'react';

function Testimonials() {
  const items = [
    { name: 'Ayaan', rating: 5, text: 'Raadso ayaa iga caawisay inaan si dhakhso ah u helo guri kirro ah oo nadaafad iyo ammaan leh. Qorshayntii iyo la xiriiriddii milkiilaha waxay ahayd mid aad u sahlan.' },
    { name: 'Hassan', rating: 5, text: 'Waxaan ka qabsaday hotel ku yaalla Hargeysa adigoo adeegsanaya Raadso. Qiimaha wuu macquul ahaa, sawirrada iyo faahfaahinta goobtuna sax bay ahaayeen.' },
    { name: 'Leyla', rating: 5, text: 'Madal aad u fudud! Waxaan si dhaqso leh ugu kala shaandheeyay goob, qiime iyo adeegyo. Natiijooyinka ayaa igu habboonaa isla markiiba.' },
    { name: 'Mohamed', rating: 5, text: 'Aniga oo mulkiile ah, Raadso waxay si fiican u suuq-gelisay hantidayda, waxayna iga heshiiyeen kiraystayaal la hubiyay. Maamulka iyo taageeradu waa heer sare.' },
    { name: 'Zahra', rating: 5, text: 'Adeegga macaamiisha waa degdeg oo xirfad leh. Wixii iga baahnaa si dhaqso leh ayaa loo xalliyay, waana ku talinayaa Raadso.' },
    { name: 'Yuusuf', rating: 5, text: 'Habka ballansashadu waa cad yahay, lacag bixintuna waa ammaan. Waxaan si raaxo leh ugu degay hoy aan ka helay Burco.' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section className="relative py-16 bg-blue-50">
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary-600">Testimonials</h2>

        {/* 3-up rotating carousel */}
        <div className="mt-8">
          <div className="flex items-stretch gap-4 md:gap-6">
            {[index - 1, index, index + 1].map((i, pos) => {
              const safeIndex = (i + items.length) % items.length;
              const t = items[safeIndex];
              const isCenter = pos === 1;
              return (
                <div key={`${t.name}-${safeIndex}`} className={`flex-1 transition-all duration-500 ${isCenter ? 'opacity-100' : 'opacity-60'}`}>
                  <div className={`h-full bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 min-h-[300px] md:min-h-[360px] flex flex-col justify-between ${isCenter ? 'ring-1 ring-primary-200' : ''}`}>
                    <div>
                      <div className="flex items-center gap-1 text-primary-600">
                        {Array.from({ length: 5 }).map((_, star) => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5 ${star < (t.rating || 5) ? '' : 'text-gray-300'}`}>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 13.348a1 1 0 00-1.175 0l-2.884 2.125c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.806 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.243-3.293z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">“{t.text}”</p>
                    </div>
                    <div className="pt-5 text-sm md:text-base text-gray-500">— {t.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`${i === index ? 'w-3.5 bg-primary-600' : 'w-2.5 bg-gray-300'} h-2.5 rounded-full transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;


