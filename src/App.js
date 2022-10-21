import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </div>
  );
}

export default App;
