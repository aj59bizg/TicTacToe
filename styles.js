import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    yourTurn: {
      backgroundColor: '#32CD32',
    },
    waitYourTurn: {
      backgroundColor: '#FF0000',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    square: {
        width: 100,
        height: 100,
        borderColor: "black",
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 70,
        height: 70,
        borderColor: "black",
        borderWidth: 5,
        borderRadius: 100 / 2,
    },
    hamburgerContainer: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    hamburgerLine: {
        height: 3,
        width: 70,
        marginVertical: 3,
        backgroundColor: "black",
        position: 'absolute'

    },
    crossLine1: {
        marginVertical: 0,
        transform: [{ rotate: '45deg' }],
    },
    crossLine2: {
        marginVertical: 0,
        transform: [{ rotate: '-45deg' }],
    },
  });