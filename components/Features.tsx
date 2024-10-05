import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, BarChart, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="mb-4 flex justify-center">{icon}</div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-indigo-200">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default function Features() {
  return (
    <section id="features" className="mt-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<MessageCircle className="w-12 h-12 text-indigo-300" />}
          title="Automated Responses"
          description="Customize commands for instant, intelligent interactions"
        />
        <FeatureCard
          icon={<BarChart className="w-12 h-12 text-indigo-300" />}
          title="Advanced Analytics"
          description="Gain insights with detailed member activity reports"
        />
        <FeatureCard
          icon={<Users className="w-12 h-12 text-indigo-300" />}
          title="Community Management"
          description="Effortlessly manage roles, events, and user engagement"
        />
      </div>
    </section>
  );
}