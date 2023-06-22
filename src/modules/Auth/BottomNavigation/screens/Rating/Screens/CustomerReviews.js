import * as React from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView, style, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function CustomerReviews(props)
{
    return(


        <View style = {{elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10}}>
           

        {/* icon_image NAME rating */}
    <View style = {{flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style = {{flexDirection: 'row'}}>
                {/* icon image */}
            <Image source={require('../../../Images/Review_pic.png')} />
            <View style = {{marginLeft: 10, flexDirection: 'column'}}>
                    {/* NAME */}
                <Text style = {{fontSize: 11,fontFamily: 'Montserrat_500Medium',}}>{props.person_name}</Text>
                    {/* RATING  */}
                <View style = {{flexDirection: 'row', }}>
                    <Image source = {require('../../../Images/rating.png')} 
                     />
                    <Image source = {require('../../../Images/rating.png')} 
                     />
                    <Image source = {require('../../../Images/rating.png')} 
                     />
                    <Image source = {require('../../../Images/rating.png')} 
                     />
                    <Image source = {require('../../../Images/rating.png')} 
                     /> 
                        {/* rating number */}
                    <Text style = {{fontFamily: 'Montserrat_500Medium', fontSize:9, marginLeft: 6, }}>{props.rating}</Text>
                </View>
            </View>
        </View>
              
    </View>
            <Text style = {{fontSize: 10, paddingVertical: 5}}>{props.review}</Text>
</View>
    )
}
















             
             