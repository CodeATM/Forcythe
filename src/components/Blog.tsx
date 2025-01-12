import Button from "../Reuseables/Button";
import BlogImage from "../assets/Images/blog.jpg"

const Blog = () => {
  const title = [
    "Will Ai take over",
    "cryptocurrency vs Token",
    "Cryptocurrency and crypto assets",
  ];
  return (
    <div className="max-screen-wrapper my-10 lg:mb-24">
      <div className="max-screen-inner">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <div className="">
            <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
              Read our articles, news and product blog
            </p>
          </div>
          <div className="">
            <Button title="Visit blog" rightIcon />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {title.map((ma) => (
            <a
              href=""
              className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
            >
              <div className="h-60 sm:h-56 relative mb-6">
                <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
                <img
                  src={BlogImage}
                  alt=""
                  className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>

              <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
                <p className="text-lg font-semibold mb-1">Blog</p>
                <div className="text-base text-darkGrey flex items-center mb-6">
                  <span>The Reformist</span>
                  <div className="h-2 w-2 rounded-full bg-white mx-[6px] "></div>
                  <span>May 29,2024</span>
                </div>

                <div className="text-xl md:text-2xl font-semibold line-clamp-2">
                  {ma}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
