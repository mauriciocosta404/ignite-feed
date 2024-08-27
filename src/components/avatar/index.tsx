import styles from "./index.module.css"

interface avatarProps{
    src:string;
    hasBorder?:boolean;
    alt?: string;
}

export const Avatar = ({src, hasBorder= true} : avatarProps) =>{
    return(
        <img className={hasBorder ?  styles.avatarWithBorder : styles.avatar } src={src}/>
    )
}