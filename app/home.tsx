import Image from "next/image";
import Header from "./components/Header";
import JSON from "./content.json";

const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      {/* Features Section */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JSON.contentBoxes.map((box, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl p-6"
                >
                  <div className="flex justify-center mb-6">
                    <Image
                      src={box.image}
                      width={400}
                      height={300}
                      alt={box.text}
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {box.text}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {box.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
