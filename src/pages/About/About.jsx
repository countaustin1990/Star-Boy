import { FaUsers } from 'react-icons/fa'; // Importing an icon for visual appeal

const About = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        <FaUsers className="inline-block text-blue-500 mr-2" /> About Us
      </h1>
      <p className="mt-4 text-gray-600 text-lg text-center">
        This page showcases the drag-and-drop feature for grouping elements using React and Tailwind CSS.
        Easily organize and manage elements with our interactive drag-and-drop functionality.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to provide seamless user experiences by integrating modern web technologies.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Interactive drag-and-drop interface</li>
          <li>Responsive design for all devices</li>
          <li>User-friendly management of elements</li>
        </ul>
      </div>
      <div className="mt-6 text-center">
        {/*<button className="bg-blue-500 text-white font-semibold p-5 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Learn More
        </button>*/}
      </div>
    </div>
  );
};

export default About;
