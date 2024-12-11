"use client"

import { CameraIcon, MailIcon } from "lucide-react";
import Header from "../components/Header";

const ContactPage = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/iwishiwasgreat', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:example@example.com';
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      <main className="px-6 min-h-screen flex flex-col items-center justify-center">
        <div className="relative px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 -z-10"></div>
          <div className="max-w-4xl mx-auto">
            <h1 className="pb-6 text-5xl font-extrabold text-blue-600 dark:text-blue-600 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-500 ">
              Contact Me
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Consectetur adipiscing elit. Phasellus id risus ut nulla eleifend convallis. Nulla facilisi. Curabitur vehicula, risus vel aliquet aliquam, odio justo varius dolor, at congue odio sem eget ligula.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleInstagramClick}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <CameraIcon className="w-6 h-6 mr-2" />
                Instagram
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-white text-blue-600 px-8 py-3 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors flex items-center space-x-2 shadow-md"
              >
                <MailIcon className="w-6 h-6 mr-2" />
                Email
              </button>            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default ContactPage;
