import React from 'react';
import { ErrorWrapper } from '../common/components';

export default function Custom404() {
  return (
    <ErrorWrapper statusCode={404} />
  );
}
