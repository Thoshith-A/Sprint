import TopBar from './TopBar';
import Sidebar from './Sidebar';
import InfoCard from './InfoCard';
import { useState } from 'react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: '+12.5%', icon: '💰', trend: 'up', color: 'primary' },
    { title: 'Active Users', value: '2,845', change: '+8.2%', icon: '👥', trend: 'up', color: 'green' },
    { title: 'New Orders', value: '142', change: '-2.1%', icon: '📦', trend: 'down', color: 'orange' },
    { title: 'Conversion Rate', value: '3.24%', change: '+0.8%', icon: '📊', trend: 'up', color: 'purple' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <InfoCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
                trend={stat.trend}
                color={stat.color}
              />
            ))}
          </div>

          {/* Additional Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { user: 'John Doe', action: 'completed a task', time: '2 hours ago', avatar: '👤' },
                  { user: 'Jane Smith', action: 'created a project', time: '4 hours ago', avatar: '👤' },
                  { user: 'Mike Johnson', action: 'updated settings', time: '6 hours ago', avatar: '👤' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-lg">{activity.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'New Project', icon: '➕', hoverClass: 'hover:border-primary-500 hover:bg-primary-50' },
                  { label: 'Add User', icon: '👤', hoverClass: 'hover:border-green-500 hover:bg-green-50' },
                  { label: 'Export Data', icon: '📊', hoverClass: 'hover:border-orange-500 hover:bg-orange-50' },
                  { label: 'Settings', icon: '⚙️', hoverClass: 'hover:border-purple-500 hover:bg-purple-50' },
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`
                      flex flex-col items-center justify-center 
                      p-6 rounded-lg border-2 border-dashed border-gray-300
                      ${action.hoverClass}
                      transition-smooth group
                    `}
                  >
                    <span className="text-3xl mb-2 group-hover:scale-110 transition-smooth">{action.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Overview</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <span className="text-6xl mb-4 block">📈</span>
                <p className="text-gray-600 font-medium">Chart visualization would appear here</p>
                <p className="text-gray-500 text-sm mt-2">Integrate with your preferred charting library</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

