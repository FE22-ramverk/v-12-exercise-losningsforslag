import './App.css';
import About from './Components/About';
import Image from './Components/Image';

function App() {
  const name = "ADA LOVELACE";

  return (
    <>
      <header>
        <h1>{name}</h1>
      </header>
      <main>
        <Image />
        <About />
      </main>
    </>
  );
};

export default App;
