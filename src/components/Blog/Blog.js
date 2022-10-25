import React from 'react';

const Blog = () => {
  return (
    <div className="ml-10 mr-10 mt-3">
      <div
        data-theme="pastel"
        className="hero  bg-base-200 rounded-3xl mb-10 shadow-xl "
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://webintegral.com.co/wp-content/uploads/2020/09/firebase-gif.gif"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">What is cors?</h1>
            <p className="py-6 text-justify">
              CORS is the mechanism that provides the ability to alter the
              behavior of this policy, enabling you to do things like hosting
              static content at www.example.com and the backend API at
              api.example.com. This kind of request would be called a
              Cross-Origin request, as a resource from one subdomain is
              requesting a resource from another subdomain. This is all
              controlled through preflight requests that exchange a set of HTTP
              request headers and corresponding response headers collectively
              referred to as "CORS Headers", each of these headers modifies a
              different element of the Same-Origin policy to loosen the
              limitations it imposes.
            </p>
            <button className="btn btn-primary">Know More</button>
          </div>
        </div>
      </div>

      <div
        data-theme="pastel"
        className="hero bg-base-200 rounded-3xl mb-10 shadow-xl"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://raw.githubusercontent.com/SaiJeevanPuchakayala/SaiJeevanPuchakayala/master/Assets/firebase.gif"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
            <p className="py-6 text-justify">
              Indeed, Firebase is a less technical and time-saving alternative
              to writing full-fledged backend code for dynamic apps. You might
              also want to consider leveraging this tool if you eventually wish
              to host and manage your app in the cloud. Being serverless,
              Firebase removes the need to worry about the technicalities of
              cloud server configuration.
              <b>Some Firebase ALternatives are: </b> Back4App, Parse, AWS
              Amplify, backendless, Kuzzle, Supabase etc..
            </p>
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>

      <div
        data-theme="pastel"
        className="hero bg-base-200 rounded-3xl mb-10 shadow-xl"
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=790b761142134d6074c473efb2d54f261b7208bf3f6daf04&rid=giphy.gif&ct=s"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              How does the private route work?
            </h1>
            <p className="py-6">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
            <button className="btn btn-primary">Know More</button>
          </div>
        </div>
      </div>

      <div
        data-theme="pastel"
        className="hero bg-base-200 rounded-3xl mb-10 shadow-xl"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media0.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif?cid=790b761170f42d799e47ac2101169f087af67b5129f87c43&rid=giphy.gif&ct=s"
            className="max-w-sm  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              What is Node? How does Node work?
            </h1>
            <p className="py-6 text-justify">
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. <b>Working of Node.js:</b>{' '}
              Node.js accepts the request from the clients and sends the
              response, while working with the request node.js handles them with
              a single thread. To operate I/O operations or requests node.js use
              the concept of threads.
            </p>
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
