import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/xhaw1logo.png')} style={styles.logo} />
      <Text style={styles.title}>Summary About Us</Text>
      <Text style={styles.aboutUs}>
        At Empowering the Nation, we are dedicated to empowering domestic workers and gardeners with essential skills to enhance their employment opportunities and earning potential. Founded by Precious Radebe, our training initiative supports individuals who, like her parents and elderly relatives, were unable to pursue formal education. Through our specialised courses, participants gain valuable skills that make them more marketable in the job market or equip them to start their own small businesses. We proudly serve the community by helping people grow professionally, while also enabling employers to upskill their staff for a more skilled and productive workforce.
      </Text>
      <Image source={require('../../assets/images/team.jpg')} style={styles.logo}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  aboutUs: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
});

export default Home;
