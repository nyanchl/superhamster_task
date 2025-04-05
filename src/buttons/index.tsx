import { useState } from "react";

import BaseButton from "./base_button/base_button";
import icon from "../icon/pencil.png";

function Buttons() {
  const [isDisabled, setisDisabled] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const handleClick = () => {
    setisDisabled(true);
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      setisDisabled(false);
    }, 2000);
  };
  return (
    <div>
      <BaseButton
        text="編集"
        widthValue={260}
        heightValue={50}
        isDisabled={isDisabled}
        isLoading={isLoading}
        handleClick={handleClick}
      />
      <BaseButton
        text="編集"
        widthValue={260}
        heightValue={50}
        isDisabled={isDisabled}
        isLoading={isLoading}
        handleClick={handleClick}
        url="https://www.google.com"
        icon={icon}
        iconPosition="left"
      />
      <BaseButton
        text="編集"
        widthValue={260}
        heightValue={50}
        isDisabled={isDisabled}
        isLoading={isLoading}
        handleClick={handleClick}
        icon={icon}
        iconPosition="right"
      />
    </div>
  );
}

export { Buttons };
