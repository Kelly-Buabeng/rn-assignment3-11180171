import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export function OngoingActivities() {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryMainTitle}>Ongoing Activities</Text>
      <FlatList
        data={[
          { id: 1, title: 'STAT 224 assignment', date: 'Due 12/12/2021', time: '12:00 PM' },
          { id: 2, title: 'Meeting with Prof. Smith', date: '1/12/2021', time: '2:00 PM' },
          { id: 3, title: 'Workout', date: '2/12/2021', time: '5:00 PM' },
          { id: 4, title: 'Dinner with friends', date: '3/12/2021', time: '7:00 PM' },
          { id: 5, title: 'Study for finals', date: '4/12/2021', time: '9:00 PM' },
          { id: 6, title: 'Go on a Date', date: '5/12/2021', time: '12:00 PM' },
          { id: 7, title: 'Work on 208 project', date: '6/12/2021', time: '12:00 PM' },
          { id: 8, title: 'Go for lectures', date: '7/12/2021', time: '12:00 PM' },
          { id: 9, title: 'Go for a run', date: '8/12/2021', time: '12:00 PM' },
          { id: 10, title: 'Go for a walk', date: '9/12/2021', time: '12:00 PM' },
          { id: 11, title: 'Go for a swim', date: '10/12/2021', time: '12:00 PM' },
          { id: 12, title: 'Go for a hike', date: '11/12/2021', time: '12:00 PM' },
          { id: 13, title: 'Math 224 assignment', date: 'Due 21/12/2021', time: '12:00 PM' },
          { id: 14, title: 'Meeting with Eno', date: '19/12/2021', time: '2:00 PM' },
          { id: 15, title: 'Bible Study', date: '30/12/2021', time: '5:00 PM' },
        ]}
        renderItem={({ item }) => (
          <View style={styles.tab}>
            <Text style={styles.tabTitle}>{item.title}</Text>
            <View style={styles.tabDetails}>
              <Text style={styles.tabDate}>{item.date} at {item.time}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  categoryMainTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 15,
  },
  tab: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#F9ECEE',
    borderWidth: 2,
    marginBottom: 10,
    shadowColor: '#F9ECEE',
    shadowOpacity: 0.5,
  },
  tabTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 7,
  },
  tabDetails: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  tabDate: {
    fontSize: 13,
  },
});