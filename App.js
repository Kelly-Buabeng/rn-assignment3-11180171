import React from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, StatusBar, FlatList, ScrollView } from 'react-native';
import { SearchFilter } from './components/search-filter';
import { CategoriesOfTasks } from './components/categoriesioftasks';
import { OngoingActivities } from './components/ongoingactivities';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.title}>Hello, Devs</Text>
            <Text>20 Tasks today</Text>
          </View>
          <View>
            <Image 
              source={require('./assets/images/user.png')}
              style={{ width: 50, height: 50 }}  
            />
          </View>
        </View> 
        
        <SearchFilter />
        <CategoriesOfTasks />
        <OngoingActivities />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9ECEE',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9ECEE',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
});
