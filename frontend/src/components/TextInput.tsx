import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";

type TextInputProps =  ComponentProps<'input'> & {
    control: Control<any>;
    name: string;
    label?:string;
    typenumber: boolean;
}

export default function TextInput({typenumber,label,control,name,...inputProps}:TextInputProps) {
    const { formState:{errors} } = useController({control,name});

    if(typenumber){
        return(
            <div>
                {label && <label>{label}</label>}
                <input
                    {...control.register(name ,{ valueAsNumber: true })}
                    className='flex rounded-md py-2 px-4 outline-none bg-[#1a1a1a] w-full border-[1px] border-white'
                    {...inputProps}
                />
                {errors[name] && (<div className="text-red-500">{errors[name].message?.toString()}</div>)}
            </div>
        );
    }
    return(
        <div>
            {label && <label>{label}</label>}
            <input
                {...control.register(name)}
                className='flex rounded-md py-2 px-4 outline-none bg-[#1a1a1a] w-full border-[1px] border-white'
                {...inputProps}
            />
            {errors[name] && (<div className="text-red-500">{errors[name].message?.toString()}</div>)}
        </div>
    );
}
