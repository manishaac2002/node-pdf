//image
import express  from 'express';
import axios from 'axios';
import fs from 'fs';
import PDFDocument  from 'pdfkit';

const app = express();

// Define your routeshttps://th.bing.com/th/id/OIP.pUA_xIvhzfDMgmpUuWIzQAHaE5?pid=ImgDet&rs=1
app.get('/convert', async (req, res) => {
  try {
    // Fetch the URL of the image from the query parameter
    const imageUrl = "https://th.bing.com/th/id/OIP.pUA_xIvhzfDMgmpUuWIzQAHaE5?pid=ImgDet&rs=1";

    // Fetch the image data from the URL using Axios
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageData = response.data;

    // Create a PDF document
    const doc = new PDFDocument();

    // Set the response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');

    // Pipe the PDF document to the response
    doc.pipe(res);

    // Embed the image in the PDF document
    doc.image(imageData);

    // Finalize the PDF and end the response
    doc.end();
  } catch (error) {
    res.status(500).send('An error occurred.');
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
