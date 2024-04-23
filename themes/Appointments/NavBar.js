import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

});

export const fabStyle = {
    position: 'absolute',
    backgroundColor: '#FFBB00',
    margin: 70,
    right: 0,
    bottom: 0,
    marginRight: 180,
};

export const screenOptions = {
    tabBarActiveTintColor: '#FFBB00',
    tabBarInactiveTintColor: '#282828',
    tabBarInactiveBackgroundColor: '#FFFFFF',
    tabBarShowLabel: false,
    backgroundColor: 'transparent',
    tabBarStyle: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 25,
        borderRadius: 15,
        borderTopWidth: 15,
        borderTopColor: '#FFFFFF',
        height: 60,
        paddingBottom: 15,
    },
    tabBarIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
};