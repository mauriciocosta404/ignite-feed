import {ImgHTMLAttributes} from "react"
import styles from "./index.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?:boolean;
}

export const Avatar:React.FC<AvatarProps> = ({
    hasBorder= true,
    ...rest
}) =>{
    return(
        <img 
            {...rest} 
            className={hasBorder ?  styles.avatarWithBorder : styles.avatar }
        />
    )
}