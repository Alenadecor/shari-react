import './App.css'; 
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Card from './components/card/card';

function App() {
  return (
    <div className="App">
    <Header/>
    
    <Card/>
    <div>внутри сайта</div>
    <Footer/>
    </div>
  );
}

export default App;
