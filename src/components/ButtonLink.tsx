import { Link } from "react-router-dom";

interface Props {
    label: string;
    url: string;
    variant?: string;
}

function ButtonLink(props: Props | any) {
    let outlineStyle =
        "text-[#2B559F] border border-[#2B559F] hover:bg-[#2B559F] hover:text-white";
    let regularStyle = "text-white bg-[#2B559F] hover:bg-[#0f3a87]";
    let baseStyle =
        "inline-flex items-center justify-center px-8 py-3 text-base font-semibold  transition-all duration-200 sm:w-auto";
    let variantStyle = regularStyle;

    if (props.variant) {
        switch (props.variant) {
            case "outline":
                variantStyle = outlineStyle;
                break;
        }
    }

    if (props.expand) {
        baseStyle += " w-full";
    }

    return (
        <Link to={props.url} className={baseStyle + " " + variantStyle}>
            {props.label}
        </Link>
    );
}

export default ButtonLink;
