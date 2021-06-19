import React from 'react';
import { ErrorWrapper } from '../common/components';

function Error({ statusCode }) {
  return (
    <ErrorWrapper statusCode={statusCode} />
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}

export default Error
