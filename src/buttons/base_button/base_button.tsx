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
  icon?: boolean;
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
  iconPosition = "left",
  type,
  target,
}: BaseButtonType) {
  // ボタンのスタイル
  const buttonStyle = {
    width: widthValue,
    height: heightValue,
  };
  // ボタンの要素
  const buttonElement = (className: string) => (
    <button
      className={className}
      disabled={isLoading || isDisabled}
      type={type}
      style={buttonStyle}
      onClick={() => {
        if (handleClick) handleClick();
        if (url) window.open(url, target);
      }}
    >
      {icon === true && iconPosition === "left" && (
        <span className="button-icon-left">
          <i className="fa-solid fa-pencil"></i>
        </span>
      )}
      <span className="button-text">{text}</span>
      {icon === true && iconPosition === "right" && (
        <span className="button-icon-right">
          <i className="fa-solid fa-pencil"></i>
        </span>
      )}
    </button>
  );

  return (
    <div className="button-group">
      {url ? (
        <>
          <section>{buttonElement("first-button")}</section>
          <section>{buttonElement("second-button")}</section>
          <section>{buttonElement("third-button")}</section>
        </>
      ) : (
        <>
          <section>{buttonElement("first-button")}</section>
          <section>{buttonElement("second-button")}</section>
          <section>{buttonElement("third-button")}</section>
        </>
      )}
    </div>
  );
}

export default BaseButton;
