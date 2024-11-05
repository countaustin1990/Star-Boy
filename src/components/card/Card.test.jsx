import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const Card = ({ note, onRemove, onUpdatePosition }) => {
    const noteRef = useRef(null);

    useEffect(() => {
        if (noteRef.current) {
            noteRef.current.style.left = `${note.left}px`;
            noteRef.current.style.top = `${note.top}px`;
        }
    }, [note.left, note.top]);

    return (
        <div
            ref={noteRef}
            className="note"
            style={{
                position: 'absolute',
                left: note.left,
                top: note.top,
                backgroundColor: note.color,
                borderColor: note.color
            }}
            onMouseDown={() => onUpdatePosition(note.id)}
        >
            <span className="close" onClick={() => onRemove(note.id)}>
                <FaTrash />
            </span>
            <textarea placeholder="Write Content..." rows="10" cols="30">
                {note.content}
            </textarea>
        </div>
    );
};

Card.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        left: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired,
        content: PropTypes.string
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdatePosition: PropTypes.func.isRequired
};

export default Card;
