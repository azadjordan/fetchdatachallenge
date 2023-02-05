import React from "react";
import { useState,useEffect } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

const [clickedItem, setClickedItem] = useState("");
const [listItems, setListItems] = useState([])

const handleClick = (e) => {
setClickedItem(e.target.innerHTML)
}



useEffect(() => { // Here we load the data from the REST-API and when we manage the data with state, we also want to send messages back to the api to keep that db in sync with our state of the application
  const fetchItems = async () => {
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/${clickedItem}`);
      if(!response.ok) throw Error('Did not recieve expected data')
      const listItems = await response.json();
      setListItems(listItems);
     // setFetchError(null);
    } catch(err) {
      console.log(err.message) // throw: 'Did not recieve expected data'
    //  setFetchError(err.message);
    } finally {
     // setIsLoading(false);
    }
  }
  setTimeout(() => { //we use this because: an api may not be as fast as the one in our local server. online servers might be slower so we us this.
    (async () => await fetchItems())();
  },0) // we used 2 seconds just to see it
}, [clickedItem]);













  return (
    <div className="App">

<Header
  handleClick={handleClick}
  clickedItem={clickedItem}
/>

<Content
listItems={listItems}
/>


    </div>
  );
}

export default App;
