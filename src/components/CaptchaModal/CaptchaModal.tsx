import React, { FC, useContext, useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { GlobalContext } from "../../utils/contexts/Global";
import { postVerifyCaptcha } from "@/api/postVerifyCaptcha";
import i18next from "i18next";
import { Trans, useTranslation } from "react-i18next";

interface CaptchaModalProps {
  onClose: () => void;
}

const CaptchaModal: FC<CaptchaModalProps> = ({ onClose }) => {
  const globalContext = useContext(GlobalContext);
  const [token, setToken] = useState("");
  const [hasError, setHasError] = useState(false);
  const captchaRef = useRef(null);

  const { t } = useTranslation("common");

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
      .catch(() => {
        setHasError(true);
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
            languageOverride={i18next.language}
          />
          {hasError && (
            <p className="text-red-500">
              <Trans i18nKey="captcha.error" ns="common">
                Une erreur est survenue lors de la validation du Captcha. Si
                l'erreur se reproduit, merci de privilégier
                <a
                  href="https://www.linkedin.com/in/c%C3%A9dric-wagner-573ab8129/"
                  target="_blank"
                  className="underline"
                >
                  linkedIn
                </a>
                pour me contacter.
              </Trans>
            </p>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default CaptchaModal;
