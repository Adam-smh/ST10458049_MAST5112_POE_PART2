import { StyleSheet } from 'react-native';

const admin = StyleSheet.create({

    adminBG:{
        height: '100%',
        backgroundColor: '#322C2B',
        width: '100%'
    },
    loginCon:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'70%'
    },

    uploadCon:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField:{
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        borderBottomWidth: 1,
        borderColor: '#fff',
        width: 180,
        height: 80,
    },

    containerBtn:{
        flexDirection: 'row',
        justifyContent: 'center'
    },

    largeBtn:{
        backgroundColor: '#CD5C08',
        height: 150,
        width: 140,
        margin:20,
        justifyContent:'center',
        alignItems:'center',
    },
    iconBtn:{
        width: 90,
        height: 90,
    },
    textBtn:{
        color: '#fff',
        fontSize: 20
    },
    headerContainer:{
        height: 100,
        paddingRight: 20,
        backgroundColor: '#CD5C08',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headingText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 35,
    },
    genBtn:{
        backgroundColor: '#322C2B',
        width: 150,
        height:40,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    courseBtnActive:{
        backgroundColor: '#171413',
    },
    courseBtnInactive:{
        backgroundColor: '#322C2B',
    },
    courseBtnText:{
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },

})
export default admin;