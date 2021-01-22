import React, { FC, useEffect } from "react";
import { useRecaptcha, Badge } from "react-recaptcha-hook";

export interface RecaptchaProps {
  action: string;
  sitekey: string;
  onToken: Function;
}

export const Recaptcha: FC<RecaptchaProps> = (props) => {
  const { sitekey, action, onToken } = props;
  const execute = useRecaptcha({ sitekey, hideDefaultBadge: true });

  useEffect(() => {
    const getToken = async () => {
      const token = await execute(action);
      onToken(token);
    };

    getToken();
  }, [action, execute, onToken]);

  return <Badge />;
};
