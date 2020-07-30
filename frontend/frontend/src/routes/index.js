import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route';

// Components
import SignIn from '../pages/SignIn'
import FileListing from '../pages/FileListing'
import FileRegistration from '../pages/FileRegistration'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path='/listagem' component={FileListing} isPrivate/>
      <Route path='/cadastro' component={FileRegistration} isPrivate/>
    </Switch>
  )
}