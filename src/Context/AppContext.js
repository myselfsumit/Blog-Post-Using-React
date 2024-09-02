import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//Step 1 :- Context Creation
export const AppContext = createContext();

//Provider Create Krna
export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(null);

  //Data filling Pending

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      const output = await fetch(url);
      const data = await output.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }


  function handlePageChange(page)
  {
    setPage(page);
    fetchBlogPosts(page);
  }

  //It's a object which requrired for sending--Generic Code
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange 
  };

  //Generic Code Hain
  //Step 2: Context Provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
