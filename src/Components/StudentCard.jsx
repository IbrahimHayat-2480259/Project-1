function StudentCard({ name, id, major }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">ID: {id}</p>
        <p className="card-text">Major: {major}</p>
        <button className="btn btn-primary">Explore</button>
      </div>
    </div>
  );
}
export default StudentCard;