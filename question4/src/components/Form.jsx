import React, { useState } from "react";
import Table from "./Table";


const Form = () => {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    age: "",
    dob: "",
    phonenumber: "",
    gender: "",
    genderOptions: ["Male", "Female"], 
    submittedData: [],
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const isChecked = checked;
      const selectedGender = event.target.value;
      setInputs((prevInputs) => ({
        ...prevInputs,
        gender: isChecked ? selectedGender : "",
      }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = [...inputs.submittedData, inputs];
    setInputs({
      fname: "",
      lname: "",
      age: "",
      dob: "",
      phonenumber: "",
      gender: "",
      genderOptions: inputs.genderOptions,
      submittedData,
    });
    console.log(submittedData);
  };

  return (
    <div>
      <p>Hello</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your firstname:
          <input
            type="text"
            name="fname"
            value={inputs.fname || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your lastName:
          <input
            type="text"
            name="lname"
            value={inputs.lname || ""}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Enter your age:
          <input
            type="text"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <br />

        <label >
          Enter your dateofbirth:
          <input
            type="date"
            name="dob"
            value={inputs.dob || ""}
            onChange={handleChange}
          />
        </label>
        <br />

        <label >
          Enter your phonenumber:
          <input
            type="text"
            name="phonenumber"
            value={inputs.phonenumber || ""}
            onChange={handleChange}
          />
        </label>

        <br />

        <p>Enter your Gender</p>
        <input
          type="radio"
          name="gender"
          id="male"
          placeholder=""
          onChange={handleChange}
        />
        <label for="male">Male</label>
        <br />
        <input
          type="radio"
          name="gender"
          id="female"
          placeholder=""
          onChange={handleChange}
        />
        <label for="female">Female</label>
        <br />

        <input type="submit" />
      </form>
      <h2>Submitted Data</h2>
      <Table data={inputs.submittedData} />
    </div>
  );
};

export default Form;
