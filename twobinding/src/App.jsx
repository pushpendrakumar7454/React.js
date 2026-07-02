import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [para, setPara] = useState("");
  const [notes, setNotes] = useState([]);

  function submitForm(e) {
    e.preventDefault();

    if (text.trim() === "" || para.trim() === "") {
      return;
    }

    const newNote = {
      id: Date.now(),
      title: text,
      description: para,
    };

    setNotes([...notes, newNote]);

    // Input clear
    setText("");
    setPara("");
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  return (
    <div className="w-full min-h-screen bg-slate-950 p-10">
      {/* Form */}
      <div className="flex justify-center">
        <form
          onSubmit={submitForm}
          className="w-[450px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-8"
        >
          <h1 className="text-3xl font-bold text-center text-white mb-2">
            📝 Add Note
          </h1>

          <p className="text-center text-slate-400 mb-8">
            Save your important notes.
          </p>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Enter Title..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-4 text-lg bg-slate-800 border border-slate-600 rounded-lg outline-none text-white focus:border-amber-400 transition"
            />

            <textarea
              rows="4"
              placeholder="Write your description..."
              value={para}
              onChange={(e) => setPara(e.target.value)}
              className="w-full p-4 text-lg bg-slate-800 border border-slate-600 rounded-lg outline-none text-white resize-none focus:border-amber-400 transition"
            ></textarea>

            <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xl font-semibold rounded-lg hover:scale-[1.02] active:scale-95 duration-300 cursor-pointer shadow-lg">
              Add Note
            </button>
          </div>
        </form>
      </div>

      {/* Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent my-14"></div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl hover:-translate-y-1 duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white">
                {note.title}
              </h2>

              <p className="text-slate-400 mt-3 leading-7">
                {note.description}
              </p>

              <button
                onClick={() => deleteNote(note.id)}
                className="mt-8 w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-semibold active:scale-95 duration-300 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
