import BaseButton from "./base_button/base_button";
import icon from "../icon/pencil.png";

function NormalButton() {
  return (
    <div className="base-button">
      <BaseButton text="編集" width={260} height={50} />
    </div>
  );
}

function RightIconButton() {
  return (
    <div>
      <BaseButton text="編集" width={260} height={50} icon={icon} url="https://www.google.com"/>
    </div>
  );
}

function LeftIconButton() {
  return (
    <div>
      <BaseButton text="編集" width={260} height={50} icon={icon}/>
    </div>
  );
}

export {NormalButton, RightIconButton, LeftIconButton};