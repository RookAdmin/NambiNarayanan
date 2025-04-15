export default function Footer() {
  return (
    <footer className="bg-[#0B3D91] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About This Tribute</h3>
            <p className="mb-4">
              This tribute website was created to honor the contributions of Nambi Narayanan to India's 
              space program and to highlight his extraordinary fight for justice.
            </p>
            <p>
              All information presented has been sourced from publicly available materials and verified for accuracy.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">For corrections, suggestions, or additional information:</p>
            <p className="mb-4">
              <a href="mailto:contact@nambitribute.org" className="hover:text-[#FF9933] transition-colors">
                contact@nambitribute.org
              </a>
            </p>
            <p>This site is maintained by volunteers dedicated to preserving scientific legacy.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Citations</h3>
            <p className="mb-2">
              All content is sourced from verified publications, court documents, and interviews.
            </p>
            <p>
              For academic purposes, please refer to the original sources listed in the Resources section.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="text-white mr-2">Powered by</span>
            <img 
              src="/images/realmbyRook_logo.webp" 
              alt="RealmByRook" 
              className="h-10 hover:opacity-90 transition-opacity"
            />
          </div>
          <p>&copy; {new Date().getFullYear()} Nambi Narayanan Tribute. All rights reserved.</p>
          <p className="mt-2 text-sm">This website is not affiliated with ISRO or any government agency.</p>
        </div>
      </div>
    </footer>
  );
}
