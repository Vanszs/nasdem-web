import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-blue-900">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Engage with Us in <span className="text-orange-400">Conversation</span>.
          </h3>
          <p className="text-blue-200 mt-3 text-sm max-w-xl">
            In a global world based on communication, a brand must look beyond its borders, open up to new experiences, and dare to be different.
          </p>
        </div>
        <div className="card-surface rounded-3xl overflow-hidden border border-blue-700">
          <Image 
            src="https://images.pexels.com/photos/1614649/pexels-photo-1614649.jpeg?auto=compress&cs=tinysrgb&w=1400&h=700&dpr=1" 
            alt="Footer visual" 
            width={1200} 
            height={700} 
            className="w-full h-56 object-cover" 
          />
        </div>
      </div>
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 pb-10 text-blue-200 text-sm grid md:grid-cols-4 gap-6">
        <div>
          <div className="text-white font-semibold mb-3">About</div>
          <ul className="space-y-2 opacity-80">
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Our Story</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Store Locator</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Sustainability</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Careers</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Customer Service</div>
          <ul className="space-y-2 opacity-80">
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Prices and Payments</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Shipping</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Return Policy</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Terms of Service</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Social Media</div>
          <ul className="space-y-2 opacity-80">
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Facebook</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">LinkedIn</li>
          </ul>
        </div>
        <div className="flex items-end md:items-center justify-end">
          <div className="text-3xl md:text-5xl font-extrabold text-white">
            Poli<span className="text-orange-400">form</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
