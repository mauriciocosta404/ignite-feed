import React from "react";
import { PencilLine } from "phosphor-react"
import styles from "./index.module.css"

export const Sidebar : React.FC = () =>{
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1718062455464-75f9a6375127?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/95001318?v=4"/>

                <strong>Mauricio Costa</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}   