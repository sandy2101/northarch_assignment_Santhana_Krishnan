import React from "react";

const ReadOnlyRow = ({ detail, HandleEditClick, HandleDeleteClick }) => {
  return (
    <tr>
      <td>{detail.fullname}</td>
      <td>{detail.location}</td>
      <td>{detail.phoneNumber}</td>
      <td>{detail.email}</td>
      <td>
        <button type="button" onClick={(e) => HandleEditClick(e, detail)}>
          Edit
        </button>
        <button type="button" onClick={() => HandleDeleteClick(detail.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
