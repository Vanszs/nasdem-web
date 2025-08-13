import { Check } from "lucide-react";

export default function ProfileSection() {
  const stats = [
    { k: "Didirikan", v: "2010" },
    { k: "Ketua Umum", v: "Rahmad Hidayat" },
    { k: "Kader", v: "350K+" },
  ];

  return (
    <section
      id="profil"
      className="site-container py-14 md:py-20 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="grid items-start gap-8 md:grid-cols-12">
        {/* Content */}
        <div className="md:col-span-7 lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--white)] px-3 py-1 text-xs font-semibold text-[color:rgba(var(--primary-rgb),0.8)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Tentang Partai
          </div>

          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-[var(--primary)]">
            Profil Partai
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Partai  Nasdem Sejahtera berdiri untuk mewujudkan Indonesia yang adil,
            makmur, dan berkeadilan sosial. Fokus pada peningkatan kualitas
            pendidikan, kesehatan, dan ekonomi kerakyatan.
          </p>

          {/* Chips / values */}
          <div className="mt-5 flex flex-wrap gap-2">
            {["Integritas", "Transparansi", "Pelayanan Publik"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-[var(--stroke)] bg-[var(--white)] px-3 py-1 text-xs font-medium text-[color:rgba(var(--primary-rgb),0.8)]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stats.map((i) => (
              <div
                key={i.k}
                className="group relative overflow-hidden rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                  {i.k}
                </div>
                <div className="mt-1 text-2xl font-bold text-[var(--primary)]">
                  {i.v}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/30 to-[var(--accent)]/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar card */}
        <aside className="md:col-span-5 lg:col-span-4">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-6 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--white)] px-3 py-1 text-xs font-semibold text-[color:rgba(var(--primary-rgb),0.8)]">
              Visi & Misi
            </div>

            <div className="mt-4">
              <div className="text-sm font-semibold text-[var(--primary)]">Visi</div>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Membangun bangsa berdaya saing yang berkeadilan.
              </p>
            </div>

            <div className="my-5 h-px w-full bg-[var(--stroke)]" />

            <div>
              <div className="text-sm font-semibold text-[var(--primary)]">Misi</div>
              <ul className="mt-2 space-y-2">
                {[
                  "Pendidikan untuk semua",
                  "Kesehatan terjangkau",
                  "UMKM naik kelas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <span className="mt-0.5 rounded-full bg-[color:rgba(var(--accent-rgb),0.15)] p-1 text-[var(--accent)]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accent aura */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[color:rgba(var(--accent-rgb),0.15)] blur-3xl" />
          </div>
        </aside>
      </div>
    </section>
  );
}
