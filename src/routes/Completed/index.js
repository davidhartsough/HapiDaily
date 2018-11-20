import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import CompletedList from './CompletedList';
import PageLoading from '../../components/PageLoading';

const CompletedPage = ({ uid, ordered, status }) => {
  if (
    status.requested[`users/${uid}/impacts`]
    && !status.requesting[`users/${uid}/impacts`]
    && Array.isArray(ordered.users)
  ) {
    const impacts = ordered.users[0].impacts || [];
    return <CompletedList impacts={impacts} />;
  }
  return <PageLoading />;
};

export default compose(
  firestoreConnect(props => [`users/${props.uid}/impacts`]),
  connect(({ firestore }) => ({
    ordered: firestore.ordered,
    status: firestore.status,
  })),
)(CompletedPage);
