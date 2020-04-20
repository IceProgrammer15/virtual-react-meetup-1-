/**
 * Sample React Native App
 * Halifax React Meetup
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

const renderCard = (gitUserInfo) => (
  <View style={styles.card} key={gitUserInfo.id}>
    <Image source={{uri: gitUserInfo.avatar_url}} style={styles.avatar} />
    <View style={styles.cardContent}>
      <Text style={styles.txtLogin}>{gitUserInfo.login}</Text>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          Linking.openURL(gitUserInfo.html_url);
        }}>
        <Text style={styles.txtLink}>{gitUserInfo.html_url}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const sendRequest = async () => {
  try {
    const response = await fetch('https://api.github.com/users?since=14126951');
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch {}
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await sendRequest();
      if (response) {
        setData(response);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={[styles.header, styles.headBkg]}>
          <Text>Virtual React Meetup</Text>
        </View>
        <ScrollView style={styles.content}>
          {data.map((record) => renderCard(record))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 5,
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
