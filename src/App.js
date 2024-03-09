import { useState } from 'react';
import './App.css';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [random, setRandom] = useState(null);
  const [isActive, setActive] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name1 || !name2) {
      alert('Enter the details');
    } else {
      setActive(true);
    }
  }
  function showResult() {
    if (!name1 || !name2) return;
    setRandom(Math.round(Math.random() * 100) + 1);
  }
  function resetMatch() {
    setName1('');
    setName2('');
    setActive(false);
  }
  return (
    <div className="App">
      <div className='app-details'>
        <h1>IS LOVE CALCULATOR TRUE?</h1>
        <div className='love-quote'>
          <div>
            <p>Do you love someone and wants to know if he or she is the special one?</p>
          </div>
          <div>
            <p>This is an ancient system of numerology that is based on your name</p>
          </div>
        </div>
      </div>
      <div className='app-message'>
        <div className={isActive ? "active" : null}>
          <div className='form-data'>
            <h2>Get Started</h2>
            <form onSubmit={handleSubmit}>
              <p>Enter your name</p>
              <input type='text' value={name1} onChange={(e) => setName1(e.target.value)} />
              <p>Enter your Partners name</p>
              <input type='text' value={name2} onChange={(e) => setName2(e.target.value)} />
              <button onClick={showResult}>Check Result</button>
            </form></div>
        </div>
        {random && <div className={` result ${isActive ? null : "active"}`}>
          <h3>{name1.charAt(0).toUpperCase() + name1.slice(1)} & {name2.charAt(0).toUpperCase() + name2.slice(1)}</h3>
          <div className='heart'>
            <span>❤</span>
            <h2>{random}%</h2>
          </div>
          <p>{random >= 50 ? 'Congratulattions! Good choice' : 'Can choose someone better'}</p>
          <button onClick={resetMatch}>Recheck</button>
        </div>}
      </div>
    </div >
  );
}

export default App;
