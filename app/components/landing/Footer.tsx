export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-4 text-gray-400">
            We provide daily Stoic insights and actionable advice to help you
            live a better life.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Facebook
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © 2024 Stoic Drops. All rights reserved.
      </div>
    </footer>
  );
};
