import Link from "next/link";
import { ArrowRight, Check, MapPin, User2 } from "lucide-react";

export const metadata = {
  title: "Profil — DPD Partai NasDem Sidoarjo",
  description:
    "Profil resmi DPD Partai NasDem Sidoarjo: visi-misi, program, struktur, dan kontak.",
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--stroke)] bg-[var(--white)] px-3 py-1 text-xs font-medium text-[color:rgba(var(--primary-rgb),0.8)]">
      {children}
    </span>
  );
}

export default function ProfilPage() {
  return (
    <main className="space-y-10 md:space-y-16">
      {/* Hero / Heading */}
      <section className="site-container pt-10 md:pt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--white)] px-3 py-1 text-xs font-semibold text-[color:rgba(var(--primary-rgb),0.8)]">
              DPD Partai NasDem Sidoarjo
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-[var(--primary)]">
              Profil Partai
            </h1>
            <p className="mt-2 max-w-2xl text-[var(--muted)]">
              Media resmi DPD Partai NasDem Sidoarjo untuk memperkenalkan identitas,
              visi-misi, program kerja, dokumentasi, dan struktur organisasi.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Chip>Periode 2024–2029</Chip>
            <Chip>
              <User2 className="mr-1 h-3.5 w-3.5" /> Ketua: Muh. Zakaria Dimas Pratama, S.Kom
            </Chip>
          </div>
        </div>
      </section>

      {/* Sorotan 2025 */}
      <section className="site-container">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="section-title text-3xl md:text-4xl font-extrabold">Sorotan 2025</h2>
            <p className="mt-2 text-[var(--muted)]">Inisiatif, kerja sama, dan aksi terbaru DPD NasDem Sidoarjo.</p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-5 shadow-sm hover:shadow-md transition-all">
            <div className="text-xs font-semibold text-[var(--muted)]">Kerja Sama Strategis — 25 Jul 2025</div>
            <div className="mt-1 text-[var(--primary)] font-semibold">Silaturahmi PD Muhammadiyah Sidoarjo</div>
            <p className="mt-1 text-sm text-[var(--muted)]">Fokus pendidikan inklusif, beasiswa PIP/KIP, UMKM, dan urban farming.</p>
          </div>
          <div className="group rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-5 shadow-sm hover:shadow-md transition-all">
            <div className="text-xs font-semibold text-[var(--muted)]">NasDem Muda — 25 Mar 2025</div>
            <div className="mt-1 text-[var(--primary)] font-semibold">Pembukaan Pendaftaran Pemuda 17–30 Tahun</div>
            <p className="mt-1 text-sm text-[var(--muted)]">Edukasi politik, kepemimpinan, kunjungan lembaga, dan kegiatan sosial.</p>
          </div>
          <div className="group rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-5 shadow-sm hover:shadow-md transition-all">
            <div className="text-xs font-semibold text-[var(--muted)]">Aksi Sosial — Jul 2025</div>
            <div className="mt-1 text-[var(--primary)] font-semibold">Fogging & Pembagian Sembako</div>
            <p className="mt-1 text-sm text-[var(--muted)]">Bersama NasDem Muda di Desa Sidorejo, Krian untuk pencegahan DBD.</p>
          </div>
          <div className="group rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-5 shadow-sm hover:shadow-md transition-all">
            <div className="text-xs font-semibold text-[var(--muted)]">Dukungan Pangan</div>
            <div className="mt-1 text-[var(--primary)] font-semibold">709 Ton Benih Padi</div>
            <p className="mt-1 text-sm text-[var(--muted)]">Disalurkan untuk 103 kelompok tani di Sidoarjo guna swasembada pangan.</p>
          </div>
          <div className="group rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-5 shadow-sm hover:shadow-md transition-all">
            <div className="text-xs font-semibold text-[var(--muted)]">Advokasi Kebijakan Daerah</div>
            <div className="mt-1 text-[var(--primary)] font-semibold">Catatan atas RPJMD 2025–2029</div>
            <p className="mt-1 text-sm text-[var(--muted)]">Sinkronisasi program daerah, mitigasi ketimpangan, dan penyelarasan sektor.</p>
          </div>
        </div>
      </section>

      {/* Tentang + Visi Misi */}
      <section className="site-container">
        <div className="grid items-start gap-8 md:grid-cols-12">
          {/* Tentang */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--white)] px-3 py-1 text-xs font-semibold text-[color:rgba(var(--primary-rgb),0.8)]">
                Tentang DPD NasDem Sidoarjo
              </div>
              <p className="mt-3 text-[var(--muted)]">
                DPD Partai NasDem Sidoarjo berkomitmen menghadirkan gerakan perubahan
                melalui penguatan struktur, pembinaan kader, dan pelayanan publik.
                Profil ini mengarsipkan program kerja, berita, dan kegiatan resmi untuk
                membangun kredibilitas dan keterbukaan.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[var(--stroke)] p-4">
                  <div className="text-xs font-semibold text-[var(--muted)]">Ketua</div>
                  <div className="mt-1 text-[var(--primary)] font-semibold">
                    Muh. Zakaria Dimas Pratama, S.Kom
                  </div>
                </div>
                <div className="rounded-xl border border-[var(--stroke)] p-4">
                  <div className="text-xs font-semibold text-[var(--muted)]">Periode</div>
                  <div className="mt-1 text-[var(--primary)] font-semibold">2024–2029</div>
                </div>
                <div className="rounded-xl border border-[var(--stroke)] p-4">
                  <div className="text-xs font-semibold text-[var(--muted)] flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> Sekretariat
                  </div>
                  <div className="mt-1 text-[var(--primary)] font-semibold">Ruko Citra City R-24, Sidoarjo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visi & Misi */}
          <aside className="md:col-span-5 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--white)] px-3 py-1 text-xs font-semibold text-[color:rgba(var(--primary-rgb),0.8)]">
                Visi & Misi
              </div>
              <div className="mt-4">
                <div className="text-sm font-semibold text-[var(--primary)]">Visi</div>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Mohon konfirmasi teks visi resmi DPD NasDem Sidoarjo.
                </p>
              </div>
              <div className="my-5 h-px w-full bg-[var(--stroke)]" />
              <div>
                <div className="text-sm font-semibold text-[var(--primary)]">Misi</div>
                <ul className="mt-2 space-y-2">
                  {[
                    "Penguatan struktur DPD–DPAC",
                    "Pembinaan kader & pendidikan politik",
                    "Advokasi isu lokal & pelayanan publik",
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
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[color:rgba(var(--accent-rgb),0.15)] blur-3xl" />
            </div>
          </aside>
        </div>
      </section>

      {/* Program & Kegiatan */}
      <section className="site-container">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="section-title text-3xl md:text-4xl font-extrabold">Program & Kegiatan</h2>
            <p className="mt-2 text-[var(--muted)]">Prioritas kerja dan kegiatan publik yang dijalankan.</p>
          </div>
          <Link href="/program" className="btn-outline text-sm px-4 py-2 rounded-full inline-flex items-center gap-2">
            Lihat selengkapnya <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Konsolidasi & Penguatan Struktur", d: "DPD–DPAC dan jaringan wilayah." },
            { t: "Pendidikan Politik", d: "Pelatihan kader & sosialisasi publik." },
            { t: "Kegiatan Sosial", d: "Bakti sosial, bantuan bencana, santunan." },
          ].map((p) => (
            <div key={p.t} className="group rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-sm font-semibold text-[var(--primary)]">{p.t}</div>
              <p className="mt-1 text-sm text-[var(--muted)]">{p.d}</p>
              <div className="mt-4 h-1 w-full rounded bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/30 to-[var(--accent)]/0" />
            </div>
          ))}
        </div>
      </section>

      {/* Struktur Inti */}
      <section className="site-container">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="section-title text-3xl md:text-4xl font-extrabold">Struktur Inti</h2>
            <p className="mt-2 text-[var(--muted)]">Pengurus inti DPD Partai NasDem Sidoarjo.</p>
          </div>
          <Link href="/anggota" className="btn-outline text-sm px-4 py-2 rounded-full inline-flex items-center gap-2">
            Lihat struktur lengkap <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { r: "Ketua", n: "Muh. Zakaria Dimas Pratama, S.Kom" },
            { r: "Sekretaris", n: "Mohon konfirmasi nama" },
            { r: "Bendahara", n: "Mohon konfirmasi nama" },
          ].map((p) => (
            <div key={p.r} className="rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-5 shadow-sm">
              <div className="text-sm text-[var(--muted)]">{p.r}</div>
              <div className="mt-1 text-lg font-semibold text-[var(--primary)]">{p.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section className="site-container pb-12 md:pb-20">
        <div className="rounded-2xl border border-[var(--stroke)] bg-[var(--white)] p-6 shadow-sm">
          <h2 className="section-title text-3xl md:text-4xl font-extrabold">Kontak Resmi</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-[var(--primary)]">Alamat Sekretariat</div>
              <p className="text-sm text-[var(--muted)]">Ruko Citra City R-24, Sidoarjo</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--primary)]">Telepon</div>
              <p className="text-sm text-[var(--muted)]">Mohon konfirmasi nomor</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--primary)]">Email</div>
              <p className="text-sm text-[var(--muted)]">Mohon konfirmasi email</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold text-[var(--primary)]">Media Sosial</div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
              <Link
                href="https://instagram.com/sidoarjo.nasdem.id"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] px-3 py-1 text-[color:rgba(var(--primary-rgb),0.8)] hover:text-[var(--accent)]"
              >
                Instagram @sidoarjo.nasdem.id
              </Link>
              <span className="text-[var(--muted)]">•</span>
              <span className="text-[var(--muted)]">Tambahkan tautan FB, YouTube, X/Twitter, TikTok</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
