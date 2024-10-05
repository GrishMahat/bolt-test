import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="mt-24 text-center">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <p className="text-xl mb-8">
        Have questions? We're here to help!
      </p>
      <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-100 text-lg px-8 py-6">
        Contact Support
      </Button>
    </section>
  );
}