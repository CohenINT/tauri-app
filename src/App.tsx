import './styles.css';

function App() {




  const clickHandler = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(`${ev.clientX}`);
    return;
  };

  return (
    <div className="flex w-full flex-col justify-center items-center ">
      <div className='flex flex-col justify-center items-center bg-green-200 p-4 rounded-2xl mt-12'>
        <h1 className=" ">Welcome to Tauri!</h1>
        <h4>Pick a Tab!</h4>
      </div>
      <div className='tabs_gallery flex flex-row  w-[50%] justify-evenly p-5 rounded-3xl  bg-orange-100 '>

        {
          //TODO: each button make a Tab and reroute to different page accordingly.
        }
        <button  className='block  font-bold text-7xl'>Snoring Monitoring</button>
        <button className='block  font-bold text-7xl'>Looper duper!</button>
      </div>


    </div>
  );
}

export default App;