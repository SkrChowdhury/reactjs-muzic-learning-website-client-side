import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const courses = useLoaderData();
  console.log(courses[0]);
  return (
    <div className='flex justify-center m-10'>
      <div className="card w-96 glass">
        <figure>
          <img src={courses[0].image_url} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {courses[0].title}</h2>
          <p>{courses[0].details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
