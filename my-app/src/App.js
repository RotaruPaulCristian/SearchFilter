import { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App mt-3">
      <input
        type="text"
        className="mb-5"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((user) => {
        if (searchTerm == "") {
          return user;
        } else if (
          user.first_name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return user;
        }
      }).map((user, key) => {
        return (
          <div key={key}>
            <p>{user.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
