import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Principal from './Principal';

props => (
    <Principal />
);

const AppNavegacao = createStackNavigator({
    Principal: {
        screen: Principal
    }
});

export default createAppContainer(AppNavegacao);
