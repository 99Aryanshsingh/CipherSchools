import { useEffect, useState } from "react";
import { getBookIssueList } from "../apis/book-issue-api";
const dateFormatter=new Intl.DateTimeFormat("en-IN",{
    month:"long",
    year:"numeric",
    day:"numeric",
})

const formatDate=(date)=>dateFormatter.format(date);

const BookIssueScreen=()=>{
    const[bookIssueList,setBookIssueList]=useState([]);
    const[selectedStatus,setSelectedStatus]=useState("ISSUED");

    useEffect(()=>{
        getBookIssueList(selectedStatus).then((list)=>{
            setBookIssueList(list);
        })
    },[selectedStatus])

    return (
        <section className="app-section">
          <h1>List of all the books in the library.</h1>
          <table className="ui single line table">
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Student ID</th>
                <th>Issued Date</th>
              </tr>
            </thead>
            <tbody>
              {bookIssueList.map((bookIssue) => {
                return (
                  <tr>
                    <td>{bookIssue.bookIsbn}</td>
                    <td>{bookIssue.issuedTo}</td>
                    <td>{new Date(formatDate(bookIssue.createdAt))}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      );
}

export default BookIssueScreen;