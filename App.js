/**
 * Sample React Native App
 * Halifax React Meetup
 */

import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
  Animated,
} from 'react-native';

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

  const removeCard = useCallback(
    (id) => {
      const itemIndex = data.findIndex((item) => item.id === id);
      console.log(itemIndex, data.length);

      // return if item cannot be found within the array
      if (itemIndex < 0) {
        console.log(
          id,
          data.map((item) => item.id),
        );
        return;
      }
      // get a copy of data
      const updatedData = [...data];

      // remove the item from array
      updatedData.splice(itemIndex, 1);

      // update list with new data
      setData([...updatedData]);
      console.log(itemIndex, updatedData.length);
    },
    [data],
  );

  const renderCard = useCallback(
    (gitUserInfo) => {
      const animate = new Animated.Value(0);

      const animatedStyle = [
        styles.card,
        {
          opacity: animate.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ];

      return (
        <Animated.View style={animatedStyle} key={gitUserInfo.item.id}>
          <Image
            source={{uri: gitUserInfo.item.avatar_url}}
            style={styles.avatar}
          />
          <View style={styles.cardContent}>
            <Text style={styles.txtLogin}>{gitUserInfo.item.login}</Text>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                Linking.openURL(gitUserInfo.item.html_url);
              }}>
              <Text style={styles.txtLink}>{gitUserInfo.item.html_url}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnRemove}>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(animate, {
                  toValue: 1,
                  duration: 500,
                  useNativeDriver: true,
                }).start(() => {
                  removeCard(gitUserInfo.item.id);
                });
              }}>
              <Text style={styles.txtRemove}>x</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      );
    },
    [removeCard],
  );
  const separatorComponent = () => <View style={styles.separator} />;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={[styles.header, styles.headBkg]}>
          <Text>Virtual React Meetup</Text>
        </View>

        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={separatorComponent}
        />
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
  btnRemove: {
    justifyContent: 'center',
  },
  txtRemove: {
    color: '#c00',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#aaa',
  },
});

export default App;
