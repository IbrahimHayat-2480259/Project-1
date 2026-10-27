function Courses() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Our Courses</h1>
      
      <div className="row">
        {/* Course 1 */}
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Computer Science (CS)</h5>
              <p className="card-text">
                Learn programming, algorithms, and the fundamentals of computing.
              </p>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Software Engineering (SE)</h5>
              <p className="card-text">
                Master software design, architecture, and development methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;