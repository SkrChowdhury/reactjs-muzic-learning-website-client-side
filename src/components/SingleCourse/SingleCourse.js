import { Link } from 'react-router-dom';

const SingleCourse = ({ category }) => {
  const { category_id } = category;
  return (
    <div>
      <div
        data-theme="forest"
        className="card w-full bg-base-100 shadow-xl image-full"
      >
        <figure>
          <img className="w-full" src={category.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.title}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <Link to={`/courses/${category_id}`} className="btn btn-primary">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
