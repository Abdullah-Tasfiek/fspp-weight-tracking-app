import React, { useRef } from "react";
import Quagga from "quagga";
import "./ScanBarcode.scss";

export default function ScanBarcode() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file (image) here
    console.log("Selected file:", file);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Scan Barcode</button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
    </div>
  );
}
