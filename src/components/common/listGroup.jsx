import React from "react";

const ListGroup = ({
  items,
  textPropery,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textPropery]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textPropery: "name",
  valueProperty: "_id"
};

export default ListGroup;
