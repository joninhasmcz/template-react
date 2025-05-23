import { Outlet } from 'react-router-dom';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

export const MainLayout = () => {
    return (
        <div className="app-container">
            <Header/>
            <main className="content-area">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};