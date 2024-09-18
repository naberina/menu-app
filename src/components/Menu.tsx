// // src/components/Menu.tsx
// import React, { useState } from 'react';
// import { menuItems } from '../data';
// import MenuItem from './MenuItem';
// import './Menu.css'; 

// interface OrderItem {
//   name: string;
//   price: number;
//   quantity: number;
// }

// const Menu: React.FC = () => {
//   const [total, setTotal] = useState(0);
//   const [orders, setOrders] = useState<OrderItem[]>([]);

//   const handleSelect = (item: OrderItem) => {
//     // setTotal(total + price);
//     setOrders((prevOrders) => {
//       const existingOrder = prevOrders.find(order => order.name === item.name);
//       if (existingOrder) {
//         // 商品が既にある場合、数量を増やす
//         return prevOrders.map(order =>
//           order.name === item.name
//             ? { ...order, quantity: order.quantity + 1 }
//             : order
//         );
//       } else {
//         // 商品がない場合、新たに追加
//         return [...prevOrders, { ...item, quantity: 1 }];
//       }
//     });
//     setTotal((prevTotal) => parseFloat((prevTotal + item.price).toFixed(2)));
//   };

//   const handleRemove = (item: OrderItem) => {
//     // 0以下にならないように条件を追加
//     // setTotal(total - price);
//     // setTotal((prevTotal) => (prevTotal - price >= 0 ? prevTotal - price : 0));
//     setOrders((prevOrders) => {
//       const existingOrder = prevOrders.find(order => order.name === item.name);
//       if (existingOrder && existingOrder.quantity > 1) {
//         // 商品が既にある場合、数量を減らす
//         return prevOrders.map(order =>
//           order.name === item.name
//             ? { ...order, quantity: order.quantity - 1 }
//             : order
//         );
//       } else {
//         // 商品の数量が1以下の場合、削除
//         return prevOrders.filter(order => order.name !== item.name);
//       }
//     });
//     setTotal((prevTotal) => parseFloat((prevTotal - item.price >= 0 ? prevTotal - item.price : 0).toFixed(2)));
//   };

//   const handleCler = () => {
//     setTotal(0);
//     setOrders([]);
//   };


//   return (
//     <div>
//       <h1>Menu</h1>
//       <div className="menu-container">
//         {menuItems.map((item) => (
//             <MenuItem
//               key={item.id}
//               item={item}
//               onSelect={() => handleSelect(item)}
//               onRemove={() => handleRemove(item)}
//             />
//         ))}
//         <h2>Total: {total.toFixed(2)} dollers</h2>
//         <button onClick={handleCler}>Clear Total</button>
//         <div className="order-summary">
//           <h2>Order Summary</h2>
//           <ul>
//             {orders.map((order, index) => (
//               <li key={index}>
//                 {order.name} - {order.quantity} x {order.price} dollers
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };


// src/components/Menu.tsx
import React, { useState } from 'react';
import { menuItems, MenuItemType } from '../data';
import MenuItem from './MenuItem';
import './Menu.css';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

const Menu: React.FC = () => {
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const handleSelect = (item: MenuItemType) => {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find(order => order.name === item.name);
      if (existingOrder) {
        // 商品が既にある場合、数量を増やす
        return prevOrders.map(order =>
          order.name === item.name
            ? { ...order, quantity: order.quantity + 1 }
            : order
        );
      } else {
        // 商品がない場合、新たに追加
        return [...prevOrders, { name: item.name, price: item.price, quantity: 1 }];
      }
    });
    setTotal((prevTotal) => parseFloat((prevTotal + item.price).toFixed(2)));
  };

  const handleRemove = (item: MenuItemType) => {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find(order => order.name === item.name);
      if (existingOrder) {
        if (existingOrder.quantity > 1) {
          // 商品の数量が1より大きい場合、数量を減らす
          return prevOrders.map(order =>
            order.name === item.name
              ? { ...order, quantity: order.quantity - 1 }
              : order
          );
        } else {
          // 商品の数量が1以下の場合、削除
          return prevOrders.filter(order => order.name !== item.name);
        }
      }
      // 商品がリストに存在しない場合、変更なし
      return prevOrders;
    });

    // 合計金額も減算
    setTotal((prevTotal) => {
      const itemPrice = menuItems.find(menuItem => menuItem.name === item.name)?.price || 0;
      return parseFloat((prevTotal - itemPrice >= 0 ? prevTotal - itemPrice : 0).toFixed(2));
    });
  };

  const handleClear = () => {
    setTotal(0);
    setOrders([]);
  };

  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-container">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onSelect={() => handleSelect(item)}
            onRemove={() => handleRemove(item)}
            disabled={!orders.some(order => order.name === item.name)}
          />
        ))}
      </div>
      <h2>Total: $ {total.toFixed(2)}</h2>
      <button onClick={handleClear}>Clear Total</button>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              ・{order.name} : {order.quantity} x ${order.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
