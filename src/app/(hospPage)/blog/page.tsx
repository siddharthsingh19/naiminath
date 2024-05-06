"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/store";
import { postData } from "@/app/(data)/data";

interface Blog {
  fileName: string;
  filePath: string;
  content: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const { blogData, setBlogData, setImageSlide } = useGlobalContext();
  const router = useRouter();

  const fetchBlogsApi = async () => {
    try {
      const response = await fetch("/api/blog", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  };

  useEffect(() => {
    console.log('Page loaded');
    setImageSlide(false);

    fetchBlogsApi()
      .then((result) => {
        setBlogs(result);
        setLoading(false); // Set loading to false when data is fetched
        console.log("getResult=", result);
      })
      .catch(() => {
        setLoading(false); // Set loading to false on error
      });
  }, [setImageSlide]);


  return (
    <>
      {/* <head>
        <title>Blogs - Naiminath Ayurveda : Top BAMS College in India</title>
        <meta name="description" content=" " />
      </head> */}

      <div className="min-h-screen flex flex-wrap gap-5 p-[20px] justify-center mt-14">
        {loading ? ( // Show loader if still loading
          <div className="text-center text-black">Loading...</div>
        ) : (
          postData.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center md:basis-1/4 rounded-lg 
          overflow-hidden h-[350px] shadow-md inset-11 hover:bg-slate-50 cursor-pointer"
              onClick={async () => {
                setBlogData(blog.content);
                // router.push(`/hospPage/blog/blog-detail?data=${blog.content}`);
                router.push(`/blog/blog-detail`);
              }}
            >
              <div className="w-full pb-2 flex-1 justify-center items-center">
                <h5 className="text-white py-2 text-center bg-[#ded636] ">
                  Blog {"-"} {index + 1}
                </h5>
                <div
                  className=" overflow-hidden px-2 pt-2 w-full"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 10,
                  }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
              <div
                className="text-white overflow-hidden w-full p-4 text-center  bg-slate-400"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 2,
                }}
              >
                {blog.college}
                {/* {`${blog.fileName}`} */}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BlogPage;
