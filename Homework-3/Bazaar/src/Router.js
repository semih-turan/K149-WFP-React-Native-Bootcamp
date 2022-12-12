import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import WishList from './pages/WishList';

import {useSelector} from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(selector => selector.user);
  const isAuthLoading = useSelector(selector => selector.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              title: 'BAZAAR',
              headerStyle: {backgroundColor: '#00ADB5'},
              headerTitleStyle: {color: '#EEEEEE'},
              headerLeft: () => (
                <Icon
                  name="logout"
                  size={30}
                  color="#EEEEEE"
                  onPress={()=> dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
          />
          <Stack.Screen
            name="DetailPage"
            component={Detail}
            options={{
              title: 'BAZAAR',
              headerStyle: {backgroundColor: '#00ADB5'},
              headerTitleStyle: {color: '#EEEEEE'},
              headerTintColor: '#EEEEEE',
              headerBackTitle: 'Back',
            }}
          />
          <Stack.Screen
            name="WishListPage"
            component={WishList}
            options={{
              title: 'My Wish List',
              headerStyle: {backgroundColor: '#00ADB5'},
              headerTitleStyle: {color: '#EEEEEE'},
              headerTintColor: '#EEEEEE',
              headerBackTitle: 'Back',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
