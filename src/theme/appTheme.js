import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6',

}

export const style = StyleSheet.create({
    globalMargin:{
        marginHorizontal : 20,
        justifyContent:'center',
        alignItems:'center'
    },
    botonGrande:{
        width:250,
        height:100,
        backgroundColor:'orange',
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    botonGrandeText:{
        color:"white",
        fontSize:18,
        fontWeight:'bold'
    }
});