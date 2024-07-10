'use client'

import { type ReactNode, useState } from 'react'
import styles from './page.module.scss'
import './globals.scss'

export default function Home(): ReactNode {
    const [element, setElement] = useState<HTMLElement | null>(null)

    const handleInput = (event: React.ChangeEvent<HTMLDivElement>) => {
        // Clone the element, otherwise mutation of element won't trigger re-rendering
        const element = event.target.cloneNode(true) as HTMLElement
        setElement(element)
    }

    return (
        <main className={styles.main}>
            <div className={styles.panel} contentEditable={true} onInput={handleInput}>
            </div>
            <div className={styles.panel}>
                {element?.innerHTML}
            </div>
        </main>
    )
}
