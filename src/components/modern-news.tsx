"use client";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink, Clock } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Peluncuran Program Pemberdayaan UMKM 2024",
    excerpt: "Program bantuan modal usaha dan pelatihan manajemen untuk 10,000 UMKM di seluruh Indonesia telah resmi diluncurkan.",
    date: "2024-01-15",
    category: "Program",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "3 min",
    featured: true
  },
  {
    id: 2,
    title: "Deklarasi Komitmen Anti-Korupsi",
    excerpt: "Penandatanganan pakta integritas dan komitmen untuk transparansi dalam setiap aspek pengelolaan partai.",
    date: "2024-01-10",
    category: "Deklarasi",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "2 min",
    featured: false
  },
  {
    id: 3,
    title: "Forum Diskusi Kebijakan Pendidikan",
    excerpt: "Menghadirkan pakar pendidikan dan praktisi untuk membahas kurikulum yang sesuai dengan kebutuhan industri 4.0.",
    date: "2024-01-08",
    category: "Forum",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "4 min",
    featured: false
  },
  {
    id: 4,
    title: "Kampanye Digitalisasi Pemerintahan",
    excerpt: "Inisiatif untuk mempercepat transformasi digital dalam pelayanan publik dan birokrasi pemerintahan.",
    date: "2024-01-05",
    category: "Kampanye",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min",
    featured: false
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export default function ModernNews() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0"
           style={{
             background: `
               linear-gradient(135deg, 
                 transparent 0%, 
                 rgba(0, 27, 85, 0.02) 50%,
                 transparent 100%
               ),
               radial-gradient(circle at 30% 20%, rgba(255, 156, 4, 0.05) 0%, transparent 40%),
               radial-gradient(circle at 70% 80%, rgba(0, 27, 85, 0.03) 0%, transparent 40%)
             `
           }} 
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--primary)] mb-4">
            Berita &{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
              Update
            </span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Ikuti perkembangan terbaru program, kegiatan, dan pencapaian kami dalam membangun Indonesia yang lebih baik
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            {newsItems.filter(item => item.featured).map((item) => (
              <div key={item.id} className="group relative">
                <div 
                  className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-white/20 transition-all duration-500 hover:shadow-2xl"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.95) 0%, 
                        rgba(255, 255, 255, 0.85) 100%
                      )
                    `,
                    boxShadow: `0 20px 60px rgba(0, 27, 85, 0.12)`
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div 
                      className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-30"
                      style={{
                        background: `linear-gradient(135deg, rgba(0, 27, 85, 0.3) 0%, transparent 50%, rgba(255, 156, 4, 0.2) 100%)`
                      }}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span 
                        className="px-4 py-2 rounded-2xl text-sm font-semibold backdrop-blur-md border border-white/30 text-white"
                        style={{
                          background: `rgba(255, 156, 4, 0.9)`
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex items-center gap-6 text-sm text-[var(--text-muted)] mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    {/* Title and Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                      {item.excerpt}
                    </p>

                    {/* CTA Button */}
                    <motion.button 
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 text-[var(--accent)] font-semibold transition-colors duration-300 hover:text-[var(--primary)]"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* News List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">
                Berita Terbaru
              </h3>
              
              {newsItems.filter(item => !item.featured).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group"
                >
                  <div 
                    className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: `
                        linear-gradient(135deg, 
                          rgba(255, 255, 255, 0.9) 0%, 
                          rgba(255, 255, 255, 0.75) 100%
                        )
                      `,
                      boxShadow: `0 8px 32px rgba(0, 27, 85, 0.06)`
                    }}
                  >
                    <div className="flex gap-4">
                      {/* Image Thumbnail */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Category & Date */}
                        <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-2">
                          <span 
                            className="px-2 py-1 rounded-lg font-medium"
                            style={{ 
                              background: `rgba(255, 156, 4, 0.1)`,
                              color: `var(--accent)`
                            }}
                          >
                            {item.category}
                          </span>
                          <span>{formatDate(item.date)}</span>
                        </div>

                        {/* Title */}
                        <h4 className="font-bold text-[var(--primary)] leading-tight mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                          {item.title}
                        </h4>

                        {/* Read More Link */}
                        <div className="flex items-center gap-2 text-sm text-[var(--accent)] group-hover:text-[var(--primary)] transition-colors duration-300">
                          <span>Baca</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)`,
                  boxShadow: `0 8px 32px rgba(0, 27, 85, 0.2)`
                }}
              >
                Lihat Semua Berita
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
