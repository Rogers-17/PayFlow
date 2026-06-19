import { ButtonHTMLAttributes } from "react";

export default function Button (props: ButtonHTMLAttributes<HTMLButtonElement>){
    const { className, ...otherprops} = props
    return (
        <button className={className} {...otherprops}/>
    )
}