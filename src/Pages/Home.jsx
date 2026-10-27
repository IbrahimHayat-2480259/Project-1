import StudentCard from "../components/StudentCard";

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Student Directory</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <StudentCard name="Zakir" id={101} major="CS" />
        </div>
        <div className="col-md-4 mb-4">
          <StudentCard name="Zubair" id={102} major="SE" />
        </div>
      </div>
    </div>
  );
}
export default Home;