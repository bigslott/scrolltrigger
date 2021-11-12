import styles from './styles.module.css'
import { useState, useEffect } from 'react';

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");

    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <div>
            <div
                onTransitionEnd={() => {
                    if (transitionStage === "fadeOut") {
                        console.log("fading out");
                        console.log(children, 'CHILDREN!!!!!!!!!!!')
                        
                        setTransitionStage("fadeIn");

                        setTimeout(() => setDisplayChildren(children))
                    }
                }}
                className={`${styles.content} ${styles[transitionStage]}`}
            >
                {displayChildren}
            </div>
        </div>
    );
  }