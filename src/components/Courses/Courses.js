import React from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
  return (
    <div className="flex flex-col lg:flex-row m-4">
      <div className="w-full lg:w-1/4 flex flex-col">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 mb-2">
          Responsive
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 mb-2">
          Responsive
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 mb-2">
          Responsive
        </button>
      </div>
      <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
        <SingleCourse></SingleCourse>
        <SingleCourse></SingleCourse>
        <SingleCourse></SingleCourse>
        <SingleCourse></SingleCourse>
        <SingleCourse></SingleCourse>
        <SingleCourse></SingleCourse>
      </div>
    </div>
  );
};

export default Courses;
