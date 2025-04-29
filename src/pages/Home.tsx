import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home-page text-center p-6">
      <div className="banner bg-gray-200 p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-4">
          Hi, I'm [Your Name], a passionate student of Applied Electronics-ICT.
          Explore my projects, achievements, and professional journey.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn More About Me
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded ml-4 hover:bg-green-600">
          View My Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
