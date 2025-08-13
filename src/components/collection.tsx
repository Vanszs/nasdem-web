import Image from "next/image";

const items = [
  { title: "Mondrian", src: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1", size: "large" },
  { title: "Nirnia", src: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1", size: "tall" },
  { title: "Artex", src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1", size: "regular" },
  { title: "Brera", src: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1", size: "regular" },
  { title: "Alea Pro", src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1", size: "wide" },
  { title: "Nirinia", src: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1", size: "regular" },
];

export default function Collection() {
  return (
    <section id="collection" className="bg-[var(--light-bg)] py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--primary)] leading-tight">
              Explore Our Proudly <span className="text-[var(--accent)]">Collection</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <p className="text-[var(--muted)] text-sm mb-4 max-w-sm">
              Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living at Salone del Mobile Milano 2024.
            </p>
            <button className="btn-danger">View More →</button>
          </div>
        </div>

        {/* Grid Layout - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Mondrian - Large */}
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

          {/* Artex - Regular top right */}
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

          {/* Nirinia - Regular bottom right */}
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

          {/* Nirnia - Tall center */}
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

          {/* Alea Pro - Wide */}
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

          {/* Brera - Regular */}
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
