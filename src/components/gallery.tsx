import Image from "next/image";

type Item = { title: string; src: string; size: "large"|"tall"|"regular"|"wide" };

const items: Item[] = [
  { title: "Apel Akbar", src: "https://images.pexels.com/photos/230875/pexels-photo-230875.jpeg?auto=compress&cs=tinysrgb&w=1400&dpr=1", size: "large" },
  { title: "Dialog Publik", src: "https://images.pexels.com/photos/230875/pexels-photo-230875.jpeg?auto=compress&cs=tinysrgb&w=1400&dpr=1", size: "tall" },
  { title: "Kunjungan Desa", src: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1400&dpr=1", size: "regular" },
  { title: "Pelatihan UMKM", src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400&dpr=1", size: "regular" },
  { title: "Kampanye Sehat", src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1400&dpr=1", size: "wide" },
  { title: "Bakti Sosial", src: "https://images.pexels.com/photos/8460096/pexels-photo-8460096.jpeg?auto=compress&cs=tinysrgb&w=1400&dpr=1", size: "regular" },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="bg-[var(--light-bg)] py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--primary)] leading-tight">
              Galeri <span className="text-[var(--accent)]">Multimedia</span>
            </h2>
            <p className="text-[var(--muted)] text-sm mt-3 max-w-xl">Foto & video kegiatan, kampanye, dan dokumentasi organisasi.</p>
          </div>
          <div />
        </div>

        {/* Grid Layout - Mirroring Collection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Large */}
          <div className="md:col-span-5 md:row-span-2 group relative overflow-hidden rounded-3xl border border-[var(--stroke)] bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Image 
              src={items[0].src} 
              alt={items[0].title} 
              width={900} 
              height={900} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(var(--primary-rgb),0.7), rgba(var(--primary-rgb),0.2), transparent)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="text-2xl font-bold text-white">{items[0].title}</div>
              <div className="h-10 w-10 rounded-full bg-[var(--accent)] text-white grid place-items-center hover:bg-[color:rgba(var(--accent-rgb),0.9)] transition-colors cursor-pointer">
                →
              </div>
            </div>
          </div>

          {/* Regular top right */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-[var(--stroke)] bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Image 
              src={items[2].src} 
              alt={items[2].title} 
              width={900} 
              height={900} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(var(--primary-rgb),0.7), rgba(var(--primary-rgb),0.2), transparent)",
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="text-lg font-semibold text-white">{items[2].title}</div>
              <div className="h-8 w-8 rounded-full bg-[var(--accent)] text-white grid place-items-center hover:bg-[color:rgba(var(--accent-rgb),0.9)] transition-colors cursor-pointer">
                →
              </div>
            </div>
          </div>

          {/* CTA card: Lihat semua galeri (fills top-right leftover space) */}
          <div className="md:col-span-3 card-surface p-6 flex items-center justify-center text-center">
            <a href="/galeri" className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold">
              Lihat Semua Galeri <span className="text-[var(--accent)]">→</span>
            </a>
          </div>

          {/* Regular bottom right */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-[var(--stroke)] bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Image 
              src={items[5].src} 
              alt={items[5].title} 
              width={900} 
              height={900} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(var(--primary-rgb),0.7), rgba(var(--primary-rgb),0.2), transparent)",
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="text-lg font-semibold text-white">{items[5].title}</div>
              <div className="h-8 w-8 rounded-full bg-[var(--accent)] text-white grid place-items-center hover:bg-[color:rgba(var(--accent-rgb),0.9)] transition-colors cursor-pointer">
                →
              </div>
            </div>
          </div>

          {/* Tall center (Dialog Publik) */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl border border-[var(--stroke)] bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Image 
              src={items[1].src} 
              alt={items[1].title} 
              width={900} 
              height={900} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(var(--primary-rgb),0.7), rgba(var(--primary-rgb),0.2), transparent)",
              }}
            />
            <div className="absolute bottom-6 left-4 right-4 flex items-center justify-between">
              <div className="text-xl font-bold text-white">{items[1].title}</div>
              <div className="h-9 w-9 rounded-full bg-[var(--accent)] text-white grid place-items-center hover:bg-[color:rgba(var(--accent-rgb),0.9)] transition-colors cursor-pointer">
                →
              </div>
            </div>
          </div>

          {/* Wide */}
          <div className="md:col-span-6 group relative overflow-hidden rounded-3xl border border-[var(--stroke)] bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Image 
              src={items[4].src} 
              alt={items[4].title} 
              width={900} 
              height={900} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(var(--primary-rgb),0.7), rgba(var(--primary-rgb),0.2), transparent)",
              }}
            />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <div className="text-xl font-bold text-white">{items[4].title}</div>
              <div className="h-9 w-9 rounded-full bg-[var(--accent)] text-white grid place-items-center hover:bg-[color:rgba(var(--accent-rgb),0.9)] transition-colors cursor-pointer">
                →
              </div>
            </div>
          </div>

          {/* Regular */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-[var(--stroke)] bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Image 
              src={items[3].src} 
              alt={items[3].title} 
              width={900} 
              height={900} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(var(--primary-rgb),0.7), rgba(var(--primary-rgb),0.2), transparent)",
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="text-lg font-semibold text-white">{items[3].title}</div>
              <div className="h-8 w-8 rounded-full bg-[var(--accent)] text-white grid place-items-center hover:bg-[color:rgba(var(--accent-rgb),0.9)] transition-colors cursor-pointer">
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
