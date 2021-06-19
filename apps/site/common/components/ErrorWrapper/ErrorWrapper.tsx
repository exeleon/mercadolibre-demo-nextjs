import React from 'react';

import styles from './ErrorWrapper.module.scss';

type ErrorWrapperProps = {
  statusCode: number,
  title?: string,
};

export function ErrorWrapper({ statusCode, title }: ErrorWrapperProps) {
  let message: string;

  switch (statusCode) {
    case 404:
      message = 'Página no encontrada';
      break;

    default:
      message = 'Algo salió mal';
      break;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={statusCode && 'border-b'}>{statusCode ?? 'Ups!'}</h1>
      <p>{title ?? message}</p>
    </div>
  );
}

export default ErrorWrapper;
