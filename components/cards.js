import React from 'react';
import { Card } from 'antd';
const Cards = ({ data }) => (
  <>
    <Card
      size="small"
      title={data}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);
export default Cards;