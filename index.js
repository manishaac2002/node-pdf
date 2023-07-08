import express from'express';
import pdfMake from 'pdfmake';
import fs from 'fs';

const app = express();

app.get('/convert', (req, res) => {
  const text = 'Your text goes here';

  // Define the document content
  const docDefinition = {
    content: [text],
  };

  // Create a PDF document using pdfmake
  const pdfDoc = pdfMake.createPdf(docDefinition);

  // Pipe the PDF document to a file stream
  const fileStream = fs.createWriteStream('text.pdf');
  pdfDoc.pipe(fileStream);

  // Finalize the PDF and send it as a response
  pdfDoc.end();
  pdfDoc.getStream().pipe(res);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
