import React from "react";

const EditRow = ({ editFormData, HandleEditForm, HandleCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullname"
          required="required"
          placeholder="Enter a name..."
          value={editFormData.fullname}
          onChange={HandleEditForm}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="location"
          required="required"
          placeholder="Enter a location..."
          value={editFormData.location}
          onChange={HandleEditForm}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a Phone Number..."
          value={editFormData.phoneNumber}
          onChange={HandleEditForm}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email..."
          value={editFormData.email}
          onChange={HandleEditForm}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={HandleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditRow;
