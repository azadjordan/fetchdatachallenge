import React from 'react'

const Header = ({handleClick, clickedItem}) => {
  return (
    <header>

  <div 
  className="users"
  onClick={(e)=>handleClick(e)}
  style={clickedItem === "users" ? {backgroundColor: "black", color: "white"} : {color: "black"}}
  >
    users
  </div>
  <div 
  className="posts"
  onClick={handleClick}
  style={clickedItem === "posts" ? {backgroundColor: "black", color: "white"} : {color: "black"}}

  >
    posts
  </div>
  <div 
  className="comments"
  onClick={handleClick}
  style={clickedItem === "comments" ? {backgroundColor: "black", color: "white"} : {color: "black"}}

  >
    comments
  </div>

</header>
  )
}

export default Header