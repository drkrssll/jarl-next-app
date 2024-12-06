"use client";

import Image from "next/image";
import Header from "./components/Header";
import JSON from "./content.json";
import Link from "next/link";
import { ContentBox } from "./types/content";

const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      <div className="pt-24 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JSON.contentBoxes.map((content: ContentBox, index: number) => (
              <Link
                key={index}
                href={`/content/${index}`}
                className="border-2 hover:border-blue-500 bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl p-6"

              >
                <div className="flex justify-center mb-6">
                  <Image
                    src={content.image}
                    width={400}
                    height={300}
                    alt={content.title}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {content.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
