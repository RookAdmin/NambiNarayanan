import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nambi Narayanan</h1>
            <h2 className="text-xl md:text-3xl mb-8">Visionary Scientist, National Hero</h2>
            <p className="text-lg md:text-xl mb-10">
              The extraordinary life of an Indian aerospace engineer who revolutionized liquid propulsion systems at ISRO, 
              faced false espionage charges, and fought for justice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
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
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float overflow-hidden photo-shine-effect">
              <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm"></div>
              <img 
                src="/images/nambi_narayanan.svg" 
                alt="Nambi Narayanan" 
                className="rounded-full w-full h-full object-cover border-4 border-white/50 shadow-lg z-10 animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9933]/10 via-transparent to-[#138808]/10 rounded-full"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF9933] rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-[#138808] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
