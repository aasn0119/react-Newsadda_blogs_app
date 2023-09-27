import { useState } from "react";
import { baseUrl } from "../baseUrl";
import { createContext } from "react";

// Step 1 -> Context providing..!
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // Data Filling pending...!
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const data = await fetch(url);
      const output = await data.json();
      console.log("printing results");
      console.log(output);
      setPage(output.page);
      setTotalPages(output.totalPages);
      setPosts(output.posts);
    } catch (error) {
      console.log("Error in fetching results");
      setPage(1);
      setTotalPages(null);
      setPosts([]);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  // Step 2: Applying the provider...!
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
