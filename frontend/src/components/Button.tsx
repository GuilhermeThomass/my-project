import { CSSProperties, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
    type?: 'submit' | 'reset' | 'button'
    disabled?: boolean;
    onClick?: () => void;
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'sm' | 'md' ;
}>;

export const Button = ({type,children , onClick, variant, size,disabled } : ButtonProps) =>{
    const variantStyles: Record<ButtonProps['variant'], CSSProperties>={
        primary:{
            backgroundColor: 'blue',
        },
        secondary:{
            backgroundColor: 'red',
        },
        tertiary:{
            backgroundColor: 'green',
        }
    }
    const sizeStyles: Record<ButtonProps['size'], CSSProperties>={
        sm:{
            padding: '0.3em 0.6em',
        },
        md:{
            padding: '0.6em 1.2em',
        }
    }

    return(
        <button
            type={type}
            disabled={disabled}
            className="
                transition ease-in-out

                hover:scale-105
                hover:border-white/25
                hover:cursor-pointer

                rounded-lg
                border-2
                border-transparent
                active:scale-95
            "
            style={{
                ...variantStyles[variant],
                ...sizeStyles[size],
                fontSize: '1em',
                fontWeight: '500',
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
