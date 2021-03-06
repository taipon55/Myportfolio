import React from "react";
import Button from "./Button";

export const Contact = () => {
  return (
    <>
      <div className="contact-photo">
        <div className="bg_dark"></div>
        <div className="contact-main">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-text">お問い合わせはこちらからお願いします。</p>
          {/* ボタンを表示 */}
          <Button />
        </div>
      </div>
    </>
  );
};

export default Contact;
