import React, { FC, useContext, useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { GlobalContext } from "../../utils/contexts/Global";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

interface CaptchaModalProps {
  onClose: () => void;
}

const CaptchaModal: FC<CaptchaModalProps> = ({ onClose }) => {
  const globalContext = useContext(GlobalContext);
  const [token, setToken] = useState("");
  const captchaRef = useRef(null);

  useEffect(() => {
    // TODO: send token to the server and verify from serverside
  }, [token]);

  function handleVerificationSuccess(token: string) {
    setToken(token);
    globalContext?.setVerified(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  }

  return (
    <div data-testid="CaptchaModal">
      <Modal display={true} title="Beep beep, boop boop ?" onClose={onClose}>
        <form className="flex flex-col">
          <HCaptcha
            sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
            onVerify={(token) => handleVerificationSuccess(token)}
            ref={captchaRef}
          />
        </form>
      </Modal>
    </div>
  );
};

export default CaptchaModal;
