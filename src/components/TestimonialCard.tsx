import quoteIcon from "../assets/quote.svg";

export interface Props {
    title: string;
    body: string;
    user: {
        name: string;
        occupation: string;
        image_url: string;
    };
}

function TestimonialCard(props: Props) {
    return (
        <div className="flex flex-col bg-white border border-gray-200">
            <div className="flex flex-col justify-between flex-1 p-8">
                <img
                    src={quoteIcon}
                    alt="qouteIcon"
                    className="w-10 h-auto mb-4"
                />
                <div className="flex-1">
                    <blockquote>
                        <p className="text-lg text-gray-800 font-semibold mb-3">
                            {props.title}
                        </p>
                        <p className="text-lg text-gray-800">{props.body}</p>
                    </blockquote>
                </div>

                <div>
                    <div className="w-full h-0 mb-8"></div>
                    <div className="flex items-center">
                        <img
                            className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                            src={props.user.image_url}
                            alt=""
                        />
                        <div className="ml-3">
                            <p className="text-base font-semibold text-gray-800 truncate">
                                {props.user.name}
                            </p>
                            <p className="text-base text-gray-500 truncate">
                                {props.user.occupation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
