import { StyleSheet, View, Text, FlatList,Image } from "react-native";

export function CategoriesOfTasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryMainTitle}>Categories </Text>
      <FlatList
        data={[
          { id: '9', title: 'Study', image: require('../assets/images/study.png')},
          { id: '1', title: 'Socialize',image: require('../assets/images/socialize.png') },
          { id: '2', title: 'Personal', image: require('../assets/images/volunteering.png')},
          { id: '3', title: 'Cleaning', image: require('../assets/images/cleaning.png')},
          { id: '4', title: 'Lectures', image: require('../assets/images/lectures.png')},
          { id: '5', title: 'Appointments', image: require('../assets/images/appointments.png')},
          { id: '6', title: 'Work', image: require('../assets/images/work.png')},
          { id: '7', title: 'Gym and Cardio', image: require('../assets/images/exercise.png')},
          { id: '8', title: 'Cook', image: require('../assets/images/cook.png')},
          
          { id: '10', title: 'Coding', image: require('../assets/images/coding.png')},
        ]}
        horizontal renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{
              width: 35,
              height: 2,
              borderRadius: 10,
              marginBottom: 4,
              backgroundColor: '#F9ECEE',
            }} />
            <Text style={styles.categoryTitle}>{item.title}</Text>


            


            <Image source={item.image} style={styles.categoryImage} />


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
card: {
  padding: 15,
  backgroundColor: 'white',
  borderRadius: 15,
  borderColor: '#F9ECEE',
  borderWidth: 2,
  marginRight: 15,
  shadowOffset: 5,
  shadowColor: '#F9ECEE',
  shadowOpacity: 0.5,
},
categoryMainTitle: {
  fontSize: 22,
  fontWeight: '600',
  marginBottom: 15,
},
categoryTitle: {
  fontSize: 21,
  fontWeight: '600'
},
categorySubtitle: {
  fontSize: 12,
},
categoryImage: {
  height: 150,
  aspectRatio: 1.3
},
})