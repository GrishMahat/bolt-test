import { Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="container mx-auto py-8 text-center text-indigo-200">
      <div className="flex justify-center items-center mb-4">
        <Bot className="w-8 h-8 mr-2" />
        <span className="text-2xl font-bold">DiscordBot</span>
      </div>
      <p>&copy; 2024 DiscordBot. All rights reserved.</p>
    </footer>
  );
}