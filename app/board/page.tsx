import Header from "../components/Header";
import PostItNote from "../components/Note";
import JSON from "../content.json"

const Board = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main className="pt-24 pb-8 px-6 min-h-screen flex items-center justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center place-content-center w-full max-w-5xl">
          {JSON.postItNotes.map((note, index) => (
            <PostItNote key={index} rotation={note.rotation}>
              <h2 className="text-xl">{note.title}</h2>
              <p>{note.content}</p>
            </PostItNote>
          ))}
        </div>
      </main>

      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Want to be included on the project board?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
          Reach out to us with a title and description of your project to be included.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>

    </div>
  );
}

export default Board;
