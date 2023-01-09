import React, { FC, useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import Panel from "../../wrappers/Panel/Panel";
import { GlobalContext } from "../../utils/contexts/Global";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

interface CaptchaModalProps {
  onClose: () => void;
}

const CaptchaModal: FC<CaptchaModalProps> = ({ onClose }) => {
  const [text, setText] = useState("");
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [displaySuccessFeedback, setDisplaySuccessFeedback] = useState(false);
  const [loading, setLoading] = useState(false);
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    loadCaptchaEnginge(6, "#AA8439", "white");
  }, []);

  useEffect(() => {
    setDisplayErrorMessage(false);
  }, [text]);

  function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }

  function checkValidation(value: string) {
    setLoading(true);
    setTimeout(() => {
      if (validateCaptcha(value) == true) {
        setDisplayErrorMessage(false);
        setDisplaySuccessFeedback(true);
        setTimeout(() => {
          setDisplaySuccessFeedback(false);
          onClose();
          globalContext?.setVerified(true);
        }, 1000);
      } else {
        setDisplayErrorMessage(true);
        setLoading(false);
      }
    }, 1000);
  }

  const doSubmit = (e: React.SyntheticEvent) => {
    checkValidation(text);

    e.preventDefault();
  };

  return (
    <div data-testid="CaptchaModal">
      <Modal display={true} title="Beep beep, boop boop ?" onClose={onClose}>
        <div
          className={`flex flex-col items-center p-4 ${
            loading ? "cursor-wait opacity-50" : ""
          }`}
        >
          <LoadCanvasTemplate reloadText="(Recharger)" reloadColor="#999" />
          <p className="my-4">
            Merci de saisir le texte affiché ci-dessus dans le champ ci dessous
          </p>
          <form onSubmit={doSubmit} className="flex flex-col">
            <input
              type="text"
              id="user_captcha_input"
              onChange={changeInput}
              className="rounded-lg p-2 shadow-lg"
              placeholder="ex: JhGGtFD"
            />
            <button className="btn btn-dark p-2">
              Valider
              <CheckCircleIcon
                className={`inline text-green-500 transition-all ${
                  displaySuccessFeedback
                    ? "ml-2 h-5 w-5 opacity-100"
                    : "ml-0 h-0 w-0 opacity-0"
                }`}
              />
            </button>
          </form>
          {displayErrorMessage && (
            <p className="text-red-500">
              Le texte saisi ne correspond pas au Captcha
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CaptchaModal;
