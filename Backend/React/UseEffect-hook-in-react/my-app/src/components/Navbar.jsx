import React, { useEffect } from "react";

const Navbar = ({ color }) => {

  // Case - 1 | Run on every render
  useEffect(() => {
    alert("Hey! I will run on every render");
  });   // No dependency array
  // Example use: logging, animations that must update every render.



  // Case - 2 | Run only on First render/ runs only once on mount.
  useEffect(() => {
    alert("Hey! I will run only on first render");
  }, []);
  // Example use: fetching data when page loads.



  // Case - 3 | Run only when certain values change 
  useEffect(() => {
    alert("Hey, Color was changed!");
  }, [color]);
  // Example use: updating background color when a theme variable changes.



  // Example of clean up function
  useEffect(() => {
      alert("Hey, Welcome to my page of app.jsx")
    return () => {  // clean up function
      alert("Component was unmounted or removed!")
    }
  })
  


  return <div>I am a navbar of {color} color hehe</div>;
};

export default Navbar;
