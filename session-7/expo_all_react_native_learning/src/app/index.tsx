import { View, Text, Button } from 'react-native'
import { router } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text>THis is index Page</Text>

      <Button title='Go to About' onPress={() => router.navigate("/about")}>

      </Button>

    </View>
  )
}

export default index
 