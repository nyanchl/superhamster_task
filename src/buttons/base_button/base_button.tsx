import "../../css/base_button.css";

type IconPositionType = "left" | "right";

type ButtonType = "button" | "submit" | "reset";

type TargetAttributeType = "_blank" | "_self" | "_parent" | "_top";

type BaseButtonType = {
  text: string;
  widthValue: number;
  heightValue: number;
  isDisabled: boolean;
  isLoading: boolean;
  onClick?: () => void;
  handleClick?: () => void;
  url?: string;
  icon?: string;
  iconPosition?: IconPositionType;
  type?: ButtonType;
  target?: TargetAttributeType;
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
  iconPosition,
  type,
  target,
}: BaseButtonType) {
  const buttonStyle = {
    width: widthValue,
    height: heightValue,
  };

  const buttonElement = (className: string) => (
    <button
      className={className}
      disabled={isLoading || isDisabled}
      type={type}
      style={buttonStyle}
      onClick={handleClick}
    >
      {isLoading ? (
        "loading..."
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <img src={icon} alt="icon" className="icon left" />
          )}
          <span>{text}</span>
          {icon && iconPosition === "right" && (
            <img src={icon} alt="icon" className="icon right" />
          )}
        </>
      )}
    </button>
  );

  const urlElement = (className: string) => (
    <a href={url} target={target}>
      {buttonElement(className)}
    </a>
  );

  if (url) {
    return (
      <div>
        <p>{urlElement("first-button")}</p>
        <p>{urlElement("second-button")}</p>
        <p>{urlElement("third-button")}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{buttonElement("first-button")}</p>
        <p>{buttonElement("second-button")}</p>
        <p>{buttonElement("third-button")}</p>
      </div>
    );
  }
}

export default BaseButton;
