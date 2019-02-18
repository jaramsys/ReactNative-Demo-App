import React from 'react';
import {
  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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

          <View style={styles.getStartedContainer}>
            
            <Text style={styles.getStartedTextHeading}>Hand-crafted Software & Exciting Digital Experience to Inspire the Future</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            </View>

            <Text style={styles.getStartedText}>
              Advanced Web & Mobile Solutions
			  </Text>
			   <Text style={styles.getStartedText}>
			  Premium Apps, Portals & Digital Products
			  </Text>
			   <Text style={styles.getStartedText}>
              Aim to innovate the cutting-edge technology of tomorrow
            </Text>
          </View>

         
		 <View style={styles.imgContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/lm.png')
                  : require('../assets/images/lm.png')
              }
              style={styles.welcomeImage}
            />
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/fw.png')
                  : require('../assets/images/fw.png')
              }
              style={styles.welcomeImage}
            />
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/moddo.png')
                  : require('../assets/images/moddo.png')
              }
              style={styles.welcomeImage}
            />
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/un.png')
                  : require('../assets/images/un.png')
              }
              style={styles.welcomeImage}
            />
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/motorola.png')
                  : require('../assets/images/motorola.png')
              }
              style={styles.welcomeImage}
            />
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/showdownlive.png')
                  : require('../assets/images/showdownlive.png')
              }
              style={styles.welcomeImage}
            />
			 <Image
              source={
                __DEV__
                  ? require('../assets/images/beerboard.png')
                  : require('../assets/images/beerboard.png')
              }
              style={styles.welcomeImage}
            />
			<Image
              source={
                __DEV__
                  ? require('../assets/images/stengg.png')
                  : require('../assets/images/stengg.png')
              }
              style={styles.welcomeImage}
            />
          </View>
		  
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
			<Button
  onPress={this._handleTalkToUs}
  
  title="TALK TO US"
  color="#3f7fbf"
  accessibilityLabel="Talk to US"
/>

        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
  
  _handleTalkToUs = () => {
	  WebBrowser.openBrowserAsync('https://www.spritle.com/');
  };

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 90,
	
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 13,
    color: 'rgba(63, 127, 191, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  getStartedTextHeading: {
    fontSize: 23,
    color: 'rgba(63, 127, 191, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
