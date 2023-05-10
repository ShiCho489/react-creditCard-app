import CreditCard from './components/CreditCard';
import Image from './Image';

import './App.css';

function App() {
  return (
    <div className="App">
      <CreditCard
  type="visa"
  number="..........8845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="master-card"
  number="........0995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="visa"
  number="..........6984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
     
      
    </div>
  );
}

export default App;