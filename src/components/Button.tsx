interface Props {
    label: string;
    handleClick(): void;
    variant?: string;
}

function Button(props: Props | any) {
    let outlineStyle =
        "text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white";
    let regularStyle = "text-white bg-sky-600 hover:bg-sky-700";
    let baseStyle =
        "inline-flex items-center justify-center px-8 py-3 text-base font-semibold  transition-all duration-200 focus:bg-sky-600 w-full";
    let variantStyle = regularStyle;

    if (props.variant) {
        switch (props.variant) {
            case "outline":
                variantStyle = outlineStyle;
                break;
        }
    }
    return (
        <button
            {...props}
            onClick={props.handleClick}
            className={baseStyle + " " + variantStyle}>
            {props.label}
        </button>
    );
}

export default Button;
