import { Star } from "lucide-react";
import Header from "../components/Header";
import Image from "next/image";

const Products = () => {
  const contentBoxes = [
    {
      image:
        "https://utfs.io/f/XXzsu4xO0GexnWQKyrLLNqT6xi4kcdGIP5h1VlFbWA9HuMC3",
      text: "Placeholder",
      description: "Placeholder",
      icon: Star,
    },
    {
      image:
        "https://utfs.io/f/XXzsu4xO0GexnWQKyrLLNqT6xi4kcdGIP5h1VlFbWA9HuMC3",
      text: "Placeholder",
      description: "Placeholder",
      icon: Star,
    },
    {
      image:
        "https://utfs.io/f/XXzsu4xO0GexnWQKyrLLNqT6xi4kcdGIP5h1VlFbWA9HuMC3",
      text: "Placeholder",
      description: "Placeholder",
      icon: Star,
    },
    {
      image:
        "https://utfs.io/f/XXzsu4xO0GexnWQKyrLLNqT6xi4kcdGIP5h1VlFbWA9HuMC3",
      text: "Placeholder",
      description: "Placeholder",
      icon: Star,
    },
    {
      image:
        "https://utfs.io/f/XXzsu4xO0GexnWQKyrLLNqT6xi4kcdGIP5h1VlFbWA9HuMC3",
      text: "Placeholder",
      description: "Placeholder",
      icon: Star,
    },
    {
      image:
        "https://utfs.io/f/XXzsu4xO0GexnWQKyrLLNqT6xi4kcdGIP5h1VlFbWA9HuMC3",
      text: "Placeholder",
      description: "Placeholder",
      icon: Star,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Header />
      {/* Features Section */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentBoxes.map((box, index) => {
              const IconComponent = box.icon;
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
                    <div className="flex justify-center mb-4">
                      <IconComponent className="text-blue-600 w-10 h-10" />
                    </div>
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

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Want to be included on the project board?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
          Join our community and reach out to us to be a part of the journey.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Start Your Journey
          </button>
          <button className="border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
