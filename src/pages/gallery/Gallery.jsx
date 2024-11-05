import { useState } from 'react';
import Card from '../../components/card/Card'; // Adjust the path as necessary
import Layout from '../../components/layout/Layout'; // Ensure proper casing
import NavPin from '../../components/navpin/NavPin';
//import Footer from '../../components/footer/Footer'; // Import your Footer component

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
        <Layout>
            <NavPin />
            <div style={{ display: 'flex', flexDirection: 'column', height: '100svh' }}>
                 <div style={{ position: 'relative', flexGrow: 1 }}>
                    {notes.map(({ id, ...noteProps }) => (
                        <Card 
                            key={id}
                            note={{ id, ...noteProps }}
                            onRemove={() => removeNote(id)}
                            onUpdatePosition={newPosition => updatePosition(id, newPosition)}
                        />
                    ))}
                </div>
               {/* <Footer />  Ensure your Footer is at the bottom */}
            </div>
        </Layout>
    );
};

export default Gallery;