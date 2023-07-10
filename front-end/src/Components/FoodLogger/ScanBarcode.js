import React, { useRef, useEffect, useState } from "react";
import Quagga from "quagga";
import axios from "axios";

const ScanBarcodeButton = () => {
  const [barcodeID, setBarcodeID] = useState("");
  const [productData, setProductData] = useState(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);

  const BARCODE_API = `https://world.openfoodfacts.org/api/v0/product/${barcodeID}.json`;

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // or 'user' for the front camera
          },
          target: videoRef.current,
        },
        decoder: {
          readers: ["ean_reader"], // or other supported barcode formats
        },
      },
      function (err) {
        if (err) {
          console.error("Error initializing Quagga:", err);
        } else {
          console.log("Quagga initialized successfully");
          Quagga.start();
        }
      }
    );

    Quagga.onDetected(handleBarcodeScan);

    return () => {
      Quagga.stop();
      Quagga.offDetected(handleBarcodeScan);
    };
  }, []);

  useEffect(() => {
    if (barcodeID) {
      fetchProductData();
    }
  }, [barcodeID]);

  const handleBarcodeScan = (result) => {
    console.log("Barcode scanned:", result.codeResult.code);
    setBarcodeID(result.codeResult.code);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        Quagga.decodeSingle(
          {
            src: e.target.result,
            numOfWorkers: navigator.hardwareConcurrency || 1,
            locate: true,
            decoder: {
              readers: ["ean_reader"], // or other supported barcode formats
            },
          },
          function (result) {
            if (result && result.codeResult) {
              console.log("Barcode scanned:", result.codeResult.code);
              setBarcodeID(result.codeResult.code);
            } else {
              console.log("No barcode found");
            }
          }
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchProductData = async () => {
    try {
      const response = await axios.get(BARCODE_API);
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
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
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        style={{ display: "none" }}
      ></video>

      {productData && (
        <div>
          <h2>Product Information</h2>
          <p>Product Name: {productData.product.product_name}</p>
          <p>Brand: {productData.product.brands}</p>
          <p>Ingredients: {productData.product.ingredients_text}</p>
          {/* Render other desired product information */}
        </div>
      )}
    </div>
  );
};

export default ScanBarcodeButton;
