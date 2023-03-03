import axios from "axios";
import { useEffect, useState } from "react";
import { UpdateBlog } from "./models/UpdateBlog";

export const Blog = ({ user }) => {
  const [post, setPost] = useState([]);
  const [msg, setMsg] = useState();
  const [showUpdate, setShowUpdate] = useState(false);
  const [postId, setPostId] = useState();

  const id = localStorage.getItem("postId");
  useEffect(() => {
    const getPostData = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/api/v1/posts/${id}`);
        setPost(res.data.post);
      } catch (err) {
        console.log(err);
      }
    };
    getPostData();
  }, [id]);
  const remove = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      await axios.delete(`http://localhost:3500/api/v1/posts/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setMsg("Product deleted successfully");
      window.location = "/";
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="mt-6 bg-gray-50">
        <div className="px-10 py-6 mx-auto">
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
            <a
              href="#_"
              class="block transition duration-200 ease-out transform hover:scale-110"
            >
              <img
                class="object-cover w-full shadow-sm h-full"
                alt="post_image"
                src="https://res.cloudinary.com/duhetxdbs/image/upload/v1674923712/resize-1674923684927828523newShop_rtcngq.jpg"
              />
            </a>
            <p className="text-red-400">{msg}</p>
            {user && user.user_id === post.userId ? (
              <div class="flex items-center justify-start mt-4 mb-4">
                <button
                  onClick={() => {
                    setPostId(post.id); setShowUpdate(true);
                  }}
                  class="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    const confirmBox = window.confirm(
                      `Do you realy want to delete ${post.title}`
                    );
                    if (confirmBox === true) {
                      remove(post.id);
                    }
                  }}
                  className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4"
                >
                  Delete
                </button>
              </div>
            ) : null}
            <div className="mt-2">
              <p className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900  hover:underline">
                {post.title}
              </p>
              <div className="font-light text-gray-600">
                <h1 className="font-bold text-gray-700 hover:underline">
                  {/* {post.user.name} */}
                </h1>
              </div>
            </div>
            <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
              <div>
                <p className="mt-2 p-8">{post.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showUpdate && (
        <>
          <UpdateBlog postId={postId} postTitle={post.title} postContent={post.content}/>
        </>
      )}
    </>
  );
};
