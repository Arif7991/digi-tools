export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14">
      <div className="max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white">BigTools</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Premium digital tools designed to boost productivity and workflow
            efficiency for professionals and businesses.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Tools</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Reviews</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Follow</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} BigTools. All rights reserved.
      </div>
    </footer>
  );
}