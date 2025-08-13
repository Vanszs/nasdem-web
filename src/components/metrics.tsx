export default function Metrics() {
  const items = [
    { value: "500+", label: "Products" },
    { value: "20+", label: "Projects" },
    { value: "50+", label: "Satisfied Customers" },
    { value: "1st", label: "Top 1 in Paris" },
  ];

  return (
    <section className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, index) => (
          <div
            key={it.label}
            className={`card-surface p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
              index === 3 ? 'border-orange-200 bg-gradient-to-br from-orange-50 to-white' : ''
            }`}
          >
            <div className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
              index === 3 ? 'text-orange-500' : 'text-blue-900'
            }`}>
              {it.value}
            </div>
            <div className="text-sm text-gray-600 mt-2 font-medium">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
