import { type ReactNode, useState } from 'react'
import styles from './Button.module.scss'

export default function Button(props: {
    onClick: () => void
    children: ReactNode
}): ReactNode {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
        props.onClick()
        setTimeout(() => setClicked(false), 1500)
    }

    return (
        <button
            onClick={handleClick}
            className={clicked ? styles.clicked : styles.notClicked}
            type='button'
        >
            {props.children}
        </button>
    )
}
