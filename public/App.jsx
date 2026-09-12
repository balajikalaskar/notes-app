import react, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/api/get-notes");
    setNotes(res.data.notes);
  };

  useEffect(() => {
    getData();
  }, []);

const handleInput = (e)=>{
  e.preventDefault();
  const {title,description}= e.target.elements;

   axios.post('http://localhost:5000/api/create-note', {
    title: title.value, 
    description: description.value
  })
  .then((res) => {
    console.log(res.data);
    getData();
    e.target.reset(); 
  })
}


const handleDeleteNote = (id) => {
  axios.delete("/api/delete-note/" + id)
    .then((res) => { 
      console.log(res.data);
      getData();
    })
};


  return (
    <div>
      <div>
        <form action="" onSubmit={handleInput} className="flex gap-[1vw] p-3">
          <input
            type="text" required
            placeholder="Title"
            name="title"
            className="border rounded-md p-3"
          />
          <input
            type="text" required
            placeholder="Description"
            name="description"
            className="border rounded-md p-3 "
          />
          <input
            type="submit"
            className="border rounded-md p-2 cursor-pointer"
          />
        </form>
      </div>
      <div className="flex gap-5 p-[3vh]">
        {notes.map((elem) => {
          return (
            <div className="rounded border gap-1.5 p-2">
              <h1>{elem.title} </h1>
              <h1>{elem.description} </h1>
              <button className="border rounded-md p-1 bg-red-500"
                onClick={() => {
                  handleDeleteNote(elem._id);
                }}
              >
                Delete Note
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
