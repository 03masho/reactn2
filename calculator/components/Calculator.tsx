import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Button from './Button'

const Calculator = () => {
  const [firstValue, setFirstValue]=useState(0);
  const [operator, setOperator]=useState('');
  const [displayValue, setDisplayValue]=useState('0');

  const handleNumberInput=(num:string)=>{
    if (displayValue=='0') {
      setDisplayValue(num)
    } else {
      setDisplayValue(displayValue + num)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.display}>{displayValue}
      </View>
      <View style={styles.buttons}>
         <Button title='C' type='top'/>
         <Button title='X' type='top'/>
         <Button title='%'  type='top'/>
         <Button title='/' type='right' />
         <Button title='7' type='number' onPress={()=>handleNumberInput('7')} />
         <Button title='8' type='number' onPress={()=>handleNumberInput('8')}/>
         <Button title='9' type='number' onPress={()=>handleNumberInput('9')}/>
         <Button title='*' type='right'/>
         <Button title='6' type='number' onPress={()=>handleNumberInput('6')}/>
         <Button title='5' type='number' onPress={()=>handleNumberInput('5')}/>
         <Button title='4' type='number' onPress={()=>handleNumberInput('4')}/>
         <Button title='-' type='right'/>
         <Button title='1' type='number' onPress={()=>handleNumberInput('1')}/>
         <Button title='2' type='number' onPress={()=>handleNumberInput('2')}/>
         <Button title='3' type='number' onPress={()=>handleNumberInput('3')}/>
         <Button title='+' type='right'/>
         <Button title='0' type='number' onPress={()=>handleNumberInput('0')}/>
         <Button title='00' type='number' onPress={()=>handleNumberInput('00')}/>
         <Button title='.' type='number'/>
         <Button title='=' type='right' />
         
      </View>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    display:{
     flex:1,
     backgroundColor:'white',
     color:"black",
     fontWeight: '800',
     fontSize:73,
     paddingHorizontal: 22,
     paddingVertical: 22,
     justifyContent:'flex-end',
     alignItems:'flex-end'

    },
    buttons:{
    flex:2,
    backgroundColor:'#f1f7f3',
    color:'red',
    flexDirection:'row',
    flexWrap:'wrap',
    gap:30,
    justifyContent:'center'
    }
})