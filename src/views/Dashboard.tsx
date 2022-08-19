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
import useData from '../data/useData';
import ServicesButtonView from '../components/dashboard/ServicesButtonView'

const Dashboard = () => {
  const data = useData();
  console.log(data);
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
              data={data}
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