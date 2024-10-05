import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Hero />
        <Features />
        <DashboardPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}