import React, {useEffect, useState} from 'react';
import {Card, Row, Col, Image} from "antd";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((apiData) => {setData(apiData.products)
      console.log(apiData.products);
    });
  },[]);
  return (
    <div>
      <h1>Shop</h1>
      <Row gutter={[20,20]}>
        {data.map((item, index) => {
          return (
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card key={index} title={item.title}>
                <Image src={item.images[0]}/>
                <p>{item.description}</p>
                <p>price : {item.price}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
} 

export default App;
