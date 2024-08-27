// App.js
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import StackNavigator from '../App/Navigation/StackNavigator'; // Ensure the path is correct
import { NavigationContainer } from '@react-navigation/native';
import { auth, database } from './firebaseConfig'; // Adjust the path as necessary

const App = () => {
  useEffect(() => {
    const createUserInDatabase = (user) => {
      const userRef = database().ref(`users/${user.uid}`);
      userRef.once('value')
        .then(snapshot => {
          if (!snapshot.exists()) {
            // User does not exist in the database, create new user entry with hardcoded values
            userRef.set({
              name: 'John Doe',
              email: 'john.doe@example.com',
              currency: 'USD',
              createdAt: new Date().getTime(),
              expenses: {
                '2024-08-01': {
                  amount: 100,
                  description: 'Office Supplies',
                  category: 'Business',
                },
              },
              categories: {
                'Business': {
                  budget: 500,
                  spent: 100,
                },
                'Personal': {
                  budget: 200,
                  spent: 50,
                },
              },
              monthlyBudgets: {
                'August 2024': {
                  totalBudget: 700,
                  totalSpent: 150,
                },
              },
            }).then(() => {
              console.log('New user added to the database with hardcoded values');
            }).catch(error => {
              console.error('Error adding user to the database:', error);
            });
          } else {
            console.log('User already exists in the database');
          }
        }).catch(error => {
          console.error('Error fetching user data:', error);
        });
    };

    // Check if the user is already authenticated
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated, check if user exists in the database
        createUserInDatabase(user);
      } else {
        // No user is authenticated, sign in anonymously
        auth().signInAnonymously()
          .then(({ user }) => {
            console.log('Anonymous user signed in:', user.uid);
            createUserInDatabase(user);
          })
          .catch(error => {
            console.error('Error signing in anonymously:', error);
          });
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Set the background color to red
  },
});

export default App;
