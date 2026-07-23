import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wider">
              Welcome
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4 leading-tight">
              Build Amazing
              <span className="text-blue-600"> React </span>
              Projects
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              Learn React, Tailwind CSS and modern web development by creating
              beautiful and responsive applications. Practice with projects and
              improve your frontend skills.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Get Started
              </button>

              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
              alt="Developer"
              className="rounded-3xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">
            <div className="text-5xl mb-5">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Fast Learning</h3>
            <p className="text-gray-600">
              Understand React concepts with practical examples and modern UI.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">
            <div className="text-5xl mb-5">🎨</div>
            <h3 className="text-2xl font-bold mb-3">Beautiful Design</h3>
            <p className="text-gray-600">
              Responsive layouts built using Tailwind CSS and best practices.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">
            <div className="text-5xl mb-5">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Real Projects</h3>
            <p className="text-gray-600">
              Build portfolio-ready projects and improve your frontend skills.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="mt-2">Students</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="mt-2">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="mt-2">Support</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">4.9★</h2>
            <p className="mt-2">Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
