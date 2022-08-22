// General imports
import React from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native'
// My imports
import GeneralTable from '../consts/GeneralTable';
import {getDashboardData} from '../data/indexData';
import ServicesButtonView from '../components/dashboard/ServicesButtonView'

const Dashboard = () => {
  return (
    <View style={styles.body}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/backgroundservicios.png')}
        resizeMode='cover'
      >
        <SafeAreaView >
          <View style={styles.container}>
            <GeneralTable
              data={getDashboardData()}
              numColumns={2}
              renderItem={ServicesButtonView}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default Dashboard;


const styles = StyleSheet.create({

  background: {
    flex: 1,
    width: '100%',
    height: '100%',

  },
  container: {
    flexDirection: 'column',

    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  servicesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '80%',
    height: '80%',
  },
  body: {
    width: '100%',
    height: '100%',
  },
});