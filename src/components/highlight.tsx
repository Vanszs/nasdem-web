"use client";
import { motion } from "framer-motion";
import { Target, Eye, Users, Heart } from "lucide-react";

export default function VisionMission() {
  const visions = [
    {
      title: "Visi",
      content: "Mewujudkan Indonesia yang adil, sejahtera, dan bermartabat melalui tata kelola pemerintahan yang bersih dan partisipatif",
      icon: Eye,
      color: "from-blue-500 to-blue-600"
    }
  ];

  const missions = [
    {
      title: "Kedaulatan Rakyat",
      description: "Memperkuat demokrasi dan partisipasi aktif masyarakat dalam pembangunan",
      icon: Users
    },
    {
      title: "Keadilan Sosial",
      description: "Mengurangi kesenjangan ekonomi melalui program pemberdayaan yang berkelanjutan",
      icon: Heart
    },
    {
      title: "Pemerintahan Bersih",
      description: "Membangun birokrasi yang profesional, transparan, dan akuntabel",
      icon: Target
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6">
            Visi & Misi <span className="text-[var(--accent)]">Partai</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Landasan ideologi dan komitmen kami dalam membangun Indonesia yang lebih baik
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card-surface p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 opacity-5"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 flex items-center justify-center">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-6">
                Visi Kami
              </h3>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto">
                "Mewujudkan Indonesia yang adil, sejahtera, dan bermartabat melalui tata kelola pemerintahan yang bersih dan partisipatif"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] text-center mb-12">
            Misi Kami
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => {
              const IconComponent = mission.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="card-surface h-full p-8 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-[var(--primary)] mb-4">
                        {mission.title}
                      </h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
