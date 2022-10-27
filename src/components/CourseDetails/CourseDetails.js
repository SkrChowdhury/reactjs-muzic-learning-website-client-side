import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../images/MUZIC.png';

const CourseDetails = () => {
  const courses = useLoaderData();
  console.log(courses[0]);
  return (
    <div>
      <div data-theme={'aqua'} className="navbar bg-base-100">
        <div className="navbar-start">
          <img className="w-10" src={logo} />
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Download PDF</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
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
              GET PREMIUM ACCESS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
