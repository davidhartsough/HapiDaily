import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Goal from './Goal';
import PageLoading from '../../components/PageLoading';

const goalArray = ['1', '2', '3'];

const GoalPage = ({
  uid, ordered, data, firestore, status,
}) => {
  if (
    status.requested[`users/${uid}/goals`]
    && !status.requesting[`users/${uid}/goals`]
    && Array.isArray(ordered.users)
  ) {
    if (
      (status.requested[`users/${uid}/people`] && !status.requesting[`users/${uid}/people`])
      || Array.isArray(ordered.users[0].people)
    ) {
      const people = ordered.users[0].people || [];
      const peopleObj = data.users[uid].people || {};
      const goals = data.users[uid].goals || {};
      return (
        <div>
          {goalArray.map((goalId) => {
            const goal = goals[goalId] || {};
            return (
              <Goal
                key={goalId}
                uid={uid}
                goalId={goalId}
                people={people}
                peopleObj={peopleObj}
                goal={goal}
                firestore={firestore}
              />
            );
          })}
        </div>
      );
    }
  }
  return <PageLoading />;
};

export default compose(
  firestoreConnect(props => [`users/${props.uid}/people`, `users/${props.uid}/goals`]),
  connect(({ firestore }) => ({
    ordered: firestore.ordered,
    data: firestore.data,
    status: firestore.status,
  })),
)(GoalPage);
