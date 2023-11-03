
import { Environment, OrbitControls } from '@react-three/drei';

export function BasicEnvironment(){
    return <><OrbitControls enablePan={false} />
            <directionalLight visible intensity={0.5} position={[0.2, 0.1, 0.5]} />
            <directionalLight intensity={0.5} position={[-0.5, 0.1, 0.0]} />
            <directionalLight visible intensity={0.5} position={[0.2, 0.1, -0.5]} />
            <directionalLight visible intensity={1} castShadow={true} position={[-0.2, 1, 0.1]} />
            <Environment preset="night" /></>
}