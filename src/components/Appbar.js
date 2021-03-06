import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 88,
    paddingTop: 35,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Appbar;
