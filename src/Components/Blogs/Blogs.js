import React from "react";

const Blogs = () => {
  return (
    <div className="md:px-28 px-5 md:my-20 my-10">
      <div className="border border-[#9B5A43] p-4 mb-3">
        <h1 className="text-center py-4 text-3xl font-semibold text-[#c76f4f] md:md-0 mb-3">
          Difference between javascript and nodejs!
        </h1>
        <div className="flex md:flex-row flex-col items-center gap-10 leading-7">
          <img className="w-1/2" src="https://i.morioh.com/2021/08/30/4d4f4083.webp" alt="" />

          <p className="text-xl text-justify">
            Javascript is a programming language where we srite scripts on a site that makes it more
            dynamic,on the other hand NodeJs is a javascript runtime environment that lets a user run js in
            server side as well.We can run javascript for browser only but NodeJs helps us to create softwares
            for pc. We can write HTML & CSS in the browser and interact them with js but NodeJS is not capable
            of doing so. Some popular framework for js are ReactJs,VueJs etc and for NodeJs they are
            ExpressJs,Loadash etc.
          </p>
        </div>
      </div>
      <div className="border border-[#9B5A43] p-4 mb-3">
        <h1 className="text-center py-4 text-3xl font-semibold text-[#c76f4f] md:md-0 mb-3">
          When should you use nodejs and when should you use mongodb?
        </h1>
        <div className="flex md:flex-row flex-col items-center gap-10 leading-7">
          <img className="w-1/2" src="https://miro.medium.com/max/720/1*ay9nx1XdZ3AOzx5Ev8xJEg.png" alt="" />

          <p className="text-xl text-justify">
            If we are considering making a large application like real-time applications,online gaming
            apps,video conferencing apps or E-commerce transiction software then NodeJs is perfect for making
            these.As we know NodeJs is good for highly extensible,data intensive application and it's
            non-blocking I/O features makes a app super fast so then we should use NodeJs. <br />
            MongoDB is a general purpose db used in various ways to support application.When we are working
            with lots of data and we need flexibility and power to manage unstructured plus complex data then
            we should consider using MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
