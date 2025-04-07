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
  type,
  target,
}: BaseButtonType) {
  // ボタンのスタイル
  const buttonStyle = {
    width: widthValue,
    height: heightValue,
  };
  // ボタンの要素
  const buttonElement = (
    <button
      disabled={isLoading || isDisabled}
      type={type}
      style={buttonStyle}
      onClick={() => {
        if (handleClick) handleClick();
        if (url) window.open(url, target);
      }}
    >
      <span>{text}</span>
    </button>
  );

  return (
    <div>
      {url ? (
        <>
          <section>{buttonElement}</section>
          <section>{buttonElement}</section>
          <section>{buttonElement}</section>
        </>
      ) : (
        <>
          <section>{buttonElement}</section>
          <section>{buttonElement}</section>
          <section>{buttonElement}</section>
        </>
      )}
    </div>
  );
}

export default BaseButton;
