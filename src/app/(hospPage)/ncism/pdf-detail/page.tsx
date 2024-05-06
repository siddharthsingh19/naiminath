'use client'
import { useGlobalContext } from "@/app/context/store";

const PdfViewer = () => {
  const { blogData } = useGlobalContext();

  console.log("data=========", blogData);
 

  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen overflow-auto bg-slate-400">
      <iframe src={blogData} width="70%" height="100%"></iframe>
    </div>
  );
};

export default PdfViewer;
