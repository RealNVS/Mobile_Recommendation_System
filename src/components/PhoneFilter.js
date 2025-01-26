import React, { useState } from 'react';
import axios from 'axios';

export default function PhoneFilter() {
  const [filters, setFilters] = useState({
    brandModel: '',
    display: '',
    processor: '',
    ram: '',
    storage: '',
    battery: '',
    camera: '',
    price: ''
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    axios.get('http://localhost:5000/phones', {
      params: filters
    })
    .then(res => setResults(res.data))
    .catch(err => console.log(err));
  };
  const handleEnter=(e)=>{
    if(e.key === 'Enter'){
      e.preventDefault();
      handleSearch();
    }
  }
  return (
    <div className="filter-container">
      <h2>Find Your Perfect Mobile</h2>
      <div className="filter-form" onKeyDown={handleEnter}>
        <input type="text" name="brandModel" placeholder="Brand & Model" onChange={handleChange} />
        <input type="text" name="display" placeholder="Display size/type" onChange={handleChange} />
        <input type="text" name="processor" placeholder="Processor (e.g., Snapdragon)" onChange={handleChange} />
        <input type="number" name="ram" placeholder="Min RAM (GB)" onChange={handleChange} />
        <input type="number" name="storage" placeholder="Min Storage (GB)" onChange={handleChange} />
        <input type="number" name="battery" placeholder="Min Battery (mAh)" onChange={handleChange} />
        <input type="number" name="camera" placeholder="Min Camera (MP)" onChange={handleChange} />
        <input type="number" name="price" placeholder="Max Price (e.g., 20000)" onChange={handleChange} />
        <div className='filter-button'> <button onClick={handleSearch}>Search</button> </div>
        
      </div>

      <div className="results-container">
        {results.length === 0 ? (
          <p>Try adjusting the filters.</p>
        ) : (
          results.map((phone, index) => (
            <div key={index} className="phone-card">
              <h3>{phone["Brand & Model"]}</h3>
              <p><strong>Display:</strong> {phone.Display}</p>
              <p><strong>Processor:</strong> {phone.Processor}</p>
              <p><strong>RAM:</strong> {phone.RAM} GB</p>
              <p><strong>Storage:</strong> {phone.Storage} GB</p>
              <p><strong>Camera:</strong> {phone.Camera} MP</p>
              <p><strong>Battery:</strong> {phone.Battery} mAh</p>
              <p><strong>Price:</strong> ₹{phone["Price Approx"]}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
