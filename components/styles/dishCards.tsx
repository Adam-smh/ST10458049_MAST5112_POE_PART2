import { StyleSheet } from 'react-native';

const dishCards = StyleSheet.create({

    cardCont:{
        backgroundColor: '#6A9C89',
        width: '90%',
        flexDirection: 'row',
        margin: 5,

    },
    image:{

    },

    textCon:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
    },

    title:{
        color: '#fff',
        fontSize: 25
    },
    desc:{
        color: '#fff',
        fontSize: 15,
    },
    price:{
        color: '#fff',
        fontSize: 20,
    },
})
export default dishCards;