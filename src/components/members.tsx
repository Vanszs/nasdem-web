import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MembersSection() {
  const leaders = [
    { name: "Rahmad Hidayat", role: "Ketua Umum" },
    { name: "Siti Aminah", role: "Sekretaris Jenderal" },
    { name: "Dimas Pratama", role: "Bendahara Umum" },
  ];

  const members = Array.from({ length: 9 }).map((_, i) => ({
    name: `Anggota ${i + 1}`,
    region: `Dapil ${i + 1}`,
  }));

  return (
    <section id="anggota" className="site-container py-14 md:py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="section-title text-4xl md:text-5xl font-extrabold">Bagan & Daftar Anggota</h2>
        <Link
          href="/anggota"
          className="btn-outline text-sm px-4 py-2 rounded-full inline-flex items-center gap-2"
        >
          Lihat semua anggota
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <p className="mt-3 text-[var(--muted)] max-w-2xl">Struktur organisasi inti dan daftar anggota terpilih.</p>

      {/* Org Chart simplified */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {leaders.map((p) => (
          <div key={p.name} className="card-surface p-5 text-center">
            <div className="text-sm text-[var(--muted)]">{p.role}</div>
            <div className="text-xl font-semibold text-[var(--primary)]">{p.name}</div>
          </div>
        ))}
      </div>

      {/* Members list */}
      <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {members.map((m) => (
          <div key={m.name} className="card-surface p-4 flex items-center justify-between">
            <div>
              <div className="font-medium text-[var(--primary)]">{m.name}</div>
              <div className="text-xs text-[var(--muted)]">{m.region}</div>
            </div>
            <span className="text-[var(--accent)] font-bold">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
