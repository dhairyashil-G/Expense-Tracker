import { Link } from "react-router-dom";

function Home() {
  const features = [
    { text: 'Record your expenses and categorize them', symbol: '💰' ,Route : 'add_expense'},
    { text: 'View a summary of your spending', symbol: '📊',Route : 'show_expense' },  
    { text: 'Analyze your expenses with charts and graphs', symbol: '📈',Route : 'dashboard' },
    { text: 'Set budget goals and track your progress', symbol: '🎯' ,Route : ''},
  ];
  
    const fancyOneLine = 'Master your finances with ease and style!';
  
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <h1 className="text-4xl font-bold text-blue-700">Expense Tracker</h1>
            <p className="mt-4 text-lg text-gray-600">{fancyOneLine}</p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {features.map((feature, index) => (
                <Link to={`/expenses/${feature.Route}`}>
                  <div key={index} className="flex flex-col items-center bg-white rounded-lg p-4 shadow-lg">
                    <span className="text-3xl mb-2">{feature.symbol}</span>
                    <span className="text-lg text-gray-700">{feature.text}</span>
                  </div>
                </Link> 
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Home;
