export default function ProgramsSection() {
  const items = [
    { title: "Pendidikan Unggul", desc: "Beasiswa dan sekolah vokasi untuk generasi siap kerja." },
    { title: "Kesehatan Merata", desc: "Puskesmas 24 jam dan layanan ibu-anak terpadu." },
    { title: "Ekonomi Rakyat", desc: "Pembiayaan UMKM, pasar digital, dan pendampingan ekspor." },
    { title: "Desa Maju", desc: "Infrastruktur dasar, internet desa, dan koperasi modern." },
  ];

  return (
    <section id="program" className="site-container py-14 md:py-20 scroll-mt-24 md:scroll-mt-28">
      <h2 className="section-title text-4xl md:text-5xl font-extrabold">Program & Kegiatan</h2>
      <p className="mt-3 text-[var(--muted)] max-w-2xl">Program prioritas yang kami jalankan secara nyata di lapangan.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <article key={it.title} className="card-surface p-6 hover:shadow-xl transition-shadow">
            <div className="text-lg font-semibold text-[var(--primary)]">{it.title}</div>
            <p className="text-sm text-[var(--muted)] mt-1">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

