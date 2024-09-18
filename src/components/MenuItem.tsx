// src/components/MenuItem.tsx
import React from 'react';
import { MenuItemType } from '../data';

interface MenuItemProps {
  item: MenuItemType;
  onSelect: (price: number) => void;
  onRemove: (price: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onSelect, onRemove }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px' }} />
      <p>Price: {item.price} dollers</p>
      <button className="add" onClick={() => onSelect(item.price)}>Add to total</button>
      <button className="remove" onClick={() => onRemove(item.price)}>Remove</button>
    </div>
  );
};

export default MenuItem;
