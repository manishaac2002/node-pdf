import express from 'express';
import PDFDocument from 'pdfkit';
const application =express()
application.get('/convert', (req, res) => {
  const doc = new PDFDocument();
  const filePath = 'C:\Users\atre\OneDrive\Documents\What is Lorem Ipsum.txt';
  const outputPath = 'C:\Users\atre\OneDrive\Documents\What is Lorem Ipsum.pdf';

  // Set appropriate headers
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${outputPath}`);

  // Pipe the PDF output to the response
  doc.pipe(res);

  // Read the text file and write it to the PDF
  const fileStream = fs.createReadStream(filePath);
  fileStream.on('data', (chunk) => {
    doc.text(chunk.toString());
  });

  // Finalize the PDF and end the response
  fileStream.on('end', () => {
    doc.end();
  });
});

application.listen(1200)

