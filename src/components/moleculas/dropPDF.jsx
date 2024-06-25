import React, { useState, useRef } from 'react';

const DropPDF = () => {
  const [files, setFiles] = useState([]);
  const dragRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    dragRef.current.style.border = '2px solid #ccc';
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dragRef.current.style.border = 'none';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setFiles(files);
    dragRef.current.style.border = 'none';
  };

  return (
    <div
      ref={dragRef}
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
      {files.length > 0? (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      ) : (
        <p>Arrastra el PDF aquí</p>
      )}
    </div>
  );
};

export default DropPDF;