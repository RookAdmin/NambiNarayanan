export default function EspionageCaseSection() {
  return (
    <section id="case" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">The False Espionage Case</h2>
          <p className="max-w-3xl mx-auto text-lg">
            A dark chapter that revealed Nambi Narayanan's extraordinary resilience and unwavering pursuit of justice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-[#FF9933]">
              <h3 className="text-2xl font-bold text-[#0B3D91] mb-4">The Allegations</h3>
              <p className="mb-4">
                In 1994, Nambi Narayanan was arrested on accusations of selling India's space secrets to foreign 
                countries. The charges claimed he had transferred drawings and documents related to ISRO's cryogenic 
                engine technology to Pakistan through two Maldivian women.
              </p>
              <p className="mb-4">
                He was arrested by the Kerala Police and the Intelligence Bureau under allegations of espionage, 
                which led to his imprisonment for 50 days and subsequent torture during interrogation.
              </p>
              <p>
                The case created a national sensation, with media portraying him as a traitor before any evidence 
                was verified or trial conducted.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#0B3D91]">
              <h3 className="text-2xl font-bold text-[#0B3D91] mb-4">The Investigation</h3>
              <p className="mb-4">
                In 1996, the Central Bureau of Investigation (CBI) took over the investigation and thoroughly 
                examined all allegations. Their conclusion was clear: the case was fabricated, and there was 
                no evidence of any wrongdoing by Nambi Narayanan.
              </p>
              <p className="mb-4">
                The CBI report highlighted that the technology in question wasn't even classified as secret, 
                and furthermore, it couldn't have been transferred through the means alleged.
              </p>
              <p>
                Despite the CBI's findings, the Kerala government attempted to pursue the case further, 
                extending Narayanan's ordeal.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-[#138808]">
              <h3 className="text-2xl font-bold text-[#0B3D91] mb-4">The Vindication</h3>
              <p className="mb-4">
                In 1998, the Supreme Court of India dismissed all charges against Nambi Narayanan. However, true 
                vindication would take decades longer, as he fought for accountability from those who had falsely accused him.
              </p>
              <p className="mb-4">
                In 2018, the Supreme Court not only awarded him Rs. 50 lakh as compensation but also established a 
                committee to investigate the role of police officers in fabricating the case.
              </p>
              <p className="mb-4">
                In 2019, the Indian government awarded him the Padma Bhushan, the third-highest civilian honor, 
                recognizing both his contributions to India's space program and the injustice he had endured.
              </p>
              <p>
                In 2021, the CBI arrested several former police officers involved in framing him, bringing his 
                27-year fight for justice closer to conclusion.
              </p>
            </div>
            
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#0B3D91] mb-4">Personal Cost</h3>
              <p className="mb-4">
                The false case had devastating consequences for Nambi Narayanan. Beyond the direct suffering 
                of imprisonment and interrogation, he endured:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Destruction of his professional reputation as a scientist</li>
                <li>Premature end to his promising career at ISRO</li>
                <li>Severe psychological trauma affecting his entire family</li>
                <li>Financial hardship from legal battles spanning decades</li>
                <li>Public humiliation in a country he had served with distinction</li>
              </ul>
              <p>
                Despite these challenges, his determination to clear his name never wavered, becoming a 
                testament to his extraordinary character.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold text-[#0B3D91] mb-4">Media Adaptation</h3>
          <p className="mb-6">
            Nambi Narayanan's extraordinary story was adapted into the biographical film "Rocketry: The Nambi Effect" (2022), 
            directed by and starring R. Madhavan. The film brought wider recognition to his contributions and struggle for justice.
          </p>
          <a 
            href="https://www.imdb.com/title/tt9263550/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#0B3D91] hover:bg-[#072a66] text-white px-6 py-3 rounded-md transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v8m0 0v12m0-12h10m-10 0H2"></path>
            </svg>
            Learn About the Film
          </a>
        </div>
      </div>
    </section>
  );
}
