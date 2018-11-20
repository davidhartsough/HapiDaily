import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PeopleTable from './PeopleTable';
import PageLoading from '../../components/PageLoading';

const PeoplePage = ({
  uid, ordered, firestore, status,
}) => {
  if (Array.isArray(ordered.users)) {
    if (
      (status.requested[`users/${uid}/people`] && !status.requesting[`users/${uid}/people`])
      || Array.isArray(ordered.users[0].people)
    ) {
      const people = ordered.users[0].people || [];
      return <PeopleTable uid={uid} people={people} firestore={firestore} />;
    }
  }
  return <PageLoading />;
};

export default compose(
  firestoreConnect(props => [`users/${props.uid}/people`]),
  connect(({ firestore }) => ({ ordered: firestore.ordered, status: firestore.status })),
)(PeoplePage);
