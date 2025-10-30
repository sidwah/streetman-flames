import { Header, Footer } from '@/components/layout';
import { HeroSection, PopularDishes } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <HeroSection />

        {/* Popular Dishes Section */}
        <PopularDishes />

        {/* Placeholder for future sections */}
        <section id="about" className="container section min-h-screen">
          <h2 className="text-4xl font-bold">About Us - Coming Soon</h2>
        </section>

        <section id="menu" className="container section min-h-screen">
          <h2 className="text-4xl font-bold">Full Menu - Coming Soon</h2>
        </section>

        <section id="contact" className="container section min-h-screen">
          <h2 className="text-4xl font-bold">Contact - Coming Soon</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}