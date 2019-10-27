import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
// import Sound from 'react-native-sound'
import SoundPlayer from 'react-native-sound-player'

class Details extends React.Component {
  _play = () => {
    try {
      // play the file dua.mp3
      SoundPlayer.playSoundFile(
        `${this.props.navigation.getParam('audio')}`,
        'mp3',
      )
      // or play from url
      //  SoundPlayer.playUrl
      //('http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3')
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }

  async componentWillUnmount() {
    await SoundPlayer.stop()
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.rootView}>
        <Text style={styles.title}>{navigation.getParam('title')}</Text>
        <Text style={styles.dua}>{navigation.getParam('dua')}</Text>
        <Text style={styles.spelling}>{navigation.getParam('spelling')}</Text>
        <View style={styles.secondContainer}>
          <Text style={styles.meaning}>{navigation.getParam('meaning')}</Text>
          <Text style={styles.source}>{navigation.getParam('source')}</Text>
        </View>
        <TouchableOpacity style={styles.playButton} onPress={this._play}>
          <Image
            style={styles.playButton}
            source={require('../assets/play.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: '#FEF5DC',
    height: hp('100%'),
    paddingTop: hp('10%'),
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
  },
  secondContainer: { width: wp('90%') },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dua: {
    marginTop: hp('3%'),
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'right',
    lineHeight: hp('6%'),
  },
  spelling: {
    marginTop: hp('3%'),
    fontSize: 18,
    fontWeight: '400',
  },
  meaning: {
    marginTop: hp('3%'),
    fontSize: 18,
    fontWeight: '400',
  },
  source: {
    marginTop: hp('3%'),
    fontSize: 16,
    fontWeight: '200',
  },
  playButton: {
    position: 'absolute',
    right: wp('5%'),
    bottom: hp('3.5%'),
    width: wp('27%'),
    height: hp('20%'),
  },
})

export default Details
