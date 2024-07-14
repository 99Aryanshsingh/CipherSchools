import { Link } from "react-router-dom";

const LibrarianHomeScreen = () => {
  return (
    <>
      <h1>Welcome Librarian</h1>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">
              <Link to={"/add-book"}>Add new books</Link>
            </div>
            <div className="description">
              Add a new Book in the library.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">
              <Link to={"/books"}>List of books</Link>
            </div>
            <div className="description">
              See the list of all the  books in the library.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">
              <Link to={"/book-issue"}>Issue a books</Link>
            </div>
            <div className="description">
              Issue books to student.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="header">
              <Link to={"/book-issue-list"}>Show issued books</Link>
            </div>
            <div className="description">
              To fetch the list of issued books.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibrarianHomeScreen;
