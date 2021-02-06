import React from "react";

import { EditableField } from "../common/enums";
import { ForamtedList } from "../common/models";

interface TreeViewProps {
  foramtedList: ForamtedList[];
  editId: number | undefined;
  editing: boolean;
  authorFieldText: string;
  locationFieldText: string;

  handleTextFeildChange: (field: EditableField, value: string) => void;
  handleEditing: (postId: number) => void;
  handleUpdate: (postId: number) => void;
  setEditing: (isEditing: boolean) => void;
}

const TreeView = (props: TreeViewProps) => {
  const { foramtedList, editId, editing, authorFieldText, locationFieldText } = props;
  const { handleTextFeildChange, handleEditing, handleUpdate, setEditing } = props;

  return (
    <ul>
      {foramtedList.map(({ key, data }, idx) => {
        return (
          <li key={`group-${key}-${idx}`}>
            <span>{key}</span>
            <ul>
              {data.map(({ id, text, author, location, time }) => (
                <React.Fragment key={`item-${id}`}>
                  <li style={{ cursor: "pointer" }} onClick={() => handleEditing(id)}>
                    {text}
                  </li>
                  {editId === id && editing && (
                    <form>
                      <input
                        type="text"
                        value={typeof authorFieldText === "string" ? authorFieldText : author}
                        placeholder={author}
                        onChange={e => handleTextFeildChange(EditableField.Author, e.target.value)}
                      />
                      <input
                        type="text"
                        value={typeof locationFieldText === "string" ? locationFieldText : location}
                        placeholder={location}
                        onChange={e =>
                          handleTextFeildChange(EditableField.Location, e.target.value)
                        }
                      />
                      <input type="text" value={time} readOnly />
                      <input type="text" value={text} readOnly />
                      <input type="button" value="Save" onClick={() => handleUpdate(id)} />
                      <input type="button" value="cancel" onClick={() => setEditing(false)} />
                    </form>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default TreeView;
