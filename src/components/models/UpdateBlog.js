import axios from "axios";
import { useState } from "react";

export const UpdateBlog = ({ postId, postTitle, postContent }) => {
  const [msg, setMsg] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const updating = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      await axios
        .patch(
          `http://localhost:3500/api/v1/posts/${postId}`,
          {
            title: title,
            content: content,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          setMsg("Post updated");
          window.location.reload(true);
        });
    } catch (err) {
      if (err.message) {
        setMsg(err.response.data.message);
      }
    }
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-brightness-50">
      <div className="relative w-full my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative  flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Update Blog</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
              <p className="text-red-500 text-lg italic">{msg}</p>
            </div>
          </div>
          <form
            onSubmit={updating}
            className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
          >
            <label className="block text-black text-sm font-bold mb-1">
              Blog title
            </label>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-1 text-black"
              type="text"
              placeholder={postTitle}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="block text-black text-sm font-bold mb-1">
              Blog content
            </label>
            <div className="w-96">
              <textarea
                placeholder={postContent}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button className="bg-gray-900  p-2 text-white mt-4 hover:bg-gray-400">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
