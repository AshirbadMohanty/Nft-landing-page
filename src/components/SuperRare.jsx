import React from "react";
import Card from "./Card";
import super1 from "../assets/looney-strong-tiger.png";
import super2 from "../assets/pale-88.png";
import super3 from "../assets/cherry-859.png";
import super4 from "../assets/experimental-man-12.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Gloop Series",
     
      price: 2.99,
      tag: 12983,
      time: 1,
    },
   
    {
      image: super3,
      series: "Gloop Series",
    
      price: 2.99,
      tag: 12983,
      time: 1,
    },
 
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">LE Super Rare Auction</h2>
        <p className="description">
          We have released four limited edition NFT's early which which can be
          bid on via <a href="#">OpenSea</a>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
