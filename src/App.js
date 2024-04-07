import './App.css';
import img0 from './images/0418d7df-78bb-4aa8-a14a-fd83412be197.jpg';
import img1 from './images/marcocarola.jpg'
import img2 from './images/capriaty.jpg'
import img3 from './images/jamie.jpg'

function App() {
  return (
    <>
      <div className='container'>
        <div className='caja'>1</div>
          <button>accept</button>
          <div>
            <img src={img0} alt='' />
          </div>

          <div className='caja'>1</div >
            <button>accept</button>
            <img src={img1} alt='' />



            <div className='caja'>2</div>
            <button>accept</button>
            <div>
              <img src={img2} alt='' />
            </div>

          <div className='caja'>4</div>
          <button>accept</button>
          <div>
            <img src={img3} alt='' />
          </div>
    </div>
    </>

  );
}

export default App;
