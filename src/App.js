import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import ListItems from "./ListItems";

function App() {
  const [clickedItem, setClickedItem] = useState("users");
  const [listItems, setListItems] = useState([]);
  const API_URL = `https://jsonplaceholder.typicode.com/`;

  const handleClick = (e) => {
    setClickedItem(e.target.innerHTML);
  };

  useEffect(() => {
    // Here we load the data from the REST-API and when we manage the data with state, we also want to send messages back to the api to keep that db in sync with our state of the application
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${clickedItem}`);
        if (!response.ok) throw Error("Did not recieve expected data");
        const listItems = await response.json();
        JSON.stringify(listItems);
        setListItems(listItems);
        // setFetchError(null);
      } catch (err) {
        console.log(err.message); // throw: 'Did not recieve expected data'
        //  setFetchError(err.message);
      }
    };
    fetchItems(); // we don't have a return for the data so we don't need to await this fetch. It's not like the reactlist project
    //eslint-disable-next-line
  }, [clickedItem]);

  return (
    <div className="App">
      <Header handleClick={handleClick} clickedItem={clickedItem} />
      <ListItems listItems={listItems} />
    </div>
  );
}

export default App;
