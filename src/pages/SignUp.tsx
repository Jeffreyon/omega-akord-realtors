import brandLogo from "../assets/akord-logo.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div id="header-image" className=" bg-slate-100 bg-fixed">
            <section className="py-10 min-h-screen">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <a href="/" className="flex items-center">
                                <img
                                    src={brandLogo}
                                    className="h-6 mr-3 sm:h-16"
                                    alt="Logo"
                                />
                            </a>
                            <div className="flex mt-24">
                                <div className="">
                                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                        Realtor Sign Up
                                    </h2>
                                    <p className="mt-2 text-base text-gray-600">
                                        Already have an account?{" "}
                                        <Link
                                            to="/sign-in"
                                            className="font-medium text-sky-600 transition-all duration-200 hover:text-sky-700 hover:underline focus:text-sky-700">
                                            Login
                                        </Link>
                                    </p>

                                    <form
                                        action="#"
                                        method="POST"
                                        className="mt-8">
                                        <div className="space-y-5">
                                            <div>
                                                <label
                                                    htmlFor=""
                                                    className="text-base font-medium text-gray-900">
                                                    {" "}
                                                    Full Name{" "}
                                                </label>
                                                <input
                                                    placeholder="Eg: James Bond"
                                                    required
                                                    type="text"
                                                    className="flex-grow text-slate-700 mt-3 w-full h-12 px-4 mb-3 transition duration-200 border border-slate-300 shadow-sm  md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:outline-slate-400"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor=""
                                                    className="text-base font-medium text-gray-900">
                                                    {" "}
                                                    Email address{" "}
                                                </label>
                                                <input
                                                    placeholder="Eg: james@bond.com"
                                                    required
                                                    type="text"
                                                    className="flex-grow text-slate-700 mt-3 w-full h-12 px-4 mb-3 transition duration-200 border border-slate-300 shadow-sm  md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:outline-slate-400"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor=""
                                                    className="text-base font-medium text-gray-900">
                                                    {" "}
                                                    Password{" "}
                                                </label>
                                                <input
                                                    placeholder="Not less than 8 characters"
                                                    required
                                                    type="password"
                                                    className="flex-grow text-slate-700 mt-3 w-full h-12 px-4 mb-3 transition duration-200 border border-slate-300 shadow-sm  md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:outline-slate-400"
                                                />
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="agree"
                                                    id="agree"
                                                    className="w-5 h-5 text-sky-600 bg-white border-gray-200 rounded"
                                                />

                                                <label
                                                    htmlFor="agree"
                                                    className="ml-3 text-sm font-medium text-gray-500">
                                                    I agree to Omega Akord’s{" "}
                                                    <a
                                                        href="#"
                                                        title=""
                                                        className="text-sky-600 hover:text-sky-700 hover:underline">
                                                        Terms of Service
                                                    </a>{" "}
                                                    and{" "}
                                                    <a
                                                        href="#"
                                                        title=""
                                                        className="text-sky-600 hover:text-sky-700 hover:underline">
                                                        Privacy Policy
                                                    </a>
                                                </label>
                                            </div>

                                            <Button
                                                label="Create an account"
                                                handleClick
                                            />
                                        </div>
                                    </form>

                                    {/* <div className="mt-3 space-y-3">
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                                            <div className="absolute inset-y-0 left-0 p-4">
                                                <svg
                                                    className="w-6 h-6 text-rose-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor">
                                                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                                </svg>
                                            </div>
                                            Sign up with Google
                                        </button>

                                        <button
                                            type="button"
                                            className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                                            <div className="absolute inset-y-0 left-0 p-4">
                                                <svg
                                                    className="w-6 h-6 text-[#2563EB]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor">
                                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                                </svg>
                                            </div>
                                            Sign up with Facebook
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUp;
