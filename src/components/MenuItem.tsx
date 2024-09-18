// src/components/MenuItem.tsx
import React from 'react';
import { MenuItemType } from '../data';

interface MenuItemProps {
  item: MenuItemType;
  onSelect: () => void;
  onRemove: () => void;
  disabled: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onSelect, onRemove, disabled }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px' }} />
      <p>Price: ${item.price.toFixed(2)}</p>
      <button className="add" onClick={onSelect}>Add</button>
      <button className="remove" onClick={onRemove} disabled={disabled}>Remove</button>
    </div>
  );
};

export default MenuItem;
