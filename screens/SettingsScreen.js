import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, Button } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact Us',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/spritle_logo.png')
                  : require('../assets/images/spritle_logo.png')
              }
              style={styles.welcomeImage}
            />
          </View>
		  <View style={styles.contactContainer}>
		  <View>
			  <Text style={styles.textHeading}>Crawford Lane, Singapore </Text>
			  <Text style={styles.textContent}>+65 6652 5475</Text>
			  </View>
			   <View>
			  <Text style={styles.textHeading}>Chennai, India </Text>
			  <Text style={styles.textContent}>+91 44 4855 4277</Text>
			  </View>
			   <View>
			  <Text style={styles.textHeading}>Email </Text>
			  <Text style={styles.textContent}>info@spritle.com</Text>
			  </View>
		  </View>
		  </ScrollView>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  textHeading: {
	fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: 24,
    paddingTop: 5,
	marginLeft: 19,
  },
  textContent: {
	  fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: 24,
    paddingTop: 5,
	marginLeft: 19,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
	
  },
  contactContainer: {
	  backgroundColor: '#3f7fbf',
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 90,
	
  },
  serviceContainer: {
	  marginTop: 10,
    marginBottom: 20,
  },
  serviceImage: {
	  width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 19,
  },
  welcomeImage: {
    width: 70,
    height: 40,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 19,
  },
});