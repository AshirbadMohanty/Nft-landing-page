import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/icons8-bitcoin-48.png";
import eth3 from "../assets/icons8-eos-64.png";
import eth4 from "../assets/icons8-neo-cryptocurrency-64.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth4} alt="eth1" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth2" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
         
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
         
        </div>
        <div className="content">
          <div className="image">
            <img src={eth3} alt="eth2" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
         
        </div>
        
      </div>
    </div>
  );
}
