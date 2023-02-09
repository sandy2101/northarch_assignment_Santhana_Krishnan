import "./App.css";
import { nanoid } from "nanoid";
import React, { useState, Fragment } from "react";
import data from "./api-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditRow from "./components/EditRow";

function App() {
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...details].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      SetDetails(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...details].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      SetDetails(sorted);
      setOrder("ASC");
    }
  };

  const [details, SetDetails] = useState(data);
  const [addForm, setAddForm] = useState({
    fullname: "",
    location: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullname: "",
    location: "",
    phoneNumber: "",
    email: "",
  });

  const [editDetailId, setEditDetailId] = useState(null);

  const HandleAddForm = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addForm };
    newFormData[fieldName] = fieldValue;
    setAddForm(newFormData);
  };
  const HandleEditFormSubmit = (e) => {
    e.preventDefault();
    const editedDetail = {
      id: editDetailId,
      fullname: editFormData.fullname,
      location: editFormData.location,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    const newDetails = [...details];
    const index = details.findIndex((detail) => detail.id === editDetailId);
    newDetails[index] = editedDetail;
    SetDetails(newDetails);
    setEditDetailId(null);
  };

  const HandleEditForm = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const HandleAddFormSubmit = (e) => {
    e.preventDefault();
    const newdetail = {
      id: nanoid(),
      fullname: addForm.fullname,
      location: addForm.location,
      phoneNumber: addForm.phoneNumber,
      email: addForm.email,
    };
    const newdetails = [...details, newdetail];
    SetDetails(newdetails);
  };

  const HandleEditClick = (e, detail) => {
    e.preventDefault();
    setEditDetailId(detail.id);
    const formValues = {
      fullname: detail.fullname,
      location: detail.location,
      phoneNumber: detail.phoneNumber,
      email: detail.email,
    };
    setEditFormData(formValues);
  };

  const HandleCancelClick = () => {
    setEditDetailId(null);
  };

  const HandleDeleteClick = (detailId) => {
    const newDetails = [...details];
    const index = details.findIndex((detail) => detail.id === detailId);
    newDetails.splice(index, 1);
    SetDetails(newDetails);
  };

  return (
    <div className="app-container">
      <form onSubmit={HandleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th onClick={() => sorting("fullname")}>Name</th>
              <th onClick={() => sorting("location")}>Location</th>
              <th onClick={() => sorting("phoneNumber")}>Number</th>
              <th onClick={() => sorting("email")}>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail) => (
              <Fragment>
                {editDetailId === detail.id ? (
                  <EditRow
                    editFormData={editFormData}
                    HandleEditForm={HandleEditForm}
                    HandleCancelClick={HandleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    detail={detail}
                    HandleEditClick={HandleEditClick}
                    HandleDeleteClick={HandleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add Details</h2>
      <form onSubmit={HandleAddFormSubmit}>
        <input
          type="text"
          name="fullname"
          required="required"
          placeholder="Enter a name..."
          onChange={HandleAddForm}
        />
        <input
          type="text"
          name="location"
          required="required"
          placeholder="Enter a location..."
          onChange={HandleAddForm}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a Phone Number..."
          onChange={HandleAddForm}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={HandleAddForm}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
