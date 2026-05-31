import React from 'react';
import { formatDate, formatCurrency } from '../utils/formatters';

const OrderCard = ({ order, colSpan = 2 }) => (
  <div
    className={`order-card ${colSpan === 2 ? 'col-span-2' : 'col-span-1'}`}
    style={{ maxHeight: '250px', overflowY: 'auto', padding: '5px', marginBottom: '16px' }}
  >
    <hr className="border-gray-200 my-4" />
    <div className="order-card-header">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {order.id}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {formatDate(order.orderDate)}
        </p>
      </div>

      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          order.status === 'Pending Payment'
            ? 'bg-orange-100 text-orange-700'
            : 'bg-blue-100 text-blue-700'
        }`}
      >
        {order.status}
      </span>
    </div>

    <div className="order-card-items mb-4">
      {order.items.map((item, index) => (
        <div key={index} className="flex justify-between text-sm py-1">
          <span>{item.name}</span>

          <span className="text-gray-500">
            {item.quantity} × {formatCurrency(item.price)}
          </span>
        </div>
      ))}
    </div>

    <div className="order-card-total mt-3 pt-4 border-t border-gray-200">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Total Amount
        </span>

        <span className="text-lg font-bold text-gray-800">
          {formatCurrency(order.totalAmount)}
        </span>
      </div>
    </div>
  </div>
);

export default OrderCard;