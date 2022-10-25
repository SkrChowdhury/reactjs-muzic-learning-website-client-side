import React from 'react';

const FAQ = () => {
  return (
    <div>
      <div
        data-theme="synthwave"
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4"
      >
        <div className="collapse-title text-xl font-medium">
          How do I take a Muzic course?
        </div>
        <div className="collapse-content">
          <p>
            Muzic courses are entirely on-demand and they can be accessed from
            several different devices and platforms, including a desktop,
            laptop, and our mobile app.{' '}
          </p>
        </div>
      </div>
      <div
        data-theme="synthwave"
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4"
      >
        <div className="collapse-title text-xl font-medium">
          Do I have to start my Muzic course at a certain time? And how long do
          I have to complete it?
        </div>
        <div className="collapse-content">
          <p>
            There are no deadlines to begin or complete a course. Learn more
            about our Lifetime Access policy.
          </p>
        </div>
      </div>
      <div
        data-theme="synthwave"
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4"
      >
        <div className="collapse-title text-xl font-medium">
          Is there any way to preview a course?
        </div>
        <div className="collapse-content">
          <p>
            Yes! Learn how to preview a course, and review key information about
            it. This article outlines how you can search Muzic’s ever-growing
            library, and find courses you’re interested in taking.
          </p>
        </div>
      </div>
      <div
        data-theme="synthwave"
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4"
      >
        <div className="collapse-title text-xl font-medium">
          How can I pay for a course?
        </div>
        <div className="collapse-content">
          <p>
            Muzic supports several different payment methods, depending on your
            account country and location.{' '}
          </p>
        </div>
      </div>
      <div
        data-theme="synthwave"
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-4"
      >
        <div className="collapse-title text-xl font-medium">
          Where can I go for help?
        </div>
        <div className="collapse-content">
          <p>
            If you find you have a question about a paid course while you’re
            taking it, you can search for answers to your question in the Q&A or
            ask the instructor. Our Help Center has extensive information
            regarding Muzic's various features, and articles with
            troubleshooting steps to help you quickly resolve any issues you
            encounter. Our support team is also happy to help.
          </p>
        </div>
      </div>

      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://timelinecovers.pro/facebook-cover/download/music-headphones-facebook-cover.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://timelinecovers.pro/facebook-cover/download/music-14-facebook-cover.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://timelinecovers.pro/facebook-cover/download/music-guitar-facebook-cover.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://timelinecovers.pro/facebook-cover/download/playing-the-guitar-facebook-cover.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
