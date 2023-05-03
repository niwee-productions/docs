import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function Debian(props)
{
  return (
    <div id="debian" {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
      <div className="heading-group">
        <header>Debian Instructions</header>
        <p>
          If you are using a Debian based distribution such as Ubuntu or Zorin OS, you can read the following instructions.
        </p>
      </div>
      {/* <div>
        <a href="https://ionicframework.com/start" className="wizard-button">
          Open docs <ion-icon name="arrow-forward-outline" />
        </a>
      </div> */}
    </div>
  );
}
