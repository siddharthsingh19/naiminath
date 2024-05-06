import { NextRequest, NextResponse } from "next/server";

export interface MyRequestBody {
    name: string;
    email:string;
    comments:string;
  }
  
export async function POST(req: NextRequest,res:NextResponse):Promise<void |Response> {
    

  try{
      const body: MyRequestBody | null = await req.json() as MyRequestBody | null; 
      console.log("data mail====",body?.email);
      let nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'web.namc',
          pass: 'gozfoeyggyismrvk',
        },
        secure: true,
      })

      const mailData = {
        from: `web.namc@gmail.com`,
        to: 'officenamc@gmail.com',
        subject: `Message From ${body?.name}`,
        text: `${body?.comments} | Sent from: ${body?.email}`,
        html: `<div>${body?.comments}</div><p>Sent from:
        ${body?.email}</p>`
      }  
      transporter.sendMail(mailData, function (err: any, info: any) {
        if(err)
          console.log('akjkadad======',err)
        else
          console.log(info)
      })
      return new Response(`${res.ok}`);
    }catch(e){
      return new Response(`Error:${e}`);
    } 
}