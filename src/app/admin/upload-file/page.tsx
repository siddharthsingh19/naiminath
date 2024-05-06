"use client";
import React, {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

interface Doc {
  fileName: string;
  filePath: string;
  content: string;
  title: string;
}

const UploadFile = () => {
  const [title, setTitle] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const images = Array.from({ length: 40 }, (_, index) => index + 1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fetchDocsApi = async () => {
    try {
      const response = await fetch("/api/ncism", {
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
    callApi();
  }, []);

  const callApi = async () => {
    fetchDocsApi()
      .then((result) => {
        setDocs(result);
        setLoading(false); // Set loading to false when data is fetched
        console.log("getResult=", result);
      })
      .catch(() => {
        setLoading(false); // Set loading to false on error
      });
  };
  const clearBrowseFileName = async () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null; // Get the first selected file, or set to null
    setSelectedFile(file as File | null);
  };

  const handleTitleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const handleUploadClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Check if a file is selected
    if (selectedFile) {
      // Perform the upload or further processing here
      console.log("Selected File:", selectedFile);

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("title", title);

      try {
        const response = await fetch("/api/ncism", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully.");
        } else {
          console.error("Error uploading file status:", response.status);
        }
      } catch (error: any) {
        console.error("Error uploading file:", error.message);
      } finally {
        setSelectedFile(null);
        clearBrowseFileName();
        callApi();
      }
      // Reset the selected file after processing if needed
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className="mb-3 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center flex-wrap gap-4 my-10 min-h-[25vh] max-h-[70vh] overflow-y-auto">
        {loading ? ( // Show loader if still loading
          <div className="text-center text-black w-fit">Loading...</div>
        ) : (
          docs.map((doc, index) => {
            const ext = doc.fileName.split(".").pop() || "";
            let iconSrc;

            // Set icon source based on file extension
            switch (ext.toLowerCase()) {
              case "pdf":
                iconSrc = "/images/pdf_image.svg"; // Replace with your actual PDF icon path
                break;
              case "xls":
                iconSrc = "/icons/excel-icon.png"; // Replace with your actual XLS icon path
                break;
              case "xlsx":
                iconSrc = "/icons/excel-icon.png"; // Replace with your actual Excel icon path
                break;
              default:
                iconSrc = "/icons/default-icon.png"; // Replace with a default icon path
                break;
            }

            return (
              <div className="text-center w-fit" key={index}>
                <Image
                  src={iconSrc}
                  className="rounded-[7px]"
                  alt={`about image ${index}`}
                  width={200}
                  height={200}
                />

                <label className="text-black text-lg">{doc.title}</label>
              </div>
            );
          })
        )}
      </div>

      <div className="flex flex-col items-center">
        <label
          htmlFor="formFileSm"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-500"
        >
          Upload File
        </label>

        <input
          type="text"
          id="title"
          name="username"
          className="my-4 px-2 py-1 border rounded-md w-full focus:outline-none"
          placeholder="Title"
          value={title}
          onChange={handleTitleInputChange}
        />

        <input
          ref={fileInputRef}
          className="relative m-0 block w-fit min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-500 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-500 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          id="formFileSm"
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(e)}
        />

        <button
          role="button"
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 border rounded-lg mt-4"
          onClick={handleUploadClick}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>

    //   <div className="py-20 h-screen bg-gray-300 px-2">
    //   <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
    //     <div className="md:flex">
    //       <div className="w-full">
    //         <div className="p-4 border-b-2">
    //           <span className="text-lg font-bold text-gray-600">Add documents</span>
    //         </div>
    //         <div className="p-3">
    //           <div className="mb-2">
    //             <span className="text-sm">Title</span>
    //             <input
    //               type="text"
    //               className="h-12 px-3 w-full border-gray-500 border rounded focus:outline-none focus:border-gray-300"
    //             />
    //           </div>
    //           <div className="mb-2">
    //             <span>Attachments</span>
    //             <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-500 bg-white flex justify-center items-center hover:cursor-pointer">
    //               <div className="absolute">
    //                 <div className="flex flex-col items-center ">
    //                   <i className="fa fa-cloud-upload fa-3x text-gray-500"></i>
    //                   <span className="block text-gray-400 font-normal">Attach your files here</span>
    //                   <span className="block text-gray-400 font-normal">or</span>
    //                   <span className="block text-blue-400 font-normal">Browse files</span>
    //                 </div>
    //               </div>{' '}
    //               <input
    //                 type="file"
    //                 className="h-full w-full opacity-0"
    //                 name=""
    //                 onChange={(e) => handleFileChange(e)}
    //               />
    //             </div>
    //             {/* Display the selected file name */}
    //             {selectedFile && (
    //               <div className="mt-2">
    //                 <span className="text-sm">{selectedFile.name}</span>
    //               </div>
    //             )}
    //             <div className="flex justify-between items-center text-gray-400">
    //               <span>Accepted file type:.doc only</span>
    //               <span className="flex items-center ">
    //                 <i className="fa fa-lock mr-1"></i> secure
    //               </span>
    //             </div>
    //           </div>
    //           <div className="mt-3 text-center pb-3">
    //             <button className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700">
    //               Create
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UploadFile;
