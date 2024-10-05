import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="mt-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Dashboard Preview</h2>
      <Card className="bg-white/10 backdrop-blur-lg border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Server Statistics</CardTitle>
          <CardDescription className="text-indigo-200">Track your server's performance</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Dashboard Preview"
            width={1000}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </CardContent>
      </Card>
    </section>
  );
}