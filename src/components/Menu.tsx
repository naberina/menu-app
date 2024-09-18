// src/components/Menu.tsx
import React, { useState } from 'react';
import { menuItems } from '../data';
import MenuItem from './MenuItem';
import './Menu.css'; 

const Menu: React.FC = () => {
  const [total, setTotal] = useState(0);

  const handleSelect = (price: number) => {
    setTotal(total + price);
  };

  const handleRemove = (price: number) => {
    // 0以下にならないように条件を追加
    // setTotal(total - price);
    setTotal((prevTotal) => (prevTotal - price >= 0 ? prevTotal - price : 0));
  };

  const handleCler = () => {
    setTotal(0);
  }


  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-container">
        {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} onSelect={handleSelect} onRemove={handleRemove} />
        ))}
        <h2>Total: {total.toFixed(2)} dollers</h2>
        <button onClick={handleCler}>Clear Total</button>
      </div>
    </div>
  );
};

export default Menu;
