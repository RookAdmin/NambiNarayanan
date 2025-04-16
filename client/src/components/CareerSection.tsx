import { careerData } from "@/data/careerData";

export default function CareerSection() {
  return (
    <section id="career" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">Career Achievements</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Nambi Narayanan's revolutionary contributions to India's rocket technology and space program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="h-48 bg-cover bg-center transition-transform duration-700 hover:scale-110" 
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
                aria-label={item.title}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B3D91] mb-2 transition-colors duration-300 group-hover:text-[#FF9933]">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <p className="text-sm text-gray-600 italic">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md border-l-4 border-[#138808] animate-slide-up">
          <h3 className="text-xl font-bold text-[#0B3D91] mb-4">The Impact of Nambi Narayanan's Work</h3>
          <p className="mb-4">
            Nambi Narayanan's contributions to India's space program went far beyond individual technological 
            achievements. His work fundamentally transformed India's capabilities in space, enabling 
            self-reliance in a field dominated by global superpowers.
          </p>
          <p>
            The liquid propulsion and cryogenic technologies he helped develop have powered numerous 
            successful satellite launches, supported India's remote sensing and communication needs, 
            and positioned the country as a significant player in the global space economy. The technologies 
            he pioneered continue to be refined and used in India's most advanced missions.
          </p>
        </div>
      </div>
    </section>
  );
}
