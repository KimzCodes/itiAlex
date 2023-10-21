import { useEffect } from "react";
import "./styles.css";

// react
//another react lib
//js libr
//component
//styles

const Modal = () => {
  useEffect(() => {
    console.log("init");

    return () => {
      console.log("unmount");
    };
  }, []);

  return <div className="modal">Modal</div>;
};

export default Modal;
