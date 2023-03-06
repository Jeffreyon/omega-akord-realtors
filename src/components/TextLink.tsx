import { Link } from "react-router-dom";
import ArrowRightIcon from "../assets/arrow-left.svg";

interface Props {
    label: string;
    url: string;
    withIcon?: boolean;
}

function TextLink(props: Props | any) {
    let baseStyle =
        "inline-flex items-center justify-center font-semibold  transition-all duration-200 sm:w-auto text-[#2B559F] hover:text-[#0f3a87] hover:underline";

    if (props.expand) {
        baseStyle += " w-full";
    }

    return (
        <Link to={props.url} className={baseStyle}>
            {props.label}
            {props.withIcon && <img src={ArrowRightIcon} className="ml-2" />}
        </Link>
    );
}

export default TextLink;
