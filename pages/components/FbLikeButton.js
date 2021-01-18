import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';

export default class FbLike extends Component {
  render() {
    return (
      <FacebookProvider appId="696059034605578">
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider>
    );
  }
}