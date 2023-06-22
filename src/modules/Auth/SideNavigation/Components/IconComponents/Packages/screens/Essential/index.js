import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';
import { create } from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';
import {eng, Urdu} from '../../../../../../../../modules/Components/Api/Language'



const EssentialComponent = ({
    navigation
}) => {
    const data = useSelector((state) => state.language)
    const [isActivebtn1, setIsActivebtn1] = useState(true);
    const onPressbtn1 = () => {
        setIsActivebtn1(true)
        setIsActivebtn2(false)
        setIsActivebtn3(false)
    }

    const [isActivebtn2, setIsActivebtn2] = useState(false);
    const onPressbtn2 = () => {
        setIsActivebtn1(false)
        setIsActivebtn2(true)
        setIsActivebtn3(false)
    }

    const [isActivebtn3, setIsActivebtn3] = useState(false);
    const onPressbtn3 = () => {
        setIsActivebtn1(false)
        setIsActivebtn2(false)
        setIsActivebtn3(true)
    }

    const [isACtivePlaneMonthly, setIsACtivePlaneMonthly] = useState(false);
    const onPressMonthlyPlan = () => {
        setIsACtivePlaneMonthly(true);
        setIsACtivePlaneAnnually(false);
    }
    const [isACtivePlaneAnnually, setIsACtivePlaneAnnually] = useState(true);
    const onPressAnnuallyPlan = () => {
        setIsACtivePlaneMonthly(false);
        setIsACtivePlaneAnnually(true);
    }

    return (
        // background White and Round 
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    <View style={{ flex: 1, margin: 20, marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity
                                onPress={onPressbtn1}
                                style={isActivebtn1 ? style2.btnSelect : style2.btnUnselect}>
                                <Text style={isActivebtn1 ? style2.textColor : style2.textColor2}>{data ? eng.essential : Urdu.essential}</Text>
                                <Text style={isActivebtn1 ? style2.textColor : style2.textColor2}>{data ? eng.fourFeacture : Urdu.fourFeacture}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={onPressbtn2}
                                style={isActivebtn2 ? style2.btnSelect : style2.btnUnselect}>
                                <Text style={isActivebtn2 ? style2.textColor : style2.textColor2}>{data ? eng.Prefrered : Urdu.Prefrered}</Text>
                                <Text style={isActivebtn2 ? style2.textColor : style2.textColor2}>{data ? eng.sevenFeatures : Urdu.sevenFeatures}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={onPressbtn3}
                                style={isActivebtn3 ? style2.btnSelect : style2.btnUnselect}>
                                <Text style={isActivebtn3 ? style2.textColor : style2.textColor2}>{data ? eng.ultimate : Urdu.ultimate}</Text>
                                <Text style={isActivebtn3 ? style2.textColor : style2.textColor2}>{data ? eng.thirteenFeacture : Urdu.thirteenFeacture}</Text>
                            </TouchableOpacity>
                        </View>




                        {/* Unlock 4 Powerful Features */}
                        <Text style={{ color: '#4448FF', fontSize: 18, marginTop: 20 }}>{data ? eng.unlockFeature : Urdu.unlockFeature}</Text>


                        {/* Unlimited Load Views */}
                        <View style={{ flexDirection: "row", marginTop: 25, }}>
                            <Image source={require('../../../../../../../../assets/Packages/premium_icon.png')}
                                style={{ width: 18, height: 25 }} />
                            <View style={{ marginLeft: 10, }}>
                                <Text style={{ fontSize: 14 }}>{data ? eng.unlimitedLoad : Urdu.unlimitedLoad}</Text>
                                <Text style={{ fontSize: 10, color: '#A5A5A5', marginTop: 5 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                            </View>
                        </View>
                        {/* Days to Pay & Credit Score */}
                        <View style={{ flexDirection: "row", marginTop: 25, }}>
                            <Image source={require('../../../../../../../../assets/Packages/premium_icon.png')}
                                style={{ width: 18, height: 25 }} />
                            <View style={{ marginLeft: 10, }}>
                                <Text style={{ fontSize: 14 }}>{data ? eng.daystoPay : Urdu.daystoPay}</Text>
                                <Text style={{ fontSize: 10, color: '#A5A5A5', marginTop: 5 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                            </View>
                        </View>
                        {/* Live Load Updates */}
                        <View style={{ flexDirection: "row", marginTop: 25, }}>
                            <Image source={require('../../../../../../../../assets/Packages/premium_icon.png')}
                                style={{ width: 18, height: 25 }} />
                            <View style={{ marginLeft: 10, }}>
                                <Text style={{ fontSize: 14 }}>Live Load Updates</Text>
                                <Text style={{ fontSize: 10, color: '#A5A5A5', marginTop: 5 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                            </View>
                        </View>
                        {/* Add Free */}
                        <View style={{ flexDirection: "row", marginTop: 25, }}>
                            <Image source={require('../../../../../../../../assets/Packages/premium_icon.png')}
                                style={{ width: 18, height: 25 }} />
                            <View style={{ marginLeft: 10, }}>
                                <Text style={{ fontSize: 14 }}>Add Free</Text>
                                <Text style={{ fontSize: 10, color: '#A5A5A5', marginTop: 5 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                            </View>
                        </View>





                        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-evenly' }}>


                            {/* Monthly Plan details  */}
                            <TouchableOpacity onPress={onPressMonthlyPlan} >

                                <View style={isACtivePlaneMonthly ? style2.planSelect : style2.planUnSelect}>

                                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Monthly Plan</Text>

                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 16, color: '#444BFF' }}>19.99</Text>
                                            <Text style={{ fontSize: 12, alignSelf: "center" }}> USD/month</Text>
                                        </View>
                                        <Text style={{ fontSize: 12, marginTop: 2 }}>Billed Monthly</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>


                            {/* Annual Plan details  */}
                            <TouchableOpacity onPress={onPressAnnuallyPlan}>

                                <View style={isACtivePlaneAnnually ? style2.planSelect : style2.planUnSelect}>
                                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Annual Plan</Text>

                                    <View>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 16, color: '#444BFF' }}>16.67</Text>
                                            <Text style={{ fontSize: 12, alignSelf: "center" }}> USD/month</Text>
                                        </View>
                                        <Text style={{ fontSize: 12, marginTop: 2 }}>&199.99 Billed Annually</Text>
                                    </View>

                                </View>

                            </TouchableOpacity>

                        </View>
                        {/* Subscribe Button */}
                        <TouchableOpacity style={{
                            borderRadius: 10, alignSelf: 'center', marginTop: 25,
                            backgroundColor: '#444BFF', borderColor: '#4448FF', borderWidth: 1,
                        }}>
                            <Text style={{ padding: 20, color: 'white', fontSize: 18 }}>Subscribe 199.99 USD/year</Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const style2 = StyleSheet.create({
    btnSelect: {
        padding: 8, borderColor: '#444BFF', paddingRight: 30,
        borderRadius: 10, borderWidth: 1,

        backgroundColor: '#444BFF'
    },
    btnUnselect: {
        padding: 8, borderColor: '#444BFF', paddingRight: 30,
        borderRadius: 10, borderWidth: 1,

    },
    textColor: {
        color: 'white',
        marginBottom: 2, fontSize: 12,
    },
    textColor2: {
        color: '#444BFF', fontSize: 12
    },

    planUnSelect: {
        padding: 5, marginHorizontal: 15, borderWidth: 1, borderColor: '#444BFF',
        borderRadius: 5, paddingRight: 20, paddingLeft: 10
    },
    planSelect: {
        padding: 5, backgroundColor: '#D8CFCF', marginHorizontal: 15,
        borderRadius: 5, paddingRight: 20, paddingLeft: 10
    }
})

export default EssentialComponent;