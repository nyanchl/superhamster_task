import { useState } from "react";

import "../css/base_button.css";
import BaseButton from "./base_button/base_button";

function Buttons() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsDisabled(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
    }, 2000);
  };
  // 重複しているbuttonのprops
  const buttonElementProps = {
    text: "編集",
    widthValue: 260,
    heightValue: 50,
    isDisabled,
    isLoading,
    handleClick,
  };
  return (
    <div className="outter-container">
      <BaseButton {...buttonElementProps} />
      <BaseButton
        {...buttonElementProps}
        url="https://www.google.com"
        icon={true}
        iconPosition="left"
      />
      <BaseButton {...buttonElementProps} icon={true} iconPosition="right" />
    </div>
  );
}

export { Buttons };
