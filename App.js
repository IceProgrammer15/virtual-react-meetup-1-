/**
 * Sample React Native App
 * Halifax React Meetup
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const info = {
  login: 'IceProgrammer15',
  avatar_url: 'https://avatars2.githubusercontent.com/u/14126952?v=4',
  html_url: 'https://github.com/IceProgrammer15',
};

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.headBkg}>
        <View style={[styles.header, styles.headBkg]}>
          <Text>Virtual React Meetup</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.card}>
            <Image source={{uri: info.avatar_url}} style={styles.avatar} />
            <View style={styles.cardContent}>
              <Text style={styles.txtLogin}>{info.login}</Text>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  Linking.openURL(info.html_url);
                }}>
                <Text style={styles.txtLink}>{info.html_url}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  headBkg: {
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
  },
  content: {
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: '#eee',
  },
  avatar: {
    width: 64,
    height: 64,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  txtLogin: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtLink: {
    color: '#06f',
    textDecorationLine: 'underline',
  },
});

export default App;
