import dashboardImage from "../assets/dashboard.png";
import ButtonLink from "./ButtonLink";

function AboutUs() {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto sm:text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                        About us
                    </h2>
                    <p className="mt-8 mb-6 text-lg text-gray-900">
                        We are a world leader in commercial real estate services
                        and investments. With services, insights and data that
                        span every dimension of the industry, we create
                        solutions of every size, in every sector and across
                        every geography.
                    </p>
                    <div className="mt-12 flex justify-center">
                        <ButtonLink label="Learn more" url="/sign-up" expand />
                    </div>
                    <h3 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:leading-tight mt-24">
                        Create an account with us
                    </h3>
                    <p className="mt-8 mb-12 text-lg text-gray-900">
                        Create an account with us and have access to other tools
                        available on this platform to manage and keep track of
                        your data in real time. We also created a curated
                        selection of articles on real estate management.
                    </p>
                    <div className="container mx-auto 2xl:px-12 mb-12 object-cover border py-20 bg-slate-200">
                        <img
                            className=" w-auto scale-110"
                            src={dashboardImage}
                            alt=""
                        />
                    </div>
                    <div className="mt-12 flex justify-center">
                        <ButtonLink label="Learn more" url="/sign-up" expand />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
