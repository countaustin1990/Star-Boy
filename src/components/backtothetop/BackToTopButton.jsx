import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = ({ color = 'bg-blue-500', hoverColor = 'bg-blue-600' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-8 ${color} text-white w-12 h-12 rounded-full shadow-md flex justify-center items-center transition duration-200 z-50 hover:${hoverColor}`}
          aria-label="Back to top"
        >
          <FaArrowUp className="text-xl text-white" />
        </button>
      )}
    </>
  );
};

BackToTopButton.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default BackToTopButton;
