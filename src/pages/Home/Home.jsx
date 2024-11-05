import { FaUsers, FaRocket, FaRegSmile } from 'react-icons/fa';
import './style.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Amazing Service
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the best way to manage your projects with our interactive tools.
          </p>
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUsers className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">
                Work together seamlessly with real-time updates and notifications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaRocket className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600">
                Experience lightning-fast load times and smooth interactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaRegSmile className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
              <p className="text-gray-600">
                Enjoy an intuitive design that makes navigation a breeze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-4 mb-4 md:mb-0">
              <p className="italic">This service has transformed the way we work!</p>
              <h4 className="font-bold mt-4">– John Doe</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-4 mb-4 md:mb-0">
              <p className="italic">The best tool for managing projects I have ever used.</p>
              <h4 className="font-bold mt-4">– Jane Smith</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">
            Join thousands of satisfied users and take your projects to the next level.
          </p>
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
