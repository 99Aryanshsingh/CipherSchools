import { useEffect, useState } from "react";
import Select from "react-select";
import { getAllStudents } from "../apis/user-api";
import { getAllBooks } from "../apis/book-api";
import { addNewBookIssue } from "../apis/book-issue-api";
import { useNavigate, useLocation } from "react-router-dom";

const BookIssueForm = () => {
  const [bookIssue, setBookIssue] = useState({
    issuedTo: "",
    bookIsbn: "",
  });

  const [bookOptions, setBookOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getAllStudents().then((studentList) => {
      setStudentOptions(
        studentList.map((student) => {
          return {
            value: student._id,
            label: `${student.firstName} ${student.lastName}`,
          };
        })
      );
    });
    getAllBooks().then((bookList) => {
      setBookOptions(
        bookList.map((book) => {
          return {
            value: book.isbn,
            label: `${book.title} by ${book.author}`,
          };
        })
      );
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewBookIssue(bookIssue);
    navigate("/");
  };

  return (
    <section className="app-section">
      <h1>Add a new Book.</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Students</label>
          <Select
            options={studentOptions}
            defaultInputValue="Select Student"
            isSearchable={true}
            onChange={({ value }) => {
              setBookIssue({ ...bookIssue, bookIsbn: value });
            }}
          />
        </div>
        <div className="field">
          <label>Books</label>
          <Select
            options={bookOptions}
            isSearchable={true}
            onChange={({ value }) => {
              setBookIssue({ ...bookIssue, bookIsbn: value });
            }}
            value={bookOptions.filter((option)=>option.value===location?.state?.isbn)}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookIssueForm;
