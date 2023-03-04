import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import brandLogo from "../assets/akord-logo.png";
import Button from "../components/Button";

function Auth() {
    return (
        <div id="header-image" className=" bg-slate-100 bg-fixed">
            <section className="py-10 min-h-screen">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <a href="/" className="flex items-center">
                                <img
                                    src={brandLogo}
                                    className="h-12 mr-3 sm:h-16"
                                    alt="Logo"
                                />
                            </a>
                            <div className="flex mt-12 sm:mt-24">
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Auth;
