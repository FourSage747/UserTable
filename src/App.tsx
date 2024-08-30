import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "./redux/store";
import { getUsersThunk } from "./redux/thunk";
import { AppDispatch } from "./redux/store";
import "./App.css";
import { setFilter } from "./redux/reducer";
import { filterSelector } from "./redux/selector";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const filterUsers = useSelector(filterSelector);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    dispatch(setFilter(value));
  };

  const highlightText = (text: string) => {
    if (!value) return text;

    const regex = new RegExp(`(${value})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === value.toLowerCase() ? (
            <span key={index} className="highlight">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input type="text" placeholder="Search" onChange={handleFilter} />
      <ul className="table">
        <li>
          <ul className="row main">
            <li>name</li>
            <li>username</li>
            <li>email</li>
            <li>phone</li>
          </ul>
        </li>
        {filterUsers &&
          filterUsers.map((item) => (
            <li key={item.id}>
              <ul className="row">
                <li>{highlightText(item.name)}</li>
                <li>{highlightText(item.username)}</li>
                <li>{highlightText(item.email)}</li>
                <li>{highlightText(item.phone)}</li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
