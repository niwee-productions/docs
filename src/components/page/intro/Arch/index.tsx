import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function Arch(props)
{
  return (
    <div id="arch" {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
      <div className="heading-group">
        <header>Arch Instructions</header>
        <p>
          If you are using an Arch based distribution like Manjaro, Garuda or EndeavorOS you can read the following instructions.
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
