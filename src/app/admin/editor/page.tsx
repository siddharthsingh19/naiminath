"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./style.css";

import type ReactQuill from "react-quill";
const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;

import type QuillToolbar from "@/app/(components)/QuillEditorToolbar";

const QuillToolbarEditor = dynamic(
  async () => {
    const { default: RQ } = await import(
      "@/app/(components)/QuillEditorToolbar"
    );
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof QuillToolbar;

// Undo and redo functions for Custom Toolbar
function undoChange(this: {
  [x: string]: any;
  undo: () => void;
  redo: () => void;
}) {
  this.quill.history.undo();
}
function redoChange(this: {
  [x: string]: any;
  undo: (this: {
    [x: string]: any;
    undo: () => void;
    redo: () => void;
  }) => void;
  redo: () => void;
}) {
  this.quill.history.redo();
}
const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};
const formats = [
  "video",
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

interface Blog {
  fileName: string;
  filePath: string;
  content: string;
}
const QuillEditor = () => {
  const [content, setContent] = useState({ value: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  // const quillRef = useRef<ReactQuill>(null);
  //const turndown = new TurndownService();

  const handleChange = (value: string) => {
    setContent({ value });
  };

  const handleUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsLoading(true);

    var myEditor = document.querySelector(".ql-editor");
    var htmlContent = myEditor?.innerHTML || "";
    console.log("Content:querySelector==", htmlContent);

    const writeHtmlFileApi = async () => {
      try {
        const response = await fetch("/api/blog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: htmlContent }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response}`);
        }
        setContent({ value: "" }); // Empty the editor content
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      } finally {
        setIsLoading(false);
        callApi();
      }
    };
    writeHtmlFileApi();
  };

  const fetchDocsApi = async () => {
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

  const deleteDocsApi = async (fileName:string) => {
    try {
      const response = await fetch("/api/blog", {
        method: "DELETE",
        body: JSON.stringify({ fileName }),
        headers: {
          "Content-Type": "application/json",
        },
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
    callApi();
  }, []);

  const callApi = async () => {
    fetchDocsApi()
      .then((result) => {
        setBlogs(result);
        console.log("getResult=", result);
      })
      .catch(() => {});
  };

  function handleDeleteClick(fileName:string) {
    deleteDocsApi(fileName)
      .then((result) => {
        callApi()
      })
      .catch((error) => {console.log('delete Api error:', error)});
  }

  return (
    <div className=" flex flex-col">
      <QuillToolbarEditor />

      <div id="editorcontainer">
        <QuillWrapper
          theme="snow"
          value={content.value}
          onChange={handleChange}
          placeholder="Write something awesome..."
          modules={modules}
          formats={formats}
          //ref={quillRef}
        />
        <button
          className=" text-white bg-teal-400 py-2 px-3 rounded-lg mt-10 text-center align-middle block mx-auto"
          onClick={(e) => handleUpload(e)}
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </div>

      <div className="w-full flex flex-wrap justify-start items-center mt-10 mx-10 gap-5">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} className="basis-1/6">
              <div
                className="flex flex-col justify-start h-[100px] items-center  rounded-lg 
                overflow-hidden shadow-md inset-11 hover:bg-slate-50 cursor-pointer"
                onClick={async (e) => {}}
              >
                <h5 className="text-white py-2 text-center bg-black w-full">
                  Blog {"-"} {index + 1}
                </h5>
                <div
                  className=" overflow-hidden px-2 pt-2 w-full"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                  }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
              <button
                className="w-full mt-4 text-center py-1 px-4 bg-slate-700 text-white "
                onClick={() => handleDeleteClick(blog.fileName)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No Blogs available</p>
        )}
      </div>
    </div>
  );
};

export default QuillEditor;
