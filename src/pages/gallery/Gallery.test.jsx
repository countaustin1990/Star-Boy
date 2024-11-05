import { useState } from 'react';
import Card from '../../components/card/Card'; // Adjust the path as necessary

const Gallery = () => {
    const [notes, setNotes] = useState([
        { id: '1', color: 'lightblue', left: 100, top: 100, content: 'Note 1' },
        { id: '2', color: 'lightgreen', left: 200, top: 200, content: 'Note 2' },
    ]);

    const removeNote = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    };

    const updatePosition = (id, newPosition) => {
        setNotes(prevNotes => 
            prevNotes.map(note => 
                note.id === id ? { ...note, ...newPosition } : note
            )
        );
    };

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            {notes.map(({ id, ...noteProps }) => (
                <Card 
                    key={id}
                    note={{ id, ...noteProps }}
                    onRemove={() => removeNote(id)}
                    onUpdatePosition={newPosition => updatePosition(id, newPosition)}
                />
            ))}
        </div>
    );
};

export default Gallery;
