import React from 'react';
import { Link } from 'react-router-dom';  

export default function Budget() {
  const budgets = [
    {
      title: "Under ₹10,000",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDG9Vd6wx0dBqFoA8WMB21JCXmq2pwF6U5t8dG8mtUPEcf7y8PuCykhdR8U6PeVZnEidrHH9DpHceAJpeGvrdTbnZ7XAokHA", // Replace with real images
      desc: "Best picks for ultra-budget users, reliable and basic smartphones.",
      route:10000,
      
    },
    {
      title: "Under ₹15,000",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRa6mxgD4ujqCO_y31f3GZ92cOhqpYH7i6DJQisKu0lF5JHqcGJGfsSjSIwFEdg4-WKKMTHlCMT1M9z4W_UrFQ_BwLHUyVymU0atX4SF_Rlruf72wrFREKs_Q",
      desc: "Balanced smartphones for casual gaming and daily use.",
      route:15000,
    },
    {
      title: "Under ₹20,000",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxzl_8cuD5tBrh68uHRw7gJ8ZkoLuFXsfKOo0bsDsU2XuJxsuir7EOfmB7IZki9bSSBPlQDlvuOK1w3ywMcYqMo_HczlzThAPL02UaHBfBYpZDHIflqY_w",
      desc: "Mid-range devices with good performance and camera quality.",
      route:20000,
    },
    {
      title: "Under ₹25,000",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQb1T9iTFuM2suD_URuXkcreYBGDWyYlxGTt9HRMnw1F3Aa9Fgr69gkrqH-JhfOLoqLJBj-39Sfp0JCycc0-cMjVAa5CcXmKBC59ug_pvWXlx7UclZd8IPmmg",
      desc: "Premium mid-range with solid specs and design.",
      route: 25000,
      
    },
    {
      title: "Under ₹30,000",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSh7TOqFeVGxp6olt2bah6F_pFz-_mRka7EeWvr9bbKZMpyR4QH1gHd-jgoyre507xn_IVo01Z439TU1PvTopf-AXVibJ66SbgCGDwVOaOndu7nuHqxgvId",
      desc: "Near-flagship level smartphones at affordable price.",
      route:30000,
      
    },
  ];
 return (
    <div className="budget-container">
      {budgets.map((item, index) => (
        <Link
          to={`/budget/${item.route}`}
          className="budget-card"
          key={index}
        >
          <img src={item.img} alt={item.title} className="budget-image" />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </Link>
      ))}
    </div>
  );
}