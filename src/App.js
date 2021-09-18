import './App.css'
import {Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Readmore from './components/ShowHideData/ReadMore.js';
import Card from './components/cardCarousel/Card.js';
import Accordion from './components/Accordion/Accordion.jsx'
import Menu from './components/MenuFunctionality/Menu';
import Tab from './components/TabFunctionality/Tab';
import Slider from './components/Slider/Slider';
import Crypto from './components/crypto-price-tracker/Crypto'
import Counter from './components/counter/Counter';
import FetchData from './components/fetchData/FetchData';
import FetchData2 from './components/BenWard_fetchData/FetchData2';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/Readmore" component={Readmore} />
          <Route path="/Card" component={Card} />
          <Route path="/Accordion" component={Accordion} />
          <Route path="/Menu" component={Menu} />
          <Route path='/Tab'  component={Tab} />
          <Route path="/Slider"  component={Slider} />
          <Route path="/Crypto"  component={Crypto} />
          <Route path="/Counter"  component={Counter} />
          <Route path="/FetchData"  component={FetchData} />
          <Route path="/FetchData2"  component={FetchData2} />
      </Switch>
    </div>
  );
}

export default App;
