import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function Fedora(props)
{
  return (
    <div id="fedora" {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
      <div className="heading-group">
        <header>Fedora Instructions</header>
        <p>
          If you are using a Fedora based distribution such as Fedora or Red Hat, you can read the following instructions.
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
