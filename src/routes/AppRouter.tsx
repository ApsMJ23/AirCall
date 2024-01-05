import {createBrowserRouter, Navigate} from "react-router-dom";
import BaseComponent from "../components/BaseComponent/BaseComponent";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";
import Calls from "../pages/Calls/Calls";
import ArchivesPage from "../pages/ArchivesPage/ArchivesPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseComponent/>,
        errorElement: <ErrorPage/>,
        children:[
            {index: true, element: <Navigate to={"/calls"} replace={true}/> },
            {path: "/calls", element: <Calls/>},
            {path:"/archived",element:<ArchivesPage/>},
            {path:"*" ,element:<PageNotFound/>}
        ]
    }
])