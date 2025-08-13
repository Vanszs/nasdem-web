import Image from "next/image";

export default function ModernMinimalist() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block text-xs tracking-wide uppercase text-orange-500 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 mb-6 font-semibold">
              Gorgeous Interior
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.9] mb-6 text-blue-900">
              Modern
              <br />
              <span className="text-orange-500">Minimalist</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-8">
              Experience the perfect blend of contemporary design and functional elegance. 
              Our curated collection brings sophistication to every corner of your living space.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Explore Collection</button>
              <button className="btn-outline">View Gallery</button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="card-surface relative overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&dpr=1"
                alt="Modern minimalist interior"
                width={1400}
                height={900}
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              
              {/* Floating elements */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-4 border border-gray-200 shadow-lg">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-2xl font-bold text-blue-900">$2,599</div>
                </div>
                <div className="h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold cursor-pointer hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  →
                </div>
              </div>
            </div>
            
            {/* Decorative shadow */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-[90%] -translate-x-1/2 rounded-full bg-blue-900/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
