import React from "react";

const OtherItems = ({ otherItems }) => {
  return (
    <div className="otheritems">
        
      {/* Render the otherItems */}
      {otherItems.map((item) => (
        <div key={item.to}>{item.name}</div>
      ))}
    </div>
  );
};

export default OtherItems;
