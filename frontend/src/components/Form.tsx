import {z} from 'zod';
import {SubmitHandler, useForm } from 'react-hook-form';
import { Button } from './Button';
import TextInput from './TextInput';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectSeparator,
    SelectValue,
  } from './Select';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';



const schema = z.object({
    name: z.string().min(5),
    value:z.coerce.number(),
    amount:z.coerce.number(),
    role: z.union([z.literal('male'),z.literal('female'),z.literal('unisex')]),
    size: z.union([z.literal('GG'),z.literal('G'),z.literal('M'),z.literal('S')])
})

type FormFilds = z.infer<typeof schema>;

export default function Form() {
    const { control, setValue, handleSubmit, formState:{errors, isSubmitting} } = useForm<FormFilds>({
        resolver: zodResolver(schema),
    });
    const onSubmit: SubmitHandler<FormFilds> = async (data) => {
        try{
            await new Promise((resolve)=>setTimeout(resolve,2000));
            await axios.post("http://localhost:8081/upload",{
                name: data.name,
                value: data.value,
                amount: data.amount,
                role: data.role,
                size: data.size
            })
        }catch(error){
            console.log(error)
        }
    }

    return(
        <form
            className='flex gap-4 flex-col m-8 w-96'
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className=''>Register</h1>
            <TextInput
                typenumber={false}
                control={control}
                name='name'
                placeholder='Name'
            />
            <TextInput
                typenumber={true}
                control={control}
                name='value'
                placeholder='Value'
            />
            <TextInput
                typenumber={true}
                control={control}
                name='amount'
                placeholder='Amount'
            />
            <div className='flex justify-between'>
                <Select
                    onValueChange={(value: FormFilds['role']) => setValue('role', value)}
                >
                    <SelectTrigger className="w-[180px] bg-[#1a1a1a] outline-none">
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent className='bg-black' position="item-aligned">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectSeparator className="mx-2 bg-white" />
                        <SelectItem value="unisex">Unisex</SelectItem>
                    </SelectContent>
                </Select>
                <Select
                    onValueChange={(value: FormFilds['size']) => setValue('size', value)}
                >
                    <SelectTrigger className="w-[180px] bg-[#1a1a1a] outline-none">
                        <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent className='bg-black' position="item-aligned">
                        <SelectItem value="GG">GG</SelectItem>
                        <SelectItem value="G">G</SelectItem>
                        <SelectItem value="M">M</SelectItem>
                        <SelectItem value="S">S</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            <Button type='submit' disabled={isSubmitting} variant='tertiary' size='md'>{isSubmitting ? "Loading..." : "Save"}</Button>
        </form>
    )
}
