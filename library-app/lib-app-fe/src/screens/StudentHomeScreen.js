import { Link } from "react-router-dom";
const StudentHomeScreen = () => {
  return (
    <>
      <h1>Welcome STUDENT</h1>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">
              <Link to={"/books"}>List of books</Link>
            </div>
            <div className="description">
              See the list of all the books in the library.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHomeScreen;
