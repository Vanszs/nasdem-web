import { Facebook, Instagram, Twitter } from "lucide-react";

export default function SocialSection() {
  const items = [
    { name: "Instagram", handle: "@partai. Nasdem", href: "#", icon: Instagram },
    { name: "Facebook", handle: "Partai  Nasdem", href: "#", icon: Facebook },
    { name: "X / Twitter", handle: "@ Nasdem_id", href: "#", icon: Twitter },
  ];

  return (
    <section id="sosial" className="site-container py-14 md:py-20 scroll-mt-24 md:scroll-mt-28">
      <h2 className="section-title text-4xl md:text-5xl font-extrabold">Integrasi Media Sosial</h2>
      <p className="mt-3 text-[var(--muted)] max-w-2xl">Ikuti kanal resmi kami untuk info terbaru.</p>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {items.map((it) => (
          <a key={it.name} href={it.href} className="card-surface p-5 flex items-center gap-4 hover:shadow-xl transition-shadow">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[color:rgba(var(--accent-rgb),0.12)] text-[var(--accent)]">
              <it.icon className="w-5 h-5" />
            </span>
            <div>
              <div className="text-[var(--primary)] font-semibold">{it.name}</div>
              <div className="text-sm text-[var(--muted)]">{it.handle}</div>
            </div>
            <span className="ml-auto text-[var(--accent)] font-bold">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

