"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-6 scroll-mt-24 md:scroll-mt-28">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-gray-50 shadow-xl no-max-width">
          <Image
            src="https://images.pexels.com/photos/230875/pexels-photo-230875.jpeg?auto=compress&cs=tinysrgb&w=1960&h=1100&dpr=1"
            alt="Panggung orasi"
            width={1960}
            height={1100}
            className="h-[70vh] w-full object-cover"
            priority
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(var(--primary-rgb),0.7), rgba(var(--primary-rgb),0.2), transparent)",
            }}
          />

          {/* Main title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-title text-5xl md:text-8xl font-extrabold text-white text-center"
            >
              Partai Nusantara Sejahtera
            </motion.h1>
          </div>

          {/* Bottom left card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-gray-200 max-w-sm shadow-lg"
          >
            <p className="text-[var(--primary)] text-sm leading-relaxed mb-4">
              Bersama membangun negeri yang adil dan sejahtera. Kami hadir untuk memperjuangkan pendidikan, kesehatan, dan ekonomi rakyat.
            </p>
            <a href="/profil" className="bg-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[color:rgba(var(--accent-rgb),0.9)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              Pelajari Lebih Lanjut <span>→</span>
            </a>
          </motion.div>

          {/* Bottom center mini gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[var(--stroke)] shadow-lg"
          >
            <div className="flex gap-2">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[color:rgba(var(--accent-rgb),0.3)]">
                <Image
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Kegiatan 1"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[color:rgba(var(--accent-rgb),0.3)]">
                <Image
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Kegiatan 2"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Circular badge - top right */}
          <motion.div 
            initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[color:rgba(var(--primary-rgb),0.9)] backdrop-blur-md border border-[color:rgba(var(--primary-rgb),0.6)] flex items-center justify-center shadow-lg"
          >
            <div className="text-center">
              <div className="text-[10px] text-[var(--accent)] uppercase tracking-wider font-semibold">Visi</div>
              <div className="text-[10px] text-white uppercase tracking-wider">Misi</div>
              <div className="text-[10px] text-[var(--accent)] uppercase tracking-wider font-semibold">Aksi</div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-[94%] -translate-x-1/2 rounded-full bg-[color:rgba(var(--primary-rgb),0.3)] blur-2xl" />
        </div>
      </div>
    </section>
  );
}
