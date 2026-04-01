
import { CiPlay1 } from 'react-icons/ci';
import BannerImg from '../assets/products/banner.png'

export default function Banner() {
  return (
    <div className="bg-linear-to-b from-white to-purple-50 px-5 md:px-10 py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="bg-blue-100 text-purple-700 p-2 inline-block rounded-full mb-3 tracking-wide">
            <div className="badge bg-purple-500 badge-xs text-sm mr-1.5"></div>New: AI-Powered Tools Available
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
            Discover premium tools to boost productivity, build smarter
            workflows, and grow your business faster with confidence.
          </p>

          <div className="flex gap-4 mt-7">
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              Explore Products
            </button>

            <button className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8">
                  <CiPlay1 />Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            className="rounded-2xl shadow-lg w-full max-w-sm"
            src={BannerImg}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}