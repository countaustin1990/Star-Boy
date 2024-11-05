import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import Card from '../../components/card/Card';
import Layout from '../../components/layout/Layout';


const Jallery = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState('light'); // Track theme
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

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <Layout>
            <div 
                style={{ position: 'relative', height: '100vh' }}
                className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} // Apply theme
            >
                {/* Icon to navigate to Home */}
                <div 
                    onClick={() => navigate('/home')}
                    className="absolute top-4 left-4 cursor-pointer text-blue-500 hover:text-blue-600 transition duration-200"
                >
                    <FaHome size={30} />
                </div>

                {/* Theme toggle button */}
                <div 
                    onClick={toggleTheme}
                    className="absolute top-4 right-4 cursor-pointer text-blue-500 hover:text-blue-600 transition duration-200"
                >
                    {theme === 'light' ? <FaMoon size={30} /> : <FaSun size={30} />}
                </div>

                {notes.map(({ id, ...noteProps }) => (
                    <Card 
                        key={id}
                        note={{ id, ...noteProps }}
                        onRemove={() => removeNote(id)}
                        onUpdatePosition={newPosition => updatePosition(id, newPosition)}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Jallery;
