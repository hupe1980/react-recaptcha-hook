import * as React from 'react';
import useScript from 'react-script-hook';

export interface RecaptchaProps {
    sitekey: string;
    hideDefaultBadge?: boolean;
}

export function useRecaptcha({
    sitekey,
    hideDefaultBadge = false,
}: RecaptchaProps) {
    const [recaptcha, setRecaptcha] = React.useState<Recaptcha | undefined>();

    React.useEffect(() => {
        if (isBrowser && hideDefaultBadge) {
            injectStyle('.grecaptcha-badge { visibility: hidden; }');
        }
    }, [hideDefaultBadge]);

    useScript({
        src: `https://www.google.com/recaptcha/api.js?render=${sitekey}`,
        onload: () =>
            (window as any).grecaptcha.ready(() => {
                setRecaptcha((window as any).grecaptcha);
            }),
    });

    React.useEffect(() => {
        if ((window as any).grecaptcha) {
            (window as any).grecaptcha.ready(() => {
                setRecaptcha((window as any).grecaptcha);
            });
        }
    }, []);

    return (action: string) => {
        return new Promise<string>((resolve) => {
            if (recaptcha) {
                resolve(recaptcha.execute(sitekey, { action }));
            }
        });
    };
}

interface Recaptcha {
    ready(): Promise<void>;
    render(
        container: HTMLElement,
        config: { theme?: 'dark' | 'light'; size?: 'compact' | 'normal' },
    ): void;
    execute(sitekey: string, config: { action: string }): string;
}

const isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';

const injectStyle = (rule: string) => {
    const styleEl = document.createElement('style') as HTMLStyleElement;
    document.head.appendChild(styleEl);

    const styleSheet = styleEl.sheet as CSSStyleSheet;
    if (styleSheet) styleSheet.insertRule(rule, styleSheet.cssRules.length);
};
