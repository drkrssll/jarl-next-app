import { ArrowRight } from "lucide-react";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="px-6 min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="relative px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 -z-10"></div>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text pb-2 bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Contact Me
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id risus ut nulla eleifend convallis. Nulla facilisi. Curabitur vehicula, risus vel aliquet aliquam, odio justo varius dolor, at congue odio sem eget ligula.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg">
                All Products <ArrowRight className="ml-2" />
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors flex items-center space-x-2 shadow-md">
                Project Board
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default ContactPage;
