import ButtonLink from "./ButtonLink";

function Header() {
    return (
        <div id="header-image">
            <section className="py-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold text-black sm:text-6xl ">
                                Become a{" "}
                                <div className="relative inline-flex my-2">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[20px] border-[#4ADE80]"></span>
                                    <h1 className="relative font-bold text-black">
                                        Certified Realtor
                                    </h1>
                                </div>{" "}
                                Today
                            </h1>

                            <p className="mt-8 text-base text-black sm:text-xl">
                                We provide strategic partnerships between real
                                estate marketers and real estate developers
                                using technology driven innovations
                            </p>

                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <ButtonLink label="Learn more" url="/sign-up" />
                                <ButtonLink
                                    label="Sign up"
                                    url="/sign-up"
                                    variant="outline"
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
