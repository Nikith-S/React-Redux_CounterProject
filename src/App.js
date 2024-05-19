
import './App.css';
import Header from './components/Header';
import Conatiner from './components/Container';
import DisplayCounter from './components/DisplayCounter';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/PrivacyMessage';


function App() {
 const privacy = useSelector(store => store.privacy)
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Conatiner>
      <Header />
    <div className="col-lg-6 mx-auto">
       {privacy ? <PrivacyMessage/> : <DisplayCounter/> }
      <Controls/>
    </div>
</Conatiner>


</div>


   
  );
}

export default App;
