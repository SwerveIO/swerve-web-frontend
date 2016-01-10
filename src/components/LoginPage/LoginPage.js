/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './LoginPage.scss';
import withStyles from '../../decorators/withStyles';

import Button from '../Button';

const title = 'Swerve - Log In';

@withStyles(s)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  login(endpoint) {
    return function trueLogin() {
      window.location.href = `http://localhost:3000/auth/${endpoint}`;
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <div>
            <Button buttonSpecialClass={['facebook', 'login']} icon="fa-facebook-official" text="Login with Facebook" onClick={this.login('facebook')} />
          </div>
          <div>
            <Button buttonSpecialClass={['twitter', 'login']} icon="fa-twitter" text="Login with Twitter" onClick={this.login('twitter')} />
          </div>
          <div>
            <Button buttonSpecialClass={['reddit', 'login']} icon="fa-reddit" text="Login with reddit" onClick={this.login('reddit')} />
          </div>
        </div>
      </div>
    );
  }

}

export default LoginPage;
