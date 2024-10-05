import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Bot className="w-10 h-10 text-white" />
          <span className="text-3xl font-bold">DiscordBot</span>
        </div>
        <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0">
          <Link href="#features" passHref>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">Features</Button>
          </Link>
          <Link href="#dashboard" passHref>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">Dashboard</Button>
          </Link>
          <Link href="#contact" passHref>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">Contact</Button>
          </Link>
          <Button className="bg-white text-indigo-600 hover:bg-indigo-100">
            <Shield className="w-4 h-4 mr-2" /> Login with Discord
          </Button>
        </div>
      </nav>
    </header>
  );
}