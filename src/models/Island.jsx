import React, { useRef, userEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three'
import islandScene from '../assets/3d/island.glb';

const Island = ({isRotating, setIsRotating, ...props }) => {
    const islandRef = useRef();

    const { gl, viewport } = userThree(); 
    const { nodes, materials } = useGLTF(islandScene)

    const lastX = useref(0);
    const rotationSpeed = useref(0);
    const dampingFactor = 0.95; 

    const handlePointerDown = (e) => {
        e.stopProgation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches 
        ? e.touches[0].clientX 
        : e.clientX

        lastX.current = clientX;
    }
    
    const handlePointerUp = (e) => {
        e.stopProgation();
        e.preventDefault();
        setIsRotating(false);

        const clientX = e.touches 
        ? e.touches[0].clientX 
        : e.clientX

        const delta = (clientX - lastX.current) / viewport.width;

        islandRef.current.rotation.y == delta * 0. * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
    }    
    
    const handlePointerMove = (e) => {
        e.stopProgation();
        e.preventDefault();

        if(isRotating) handlePointerUp(e);
    }

    useEffect(() => {
        document.addEventListener('pointerdown', handlePointerDown)
        document.addEventListener('pointerup', handlePointerUp)
        document.addEventListener('pointermove', handlePointerMove)

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown)
            document.removeEventListener('pointerup', handlePointerUp)
            document.removeEventListener('pointermove', handlePointerMove)

        }

    }, [gl, handlePointerDown, handlePointerUp,handlePointerMove])

    return (
        <a.group ref={islandRef} {...props} >
        <mesh
            geometry={nodes.polySurface944_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh
            geometry={nodes.polySurface945_tree1_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh         
            geometry={nodes.polySurface946_tree2_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh  
            geometry={nodes.polySurface947_tree1_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh  
            geometry={nodes.polySurface948_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh  
            geometry={nodes.polySurface949_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh
            geometry={nodes.pCube11_rocks1_0.geometry}
            material={materials.PaletteMaterial001}
        />
        </a.group>
    )
}

export default Island; 
