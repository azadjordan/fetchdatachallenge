import React from "react";

const ListItems = ({ listItems }) => {
  return (
    <table>
      <tbody>
        {listItems.map((object, index) => {
          const values = Object.values(object);
          return (
            <tr key={index}>
              {values.map((value, i) => {
                let stringValue = value;
                if (typeof value === "object") {
                  stringValue = JSON.stringify(value);
                }
                return <td key={i}>{stringValue}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListItems;
