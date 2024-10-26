import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const SixMonthCourses = () => {
  const courses = [
    { name: "First Aid", fees: "R1500" },
    { name: "Sewing", fees: "R1500" },
    { name: "Landscaping", fees: "R1500" },
    { name: "Life Skills", fees: "R1500" },
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
      <Image source={require('../../assets/images/firstaid.jpg')} style={styles.logo}/>
      <Image source={require('../../assets/images/sewing.jpg')} style={styles.logo}/>
      <Image source={require('../../assets/images/landscaping.jpg')} style={styles.logo}/>
      <Image source={require('../../assets/images/lifeskills.jpg')} style={styles.logo}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
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

export default SixMonthCourses;
