import MainNavigator from "../components/UI/MainNavigator";
import { Outlet } from 'react-router-dom';

const RootPage = () => {
    return (
        <>
            <MainNavigator />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootPage;