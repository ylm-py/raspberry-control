import './App.css';
import LoadingBtn from './components/LoadingBtn';
import SliderSizes from './components/SliderSizes';
import { useEffect , useState} from 'react';
import ledServices from './services/ledServices';


const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '40px',
}
function App() {
  const [leds, setLeds] = useState([]);

  useEffect(() => {
    ledServices.getAll().then(res => {
      setLeds(res);
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  const updateLed = (led) => {
    //update leds array with new led
    const newLeds = leds.map(l => {
      if(l.GPIO === led.GPIO){
        return led;
      }
      return l;
    }
    );
    setLeds(newLeds);
  }
  return (
    <div style={{width:'800px',margin:'0 auto',textAlign:'center'}}>
      <h1>Raspberry control panel </h1>
              

      {leds.map(led => (
        <div key={led.name} style={style}>
          <h2>{led.name}</h2>
          <SliderSizes updateLed={updateLed}  led={led} />
          <LoadingBtn updateLed={updateLed} led={led} />
          <h3>Connected to GPIO :{led.GPIO}</h3>
        </div>
      ))}
      {/* <div style={style}>
        <LoadingBtn color='success' variant='outlined' text="LED1" />
        <SliderSizes />
      </div>
      <div style={style}>
        <LoadingBtn color='error' variant='contained' text="LED2" />
        <SliderSizes />
      </div>
      <div style={style}>
        <LoadingBtn color='secondary' variant='contained' text="LED3" />
        <SliderSizes />
      </div> */}
    </div>
  );
}

export default App;
