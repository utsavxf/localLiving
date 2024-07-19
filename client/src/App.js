import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
import Loading from './components/Loading';
import Notification from './components/Notification';
import Room from './components/rooms/Room';
import ViewPage from './viewPage/ViewPage';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    alert("The mapbox will take around 1 minute to load. Please use the following credentials for testing and click OK to proceed:\n\nEmail: hari@gmail.com\nPassword: hari123");
  }, []);

  return (
    <>
      <Loading />
      <Notification />
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Room />
    </>
  );
};

export default App;