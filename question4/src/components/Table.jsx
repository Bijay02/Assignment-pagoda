import React,{useState} from "react";

const Table = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
      item.fname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

  if (data.length === 0) {
    return <p>No submitted data yet.</p>;
  }

  return (
    <div>
    <input
    type="text"
    placeholder="Search by First Name"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Date of Birth</th>
          <th>Phone Number</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.age}</td>
            <td>{item.dob}</td>
            <td>{item.phonenumber}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
