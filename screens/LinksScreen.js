import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Services',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
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
		  <View style={styles.serviceContainer}>
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/monitor.png')
                  : require('../assets/images/monitor.png')
              }
              style={styles.serviceImage}
            />
			 <Text style={styles.textHeading}>Web Application Development</Text>
			  <Text style={styles.textContent}>At the helm of driving global business and the changing times js web development...</Text>
		  </View>
		   <View style={styles.serviceContainer}>
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/mobile.png')
                  : require('../assets/images/mobile.png')
              }
              style={styles.serviceImage}
            />
			 <Text style={styles.textHeading}>Mobile Application Development</Text>
			  <Text style={styles.textContent}>Running in the race to contribute to the greatest innovation of the 21st century, yet...</Text>
		  </View>
		   <View style={styles.serviceContainer}>
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/design.png')
                  : require('../assets/images/design.png')
              }
              style={styles.serviceImage}
            />
			 <Text style={styles.textHeading}>Design</Text>
			  <Text style={styles.textContent}>Well, we all do judge a book by its cover. So we make apps that you can't refuse to use...</Text>
		  </View>
		   <View style={styles.serviceContainer}>
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/iot.png')
                  : require('../assets/images/iot.png')
              }
              style={styles.serviceImage}
            />
			
			 <Text style={styles.textHeading}>Internet Of Things</Text>
			  <Text style={styles.textContent}>The idea of devices communicating with us and each other, opens up futuristic lifestyle...</Text>
		  </View>
		   <View style={styles.serviceContainer}>
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/ml.png')
                  : require('../assets/images/ml.png')
              }
              style={styles.serviceImage}
            />
			 <Text style={styles.textHeading}>Machine Learning</Text>
			  <Text style={styles.textContent}>Tomorrow is already here. In awe of the possibilities the future has to offer excited us to contribute more...</Text>
		  </View>
		   <View style={styles.serviceContainer}>
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/hands.png')
                  : require('../assets/images/hands.png')
              }
              style={styles.serviceImage}
            />
			 <Text style={styles.textHeading}>Consulting</Text>
			  <Text style={styles.textContent}>We know to put ourselves in your shoes and deliver feasible solutions necessary for your business continuity...</Text>
		  </View>
      </ScrollView>
	  
	 
  
    );
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
    color: 'rgba(63, 127, 191, 1)',
    lineHeight: 24,
    paddingTop: 5,
	marginLeft: 19,
  },
  textContent: {
	  fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 24,
    paddingTop: 5,
	marginLeft: 19,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
	
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
