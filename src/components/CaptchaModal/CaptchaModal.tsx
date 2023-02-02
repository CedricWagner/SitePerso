import React, { FC, useContext, useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { GlobalContext } from "../../utils/contexts/Global";
import { postVerifyCaptcha } from "@/api/postVerifyCaptcha";

interface CaptchaModalProps {
  onClose: () => void;
}

const CaptchaModal: FC<CaptchaModalProps> = ({ onClose }) => {
  const globalContext = useContext(GlobalContext);
  const [token, setToken] = useState("");
  const [hasError, setHasError] = useState(false);
  const captchaRef = useRef(null);

  useEffect(() => {
    if (token === "") return;
    handleServerSideVerification(token);
  }, [token]);

  function handleServerSideVerification(token: string) {
    postVerifyCaptcha(token)
      .then((data) => {
        if (data.result === true) {
          globalContext?.setVerified(true);
          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      });
  }

  function handleVerificationSuccess(token: string) {
    setToken(token);
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
          {hasError && (
            <p className="text-red-500">
              Une erreur est survenue lors de la validation du Captcha. Si
              l'erreur se reproduit, merci de privilégier
              <a
                href="https://www.linkedin.com/in/c%C3%A9dric-wagner-573ab8129/"
                target={"_blank"}
                className="underline"
              >
                linkedIn
              </a>
              pour me contacter
            </p>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default CaptchaModal;
