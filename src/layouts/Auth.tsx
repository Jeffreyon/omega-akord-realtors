import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import brandLogo from "../assets/akord-logo.png";
import SSOButton from "../components/SSOButton";

function Auth() {
    return (
        <div id="header-image" className=" bg-[#F5F5F5] bg-fixed">
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
                            <div className=" max-w-sm mt-12 sm:mt-24">
                                <Outlet></Outlet>
                                <div className="mt-8">
                                    <p className="text-slate-500 mb-4">
                                        Or sign in with
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <SSOButton
                                            label="Google"
                                            icon="google"
                                        />
                                        <SSOButton
                                            label="Facebook"
                                            icon="facebook"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Auth;
