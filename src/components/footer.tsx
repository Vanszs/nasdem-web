import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:rgba(var(--primary-rgb),0.2)] bg-[var(--primary)]">
      <div className="site-container py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Terhubung dengan <span className="text-[var(--accent)]">Kami</span>
          </h3>
          <p className="text-blue-200 mt-3 text-sm max-w-xl">
            Ikuti kabar dan kegiatan terbaru Partai Nusantara Sejahtera. Bersama, kita wujudkan Indonesia yang adil dan sejahtera.
          </p>
        </div>
        <div className="card-surface rounded-3xl overflow-hidden border border-[color:rgba(var(--primary-rgb),0.4)]">
          <Image 
            src="https://images.pexels.com/photos/230875/pexels-photo-230875.jpeg?auto=compress&cs=tinysrgb&w=1400&h=700&dpr=1" 
            alt="Kegiatan massa" 
            width={1200} 
            height={700} 
            className="w-full h-56 object-cover" 
          />
        </div>
      </div>
      <div className="site-container pb-10 text-blue-200 text-sm grid md:grid-cols-4 gap-6">
        <div>
          <div className="text-white font-semibold mb-3">Tentang</div>
          <ul className="space-y-2 opacity-80">
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Sejarah</li>
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Visi & Misi</li>
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Struktur</li>
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Kontak</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Informasi</div>
          <ul className="space-y-2 opacity-80">
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Rilis Media</li>
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Agenda</li>
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Publikasi</li>
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Privasi</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Media Sosial</div>
          <ul className="space-y-2 opacity-80">
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">Facebook</li>
            <li className="hover:text-[var(--accent)] cursor-pointer transition-colors">LinkedIn</li>
          </ul>
        </div>
        <div className="flex items-end md:items-center justify-end">
          <div className="text-3xl md:text-5xl font-extrabold text-white">
            Partai<span className="text-[var(--accent)]">Nusantara</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
