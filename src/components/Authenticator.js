import React from 'react';
import { isLoaded, isEmpty, withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Loading from './Loading';
import SignIn from './SignIn';
import Routes from '../routes';

const Authenticator = ({ auth, profile, firestore }) => {
  if (isLoaded(auth)) {
    if (isEmpty(auth)) {
      return <SignIn />;
    }
    if (isLoaded(profile)) {
      if (isEmpty(profile)) {
        firestore
          .collection('users')
          .doc(auth.uid)
          .set({
            name: auth.displayName,
          });
        return <Loading />;
      }
      return <Routes uid={auth.uid} />;
    }
    return <Loading />;
  }
  return <Loading />;
};

export default connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile,
}))(withFirestore(Authenticator));
