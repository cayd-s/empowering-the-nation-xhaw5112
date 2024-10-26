import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function ContactUs() {
  const [location, setLocation] = useState('');

  return (
    <View style={styles.container}>
       <Image source={require('../../assets/images/xhaw1logo.png')} style={styles.logo} />
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.title}>Select a location:</Text>
      <Picker
        selectedValue={location}
        onValueChange={(itemValue) => setLocation(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Midrand" value="Midrand" />
        <Picker.Item label="Randburg" value="Randburg" />
        <Picker.Item label="Sandton" value="Sandton" />
      </Picker>
      <Text style={styles.address}>Head Office Address:</Text>
      <Text style={styles.addressinfo}>123 Empowerment Road, Johannesburg, 2001</Text>
      <Text style={styles.phone}>Phone: 011 8834 947</Text>
      <Text style={styles.phone}> Email: empowerthenation@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  picker: {
    height: 60,
    width: '100%',
    marginTop: 10,
    marginBottom: 30
  },
  address: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 140,
  },
  addressinfo:{
    textAlign:'center',
    fontSize: 16,
  },

  phone:{
    textAlign:'center',
    marginTop: 30,
    fontSize: 16
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },

});
