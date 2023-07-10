import express from  'express';
import PDFKit from 'pdfkit';
import Sharp from 'sharp';
const app = express();
app.get('/convert', (req, res) => {
    // Get the text and image from the request body.
    const text = "hey this is java script";
    const image = "https://th.bing.com/th/id/OIP.pUA_xIvhzfDMgmpUuWIzQAHaE5?pid=ImgDet&rs=1";
    // Create a PDF document.
    const doc = new PDFKit();
    // Add the text to the document.
    doc.text(text);
    // Add the image to the document.
    doc.image(image);
    // Save the PDF document to a file.
    doc.save('output.pdf');
    // Send the PDF file to the client.
    res.sendFile('output.pdf');
  });
  app.listen(7000,()=>{
    console.log("server is running on port 7000");
  });








// import express from "express"
// import pdfkit from "pdfkit"
// import sharp from "sharp"

// const application =express()

// application.get('/convert', (req, res) => {
//     // Get the text and image from the request body.
//     const text = "hey this is java script";
//     const image = "https://th.bing.com/th/id/OIP.pUA_xIvhzfDMgmpUuWIzQAHaE5?pid=ImgDet&rs=1";
//     // Create a PDF document.
//     const doc = new PDFKit();
//     // Add the text to the document.
//     doc.text(text);
//     // Add the image to the document.
//     doc.image(image);
//     // Save the PDF document to a file.
//     doc.save('output.pdf');
//     // Send the PDF file to the client.
//     res.sendFile('output.pdf');
//   });

//   application.listen(7000,()=>{
//     console.log("Server is running on port 7000");
//   });
