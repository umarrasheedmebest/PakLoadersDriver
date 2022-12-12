import * as React  from "react";
import {Text, View} from "react-native";

function CustomHome({navigation})
{
    return(
        <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style = {{fontSize: 30}}>Home</Text>
        </View>
    )
}
export default CustomHome