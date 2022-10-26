import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
  const coursesCategories = useLoaderData();
  return (
    <div className="flex flex-col lg:flex-row m-4">
      <div className="w-full lg:w-2/5 flex flex-col">
        {coursesCategories.map((category) => (
          <button className="btn bg-sky-600 text-white rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 mb-2">
            {category.title}
          </button>
        ))}
      </div>
      <div className="w-full lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
        {coursesCategories.map((category) => (
          <SingleCourse key={category.id} category={category}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
