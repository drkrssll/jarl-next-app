import Header from "../components/Header";
import PostItNote from "../components/Note";

const Board = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="px-6 min-h-screen flex flex-wrap  items-center justify-center bg-white">
        <PostItNote>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam.
          </p>
        </PostItNote>
      </main>
    </div>
  );
}

export default Board;
