import React from 'react';
import { Alert } from 'antd';


const Error =({ error }) =>({error: <Alert
    style={{marginRight:50}}
      message="Error"
      description={error.message}
      type="error"
      showIcon
    />})

export default Error;