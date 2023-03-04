import { Link } from "react-router-dom";

interface Props {
    label: string;
    url: string;
    variant?: string;
}

function ButtonLink(props: Props | any) {
    let outlineStyle =
        "text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white";
    let regularStyle = "text-white bg-sky-600 hover:bg-sky-700";
    let baseStyle =
        "inline-flex items-center justify-center px-8 py-3 text-base font-semibold  transition-all duration-200 focus:bg-sky-600";
    let variantStyle = regularStyle;

    if (props.variant) {
        switch (props.variant) {
            case "outline":
                variantStyle = outlineStyle;
                break;
        }
    }

    return (
        <Link to={props.url} className={baseStyle + " " + variantStyle}>
            {props.label}
        </Link>
    );
}

export default ButtonLink;
