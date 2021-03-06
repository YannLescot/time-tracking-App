import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ToggleableTimerForm from './components/ToggleableTimerForm'
import EditableTimer from './components/EditableTimer'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.appContainer}>
    <View style={styles.titleContainer}>
      <Text>Timers</Text>
    </View>

    <ScrollView style={styles.timerList}>
    <ToggleableTimerForm isOpen={false} />
      <EditableTimer
        id="1"
        title="Mow the lawn"
        projet="House Chores"
        elapsed="8986300"
        isRunning
      />

      <EditableTimer
        id="2"
        title="Bake squash"
        projet="Kitchen Chores"
        elapsed="3890985"
        editFormOpen
      />
    </ScrollView>
  </View>
  );
}
}
/*

*/

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  timerList: {
    paddingBottom: 15,
  },
});