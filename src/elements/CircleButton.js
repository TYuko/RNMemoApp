import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import fontAwesome4 from '../../assets/fonts/fontawesome-webfont.ttf';

class CircleButton extends React.Component {
  state = { fontLoaded: false }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome4,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }
    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.circleButtonTitle, { color: textColor }, { fontFamily: 'FontAwesome'}]}>
              {this.props.children}
            </Text>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    color: '#fff',
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 28,
    lineHeight: 28,
  },

});
export default CircleButton;
