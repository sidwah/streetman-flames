import { Header, Footer } from '@/components/layout';
import { HeroSection, PopularDishes, AboutUs, MenuSection, OrderFlow, Testimonials } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <HeroSection />

        {/* Popular Dishes Section */}
        <PopularDishes />

        {/* About Us Section */}
        <AboutUs />

        {/* Full Menu Section */}
        <MenuSection />

        {/* Full Order Section */}
        <OrderFlow />

        {/* Full Testimonials Section */}
        <Testimonials />

        <section id="contact" className="container section min-h-screen">
          <h2 className="text-4xl font-bold">Contact - Coming Soon</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}