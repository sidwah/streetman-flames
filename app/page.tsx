import { Header, Footer } from '@/components/layout';

export default function LayoutDemo() {
  return (
    <>
      {/* Header - Sticky at top */}
      <Header />

      {/* Main Content - Add padding-top to account for fixed header */}
      <main style={{ paddingTop: '80px' }}>
        {/* Home Section */}
        <section id="home" className="container section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <h1>🔥 Welcome to Streetman Flames</h1>
            <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
              Fresh Street Food You Love
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--text)' }}>
              Scroll down to see all sections and test the navigation!
            </p>
          </div>
        </section>

        {/* Popular Dishes Section */}
        <section
          id="popular"
          className="container section"
          style={{ minHeight: '100vh', background: 'var(--cream)' }}
        >
          <h2>Popular Dishes</h2>
          <p>This is where popular menu items will go.</p>
          <div style={{ height: '60vh' }}></div>
        </section>

        {/* About Section */}
        <section id="about" className="container section" style={{ minHeight: '100vh' }}>
          <h2>About Us</h2>
          <p>Learn about Streetman Flames - UPSA's favorite street food spot!</p>
          <div style={{ height: '60vh' }}></div>
        </section>

        {/* Menu Section */}
        <section
          id="menu"
          className="container section"
          style={{ minHeight: '100vh', background: 'var(--cream)' }}
        >
          <h2>Our Menu</h2>
          <p>Browse our complete menu with rice meals, fries, and more!</p>
          <div style={{ height: '60vh' }}></div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container section" style={{ minHeight: '100vh' }}>
          <h2>How It Works</h2>
          <p>Easy 4-step pickup process - NO DELIVERY</p>
          <div style={{ height: '60vh' }}></div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="container section"
          style={{ minHeight: '100vh', background: 'var(--cream)' }}
        >
          <h2>What Our Customers Say</h2>
          <p>Read reviews from happy customers!</p>
          <div style={{ height: '60vh' }}></div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}