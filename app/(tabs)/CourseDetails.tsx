import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const courses = [
  {
    name: 'First Aid',
    price: 'R1500',
    purpose: 'To provide first aid awareness and basic life support',
    content: [
      'Wounds and bleeding',
      'Burns and fractures',
      'Emergency scene management',
      'Cardio-Pulmonary Resuscitation (CPR)',
      'Respiratory distress',
    ],
  },
  {
    name: 'Sewing',
    price: 'R1500',
    purpose: 'To provide alterations and new garment tailoring services',
    content: [
      'Types of stitches',
      'Threading a sewing machine',
      'Sewing buttons, zips, hems and seams',
      'Alterations',
      'Designing and sewing new garments',
    ],
  },
  {
    name: 'Landscaping',
    price: 'R1500',
    purpose: 'To provide landscaping services for new and established gardens',
    content: [
      'Indigenous and exotic plants and trees',
      'Fixed structures (fountains, statues, benches, tables, built-in braai)',
      'Balancing of plants and trees in a garden',
      'Aesthetics of plant shapes and colours',
      'Garden layout',
    ],
  },
  {
    name: 'Life Skills',
    price: 'R1500',
    purpose: 'To provide skills to navigate basic life necessities',
    content: [
      'Opening a bank account',
      'Basic labour law (know your rights)',
      'Basic reading and writing literacy',
      'Basic numeric literacy',
    ],
  },
  {
    name: 'Child Minding',
    price: 'R750',
    purpose: 'To provide basic child and baby care',
    content: [
      'Birth to six-month-old baby needs',
      'Seven-month to one-year-old needs',
      'Toddler needs',
      'Educational toys',
    ],
  },
  {
    name: 'Cooking',
    price: 'R750',
    purpose: 'To prepare and cook nutritious family meals',
    content: [
      'Nutritional requirements for a healthy body',
      'Types of protein, carbohydrates and vegetables',
      'Planning meals',
      'Preparation and cooking of meals',
    ],
  },
  {
    name: 'Garden Maintenance',
    price: 'R750',
    purpose: 'To provide basic knowledge of watering, pruning and planting in a domestic garden',
    content: [
      'Water restrictions and the watering requirements of indigenous and exotic plants',
      'Pruning and propagation of plants',
      'Planting techniques for different plant types',
    ],
  },
];

export default function CourseDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/xhaw1logo.png')} style={styles.logo} />
      {courses.map((course, index) => (
        <View key={index} style={styles.courseBox}>
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.coursePrice}>Fees: {course.price}</Text>
          <Text style={styles.coursePurpose}>Purpose: {course.purpose}</Text>
          <Text style={styles.courseContentTitle}>Content:</Text>
          {course.content.map((item, idx) => (
            <Text key={idx} style={styles.courseContentItem}>
              - {item}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  courseBox: {
    backgroundColor: '#e0f7fa', 
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  coursePurpose: {
    fontSize: 16,
    marginBottom: 8,
  },
  courseContentTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  courseContentItem: {
    fontSize: 14,
    marginBottom: 2,
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
});
