import express from 'express';
import PDFDocument from 'pdfkit';
const app = express();

app.get('/convert', (req, res) => {
  const text = "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu";

  // Create a new PDF document
  const doc = new PDFDocument();

  // Set the response headers for PDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=Dummyfile.pdf');

  // Pipe the PDF document to the response stream
  doc.pipe(res);

  // Add the text to the PDF document
  doc.text(text);

  // Finalize the PDF and end the response
  doc.end();
});

// Start the server
app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
