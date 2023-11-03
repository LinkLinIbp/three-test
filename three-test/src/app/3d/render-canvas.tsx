import { Canvas } from "@react-three/fiber";
import { Cooling } from "./y70/model/cooling.model";
import style from "./styles/render-canvas.module.scss"
import { BasicEnvironment } from "./environment/basic-environment";

type renderCanvasProps = {
    children:JSX.Element
}
export function RenderCanvas(props: renderCanvasProps){
    return <div className={style.container_div}>
            <Canvas style={{width:"100%" , height:"100%"}}>
                <BasicEnvironment/>
                <Cooling/>
            </Canvas>
        </div>
}