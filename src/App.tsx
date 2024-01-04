import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Services from './components/Services';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <Form />
        <Services />
      </div>
    </GlobalProvider>
  );
}

export default App;
