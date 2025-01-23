
//copied the pdf.worker.min.js file from node_modules/pdfjs-dist/build/ into the public folder


import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Resume.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const ResumePDF = '/Resume.pdf'; // Use a path relative to the 'public' folder

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(`Document loaded with ${numPages} pages`);
    setShowPdf(true);
  };

  const handleDownload = () => {
    const fileName = 'Resume.pdf';
    const pdfPath = ResumePDF;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className='formbgcolor'>
        <div className="form">
          <div className='formfirst'>
            <h1 className="resume" id='resume' style={{ padding: 0, fontFamily: 'Times New Roman', textAlign: 'center' }}>
              RESUME PDF
            </h1>
            <div className='pdf-default-container'>
              <div className="pdf-container-wrapper">
                <div className={`pdf-container ${showPdf ? 'visible' : 'hidden'}`}>
                  <div className="pdf-viewer">
                    {showPdf && (
                      <Worker
                        workerUrl={new URL('/pdf.worker.min.js', import.meta.url).href} // Use pdf.worker.min.js
                      >
                        <Viewer fileUrl={ResumePDF} onLoadSuccess={onDocumentLoadSuccess} />
                      </Worker>
                    )}
                  </div>
                </div>
              </div>
              <div className="pdf-controls">
                <button className="form-button" id="form-button" onClick={() => setShowPdf(!showPdf)}>
                  {showPdf ? 'Hide PDF' : 'View PDF'}
                </button>
                <button className="form-button" id="form-button" onClick={handleDownload}>
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;

/*
*/