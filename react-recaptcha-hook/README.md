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
import React, { useEffect } from 'react';
import useRecaptcha, { Badge } from 'react-recaptcha-hook';

const RecaptchaComponent = ({ action, sitekey, onToken }) => {
  const execute = useRecaptcha({ sitekey, hideDefaultBadge: true });

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

## Server side validation

- [Verify the User's Response](https://developers.google.com/recaptcha/docs/verify)
- [Domain/Package Name Validation](https://developers.google.com/recaptcha/docs/domain_validation)

## License

[MIT](LICENSE)
