import Image from 'next/image';
import { notFound } from 'next/navigation';
import JSON from '@/app/content.json';
import Header from '@/app/components/Header';
import ScrollBar from '@/app/components/ScrollBar';

interface ContentPageProps {
  params: { id: string };
}

export default function ContentPage({ params }: ContentPageProps) {
  const id = parseInt(params.id, 10);

  if (isNaN(id) || id < 0 || id >= JSON.contentBoxes.length) {
    notFound();
  }

  const content = JSON.contentBoxes[id];

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center pt-24 px-4">
        <div className="w-full max-w-2xl space-y-6">
          <div className="mb-6 shadow-lg relative w-full max-w-2xl mx-auto h-[400px]"> {/* Adjust height as needed */}
            <Image
              src={content.image}
              alt={content.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl text-gray-600 font-bold mb-4">{content.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{content.description}</p>
          </div>
          <div className="text-gray-600 max-w-full">
            <p>{content.body}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ScrollBar />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return JSON.contentBoxes.map((_, index) => ({
    id: index.toString()
  }));
}
