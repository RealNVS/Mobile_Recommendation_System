const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');

const app = express();
app.use(cors());

const workbook = XLSX.readFile('./data/phones.xlsx'); // Change file path if needed
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

app.get('/phones', (req, res) => {
  let filtered = data;

  const {
    brandModel,
    display,
    processor,
    ram,
    storage,
    battery,
    camera,
    price
  } = req.query;

  // Filter by Brand & Model
  if (brandModel) {
    filtered = filtered.filter(item =>
      item['Brand & Model'].toLowerCase().includes(brandModel.toLowerCase())
    );
  }

  // Display
  if (display) {
    filtered = filtered.filter(item =>
      item.Display && item.Display.toLowerCase().includes(display.toLowerCase())
    );
  }

  // Processor
  if (processor) {
    filtered = filtered.filter(item =>
      item.Processor && item.Processor.toLowerCase().includes(processor.toLowerCase())
    );
  }

  // RAM
  if (ram) {
    filtered = filtered.filter(item =>
      parseInt(item.RAM) >= parseInt(ram)
    );
  }

  // Storage
  if (storage) {
    filtered = filtered.filter(item =>
      parseInt(item.Storage) >= parseInt(storage)
    );
  }

  // Battery
  if (battery) {
    filtered = filtered.filter(item =>
      parseInt(item.Battery) >= parseInt(battery)
    );
  }

  // Camera
  if (camera) {
    filtered = filtered.filter(item =>
      parseInt(item.Camera) >= parseInt(camera)
    );
  }

  // Price
  if (price) {
    filtered = filtered.filter(item =>
      parseInt(item['Price Approx']) <= parseInt(price)
    );
  }

  res.json(filtered);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


