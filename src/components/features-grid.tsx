"use client";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Heart, 
  BookOpen, 
  Shield, 
  Lightbulb,
  TrendingUp,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Partisipasi Masyarakat",
    description: "Melibatkan seluruh elemen masyarakat dalam pengambilan keputusan politik dan pembangunan",
    gradient: "from-blue-500 to-blue-700",
    accent: "var(--primary)"
  },
  {
    icon: Target,
    title: "Visi Jelas",
    description: "Memiliki roadmap yang jelas untuk kemajuan bangsa dan kesejahteraan rakyat",
    gradient: "from-orange-400 to-orange-600", 
    accent: "var(--accent)"
  },
  {
    icon: Heart,
    title: "Peduli Sosial",
    description: "Mengutamakan program bantuan sosial dan pemberdayaan masyarakat kurang mampu",
    gradient: "from-red-400 to-red-600",
    accent: "var(--danger)"
  },
  {
    icon: BookOpen,
    title: "Pendidikan Berkualitas",
    description: "Menjamin akses pendidikan berkualitas untuk semua lapisan masyarakat",
    gradient: "from-green-400 to-green-600",
    accent: "var(--primary)"
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Menjaga stabilitas keamanan dan ketertiban untuk kemakmuran bersama",
    gradient: "from-purple-400 to-purple-600",
    accent: "var(--primary)"
  },
  {
    icon: Lightbulb,
    title: "Inovasi Digital",
    description: "Mendorong transformasi digital untuk efisiensi pelayanan publik",
    gradient: "from-yellow-400 to-yellow-600",
    accent: "var(--accent)"
  },
  {
    icon: TrendingUp,
    title: "Ekonomi Berkelanjutan",
    description: "Membangun ekonomi yang kuat, adil, dan ramah lingkungan",
    gradient: "from-teal-400 to-teal-600",
    accent: "var(--primary)"
  },
  {
    icon: Globe,
    title: "Diplomasi Global",
    description: "Meningkatkan posisi Indonesia di kancah internasional dengan diplomasi aktif",
    gradient: "from-indigo-400 to-indigo-600",
    accent: "var(--primary)"
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0" 
           style={{
             background: `
               radial-gradient(circle at 25% 25%, rgba(0, 27, 85, 0.03) 0%, transparent 50%),
               radial-gradient(circle at 75% 75%, rgba(255, 156, 4, 0.03) 0%, transparent 50%),
               linear-gradient(135deg, #fafbfc 0%, #f8fafc 100%)
             `
           }} 
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-10" 
             style={{
               background: `conic-gradient(from 0deg, var(--primary), var(--accent), var(--primary))`
             }} 
        />
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-2xl rotate-45 opacity-5"
             style={{ background: 'var(--accent)' }} 
        />
      </div>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-[var(--primary)] leading-tight mb-6">
            Program & 
            <span className="block bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
              Komitmen Kami
            </span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
            Delapan pilar utama yang menjadi fondasi perjuangan kami untuk Indonesia yang lebih maju, adil, dan sejahtera
          </p>
        </motion.div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isLarge = index === 0 || index === 7; // Make first and last cards larger
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 1, 0.5, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`
                  group relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-sm cursor-pointer
                  ${isLarge ? 'lg:col-span-2 lg:row-span-1' : ''}
                `}
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.9) 0%, 
                      rgba(255, 255, 255, 0.7) 100%
                    )
                  `,
                  boxShadow: `
                    0 8px 32px rgba(0, 27, 85, 0.08),
                    0 0 0 1px rgba(255, 255, 255, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `
                }}
              >
                {/* Card Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.accent}22 0%, transparent 70%)`
                  }}
                />
                
                {/* Content */}
                <div className={`relative z-10 p-8 ${isLarge ? 'lg:p-10' : ''}`}>
                  {/* Icon with Animated Background */}
                  <div className="relative mb-6">
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.accent}40, ${feature.accent}20)`
                      }}
                    />
                    <div 
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}dd)`,
                        boxShadow: `0 8px 24px ${feature.accent}40`
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <h3 className={`font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 ${
                    isLarge ? 'text-2xl' : 'text-xl'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-[var(--text-muted)] leading-relaxed ${
                    isLarge ? 'text-base' : 'text-sm'
                  }`}>
                    {feature.description}
                  </p>

                  {/* Decorative Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none" 
                      className="text-[var(--accent)]"
                    >
                      <path 
                        d="M4 16L16 4M16 4V16M16 4H4" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Subtle Border Animation */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       background: `linear-gradient(135deg, ${feature.accent}30, transparent 50%, ${feature.accent}20)`,
                       mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       maskComposite: 'subtract',
                       padding: '2px'
                     }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/program"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-full transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, var(--accent) 0%, rgba(255, 156, 4, 0.8) 100%)`,
              boxShadow: `0 8px 32px rgba(255, 156, 4, 0.3)`
            }}
          >
            Pelajari Program Lengkap
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
