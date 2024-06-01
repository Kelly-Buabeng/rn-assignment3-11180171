import { Image, StyleSheet, Text, View, StatusBar, FlatList, ScrollView } from 'react-native';


import {SearchFilter} from './components/search-filter';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.title}>Hello, Devs</Text>
          <Text> Tasks today</Text>
        </View>
        <View>
            <Image 
              source={require('./assets/images/user.png')}
              style={{  width: 50, height: 50 }}  
              />
        </View>
      </View> 
      
      <SearchFilter />
      
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9ECEE',
    height: '100%',
    maxHeight: `calc(100%-${StatusBar.currentHeight})`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight,
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 1,
    marginBottom: 30
  },
});