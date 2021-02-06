import React, { useEffect, useState } from "react";

import ButtonGroup from "./ButtonGroup";
import TreeView from "./TreeView";

import { EditableField, GroupType } from "../common/enums";
import { ListData, ForamtedList } from "../common/models";
import { EMPTY_INPUT } from "../common/constants";

import { groupData } from "../utils/group";
import { sortGroupedData } from "../utils/sort";
import { fetchData } from "../service/http";

import "./index.css";

const fetchList = fetchData<ListData[]>("/api/posts");

function App() {
  const [list, setList] = useState<ListData[]>([]);
  const [foramtedList, setForamtedList] = useState<ForamtedList[]>();
  const [selectedGroupType, setSelectedGroupType] = useState<GroupType>(GroupType.Time);

  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState<number>();
  const [authorFieldText, setAuthorFieldText] = useState<string>(EMPTY_INPUT);
  const [locationFieldText, setLocationFieldText] = useState<string>(EMPTY_INPUT);

  useEffect(() => {
    fetchList.then(data => {
      setList(data);
    });
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      const groupedData = groupData(selectedGroupType, list);
      const sortedData = sortGroupedData(groupedData);
      setForamtedList(sortedData);
    }
  }, [list, selectedGroupType]);

  useEffect(() => {
    if (!editing) {
      setEditId(undefined);
      setAuthorFieldText(EMPTY_INPUT);
      setLocationFieldText(EMPTY_INPUT);
    }
  }, [editing]);

  const handleEditing = (id: number) => {
    setEditId(id);
    setEditing(true);
  };

  const handleTextFeildChange = (field: EditableField, value: string) => {
    switch (field) {
      case EditableField.Author:
        setAuthorFieldText(value);
        break;
      case EditableField.Location:
        setLocationFieldText(value);
        break;
      default:
        console.error(`Unable to Edit ${field}!`);
        break;
    }
  };

  const handleUpdate = (postId: number) => {
    const post = list.find(post => post.id === postId);
    if (!post) return;
    const author = authorFieldText === EMPTY_INPUT ? post.author : authorFieldText;
    const location = locationFieldText === EMPTY_INPUT ? post.location : authorFieldText;
    const newPost = { ...post, author, location };
    setList([...list.filter(post => post.id !== postId), newPost]);
    setEditing(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Nitro Front End Task</h1>
      </header>
      <main>
        <ButtonGroup
          selectedGroupType={selectedGroupType}
          setSelectedGroupType={setSelectedGroupType}
        />
        {foramtedList && (
          <TreeView
            foramtedList={foramtedList}
            editId={editId}
            editing={editing}
            authorFieldText={authorFieldText}
            locationFieldText={locationFieldText}
            handleTextFeildChange={handleTextFeildChange}
            handleEditing={handleEditing}
            handleUpdate={handleUpdate}
            setEditing={setEditing}
          />
        )}
      </main>
    </div>
  );
}

export default App;
