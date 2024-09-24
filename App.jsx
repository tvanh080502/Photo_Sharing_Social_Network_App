import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          style={styles.profileImage} 
          source={{ uri: 'https://misskick.vn/wp-content/uploads/2022/09/tong-hop-meme-cho-shiba-cheems-hai-huoc-tuc-gian-bua-dang-yeu-35.jpg' }} 
        />
        <Text style={styles.username}>bboya</Text>
        <Text style={styles.intro}>You haven't added any intro. Tell something about yourself ;)</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>113 Following</Text>
          <Text style={styles.stats}>8.10K Followers</Text>
          <Text style={styles.stats}>517 Posts</Text>
        </View>
      </View>
      <View style={styles.albumContainer}>
        {/* Add Album Thumbnails here */}
      </View>
      <View style={styles.postsContainer}>
        {/* Add Post Thumbnails here */}
      </View>
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#7F00FF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  intro: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  stats: {
    fontSize: 16,
    fontWeight: '600',
  },
  albumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
});
