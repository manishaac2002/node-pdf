import express from 'express';
import PDFDocument from 'pdfkit';
const app = express();
app.get('/convert', async(req, res) => {
    try {
      // Fetch the URL of the image from the query parameter
    const imageUrl = "https://th.bing.com/th/id/OIP.pUA_xIvhzfDMgmpUuWIzQAHaE5?pid=ImgDet&rs=1";
    // Fetch the image data from the URL using Axios
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageData = response.data;
    // Create a new PDF document
    const doc = new PDFDocument();
    // Set the response headers for PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Dummyfile.pdf,');
    // Pipe the PDF document to the response stream
    doc.pipe(res);
    // Add the image to the PDF document
    doc.addImage(imageData);
    // Finalize the PDF and end the response
    doc.end();
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occurred.');
    }
});
// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});