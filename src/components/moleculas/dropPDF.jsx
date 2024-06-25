import React, { useState, useRef } from 'react';

const DropPDF = ({ onFileDrop }) => {
  const [files, setFiles] = useState([]);
  const dragRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current.style.border = '2px solid #ccc';
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current.style.border = '2px solid #ccc';
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current.style.border = 'none';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFiles(files);
      dragRef.current.style.border = 'none';

      // Create a URL for the dropped PDF file
      const pdfFile = files[0];
      const pdfUrl = URL.createObjectURL(pdfFile);
      setPdfUrl(pdfUrl);

      // Call the callback function to update the parent component's state
      onFileDrop(pdfFile);
    }
  };

  return (
    <div
      ref={dragRef}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        width: '100%',
        height: '60vh',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {files.length > 0 ? (
        <iframe
          src={pdfUrl}
          frameBorder="0"
          width="100%"
          height="100%"
        />
      ) : (
        <p>Arrastra el PDF aquí</p>
      )}
    </div>
  );
};

export default DropPDF;
