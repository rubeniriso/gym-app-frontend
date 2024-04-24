import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col">
      <label>Body part</label>
      <select onChange={handleBodypartChange}>
        <option value="">Select a body part</option>
        {bodyparts.map((bodypart: Bodypart, key) => (
          <option key={key} value={`${bodypart.bodypart_id}`}>
            {bodypart.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
