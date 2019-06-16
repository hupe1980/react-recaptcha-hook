import { renderHook } from 'react-hooks-testing-library';

import useRecaptcha from '../use-recaptcha';

describe('useRecaptcha', () => {
  it('should append a script tag', async () => {
    const siteKey = 'TEST';

    expect(document.querySelectorAll('script').length).toBe(0);

    renderHook(() => useRecaptcha({ siteKey }));

    const script = document.querySelector('script');

    expect(script).not.toBeNull();

    if (script) {
      expect(script.src).toEqual(
        `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      );
    }
  });
});
