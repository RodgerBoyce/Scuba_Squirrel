import Matter, { World } from "matter-js";
import { useState } from "react";
import PuffaFish from "../gameObjects/PuffaFish";
import moveSquirrel from "./moveSquirrel";
import handleCollision from "./collisions";

const Physics =(entities: any, {touches, time, dispatch} : any) => {
    let engine= entities.physics.engine

    moveSquirrel(entities, touches);   
    handleCollision(engine)    
                    
                    Matter.Engine.update(engine, time.delta)
                    
                    return entities;
               
            }
                export default Physics

                

                // console.log(`x Numerator: ${touchX - squirrelX}`)
                // console.log(`y Numerator: ${touchY - squirrelY}`)
                // console.log (`xDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
                // console.log (`yDenom = ${((touchX - squirrelX) + (touchY - squirrelY))}`)
                // console.log(`(xVelo , yVelo): (${xVelo}, ${yVelo}) \n\n`)
                // console.log(`------------------------------------------------------------------`)
                // console.log(`hello press at (${touchX}, ${touchY})`)
                // console.log(`Squarrel is at: (${squirrelX}, ${squirrelY})`)