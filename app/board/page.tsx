import Header from "../components/Header";
import PostItNote from "../components/Note";
import JSON from "../content.json"

const Board = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Header />

      <main className="pt-4 flex-grow flex flex-col items-center justify-center px-6 py-8">
        {/* Button centered on larger screens with conditional padding */}
        <div className="w-full max-w-md sm:pb-8 sm:pt-24 md:pb-8 md:pt-24 lg:pt-0">
          <button
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md 
                       hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 
                       focus:ring-blue-300 transition-all duration-300 mx-auto block"
          >
            <a href="mailto:example@example.com" className="text-white">
              Send your project idea
            </a>
          </button>
        </div>

        {/* Notes layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 
                        place-items-center place-content-center w-full max-w-5xl">
          {JSON.postItNotes.map((note, index) => {
            const rotation = (Math.random() * 6 - 3).toFixed(1);
            const translateX = (Math.random() * 20 - 10).toFixed(1);
            const translateY = (Math.random() * 20 - 10).toFixed(1);
            return (
              <PostItNote
                key={index}
                style={{
                  transform: `rotate(${rotation}deg) 
                             translate(${translateX}px, ${translateY}px)`
                }}
              >
                <h2 className="text-xl">{note.title}</h2>
                <p>{note.body}</p>
              </PostItNote>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Board;
