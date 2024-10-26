import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Image } from 'react-native';

const CalculateFees = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [vat, setVat] = useState<number>(0);
  
  
  const courseFees: { [key: string]: number } = {
    'First Aid': 1500,
    'Sewing': 1500,
    'Landscaping': 1500,
    'Life Skills': 1500,
    'Child Minding': 750,
    'Cooking': 750,
    'Garden Maintenance': 750,
  };

  
  const getDiscount = (courseCount: number): number => {
    if (courseCount === 1) return 0;
    if (courseCount === 2) return 5; 
    if (courseCount === 3) return 10; 
    return 15; 
  };

  const calculateFees = () => {
    const courseCount = selectedCourses.length;
    const subtotal = selectedCourses.reduce((acc, course) => acc + courseFees[course], 0);
    const discountPercentage = getDiscount(courseCount);
    const discountAmount = (subtotal * discountPercentage) / 100;
    const totalAmount = subtotal - discountAmount;
    const vatAmount = totalAmount * 0.15; 
    
    setTotal(totalAmount + vatAmount);
    setVat(vatAmount);
  };

  const toggleCourseSelection = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleSubmit = () => {
    
    console.log('Form submitted:', { name, surname, email, selectedCourses });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/images/xhaw1logo.png')} style={styles.logo} />
      <Text style={styles.title}>Calculate Fees</Text>

      <Text>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={name}
        onChangeText={setName}
      />
      <Text>Surname</Text>
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <Text>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.subtitle}>Select Courses</Text>

      {Object.keys(courseFees).map((course) => (
        <TouchableOpacity
          key={course}
          style={styles.checkboxContainer}
          onPress={() => toggleCourseSelection(course)}
          
        >
          <View style={[styles.checkbox, selectedCourses.includes(course) && styles.checkboxSelected]} />
          <Text style={styles.label}>{course} (R{courseFees[course]})</Text>
        </TouchableOpacity>
      ))}

<TouchableOpacity style={styles.button} onPress={calculateFees}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {total > 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Total Fees (including VAT): R{total.toFixed(2)}</Text>
          <Text style={styles.resultText}>VAT (15%): R{vat.toFixed(2)}</Text>
        </View>
      )}

<TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: 'lightblue',
  },
  label: {
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#f0f8ff',
  },
  resultText: {
    fontSize: 16,
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderWidth: 2,
    borderColor: 'black', 
    borderRadius: 5, 
    backgroundColor: 'white', 
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 16,
    color: 'black', 
  },
});

export default CalculateFees;
