import { Link } from "react-router-dom";
import Heading from "./Heading";

function Home() {
  const features = [
    { text: 'Record your expenses and categorize them', symbol: '💰' ,Route : 'add_expenses'},
    { text: 'View a summary of your spending', symbol: '📊',Route : 'show_expenses' },  
    { text: 'Analyze your expenses with charts and graphs', symbol: '📈',Route : 'dashboard' },
    // { text: 'Set budget goals and track your progress', symbol: '🎯' ,Route : ''},
  ];
  
    const fancyOneLine = 'Master your finances with ease and style!';
  
    return (
      <div className="bg-gray-100 " style={{minHeight:"400px"}}>
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="py-5 text-center">
            {/* <h1 className="text-4xl font-bold text-blue-700">Expense Tracker</h1> */}
            <Heading heading="Expense Tracker"></Heading>
            <p className="mt-4 text-lg text-gray-600">{fancyOneLine}</p>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {features.map((feature, index) => (
                <Link to={`/expenses/${feature.Route}`}>
                  <div key={index} className="flex flex-col items-center bg-white rounded-lg p-4 shadow-lg">
                    <span className="text-3xl my-3">{feature.symbol}</span>
                    <span className="text-lg text-gray-700 my-2">{feature.text}</span>
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
