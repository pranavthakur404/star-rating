import React, { useState } from "react";
import Star from "./component/Star";

const App = () => {
  const [star, setStar] = useState([
    {
      id: 1,
      checked: truex,
    },
    {
      id: 2,
      checked: false,
    },
    {
      id: 3,
      checked: false,
    },
    {
      id: 4,
      checked: false,
    },
    {
      id: 5,
      checked: false,
    },
  ]);

  function setRating(id) {
    setStar((prevData) => {
      return prevData.map((data) => {
        if (data.id <= id) {
          return { ...data, checked: true };
        } else {
          return { ...data, checked: false };
        }
      });
    });
  }

  return (
    <div className="app-container">
      <h1 className="heading">Star Rating</h1>
      <div className="star-container">
        {star.map((data) => {
          return <Star key={data.id} {...data} setRating={setRating} />;
        })}
      </div>
    </div>
  );
};

export default App;
