import googleLogo from "../assets/google-logo.svg";
import facebookLogo from "../assets/facebook-logo.svg";

interface Props {
    label: string;
    handleClick(): void;
    icon: string;
}

let icons = {
    google: googleLogo,
    facebook: facebookLogo,
};

function SSOButton(props: Props | any) {
    let baseStyle =
        "inline-flex items-center justify-center px-8 py-3 text-base font-semibold  transition-all duration-200 text-slate-500 border border-slate-500 hover:bg-slate-200 hover:text-slate-700 w-full flex items-item gap-2";

    return (
        <button {...props} onClick={props.handleClick} className={baseStyle}>
            {props.icon && <img src={icons[props.icon]} />}
            {props.label}
        </button>
    );
}

export default SSOButton;
