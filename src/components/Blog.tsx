import a1 from "../assets/articles/a1.png";
import a2 from "../assets/articles/a2.png";
import a3 from "../assets/articles/a3.png";
import ButtonLink from "./ButtonLink";

let articles = [
    {
        image_url: a1,
        title: "10 high impact moves to reduce total cost of occupancy",
        body: "Corporate real estate and facilities leaders face new pressures to decrease spending while improving resilence and accomodating new ways of working",
        url: "/",
    },
    {
        image_url: a2,
        title: "The costs and benefits of creating a modern workspace",
        body: "Corporate real estate and facilities leaders face new pressures to decrease spending while improving resilence and accomodating new ways of working",
        url: "/",
    },
    {
        image_url: a3,
        title: "Solving housing issues in mega cities",
        body: "Corporate real estate and facilities leaders face new pressures to decrease spending while improving resilence and accomodating new ways of working",
        url: "/",
    },
];

function Blog() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="mb-12 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Blog
            </h2>
            <div className="flex flex-col gap-6 sm:mx-auto lg:max-w-full">
                {articles.map((a, ii) => {
                    return (
                        <div
                            key={ii}
                            className=" transition-shadow duration-300 bg-white flex flex-col lg:flex-row gap-8">
                            <div className=" min-w-fit">
                                <a href={a.url} aria-label="Article">
                                    <img
                                        src={a.image_url}
                                        className="object-cover w-full h-64 "
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="py-5 w-full flex flex-col justify-between max-w-lg">
                                <div>
                                    <a
                                        href={a.url}
                                        aria-label="Article"
                                        className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                                        <p className="text-2xl font-bold ">
                                            {a.title}
                                        </p>
                                    </a>
                                    <p className="mb-4 text-gray-700">
                                        {a.body}
                                    </p>
                                </div>
                                <div className="flex space-x-4">
                                    <ButtonLink
                                        label="Read more"
                                        url={a.url}
                                        variant="outline"
                                        expand
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Blog;
