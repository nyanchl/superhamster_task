import '../../css/base_button/base_button.css';

type ButtonType = "button" | "submit" | "reset";

type TargetAttributeType = "_blank" | "_self" | "_parent" | "_top";

type BaseButtonType =  {
    text: string;
    width: number;
    height: number;
    url?: string;
    icon?: string;
    type?: ButtonType
    target?: TargetAttributeType;
    onClick?: () => void;
}

function BaseButton({text, width, height, url, icon, type, target}: BaseButtonType) {
    if (url) {
        return (
            <div>
                <p>
                    <a href={url} target={target} rel="noopener noreferrer">
                        <button className="first-button" type={type} style={{ color: "white", width: width, height: height}}>{text}</button>
                    </a>
                </p>
                <p>
                    <a href={url} target={target} rel="noopener noreferrer">
                        <button className="second-button" type={type} style={{ color: "black", width: width, height: height }}>{text}</button>
                    </a>
                </p>
                <p>
                    <a href={url} target={target} rel="noopener noreferrer">
                        <button className="third-button" type={type} style={{ color: "black", width: width, height: height }}>{text}</button>
                    </a>
                </p>
            </div>
        )
    } else {
        return (
            <div>
                <p>
                    <button className="first-button" type={type} style={{ color: "white", width: width, height: height}}>{text}</button>
                </p>
                <p>
                    <button className="second-button" type={type} style={{ color: "black", width: width, height: height }}>{text}</button>
                </p>
                <p>
                    <button className="third-button" type={type} style={{ color: "black", width: width, height: height }}>{text}</button>
                </p>
            </div>
        )
    }
}

export default BaseButton;