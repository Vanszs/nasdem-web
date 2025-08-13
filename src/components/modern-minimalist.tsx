import Image from "next/image";

export default function ModernMinimalist() {
  return (
    <section id="modern" className="mm site-container scroll-mt-24 md:scroll-mt-28">
      <div className="main-container">
        {/* Main hero image dengan integrated text card */}
        <div style={{ position: 'relative' }}>
          <figure className="heroCard card-img">
            <span className="badge">Gorgeous Interior</span>
            <Image
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&h=900&q=80"
              alt="Modern minimalist living room with neutral tones"
              width={1400}
              height={900}
              style={{ width: '100%', height: 'auto' }}
            />
            
            {/* Text card terintegrasi dengan cut-out */}
            <article className="textCard">
              <span className="badge">Aesthetic</span>
              <p className="body">Aesthetic furniture where every piece tells a story of style</p>
              <h3>Into a gallery<br />of elegance</h3>
            </article>
          </figure>

          {/* Title yang menempel ke gambar */}
          <h2 className="title">Modern<br />Minimalist</h2>
        </div>

        {/* Right side photo card */}
        <div className="right-content">
          <figure className="photoCard card-img">
            <span className="badge">Best Furniture</span>
            <Image
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&h=800&q=80"
              alt="Designer lounge chair in outdoor setting"
              width={800}
              height={800}
              style={{ width: '100%', height: 'auto' }}
            />
            <button className="btn-round" aria-label="Explore">
              ↗
            </button>
          </figure>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="grid">
          <div>
            <div className="num">500+</div>
            <div className="lab">Products</div>
          </div>
          <div>
            <div className="num">20+</div>
            <div className="lab">Projects</div>
          </div>
          <div>
            <div className="num">50+</div>
            <div className="lab">Satisfied Customers</div>
          </div>
          <div>
            <div className="num">1st</div>
            <div className="lab">Top 1 in Paris</div>
          </div>
        </div>
      </div>
    </section>
  );
}
