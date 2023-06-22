import * as React  from "react";
import {Text, View, Image} from "react-native";
import Signin from "../Signin/Signin";

function SplashScreenComponent({navigation})
{
    setTimeout(()=>{
        navigation.replace('Signin')
    }, 3000)

    return(
        <View style = {{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#444BFF'}}>
            <Image source = {require('../../../assets/slide3.png')} style = {{height: 200, width: 200}}/>
            <Text style = {{marginTop: 20, fontSize: 24, color: 'white', fontWeight: "bold"}}>P A K    L O A D E R S</Text>
        </View>
    )
}
export default SplashScreenComponent

