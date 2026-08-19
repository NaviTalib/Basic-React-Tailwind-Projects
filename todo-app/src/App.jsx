import  Button  from "./components/Button";
import react, {useState} from "react";

const App = () => {
  const [text,setText] = useState("");
  const [notes,setNotes] = useState([]);

  const handleAddNote = (e) =>{
    e.preventDefault();
    if(!text.trim()) return;
    setNotes([...notes,text]);
    setText("");
  }
  const handleDeleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="flex justify-center  h-screen">
      <div className="mt-5 flex flex-col jus shadow bg-white rounded w-100 h-fit p-8">
        <span className="text-2xl font-bold">Todo<span className="bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">HERE</span></span>
        <form className="flex justify-between mt-4" onSubmit={handleAddNote}>
          <input type="text"
          placeholder="enter text here......"
          value = {text}
          onChange ={(e) => setText(e.target.value)}
          className="border-2 py-2 px-4 rounded-xl "
          />
            <Button label="Add" type="submit" />
        </form>
        <ul className="mt-4 ml-2">
            {notes.map((note,index)=>{
              return <li className="flex justify-between border-b-1 border-gray-300 p-1 font-mono italic"  key={index}><span>{note}</span>
              <button
                  onClick={() => handleDeleteNote(index)}
                  className="ml-4 text-red-500 hover:text-red-700 text-sm font-semibold not-italic"
                >
                  Delete
                </button>
              </li>
            })}
        </ul>
      </div>
    </div>
  )
}

export default App