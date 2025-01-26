import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BudgetDetails() {
  const { price } = useParams();
  const [phones, setPhones] = useState([]);

  // Calculate lower bound
  const numericPrice = Number(price);
  let lowerBound = 0;

  if (numericPrice === 10000) lowerBound = 0;
  else if (numericPrice === 15000) lowerBound = 10000;
  else if (numericPrice === 20000) lowerBound = 15000;
  else if (numericPrice === 25000) lowerBound = 20000;
  else if (numericPrice === 30000) lowerBound = 25000;

  useEffect(() => {
    axios
      .get("http://localhost:5000/phones")
      .then((res) => {
        const filtered = res.data.filter((phone) => {
          const phonePrice = Number(phone["Price Approx"]);
          return phonePrice > lowerBound && phonePrice <= numericPrice;
        });
        setPhones(filtered);
      })
      .catch((err) => console.log(err));
  }, [numericPrice, lowerBound]);

  // Sort in descending order
  const sortedPhones = [...phones].sort(
    (a, b) => Number(b["Price Approx"]) - Number(a["Price Approx"])
  );

  return (
    <div className="budget-details-container">
      <h2>Phones between ₹{lowerBound + 1} and ₹{numericPrice}</h2>
      {sortedPhones.length === 0 ? (
        <p>No phones found in this range.</p>
      ) : (
        <div className="phone-grid">
          {sortedPhones.map((phone, index) => (
            <div key={index} className="phone-card">
              <h3>{phone["Brand & Model"]}</h3>
              <p><strong>Display:</strong> {phone.Display}</p>
              <p><strong>Processor:</strong> {phone.Processor}</p>
              <p><strong>RAM:</strong> {phone.RAM} GB</p>
              <p><strong>Storage:</strong> {phone.Storage} GB</p>
              <p><strong>Camera:</strong> {phone.Camera} MP</p>
              <p><strong>Battery:</strong> {phone.Battery} mAh</p>
              <p className="price"><strong>Price:</strong> ₹{phone["Price Approx"]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
