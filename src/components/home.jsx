import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";


export const Home = () => {
  const [hotel, sethotel] = useState([]);
  const [Count, setCount] = useState(1);
   const [stored,setstored] = useState(hotel)
  
   

  useEffect(() => {
    getData(Count);
  }, [Count]);


  

  const handleChange = () => {
    if (Count >= 1 && Count < 6) {
      setCount(Count + 1);
    }
  };
  const handleChange1 = () => {
    if (Count > 1 && Count <= 6) {
      setCount(Count - 1);
    }
  };

  const handleSort=()=>{
     
  }

  

  const getData = (Count) => {
    axios
      .get(`http://localhost:3000/get-restaurants?_page=${Count}&_limit=5`)
      .then((res) => {
        sethotel(res.data);
      });
  };
  console.log(stored)
 



  return (
    <div>
      <div id="nav">
        <button>4* +</button>
        <button>3* +</button>
        <button>2* +</button>
        <button>1* +</button>

        <div>
          <button>Cash</button>
          <button>Card</button>
          <button>upi</button>
          <button>All</button>
        </div>
        <div>
          <button  onClick={handleSort}>Low-to-high</button>
          <button>High-to-low</button>
        </div>
      </div>

      <div className="main">
        {hotel.map((g) => (
          <div className="main1" key={g.id}>
            <div className="m">
              <div className="b1">
                <img src={g.img} height="100%" width="100%"></img>
              </div>

              <div className="b2">
                <div className="m1">
                  <h1 className="heading">{g.hotel_name}</h1>
                  <p>{g.address}</p>
                  <p>$ {g.cost}</p>
                  <h4>{g.payment}</h4>
                </div>
                <div className="m2">{g.star} Star </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleChange1}>prev</button>
        <button onClick={handleChange}>next</button>
      </div>
    </div>
  );
};
