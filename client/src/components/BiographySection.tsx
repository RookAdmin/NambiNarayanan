import { timelineData } from "@/data/timelineData";

export default function BiographySection() {
  return (
    <section id="biography" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">Biography</h2>
          <p className="max-w-3xl mx-auto text-lg">
            The remarkable journey of a man who dedicated his life to India's space program 
            and persevered through unimaginable challenges.
          </p>
        </div>
        
        <div className="timeline-container relative">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? 'timeline-left md:w-1/2 md:ml-auto md:pl-10 pb-10 md:pr-0 pl-16 pr-4' 
                : 'timeline-right md:w-1/2 md:pr-10 pb-10 md:pl-0 pl-16 pr-4'
              }`}
            >
              <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                index % 2 === 0 ? 'border-[#FF9933]' : 'border-[#0B3D91]'
              }`}>
                <h3 className="text-xl font-bold text-[#0B3D91]">{item.year}</h3>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .timeline-container::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: #0B3D91;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
        }
        .timeline-item {
          position: relative;
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #FF9933;
          border: 4px solid #0B3D91;
          border-radius: 50%;
          top: 25px;
          z-index: 1;
        }
        .timeline-left::after {
          right: -10px;
        }
        .timeline-right::after {
          left: -10px;
        }
        @media (max-width: 768px) {
          .timeline-container::after {
            left: 31px;
          }
          .timeline-item::after {
            left: 22px;
          }
        }
      `}</style>
    </section>
  );
}
