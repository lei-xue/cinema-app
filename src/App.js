import './App.css';
import { AllRouters } from './routers/AllRouters';
import { Header, Footer } from './components';
function App() {
  return (
    <div className="App">
      <Header />
      <AllRouters />
      <Footer />
    </div>
  );
}

export default App;
