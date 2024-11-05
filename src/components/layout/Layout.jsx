// src/components/Layout.jsx
import PropTypes from 'prop-types'; // Import PropTypes

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {children} {/* Render children */}
    </div>
  );
};

// Define prop types for Layout component
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required
};

export default Layout;
