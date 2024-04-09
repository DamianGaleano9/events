import './App.css';
import img0 from './images/0418d7df-78bb-4aa8-a14a-fd83412be197.jpg';
import img1 from './images/marcocarola.jpg'
// import img2 from './images/capriaty.jpg'
// import img3 from './images/jamie.jpg'
import { useRef } from 'react';

function App() {
  const cambio = 23.99;


  const refCaja = useRef();


  function incrementar(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    // e.target.style.backgroundColor= "black "
  }

  const convert = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio
  }

  const cambiar = (j) => {
    j.target.src = img1
  }


  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value

  }


  return (
    <>
      <div className='container'>
        <div ref={refCaja} className='caja' onClick={incrementar}>1</div>
        <button onClick={convert}>accept</button>
        <div><img onClick={cambiar} src={img1} alt='' /></div>
        <div>
          <img src={img0} alt='' />
        </div>
        <input onChange={lectura} className='field' />

        <div ref={refCaja} className='caja' onClick={incrementar}>2</div >
        <button onClick={convert}>accept</button>
        <img src={img1} alt='' />
        <input onChange={lectura} className='field' />



        {/* <div ref={refCaja} className='caja' onClick={incrementar}>3</div>
        <button onClick={convert}>accept</button>
        <div>
          <img src={img2} alt='' />
        </div>
        <input onChange={lectura} className='field' />

        <div ref={refCaja} className='caja' onClick={incrementar}>4</div>
        <button onClick={convert}>accept</button>
        <div>
          <img src={img3} alt='' />
        </div>
        <input onChange={lectura} className='field' /> */}

      </div>
    </>

  );
}

export default App;
