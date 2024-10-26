import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const SixWeekCourses = () => {
  const courses = [
    { name: "Child Minding", fees: "R750" },
    { name: "Cooking", fees: "R750" },
    { name: "Garden Maintenance", fees: "R750" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Image source={require('../../assets/images/xhaw1logo.png')} style={styles.logo} />
      {courses.map((course, index) => (
        <View key={index} style={styles.courseContainer}>
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseFees}>{course.fees}</Text>
        </View>
      ))}
      <Image source={require('../../assets/images/child.jpg')} style={styles.logo}/>
      <Image source={require('../../assets/images/cooking.jpg')} style={styles.logo}/>
      <Image source={require('../../assets/images/gardening.jpg')} style={styles.logo}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  courseContainer: {
    backgroundColor: "#e0f7fa",
    padding: 20,
    marginVertical: 40,
    borderRadius: 8,
    borderColor: "#00796b",
    borderWidth: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  courseFees: {
    fontSize: 16,
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default SixWeekCourses;
