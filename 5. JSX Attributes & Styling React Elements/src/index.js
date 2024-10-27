import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/100";

ReactDOM.render(
  <div>
    <h1 className="heading" spellcheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://d2sj0xby2hzqoy.cloudfront.net/kenwood_italy/attachments/data/000/007/580/medium/shutterstock_1340823500.jpg"
        className="food-img"
        alt="noodle image 1"
      />
      <img
        src="https://cdn.cook.stbm.it/thumbnails/ricette/142/142638/hd1600x900.jpg"
        className="food-img"
        alt="noodle image 2"
      />
      <img
        src="https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2024/07/noodles-di-verdure/Noodles_orizz.jpg"
        className="food-img"
        alt="noodle image 3"
      />
      <img src={img + "?grayscale"} alt="random image" />
    </div>
  </div>,
  document.getElementById("root")
);
