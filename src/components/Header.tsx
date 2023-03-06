import ButtonLink from "./ButtonLink";

function Header() {
    return (
        <div id="header-image" className=" w-full">
            <section className="py-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-1">
                        <div className=" max-w-lg sm:mx-auto sm:text-center lg:mx-0 lg:text-left">
                            <h1 className="text-4xl font-bold sm:text-6xl">
                                Become a{" "}
                                <div className="relative inline-flex my-2">
                                    <h1 className="relative font-bold ">
                                        Certified Realtor
                                    </h1>
                                </div>{" "}
                                Today
                            </h1>

                            <p className="mt-8 text-base text-gray-600 sm:text-lg">
                                We provide strategic partnerships between real
                                estate marketers and real estate developers
                                using technology driven innovations
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start ">
                                <ButtonLink
                                    label="Learn more"
                                    url="/sign-up"
                                    expand
                                />
                                <ButtonLink
                                    label="Sign up"
                                    url="/sign-up"
                                    variant="outline"
                                    expand
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
