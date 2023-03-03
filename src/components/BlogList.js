import { useNavigate } from "react-router-dom";
export const BlogList = ({ posts }) => {
  const navigate = useNavigate();
  const setPostData = (id) => {
    localStorage.setItem("postId", id);
    navigate("/post");
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h1 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our recent news
                </h1>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {posts.map((post) => (
              <div
                onClick={() => setPostData(post.id)}
                className="w-full px-4 md:w-1/2 lg:w-1/3 cursor-pointer "
              >
                <div className="mx-auto mb-10 max-w-[370px]">
                  <div className="mb-8 overflow-hidden rounded">
                    <img
                      className="w-full"
                      alt="blog_pic"
                      src="https://res.cloudinary.com/duhetxdbs/image/upload/v1674923712/resize-1674923684927828523newShop_rtcngq.jpg"
                    />
                  </div>
                </div>
                <div>
                  <span className="mb-5 inline-block rounded bg-gray-900 py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                  <h3>
                    <a
                      href="/#"
                      className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-base text-body-color">{post.content}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
