import React, { useContext, useEffect, useState } from "react";
import Header from "./component/Header";
import Blogs from "./component/Blogs";
import Pagination from "./component/Pagination";
import { AppContext } from "./Context/AppContext";

export default function App() {
  
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect (()=>
  {
    fetchBlogPosts();
  },[])


  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}
