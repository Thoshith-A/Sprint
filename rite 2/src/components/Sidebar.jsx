import { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { id: 'Dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'Analytics', icon: '📈', label: 'Analytics' },
    { id: 'Projects', icon: '📁', label: 'Projects' },
    { id: 'Team', icon: '👥', label: 'Team' },
    { id: 'Messages', icon: '💬', label: 'Messages' },
    { id: 'Settings', icon: '⚙️', label: 'Settings' },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-smooth"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white shadow-xl
          transform transition-smooth
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dashboard</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-smooth"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                transition-smooth
                ${activeItem === item.id
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-smooth">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">Admin</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

