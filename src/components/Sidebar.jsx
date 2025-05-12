import { useState } from 'react';

import restauron_logo from './../assets/restauron-logo-1.png';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('DASHBOARD');
  
  const menuItems = [
    { name: 'DASHBOARD', icon: '📊' },
    { name: 'ORDERS', icon: '📝' },
    { name: 'ITEMS', icon: '🍽️' },
    { name: 'EXPENSES', icon: '💰' },
    { name: 'PAYMENTS', icon: '💳' },
    { name: 'EMPLOYEES', icon: '👥' },
    { name: 'RESTAURANT', icon: '🏢' }
  ];

  return (
    <div className="flex flex-col h-screen bg-amber-50 w-64 shadow-lg">
      {/* Logo */}
      <div className="flex justify-center py-6">
        <div className="flex flex-col items-center">
          <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-30 h-30 rounded-full bg-amber-800 flex items-center justify-center">
              <img src={restauron_logo} alt="Logo" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded transition-colors duration-150 ${
                  activeItem === item.name 
                    ? 'bg-amber-700 text-white' 
                    : 'text-amber-900 hover:bg-amber-600 hover:text-white'
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}