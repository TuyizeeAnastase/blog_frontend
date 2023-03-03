import { Search } from "./Search";
import { BlogList } from "./BlogList";
import { LatestBlog } from "./LatestBlog";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3500/api/v1/posts");
        setPosts(response.data.posts.rows);
      } catch (err) {
        setPosts(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <Search />
      <div className="flex justify-start ml-4">
        {loading && <p>Loading</p>}
        <BlogList posts={posts} />
        <LatestBlog posts={posts} />
      </div>
    </div>
  );
};
