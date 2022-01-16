import {useCallback, useEffect, useState} from "react";
import {supportAPI} from "../Api/api";

export const useMaterial = ()=>{
    let [material,setMaterial] = useState([]);

    useEffect(()=>{
        supportAPI.getMaterial().then(data=>{
            setMaterial(data);
        })
    },[])

    return {material}
}

export const useMaterials = ()=>{
    let [materials, setMaterials] = useState([]);
    useEffect(()=>{
        supportAPI.getMaterials().then(data=>{
            setMaterials(data);
        })
    },[])
    return [materials];
}

export const addMaterial = ()=>{
    let body = {
        name:'name',
        USD:0.0,
        EUR:0.0,
        RUR:0.0,
        BLR:0.0
    }
    supportAPI.addMaterial(body);
}