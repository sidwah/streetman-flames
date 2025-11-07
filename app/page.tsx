import { Header, Footer } from '@/components/layout';
import { HeroSection, PopularDishes, AboutUs, MenuSection, OrderFlow, Testimonials, ContactSection} from '@/components/sections';

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

        {/* Full Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}