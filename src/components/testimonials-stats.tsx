"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Partai ini memberikan harapan baru bagi masa depan Indonesia yang lebih cerah dan sejahtera.",
    author: "Dr. Sari Wijaya",
    role: "Akademisi & Aktivis Sosial",
    location: "Jakarta",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
  },
  {
    quote: "Program pemberdayaan UMKM yang konkret dan terukur, sangat membantu ekonomi rakyat kecil.",
    author: "Budi Santoso", 
    role: "Pengusaha UMKM",
    location: "Surabaya",
    image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
  },
  {
    quote: "Pendekatan yang inovatif dalam memecahkan masalah pendidikan di daerah terpencil.",
    author: "Prof. Maya Indira",
    role: "Pakar Pendidikan", 
    location: "Yogyakarta",
    image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
  }
];

const stats = [
  { number: "1.2M+", label: "Pendukung Aktif", suffix: "orang" },
  { number: "34", label: "Provinsi", suffix: "wilayah" },
  { number: "150+", label: "Program Terlaksana", suffix: "kegiatan" },
  { number: "95%", label: "Tingkat Kepuasan", suffix: "survey" }
];

export default function TestimonialsStats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0"
           style={{
             background: `
               linear-gradient(135deg, 
                 rgba(0, 27, 85, 0.05) 0%, 
                 transparent 30%,
                 rgba(255, 156, 4, 0.03) 70%,
                 transparent 100%
               ),
               radial-gradient(circle at 80% 20%, rgba(255, 156, 4, 0.08) 0%, transparent 50%),
               radial-gradient(circle at 20% 80%, rgba(0, 27, 85, 0.06) 0%, transparent 50%)
             `
           }} 
      />

      <div className="site-container relative z-10">
        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--primary)] mb-4">
              Pencapaian &{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
                Dukungan
              </span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Angka-angka yang menunjukkan kepercayaan masyarakat terhadap visi dan misi kami
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group"
              >
                <div 
                  className="relative p-8 rounded-3xl backdrop-blur-sm border border-white/20 text-center transition-all duration-300 hover:shadow-xl"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.9) 0%, 
                        rgba(255, 255, 255, 0.7) 100%
                      )
                    `,
                    boxShadow: `0 8px 32px rgba(0, 27, 85, 0.08)`
                  }}
                >
                  {/* Decorative Background Element */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
                      transform: 'translate(25%, -25%)'
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-extrabold text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] mt-1 opacity-70">
                      {stat.suffix}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--primary)] mb-4">
              Suara{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
                Masyarakat
              </span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Testimoni dari berbagai kalangan yang merasakan dampak nyata program-program kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.25, 1, 0.5, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div 
                  className="relative p-8 rounded-3xl backdrop-blur-sm border border-white/20 h-full transition-all duration-500"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.95) 0%, 
                        rgba(255, 255, 255, 0.8) 100%
                      )
                    `,
                    boxShadow: `
                      0 16px 48px rgba(0, 27, 85, 0.1),
                      0 0 0 1px rgba(255, 255, 255, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.5)
                    `,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <Quote className="w-8 h-8 text-[var(--accent)]" />
                  </div>

                  {/* Quote Content */}
                  <div className="relative z-10">
                    <p className="text-[var(--text-muted)] italic leading-relaxed mb-6 text-lg">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, var(--accent)20, var(--primary)10)` 
                        }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] opacity-70">
                          📍 {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative gradient overlay */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
