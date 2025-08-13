import Image from "next/image";

const items = [
  { title: "Mondrian", src: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1" },
  { title: "Nirnia", src: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1" },
  { title: "Artex", src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1" },
  { title: "Brera", src: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1" },
  { title: "Alea Pro", src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1" },
  { title: "Nirinia", src: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1" },
];

export default function Collection() {
  return (
    <section id="collection" className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-900">
            Explore Our Proudly <span className="text-orange-500">Collection</span>
          </h2>
          <button className="btn-danger">View More</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((i, index) => (
            <div key={i.title} className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Image 
                src={i.src} 
                alt={i.title} 
                width={900} 
                height={900} 
                className="h-60 md:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="text-lg font-semibold text-white">{i.title}</div>
                <div className="h-8 w-8 rounded-full bg-orange-500 text-white grid place-items-center hover:bg-orange-600 transition-colors cursor-pointer">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
