const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Section - Logo and Description */}
          <div className="text-left md:ml-32">
            <h2 className="font-bold text-2xl mb-4">STANDARD <span className="text-amber-600">CARZ</span></h2>
            <p className="mb-4 text-xs">
              Standard Carz is the most reliable way to buy and sell used cars. Choose from over 100 fully inspected second-hand car models. Browse online and book a test drive at a Standard Carz Hub.
            </p>
            <div className="flex space-x-4 justify-start"> {/* Align social media icons to the left */}
              <a href="#"><img src="/path-to-icons/facebook-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="/path-to-icons/twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="/path-to-icons/linkedin-icon.png" alt="LinkedIn" /></a>
              <a href="#"><img src="/path-to-icons/instagram-icon.png" alt="Instagram" /></a>
            </div>
            {/* Bottom Section */}
            <div className="mt-8 text-left text-sm">
              © 2024 Standard Carz Private Limited. All rights reserved.
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:ml-32">
            {/* Left Column */}
            <div className="flex flex-col justify-between text-xs">
              <ul className="space-y-1 list-none pl-0 text-left">
                <li><a href="#" className="hover:underline">Who we are</a></li>
                <li><a href="#" className="hover:underline">FAQ's</a></li>
                <li><a href="#" className="hover:underline">How It Works</a></li>
                <li><a href="#" className="hover:underline">Inspection Process</a></li>
                <li><a href="#" className="hover:underline">Customer Reviews</a></li>
                <li><a href="#" className="hover:underline">Used Car Loan</a></li>
              </ul>
              {/* Left Button */}
              <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded inline-flex items-center mt-8">
                <span>9 703 000 702</span>
              </button>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between text-xs">
              <ul className="space-y-1 list-none pl-0 text-left">
                <li><a href="#" className="hover:underline">Work With Us</a></li>
                <li><a href="#" className="hover:underline">Car Hub Locations</a></li>
                <li><a href="#" className="hover:underline">Trade With Us</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              </ul>
              {/* Right Button */}
              <button className="hover:bg-gray-200 text-white py-2 px-4 rounded border border-gray-300 mt-8">
                Get Instant Quotes
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
