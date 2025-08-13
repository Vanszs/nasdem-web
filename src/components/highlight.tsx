import Image from "next/image";

export default function Highlight() {
  return (
    <section className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-8 items-stretch">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        <Image
          src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1640&h=1000&dpr=1"
          alt="Gallery of elegance"
          width={1600}
          height={1000}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="inline-block text-xs tracking-wide uppercase text-orange-400 px-3 py-1 rounded-full border border-orange-300 bg-blue-900/80 backdrop-blur font-semibold">
            Aesthetic
          </p>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">Into a gallery of elegance</h3>
        </div>
      </div>

      <div className="grid gap-6 content-between">
        <div className="card-surface p-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">Modern <span className="text-orange-500">Minimalist</span></h2>
          <p className="mt-3 text-gray-600">
            Aesthetic furniture where every piece tells a story of style.
          </p>
        </div>
        <div className="card-surface p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300">
          <div>
            <div className="text-lg font-semibold text-blue-900">Indulge in the artistry of everyday living</div>
            <p className="text-gray-500 text-sm mt-1">Elegance • Timeless</p>
          </div>
          <div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-orange-200">
            <Image
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
              alt="Mini card"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
