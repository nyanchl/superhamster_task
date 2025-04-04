import "../../css/base_button.css";

type ButtonType = "button" | "submit" | "reset";

type TargetAttributeType = "_blank" | "_self" | "_parent" | "_top";

type BaseButtonType = {
  text: string;
  widthValue: number;
  heightValue: number;
  isDisabled: boolean;
  isLoading: boolean;
  handleClick?: () => void;
  url?: string;
  icon?: string;
  type?: ButtonType;
  target?: TargetAttributeType;
  onClick?: () => void;
};

function BaseButton({
  text,
  widthValue,
  heightValue,
  isDisabled,
  isLoading,
  handleClick,
  url,
  icon,
  type,
  target,
}: BaseButtonType) {
  if (url) {
    return (
      <div>
        <p>
          <a href={url} target={target}>
            <button
              className="first-button"
              onClick={handleClick}
              disabled={isLoading || isDisabled}
              type={type}
              style={{ color: "white", width: widthValue, height: heightValue }}
            >
              {isLoading ? "loading..." : text}
            </button>
          </a>
        </p>
        <p>
          <a href={url} target={target}>
            <button
              className="second-button"
              onClick={handleClick}
              disabled={isLoading || isDisabled}
              type={type}
              style={{ color: "black", width: widthValue, height: heightValue }}
            >
              {isLoading ? "loading..." : text}
            </button>
          </a>
        </p>
        <p>
          <a href={url} target={target}>
            <button
              className="third-button"
              onClick={handleClick}
              disabled={isLoading || isDisabled}
              type={type}
              style={{ color: "black", width: widthValue, height: heightValue }}
            >
              {isLoading ? "loading..." : text}
            </button>
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <button
            className="first-button"
            onClick={handleClick}
            disabled={isLoading || isDisabled}
            type={type}
            style={{ color: "white", width: widthValue, height: heightValue }}
          >
            {icon && <img className="icon-size" src={icon} alt="" />}
            {isLoading ? "loading..." : text}
          </button>
        </p>
        <p>
          <button
            className="second-button"
            onClick={handleClick}
            disabled={isLoading || isDisabled}
            type={type}
            style={{ color: "black", width: widthValue, height: heightValue }}
          >
            {icon && <img className="icon-size" src={icon} alt="" />}
            {isLoading ? "loading..." : text}
          </button>
        </p>
        <p>
          <button
            className="third-button"
            onClick={handleClick}
            disabled={isLoading || isDisabled}
            type={type}
            style={{ color: "black", width: widthValue, height: heightValue }}
          >
            {icon && <img className="icon-size" src={icon} alt="" />}
            {isLoading ? "loading..." : text}
          </button>
        </p>
      </div>
    );
  }
}

export default BaseButton;
