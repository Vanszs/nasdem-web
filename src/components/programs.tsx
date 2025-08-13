import { GraduationCap, Heart, TrendingUp, Home } from "lucide-react";

export default function ProgramsSection() {
  const items = [
    { 
      title: "Pendidikan Unggul", 
      desc: "Beasiswa dan sekolah vokasi untuk generasi siap kerja.", 
      icon: GraduationCap 
    },
    { 
      title: "Kesehatan Merata", 
      desc: "Puskesmas 24 jam dan layanan ibu-anak terpadu.", 
      icon: Heart 
    },
    { 
      title: "Ekonomi Rakyat", 
      desc: "Pembiayaan UMKM, pasar digital, dan pendampingan ekspor.", 
      icon: TrendingUp 
    },
    { 
      title: "Desa Maju", 
      desc: "Infrastruktur dasar, internet desa, dan koperasi modern.", 
      icon: Home 
    },
  ];

  return (
    <section id="program" className="site-container py-14 md:py-20 scroll-mt-24 md:scroll-mt-28">
      <h2 className="section-title text-4xl md:text-5xl font-extrabold">Program & Komitmen</h2>
      <p className="mt-3 text-[var(--muted)] max-w-2xl">Program prioritas yang kami jalankan secara nyata di lapangan.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {items.map((it) => {
          const IconComponent = it.icon;
          return (
            <article key={it.title} className="card-surface p-6 hover:shadow-xl transition-shadow group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold text-[var(--primary)] mb-2">{it.title}</div>
                  <p className="text-sm text-[var(--muted)]">{it.desc}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

