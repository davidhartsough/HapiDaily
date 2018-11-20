import React from 'react';
import { isEmpty } from 'react-redux-firebase';
import EmptyState from './EmptyState';
import Edit from './Edit';
import GoalCard from './GoalCard';
import dailies from '../../store/dailies';

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

class Goal extends React.Component {
  state = {
    editMode: false,
    forceToEmptyState: false,
  };

  goToEdit = () => {
    this.setState({
      editMode: true,
      forceToEmptyState: false,
    });
  };

  exitEdit = () => {
    this.setState({
      editMode: false,
      forceToEmptyState: false,
    });
  };

  generateGoal = () => {
    const {
      people, firestore, uid, goalId,
    } = this.props;
    const randomPerson = people.length
      ? getRandomItem(people)
      : {
        id: 'someone',
        impacts: 0,
        name: 'someone',
      };
    if (!people.length) {
      firestore
        .collection('users')
        .doc(uid)
        .collection('people')
        .doc('someone')
        .set({
          name: 'someone',
          impacts: 0,
        });
    }
    firestore
      .collection('users')
      .doc(uid)
      .collection('goals')
      .doc(goalId)
      .set({
        goal: getRandomItem(dailies),
        personName: randomPerson.name,
        personId: randomPerson.id,
      });
  };

  onCreate = () => {
    this.generateGoal();
    this.goToEdit();
  };

  onGenerate = () => {
    this.generateGoal();
    this.exitEdit();
  };

  onSave = (newGoal) => {
    const { goalId, firestore, uid } = this.props;
    firestore
      .collection('users')
      .doc(uid)
      .collection('goals')
      .doc(goalId)
      .update(newGoal);
    this.exitEdit();
  };

  getEndGoal = () => {
    const { goal } = this.props;
    return goal.goal.replace('someone', goal.personName);
  };

  onComplete = () => {
    const {
      peopleObj, goal, goalId, firestore, uid,
    } = this.props;
    const impacts = 1 + peopleObj[goal.personId].impacts;
    firestore
      .collection('users')
      .doc(uid)
      .collection('people')
      .doc(goal.personId)
      .update({ impacts });
    firestore
      .collection('users')
      .doc(uid)
      .collection('impacts')
      .add({
        goal: goal.goal,
        endGoal: this.getEndGoal(),
        personName: goal.personName,
        personId: goal.personId,
        date: new Date(),
      });
    firestore
      .collection('users')
      .doc(uid)
      .collection('goals')
      .doc(goalId)
      .set({});
    this.setState({
      editMode: false,
      forceToEmptyState: true,
    });
  };

  onEdit = () => {
    this.goToEdit();
  };

  createNewPerson = (name) => {
    const { firestore, uid } = this.props;
    return new Promise(resolve => firestore
      .collection('users')
      .doc(uid)
      .collection('people')
      .add({
        name,
        impacts: 0,
      })
      .then(docRef => resolve(docRef.id)));
  };

  render() {
    const { goal, people } = this.props;
    const { editMode, forceToEmptyState } = this.state;
    if (isEmpty(goal) || forceToEmptyState) {
      return <EmptyState onCreate={this.onCreate} onGenerate={this.onGenerate} />;
    }
    if (editMode === true) {
      return (
        <Edit
          onSave={this.onSave}
          currentGoal={goal}
          people={people}
          createNewPerson={this.createNewPerson}
        />
      );
    }
    return (
      <GoalCard endGoal={this.getEndGoal()} onComplete={this.onComplete} onEdit={this.onEdit} />
    );
  }
}

export default Goal;
