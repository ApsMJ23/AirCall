import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import {PageLoader} from "../PageLoader/PageLoader";
import Header from "../../Header";


const BaseComponent = () => {
    return(
        <div>
            <Header/>
            <Suspense fallback={<PageLoader/>}>
                <div>
                    <Outlet/>
                </div>
            </Suspense>
        </div>
    )
}

export default BaseComponent;