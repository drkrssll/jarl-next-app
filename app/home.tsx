"use client";

import Image from "next/image";
import Header from "./components/Header";
import JSON from "./content.json";
import { useState } from "react";
import ScrollingCardBar from "./components/ScrollBar";

interface ContentBox {
  image: string;
  title: string;
  description: string;
  body: string;
}

const contentBoxes: ContentBox[] = JSON.contentBoxes;

const HomePage = () => {
  const [selectedBox, setSelectedBox] = useState<ContentBox | null>(null);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      <div className="pt-24 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentBoxes.map((box, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setSelectedBox(box)}
                  className="border-2 hover:border-blue-500 bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl p-6"
                >
                  <div className="flex justify-center mb-6">
                    <Image
                      src={box.image}
                      width={400}
                      height={300}
                      alt={box.title}
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {box.title}
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

      <ScrollingCardBar />

      {selectedBox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-8 relative">
            <button
              onClick={() => setSelectedBox(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <div className="flex justify-center mb-6">
              <Image
                src={selectedBox.image}
                width={400}
                height={300}
                alt={selectedBox.title}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3 text-center">
              {selectedBox.title}
            </h3>
            <p className="font-bold pb-2 text-gray-600 text-base text-center">
              {selectedBox.description}
            </p>
            <p className="text-gray-600 text-base text-center">
              {selectedBox.body}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default HomePage;
