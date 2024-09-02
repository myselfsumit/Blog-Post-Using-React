import React from "react";
import Header from "./component/Header";
import Blogs from "./component/Blogs";
import Pagination from "./component/Pagination";

export default function App() {
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}
