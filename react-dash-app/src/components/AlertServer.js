import React from 'react';
import { Alert } from 'reactstrap';

const AlertServer = (props) => {
  return (
    <div>
      <Alert color="primary">
        Unable to submit the form! Please refresh the browser and resubmit.
      </Alert>

    </div>
  );
};

export default AlertServer;
