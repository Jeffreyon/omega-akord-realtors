import t1 from "../assets/testimonials/1.png";
import t2 from "../assets/testimonials/2.png";
import t3 from "../assets/testimonials/3.png";

import ButtonLink from "./ButtonLink";
import TestimonialCard, { Props } from "./TestimonialCard";

let testimonials: Props[] = [
    {
        title: "It proved to be exactly the kind of home we wanted.",
        body: "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
        user: {
            name: "Jaydon Jumoke",
            occupation: "Realtor",
            image_url: t1,
        },
    },
    {
        title: "Nobody knows Portland and the peninsula better than David.",
        body: "My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. ",
        user: {
            name: "Alfredo Seun",
            occupation: "Real estate contractor",
            image_url: t2,
        },
    },
    {
        title: "He keeps his client’s best interests in sharp focus",
        body: "After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then, I’ve bought two properties and sold one.",
        user: {
            name: "Modupe Folarin",
            occupation: "Realtor",
            image_url: t3,
        },
    },
];

function Testimonials() {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-12">
                    <p className="uppercase text-sky-600 font-semibold tracking-wider mb-4">
                        Customer Testimonials
                    </p>
                    <div className="sm:flex justify-between">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                            What people say about us
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
                    {testimonials.map((t, ii) => {
                        return <TestimonialCard key={ii} {...t} />;
                    })}
                </div>
                <div className="mt-12 flex justify-center">
                    <ButtonLink
                        label="Learn more"
                        url="/sign-up"
                        variant="outline"
                        expand
                    />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
