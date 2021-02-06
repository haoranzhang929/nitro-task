import React from "react";
import { GroupType } from "../common/enums";

interface ButtonGroupProps {
  selectedGroupType: GroupType;
  setSelectedGroupType: (groupType: GroupType) => void;
}

const ButtonGroup = ({ selectedGroupType, setSelectedGroupType }: ButtonGroupProps) => {
  return (
    <div className="button-group">
      <div>Group By: </div>
      <div>
        {Object.values(GroupType).map(type => (
          <button
            key={`button-${type}`}
            disabled={type === selectedGroupType}
            onClick={() => setSelectedGroupType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
