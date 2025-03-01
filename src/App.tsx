 import './styles.css';

function App() {


 

  const clickHandler = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(`${ev.clientX}`);
    return;
  };

  return (
    <div className="container flexs bg-red-500  bg-red-500 w-full h-full bg-red-500">
      <h1 className="backdrop-blur-sm">Welcome to Tauri!</h1>
    
      <button className="bg-red-500" onClick={clickHandler}>click</button>
    </div>
  );
}

export default App;