export default function AdminLoginPage() {
  return (
    <main className="site-container--content py-16 md:py-24">
      <div className="max-w-md mx-auto card-surface p-8">
        <h1 className="text-2xl font-bold text-[var(--primary)]">Login Admin</h1>
        <p className="text-sm text-[var(--muted)] mt-1">Masuk untuk mengelola konten galeri dan berita.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--primary)]">Email</label>
            <input type="email" className="mt-1 w-full border border-[var(--stroke)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" placeholder="admin@domain.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--primary)]">Kata Sandi</label>
            <input type="password" className="mt-1 w-full border border-[var(--stroke)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">Masuk</button>
        </form>
      </div>
    </main>
  );
}

