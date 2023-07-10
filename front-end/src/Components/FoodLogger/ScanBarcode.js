import React, { useRef, useState } from "react";
import Quagga from "quagga";
import axios from "axios";
import Loader from "./Loader";

const ScanBarcode = () => {
  const [barcodeID, setBarcodeID] = useState("");
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const BARCODE_API = `https://world.openfoodfacts.org/api/v0/product/${barcodeID}.json`;

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async function (e) {
        const imageDataUrl = e.target.result;
        try {
          const result = await decodeBarcode(imageDataUrl);
          if (result && result.codeResult) {
            console.log("Barcode scanned:", result.codeResult.code);
            setBarcodeID(result.codeResult.code);
            fetchProductData(result.codeResult.code);
          } else {
            console.log("No barcode found");
            setBarcodeID("");
          }
        } catch (error) {
          console.error("Error decoding barcode:", error);
          setBarcodeID("");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const decodeBarcode = (imageDataUrl) => {
    return new Promise((resolve, reject) => {
      Quagga.decodeSingle(
        {
          src: imageDataUrl,
          numOfWorkers: navigator.hardwareConcurrency || 1,
          locate: true,
          decoder: {
            readers: ["ean_reader"], // or other supported barcode formats
          },
        },
        function (result) {
          resolve(result);
        }
      );
    });
  };

  const handleBarcodeSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await fetchProductData(barcodeID);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductData = async (barcode) => {
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
      );
      setProductData(response.data);
    } catch (error) {
      throw error;
    }
  };

  const renderProductInfo = () => {
    if (productData) {
      const {
        product_name,
        nutriments: {
          energy_value,
          fat_value,
          "saturated-fat_value": saturatedFat_value,
          carbohydrates_value,
          sugars_value,
          fiber_value,
          proteins_value,
          sodium_value,
        },
      } = productData.product;

      return (
        <div className="product-info">
          <h2>Product Information</h2>
          <p>Product Name: {product_name}</p>
          <p>Energy (kcal) per serving: {energy_value}</p>
          <p>Fat per serving: {fat_value}</p>
          <p>Saturated Fat per serving: {saturatedFat_value}</p>
          <p>Carbohydrates per serving: {carbohydrates_value}</p>
          <p>Sugars per serving: {sugars_value}</p>
          <p>Fiber per serving: {fiber_value}</p>
          <p>Proteins per serving: {proteins_value}</p>
          <p>Sodium per serving: {sodium_value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={handleBarcodeSubmit}>
        <input
          type="text"
          placeholder="Enter barcode number"
          value={barcodeID}
          onChange={(e) => setBarcodeID(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={handleButtonClick}>Scan Barcode</button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />

      <Loader loading={loading} message="Retrieving product data..." />

      {productData && renderProductInfo()}
    </div>
  );
};

export default ScanBarcode;
