const InfoCard = ({ title, value, change, icon, trend = 'up', color = 'primary' }) => {
  const colorClasses = {
    primary: {
      bg: 'bg-primary-50',
      icon: 'bg-primary-500',
      text: 'text-primary-600',
    },
    green: {
      bg: 'bg-green-50',
      icon: 'bg-green-500',
      text: 'text-green-600',
    },
    orange: {
      bg: 'bg-orange-50',
      icon: 'bg-orange-500',
      text: 'text-orange-600',
    },
    purple: {
      bg: 'bg-purple-50',
      icon: 'bg-purple-500',
      text: 'text-purple-600',
    },
  };

  const currentColor = colorClasses[color] || colorClasses.primary;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-smooth">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${currentColor.bg} rounded-lg flex items-center justify-center`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
          trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}>
          <svg className={`w-4 h-4 ${trend === 'down' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-sm font-medium">{change}</span>
        </div>
      </div>
      
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default InfoCard;

