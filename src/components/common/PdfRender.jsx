import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfRender = ({ pdfUrl }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    setFile(pdfUrl);
  }, [pdfUrl]);

  return (
    <div className="inline-block border border-gray-300 p-2 rounded-md cursor-pointer">
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
        <Document
          file={file}
          onLoadSuccess={() => { }}
          className="cursor-pointer"
        >
          <Page pageNumber={1} scale={0.2} className="cursor-pointer" /> {/* Adjust scale as needed */}
        </Document>
      </a>
    </div>
  );
};

export default PdfRender;