import { Header, Footer } from '@/components/layout';
import { HeroSection } from '@/components/sections/hero-section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Full viewport height */}
        <HeroSection />

        {/* Placeholder sections - to be built next */}
        <section id="popular" className="container section">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Popular Dishes</h2>
            <p className="text-gray-600">Coming up next...</p>
          </div>
        </section>

        <section id="about" className="container section bg-gray-50">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>

        <section id="menu" className="container section">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Our Menu</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>

        <section id="contact" className="container section bg-gray-50">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}