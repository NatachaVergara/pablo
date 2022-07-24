import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
