import { StyleSheet } from 'react-native';

const general = StyleSheet.create({

    headerContainer:{
        height: 100,
        padding: 20,
        backgroundColor: '#CD5C08',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    headingText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 35,
        paddingRight: 50,
    },

    courseSel:{
        height: 50,
        backgroundColor: '#FFF5E4',
        flexDirection: 'row',
        shadowColor: 'black',
    },

    courseBtn:{
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    courseBtnActive:{
        backgroundColor: '#E6D3BC',
    },
    courseBtnInactive:{
        backgroundColor: '#FFF5E4',
    },
    courseBtnText:{
        textAlign: 'center',
        fontSize: 20

    },
    titleText:{
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
    },
    inputField:{
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        borderBottomWidth: 1,
        borderColor: '#fff',
        width: 180,
        height: 80,
        marginBottom: 20,
    },
    genBtn:{
        backgroundColor: '#CD5C08',
        width: 100,
        height:40,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText:{
        fontSize: 20,
        color: '#fff',
    }
});


export default general;
