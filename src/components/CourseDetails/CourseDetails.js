import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const courses = useLoaderData();
  console.log(courses[0]);
  return (
    <div className="flex justify-center m-10">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={courses[0].image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {courses[0].title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{courses[0].details}</p>
          <div className="card-actions justify-start items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={courses[0].instructor.img} />
              </div>
            </div>
            <div className="badge badge-outline">
              {courses[0].instructor.name}
            </div>
            <div className="badge badge-outline">{courses[0].rating}</div>
            <div className="badge badge-outline">
              {courses[0].total_students} Students
            </div>
          </div>
          <Link
            to={`/checkout/${courses[0].category_id}`}
            className="btn btn-success"
          >
            Checkout now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
