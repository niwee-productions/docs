import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function CTACard(props)
{
  return (
    <div {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
      <div className="heading-group">
        <header>
          {props.title}
        </header>
        <p>
          {props.description}
        </p>
      </div>
      <div>
        <a href={props.href} className="wizard-button">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}
