import * as React from 'react';

export interface BadgeProps {
  [key: string]: any;
}

export const Badge: React.FC<BadgeProps> = props => {
  return (
    <span {...props}>
      This site is protected by reCAPTCHA and the Google{' '}
      <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
      <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </span>
  );
};
