import { useState, useRef, useEffect } from 'react';
//import './style.css'; // Ensure this file is in the same directory or adjust the path accordingly
import { FaTrash } from 'react-icons/fa'; // Import the trash bin icon

const Card = () => {
  const [color, setColor] = useState('#e6b905');
  const [notes, setNotes] = useState([]);
  const noteRefs = useRef([]);
  const cursorRef = useRef({ x: null, y: null });
  const noteRef = useRef({ dom: null, x: null, y: null });

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      borderColor: color
    };
    setNotes([...notes, newNote]);
  };

  const handleRemoveNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleMouseDown = (event, id) => {
    const noteElement = noteRefs.current[id];
    cursorRef.current = { x: event.clientX, y: event.clientY };
    noteRef.current = {
      dom: noteElement,
      x: noteElement.getBoundingClientRect().left,
      y: noteElement.getBoundingClientRect().top
    };
  };

  const handleMouseMove = (event) => {
    if (noteRef.current.dom === null) return;
    const currentCursor = { x: event.clientX, y: event.clientY };
    const distance = {
      x: currentCursor.x - cursorRef.current.x,
      y: currentCursor.y - cursorRef.current.y
    };
    noteRef.current.dom.style.left = `${noteRef.current.x + distance.x}px`;
    noteRef.current.dom.style.top = `${noteRef.current.y + distance.y}px`;
    noteRef.current.dom.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    if (noteRef.current.dom === null) return;
    noteRef.current.dom.style.cursor = 'auto';
    noteRef.current.dom = null;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <main className='bg-slate-900'>
      <form onSubmit={(e) => e.preventDefault()} className='bg-slate-500'>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="button" id="createBtn" onClick={handleAddNote}>
          +
        </button>
      </form>
      <div id="list">
        {notes.map((note) => (
          <div
            key={note.id}
            ref={(el) => (noteRefs.current[note.id] = el)}
            className="note bg-slate-400"
            style={{ borderColor: note.borderColor, position: 'absolute' }}
            onMouseDown={(e) => handleMouseDown(e, note.id)}
          >
            <span className="close" onClick={() => handleRemoveNote(note.id)}>
              <FaTrash className='mt-2 text-2x1 text-gray-600'/>
            </span>
            <textarea placeholder="Write Content..." rows="10" cols="30"></textarea>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Card;
