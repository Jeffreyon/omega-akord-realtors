import Button from "./Button";
import mailboxImage from "../assets/mailbox.png";

function Newsletter() {
    return (
        <section className=" body-font">
            <div className="w-full mx-auto flex px-5 py-24 md:flex-row-reverse flex-col-reverse items-center">
                <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="md:max-w-md lg:col-span-2 mt-6">
                        <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight mb-4">
                            Join in
                        </h2>
                        <span className="text-base font-medium tracking-wide text-slate-500">
                            Subscribe to our newsletter and be updated
                        </span>
                        <form className="flex flex-col mt-4 md:flex-row">
                            <input
                                placeholder="Email"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-slate-100 border border-slate-300 shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:outline-slate-400"
                            />
                            <div className="flex justify-center">
                                <Button label="Subscribe" expand />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover scale-75 md:scale-100 object-center rounded"
                        alt="hero"
                        src={mailboxImage}
                    />
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
