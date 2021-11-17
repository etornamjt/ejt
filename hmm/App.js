import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Login } from './screens/Login.js';
import { LoginPage } from './screens/LoginPage.js';
import { Signup } from './screens/Signup.js';
import { Cart } from './screens/Cart.js';
import { Checkout } from './screens/Checkout.js';
import { Confirmation } from './screens/Confirmation.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}
          options={({ navigation }) => ({
            title: 'Login'
          })}/>
          <Stack.Screen name='LoginPage' component={LoginPage}
          options={({ navigation }) => ({
            title: 'Login Page'
          })}/>
          <Stack.Screen name='Signup' component={Signup}
          options={({ navigation }) => ({
            title: 'SignUp'
          })}/>
          <Stack.Screen name='Checkout' component={Checkout}
          options={({ navigation }) => ({
            title: 'CheckOut'
          })}/>
          <Stack.Screen name='Confirmation' component={Confirmation}
          options={({ navigation }) => ({
            title: 'Confirmation'
          })}/>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;
