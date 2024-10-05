import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Elevate Your Discord Server</h1>
      <p className="text-xl md:text-2xl mb-8 text-indigo-100">Empower your community with cutting-edge features and seamless moderation</p>
      <div className="flex justify-center mb-8">
        <Image
          src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt="Discord Bot Illustration"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl"
        />
      </div>
      <div className="space-x-4">
        <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-100 text-lg px-8 py-6">
          Get Started Now
        </Button>
        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 text-lg px-8 py-6">
          Learn More
        </Button>
      </div>
    </div>
  );
}