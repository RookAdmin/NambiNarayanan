import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Nambi Narayanan</h1>
        <h2 className="text-xl md:text-3xl mb-8">Visionary Scientist, National Hero</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          The extraordinary life of an Indian aerospace engineer who revolutionized liquid propulsion systems at ISRO, 
          faced false espionage charges, and fought for justice.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            className="bg-[#FF9933] hover:bg-yellow-600 text-white px-6 py-3"
            onClick={() => document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore His Life
          </Button>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-white hover:text-[#0B3D91] text-white border-2 border-white px-6 py-3"
            onClick={() => document.getElementById('case')?.scrollIntoView({ behavior: 'smooth' })}
          >
            The Espionage Case
          </Button>
        </div>
      </div>
    </section>
  );
}
