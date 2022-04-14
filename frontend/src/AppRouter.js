import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';

import CinemaHosts from './components/CinemaHosts';
import Visitors from './components/Visitor';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/guests' element={<Visitors />} />
                <Route path='/hosts' element={<CinemaHosts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;