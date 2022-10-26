

const SingleCourse = ({ category }) => {
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
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
