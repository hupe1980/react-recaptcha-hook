import { renderHook } from '@testing-library/react-hooks';

import useRecaptcha from '../use-recaptcha';

describe('useRecaptcha', () => {
  it('should append a script tag', async () => {
    const sitekey = 'TEST';

    expect(document.querySelectorAll('script').length).toBe(0);

    renderHook(() => useRecaptcha({ sitekey }));

    const script = document.querySelector('script');

    expect(script).not.toBeNull();

    if (script) {
      expect(script.src).toEqual(
        `https://www.google.com/recaptcha/api.js?render=${sitekey}`
      );
    }
  });
});
