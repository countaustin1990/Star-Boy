import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";

function NavPin() {
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    // Prevent navigation if dragging
    if (isDragging) {
      e.preventDefault();
    } else {
      navigate("/home");
    }
  };

  useEffect(() => {
    if (isDragging) {
      console.log("Dragging started!");
    } else {
      console.log("Dragging ended!");
    }
  }, [isDragging]);

  return (
    <nav className="flex items-center p-4">
      <div
        id="home"
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className={`cursor-move ${isDragging ? "opacity-50" : "opacity-100"}`}
      >
        <Link
          to="/home"
          onClick={handleClick}
          className="text-white bg-gray-600 rounded-md"
        >
          <FaHome className="text-2xl text-blue-500"/>
        </Link>
      </div>
    </nav>
  );
}

export default NavPin;
