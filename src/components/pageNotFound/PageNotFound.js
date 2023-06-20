import { Button, Result } from 'antd'
import React from 'react'
import {useNavigate } from 'react-router-dom'

function PageNotFound() {

  const navigate = useNavigate(-1);

  return (
    <Result className='page-not-found h-screen'
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
    <Button onClick={() => navigate(-1)} className='flex items-center bg-main m-auto margin-inline-zero' type="primary">Back Home</Button>
    }

  />
  )
}

export default PageNotFound  