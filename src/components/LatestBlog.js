
export const LatestBlog = ({posts}) => {
  return (
    <div className="col-span-2 sm:col-span-1 ml-8">
      <p className="font-medium text-white px-8 py-4 rounded dark:text-white bg-gray-900">
        Latest Blog
      </p>
      <nav aria-label="Footer Navigation - Services" className="mt-6">
        <ul className="space-y-4 text-sm">
          {posts.map((post) => (
            <li className="flex px-2">
              <div className="flex  items-center mb-6 sticky top-2 z-10">
                <div className="flex items-center  ml-5 p-1 relative sm:mr-0 sm:right-auto">
                  <a href="/#" className="block relative">
                    <img
                      alt="blog"
                      src="https://res.cloudinary.com/duhetxdbs/image/upload/v1674923712/resize-1674923684927828523newShop_rtcngq.jpg"
                      className="h-10 mx-auto object-cover rounded-full w-10"
                    />
                  </a>
                </div>
              </div>
              <a className="ml-4" href="/#">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
