"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-6">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-gray-50 shadow-xl">
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1960&h=1100&dpr=1"
            alt="Modern living room"
            width={1960}
            height={1100}
            className="h-[70vh] w-full object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />

          {/* Main title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-title text-6xl md:text-9xl font-extrabold text-white text-center"
            >
              Contemporary
            </motion.h1>
          </div>

          {/* Bottom left card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-gray-200 max-w-sm shadow-lg"
          >
            <p className="text-blue-900 text-sm leading-relaxed mb-4">
              Crafting spaces that harmonize modern aesthetics with timeless elegance, our contemporary interior designs breathe life into every room, redefining the essence of chic living.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
              View More <span>→</span>
            </button>
          </motion.div>

          {/* Bottom center mini gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-200 shadow-lg"
          >
            <div className="flex gap-2">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-orange-200">
                <Image
                  src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Interior 1"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-orange-200">
                <Image
                  src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Interior 2"
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
            className="absolute top-8 right-8 w-24 h-24 rounded-full bg-blue-900/90 backdrop-blur-md border border-blue-700 flex items-center justify-center shadow-lg"
          >
            <div className="text-center">
              <div className="text-xs text-orange-400 uppercase tracking-wider font-semibold">Modern</div>
              <div className="text-xs text-white uppercase tracking-wider">Minimalist</div>
              <div className="text-xs text-orange-400 uppercase tracking-wider font-semibold">Gallery</div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-[94%] -translate-x-1/2 rounded-full bg-blue-900/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
