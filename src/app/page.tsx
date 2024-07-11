'use client'

import { type ReactNode, useRef, useState } from 'react'
import Button from '../components/Button'
import styles from './page.module.scss'
import './globals.scss'

export default function Home(): ReactNode {
    const [element, setElement] = useState<HTMLElement | null>(null)
    const ref = useRef<HTMLDivElement>(null)

    const handleInput = (event: React.ChangeEvent<HTMLDivElement>) => {
        // Clone the element, otherwise mutation of element won't trigger re-rendering
        const element = event.target.cloneNode(true) as HTMLElement
        setElement(element)
    }

    const handleCopy = () => {
        if (!element) return
        navigator.clipboard.writeText(element?.innerHTML)
    }

    const handleClear = () => {
        setElement(null)
        if (ref.current) {
            ref.current.innerHTML = ''
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.panel}>
                <div
                    className={styles.textField}
                    contentEditable={true}
                    onInput={handleInput}
                    ref={ref}
                />
                <Button onClick={handleClear}>Clear</Button>
            </div>
            <div className={styles.panel}>
                <div className={styles.textField}>{element?.innerHTML}</div>
                <Button onClick={handleCopy}>Copy</Button>
            </div>
        </main>
    )
}
