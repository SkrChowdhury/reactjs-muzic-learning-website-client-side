import React from 'react';

const Home = () => {
  return (
    <div>
      <div
        data-theme="coffee"
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://j.gifs.com/KeBY2b.gif")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Music Fundamentals Courses
            </h1>
            <p className="mb-5">
              Our teachers and students love these online resources that offer
              free and fun activities for learning in the classroom or making
              music at home.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
