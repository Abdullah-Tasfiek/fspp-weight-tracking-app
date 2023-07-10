import React, { useRef, useState } from "react";
import Quagga from "quagga";
import axios from "axios";
import Loader from "./Loader";
import "./ScanBarcode.scss";

const ScanBarcode = () => {
  const [barcodeID, setBarcodeID] = useState("");
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

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
          setError("Error decoding barcode. Please try again.");
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
            readers: ["ean_reader"],
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
    if (!barcodeID) {
      setError("Barcode number is required.");
      return;
    }

    setLoading(true);
    try {
      await fetchProductData(barcodeID);
      if (!productData) {
        setError("No product data found for the submitted barcode.");
      } else {
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      setError("Error fetching product data. Please try again.");
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
      setError(null);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setError("Error fetching product data. Please try again.");
    }
  };

  const renderProductInfo = () => {
    if (productData && productData.product) {
      const {
        product_name = "",
        image_front_url = "",
        nutriments = {},
      } = productData.product;

      const {
        "energy-kcal_serving": energyKcal_serving = "",
        fat_serving = "",
        "saturated-fat_serving": saturatedFat_serving = "",
        carbohydrates_serving = "",
        sugars_serving = "",
        fiber_serving = "",
        proteins_serving = "",
        sodium_serving = "",
      } = nutriments;

      return (
        <div className="productInfo">
          <h2 className="productInfo__title">{product_name}</h2>
          <div className="productInfo__title__image">
            {image_front_url && (
              <img
                src={image_front_url}
                alt="Product Image"
                className="productImage"
              />
            )}
          </div>
          <div className="productInfo__container">
            <table className="productInfo__container__table">
              <thead>
                <tr>
                  <th>Nutrition per serving</th>
                  <th>
                    Serving Size ({productData.product.serving_size || ""})
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Energy</td>
                  <td>{energyKcal_serving} kcal</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>{fat_serving} g</td>
                </tr>
                <tr>
                  <td>Saturated Fat</td>
                  <td>{saturatedFat_serving} g</td>
                </tr>
                <tr>
                  <td>Carbohydrates</td>
                  <td>{carbohydrates_serving} g</td>
                </tr>
                <tr>
                  <td>Sugars</td>
                  <td>{sugars_serving} g</td>
                </tr>
                <tr>
                  <td>Fiber</td>
                  <td>{fiber_serving} g</td>
                </tr>
                <tr>
                  <td>Proteins</td>
                  <td>{proteins_serving} g</td>
                </tr>
                <tr>
                  <td>Sodium</td>
                  <td>{sodium_serving} g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="productInfoBackground">
      <div className="productInfoBackground__container">
        <div className="barcodeTitle">
          <ul>Scan a barcode or enter a barcode number</ul>
        </div>
        <form onSubmit={handleBarcodeSubmit}>
          <input
            type="text"
            placeholder="Enter barcode number"
            value={barcodeID}
            onChange={(e) => setBarcodeID(e.target.value)}
            className="barcodeInput"
          />
          <button type="submit" className="searchBtn">
            Search
          </button>
        </form>

        <button onClick={handleButtonClick}></button>
        <button onClick={handleButtonClick} className="scanBarcodeBtn">
          Scan Barcode
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />

        <Loader loading={loading} message="Retrieving product data..." />

        {error && <p className="error">{error}</p>}

        {productData && renderProductInfo()}
      </div>
    </div>
  );
};

export default ScanBarcode;
