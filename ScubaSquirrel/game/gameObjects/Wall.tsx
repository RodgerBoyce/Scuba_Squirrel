import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const imageURL = require('../../assets/rocks:walls/wall4Left.png');

const Wall = (props : any) => {
    const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;

    const color = props.color

    return (
        // <View style = {{
        //     backgroundColor: color,
        //     borderStyle: 'solid',
        //     position: 'absolute',
        //     left: xBody,
        //     top: yBody,
        //     width: widthBody,
        //     height: heightBody
        // }}/>
        <View>
        <Image
      source={imageURL} // Replace with the correct path to the GIF image
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
 </View> 
    )

}

export default (world: any, color: string, pos: any, size: any): any => {
  
    const initialWall: any = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label: 'Wall',
            isStatic: true,
            // restitution: 0.5
        }
    )
    Matter.World.add(world, initialWall)

    return {
        body : initialWall,
        color,
        pos,
        renderer: <Wall/>
    }
}