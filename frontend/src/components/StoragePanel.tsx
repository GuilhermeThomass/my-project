import { RotateCcw,Loader } from "react-feather"
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

type Products ={
    id:number;
    name: string;
    amount: number;
    value: number;
    role:'male' | 'female' | 'unisex';
    size:'GG'|'G'|'M'|'S';
}

export default function StoragePanel() {
    const [product,setProduct] = useState<Products[]>([])
    const [isLoading,setLoading] = useState<boolean>(true);
    const refresh = () =>{
        setLoading(true)
        axios.get("http://localhost:8081/get")
        .then(res =>{
            setProduct(res.data)
            setLoading(false);
        })
        .catch(err => console.log(err))
    }
    useEffect(refresh,[])
    if(isLoading){
        return(
            <div className="flex w-full h-[28rem] bg-zinc-900 rounded-xl px-8 py-6">
                <div className="flex items-center justify-center w-full">
                    <div></div>
                    <Loader size={85} className="text-orange-600 motion-safe:animate-spin"/>
                </div>
            </div>
        )
    }
    return(
        <div className="flex w-full h-[28rem] bg-zinc-900 rounded-xl px-8 py-6 flex-col overflow-y-auto ">
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <h1>Storage panel</h1>
                        <h2 className=" text-orange-600">Something to say</h2>
                    </div>

                    <button
                        onClick={refresh}
                        className="p-1 rounded-lg text-gray-400 hover:-rotate-[45deg] active:-rotate-[270deg] hover:scale-125 transition ease-in-out"
                    >
                        <RotateCcw />
                    </button>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                    {product.map((item)=>{
                        return(
                            <Card
                                key={`row`+ item.id}
                                gender={item.role}
                                name={item.name}
                                size={item.size}
                                amount={item.amount}
                                price={item.value}
                            />
                        )
                    })}
                </div>
        </div>
    )
}
