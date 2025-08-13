export default function Metrics() {
  const items = [
    { value: "500+", label: "Products" },
    { value: "20+", label: "Projects" },
    { value: "50+", label: "Satisfied Customers" },
    { value: "1st", label: "Top 1 in Paris" },
  ];

  return (
    <section id="metrics" className="site-container py-12 md:py-16 scroll-mt-24 md:scroll-mt-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, index) => (
          <div
            key={it.label}
            className={`card-surface p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
              index === 3 ? 'border-[color:rgba(var(--accent-rgb),0.3)] bg-gradient-to-br from-[color:rgba(var(--accent-rgb),0.08)] to-white' : ''
            }`}
          >
            <div className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
              index === 3 ? 'text-[var(--accent)]' : 'text-[var(--primary)]'
            }`}>
              {it.value}
            </div>
            <div className="text-sm text-[var(--muted)] mt-2 font-medium">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
