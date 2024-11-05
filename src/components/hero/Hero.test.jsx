const Hero = () => {
  return (
    <div className="bg-indigo-900 text-white py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Drag and Drop Made Easy
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experience the simplicity and efficiency of drag-and-drop interactions in your applications. 
          Easily move items around with just a click and a drag!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center bg-white text-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">Seamless Integration</h2>
            <p>
              Integrate drag-and-drop functionality into your projects without hassle. 
              Ideal for list management, content organization, and much more.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">User-Friendly Experience</h2>
            <p>
              Enhance user experience with intuitive drag-and-drop interactions that allow users to 
              customize their layouts effortlessly.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">Real-Time Updates</h2>
            <p>
              Make real-time updates to your UI as items are dragged and dropped. 
              Keep your users engaged with dynamic interactions!
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">Cross-Platform Support</h2>
            <p>
              Enjoy seamless drag-and-drop functionality across all devices and browsers, 
              ensuring a consistent experience for all users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
