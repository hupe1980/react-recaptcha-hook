# react-recaptcha-hook

> React hook for [google-recaptcha v3](https://developers.google.com/recaptcha/docs/v3)

## Install

```sh
// with npm
npm install react-recaptcha-hook

// with yarn
yarn add react-recaptcha-hook
```

## How to use

```javascript
import React from 'react';
import useRecaptcha, { Badge } from 'react-recaptcha-hook';

const RecaptchaComponent = ({ action, siteKey, onToken }) => {
  const execute = useRecaptcha({ siteKey, hideDefaultBadge: true });

  useEffect(() => {
    const getToken = async () => {
      const token = await execute(action);
      onToken(token);
    };

    getToken();
  }, []);

  return <Badge />;
};

export default RecaptchaComponent;
```

## License

[MIT](LICENSE)
