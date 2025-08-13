import Image from "next/image";

export default function NewsSection() {
  const news = [
    {
      title: "Deklarasi Gerakan Literasi Desa",
      img: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "12 Agu 2025",
    },
    {
      title: "Pelatihan UMKM Go-Digital",
      img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2 Agu 2025",
    },
    {
      title: "Bakti Sosial Kesehatan Ibu-Anak",
      img: "https://images.pexels.com/photos/8460096/pexels-photo-8460096.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "22 Jul 2025",
    },
  ];

  return (
    <section id="berita" className="site-container py-14 md:py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="section-title text-4xl md:text-5xl font-extrabold">Berita & Artikel</h2>
          <p className="mt-3 text-[var(--muted)] max-w-2xl">Kabar terbaru tentang kegiatan dan gagasan kami.</p>
        </div>
        <a href="#" className="btn-outline whitespace-nowrap">Lihat Semua →</a>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {news.map((n) => {
          const slug = encodeURIComponent(n.title.toLowerCase().replace(/\s+/g, "-"));
          return (
          <article key={n.title} className="card-surface overflow-hidden">
            <div className="h-48 overflow-hidden">
              <Image src={n.img} alt={n.title} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="text-xs text-[var(--muted)]">{n.date}</div>
              <h3 className="text-lg font-semibold text-[var(--primary)] mt-1">{n.title}</h3>
              <a href={`/berita/${slug}`} className="text-sm text-[var(--accent)] font-semibold mt-2 inline-block">Baca selengkapnya →</a>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
