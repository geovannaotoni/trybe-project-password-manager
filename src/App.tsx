import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Services from './components/Services';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <div
        className="bg-gray-900 text-white
        min-w-full min-h-screen flex flex-col
        items-center py-5"
        style={ { backgroundColor: '#272A37' } }
      >
        <Header />
        <Form />
        <hr className="w-72 my-10" />
        <Services />
      </div>
    </GlobalProvider>
  );
}

export default App;
