import { ChevronRight } from "react-feather";
import { IoFemale , IoMale , IoMaleFemale } from "react-icons/io5";

type CardProps = {
    gender: 'male' | 'female' | 'unisex';
    size:'GG'|'G'|'M'|'S';
    name:string;
    amount:number;
    price:number;
}

export default function Card({amount,price,size,name, gender}:CardProps) {
 return(
        <div className="cursor-pointer hover:text-orange-600 hover: hover:border-orange-600 flex justify-between flex-row border-[1px] rounded-2xl py-3 px-2 ">
            <div className="flex flex-row gap-3 w-full">
                <div className="border-gray-600 border-2 rounded-full w-12 h-12 flex justify-center items-center">
                    {gender == 'female' && <IoFemale size={30}/>}
                    {gender == 'male' && <IoMale size={30}/>}
                    {gender == 'unisex' && <IoMaleFemale size={30}/>}
                </div>
                <div className="flex flex-row justify-between w-[85%]">
                    <div className="flex flex-row justify-center items-center gap-6">
                        <p className="text-lg h-[28px] w-52 overflow-hidden">{name}</p>
                        <p className="text-md">{size}</p>
                    </div>
                    <div className="flex justify-center items-end flex-col">
                        <p className="text-sm">{amount}</p>
                        <p className="text-sm">{price}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <ChevronRight/>
            </div>
        </div>
 );
}
