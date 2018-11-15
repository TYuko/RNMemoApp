import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <Text style={styles.memoHeaderTitle}>講座のアイディア</Text>
            <Text style={styles.memoHeaderDate}>2018/10/10</Text>
          </View>
        </View>

        <View style={styles.memoContents}>
          <Text>
            講座のアイディア
          </Text>
        </View>

        <CircleButton color="white" style={styles.edditButton}>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  memoHeaderTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 15,
    color: '#fff',
  },
  memoContents: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  edditButton: {
    top: 75,
  },

});
export default MemoDetailScreen;
