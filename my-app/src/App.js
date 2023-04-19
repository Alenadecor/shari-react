import './App.css'; 
import Header from './components/header/header';
import Header2 from './components/header2/header2';
import Footer from './components/footer/footer';
import Card from './components/card/card';

function App() {
  return (
    <div className="App">
    <Header2/>
    
    <Card/>
    <div>внутри сайта</div>
    <Footer/>
    </div>
  );
}

export default App;
