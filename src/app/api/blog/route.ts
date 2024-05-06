import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(request:NextRequest) {

  // const directoryPath = path.join(process.cwd(), 'src/app/blogfiles');
  // console.log("Current working directory:", directoryPath);
  const directoryPath = path.join('/tmp/blog')
  console.log("Current working directory:", directoryPath);

  if (!fs.existsSync(directoryPath)) {
    return new Response(`Directory not found`, { status: 404 });
  }
  const files = fs.readdirSync(directoryPath);

  // Create a list of file names
  const fileList = files.map((file) => {
    const filePath = `${directoryPath}/${file}`;
    const fileContent = fs.readFileSync(filePath, "utf-8");

    return {
      fileName: file,
      filePath: filePath,
      content: fileContent,
    };
  });

  console.log("readFIles==", JSON.stringify(fileList));
  return new Response(JSON.stringify(fileList), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest,res:NextResponse) {
  try{
    const body = await req.json();

    // const directoryPath = path.join(process.cwd(), 'src/app/blogfiles');
    // console.log("directoryPath", directoryPath);
  
    // const fileName = `dynamicFile_${Date.now()}.html`;
    // const filePath = `${directoryPath}/${fileName}`; // Adjusted file path
    // console.log("HTML string has been written to the file:", filePath);
  
    // // Make sure the directory exists before writing the file
    // if (!fs.existsSync(directoryPath)) {
    //   fs.mkdirSync(directoryPath, { recursive: true });
    // }
    const dirPath = '/tmp/blog';

    // Check if the directory exists
    if (!fs.existsSync(dirPath)) {
      // If it doesn't exist, create the directory
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const directoryPath = path.join(dirPath, `dynamicFile_${Date.now()}.html`);
    console.log("directoryPath", directoryPath);
  

  
    fs.writeFileSync(directoryPath, body.content, "utf-8");
  
   // console.log("HTML string has been written to the file:", filePath);
    return new NextResponse(body);
  }catch(e){
    return new Response(`Error:${e}`);
  } 
}

export async function DELETE(req: NextRequest) {

   const {fileName} = await req.json();

  if (!fileName) {
    return new Response(`Missing filename in request parameters`, { status: 400 });
  }

  
  const directoryPath = path.join('/tmp/blog');
  const filePath = path.join(directoryPath, fileName);

  try {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return new Response(`File not found`, { status: 404 });
    }

    // Delete the file
    fs.unlinkSync(filePath);

    return new Response(JSON.stringify(`File ${fileName} deleted successfully`), { status: 200 });
  } catch (error) {
    console.error(`Error deleting file ${fileName}:`, error);
    return new Response(`Internal Server Error`, { status: 500 });
  }
}
