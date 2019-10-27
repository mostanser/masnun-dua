import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import DUA from '../utility/dua'

class LandingScreen extends React.Component {
  render() {
    return (
      <View style={styles.Root}>
        <FlatList
          data={DUA}
          ListHeaderComponent={<View style={styles.spacer} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.props.navigation.navigate('Details', {
                  title: item.title,
                  dua: item.dua,
                  spelling: item.spelling,
                  meaning: item.meaning,
                  source: item.source,
                  audio: item.audio,
                })
              }}>
              <View style={styles.circle}>
                <Text style={styles.textContainer}>{item.id}</Text>
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatList}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Root: {
    backgroundColor: '#FEF5DC',
    flex: 1,
  },
  flatList: {
    backgroundColor: '#FEF5DC',
  },
  item: {
    width: wp('95%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F8B566',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  spacer: {
    marginTop: hp('5%'),
  },
})

export default LandingScreen
