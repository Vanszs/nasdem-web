"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-8 scroll-mt-24 md:scroll-mt-28">
      <div className="site-container--bleed">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-gray-50 to-stone-100 shadow-2xl border border-white/20 backdrop-blur-sm">
          <Image
            src="https://images.pexels.com/photos/230875/pexels-photo-230875.jpeg?auto=compress&cs=tinysrgb&w=1960&h=1100&dpr=1"
            alt="Panggung orasi"
            width={1960}
            height={1100}
            className="h-[75vh] w-full object-cover"
            priority
          />

          {/* Enhanced gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, rgba(var(--primary-rgb), 0.1) 0%, transparent 30%),
                linear-gradient(to top, rgba(var(--primary-rgb), 0.8) 0%, rgba(var(--primary-rgb), 0.4) 40%, transparent 70%),
                radial-gradient(circle at 20% 80%, rgba(var(--accent-rgb), 0.15) 0%, transparent 50%)
              `
            }}
          />

          {/* Animated mesh background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                conic-gradient(from 180deg at 50% 50%, 
                  transparent 0deg, 
                  rgba(var(--accent-rgb), 0.1) 60deg, 
                  transparent 120deg, 
                  rgba(var(--primary-rgb), 0.08) 180deg, 
                  transparent 240deg, 
                  rgba(var(--accent-rgb), 0.1) 300deg, 
                  transparent 360deg)
              `,
              animation: 'meshRotate 20s linear infinite'
            }}
          />

          {/* Main title overlay with enhanced styling */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 27, 85, 0.8), rgba(0, 27, 85, 0.3), transparent)",
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
              Partai  Nasdem Sejahtera
            </motion.h1>
          </div>

          {/* Bottom left card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-[var(--border)] max-w-sm shadow-lg"
          >
            <p className="text-[var(--primary)] text-sm leading-relaxed mb-4">
              Bersama membangun negeri yang adil dan sejahtera. Kami hadir untuk memperjuangkan pendidikan, kesehatan, dan ekonomi rakyat.
            </p>
            <a 
              href="/profil" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--accent)] border-2 border-[var(--accent)] rounded-full hover:bg-[rgba(255,156,4,0.9)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
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
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[var(--accent)]">
                <Image
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
                  alt="Kegiatan 1"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[var(--accent)]">
                <Image
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
                  alt="Kegiatan 2"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-[94%] -translate-x-1/2 rounded-full bg-[var(--primary)] opacity-30 blur-2xl" />

          {/* Enhanced bottom left card */}
          <motion.div 
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="absolute bottom-8 left-8 card-surface p-8 max-w-sm backdrop-blur-md border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 32px 64px rgba(0, 27, 85, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)'
            }}
          >
            <p className="text-[var(--primary)] text-sm leading-relaxed mb-6 font-medium">
              Bersama membangun negeri yang adil dan sejahtera. Kami hadir untuk memperjuangkan pendidikan, kesehatan, dan ekonomi rakyat.
            </p>
            <motion.a 
              href="/profil" 
              className="btn-primary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Pelajari Lebih Lanjut 
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Enhanced mini gallery with glass morphism */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 p-6 border border-white/20 backdrop-blur-md rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 24px 48px rgba(0, 27, 85, 0.12)'
            }}
          >
            <div className="flex gap-3">
              {[
                "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
                "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[color:rgba(var(--accent-rgb),0.4)] shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={src}
                    alt={`Kegiatan ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced shadow effect */}
          <div className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-[96%] -translate-x-1/2 rounded-full opacity-60" 
               style={{
                 background: `
                   radial-gradient(ellipse, 
                     rgba(var(--primary-rgb), 0.4) 0%, 
                     rgba(var(--accent-rgb), 0.2) 30%,
                     transparent 70%
                   )
                 `,
                 filter: 'blur(24px)'
               }} 
          />
        </div>
      </div>
    </section>
  );
}
