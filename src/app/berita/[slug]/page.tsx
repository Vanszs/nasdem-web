import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <main className="space-y-10 md:space-y-16 site-container py-14 md:py-20">
      <article className="prose max-w-none">
        <h1 className="section-title text-3xl md:text-5xl font-extrabold">{decodeURIComponent(slug).replace(/-/g, " ")}</h1>
        <p className="text-[var(--muted)] mt-3">Konten artikel akan dimuat di sini.</p>
        <div className="mt-8">
          <Link href="/berita" className="btn-outline">← Kembali ke Berita</Link>
        </div>
      </article>
    </main>
  );
}

