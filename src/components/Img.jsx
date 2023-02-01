import { useState, useEffect, useRef } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './styles/Img.css'

const Img = ({img, alt, onClick, className, style, bigDisplay}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isBigDisplay, setIsBigDisplay] = useState(false)
    const imgRef = useRef()

    useEffect(() => {
        const img = imgRef.current
        if (img && img.complete) {
            setIsLoading(false)
        } else {
            setIsLoading(true)
            img.addEventListener('load', () => setIsLoading(false))
        }
    }, [img])

    const escape = (e) => {
        if(e.key === 'Escape') {
            setIsBigDisplay(false)
        }
    }

    const close = (e) => {
        if(e.target.className === 'img-big-display' || e.target.className === 'img-big-display-container') {
            setIsBigDisplay(false)
        }
    }

    useEffect(() => {
        if(bigDisplay) {
            window.addEventListener('keydown', e => escape(e))
            window.addEventListener('click', e => close(e))
        }

        return () => {
            window.removeEventListener('keydown', e => escape(e))
            window.removeEventListener('click', e => close(e))
        }
    }, [bigDisplay])

    return (
        <>
            {bigDisplay && isBigDisplay && (
                <div className="img-big-display">
                    <div className="img-big-display-container">
                        <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.25)',
                        }}>
                        <TransformWrapper
                            initialScale={1}
                            minScale={1}
                        >
                            <TransformComponent>
                                <div className="flex align-center justify-center">
                                    <img
                                        onClick={isLoading ? null : onClick ? onClick : null}
                                        src={img}
                                        alt={alt}
                                        style={{pointerEvents: 'initial'}}
                                    />
                                </div>
                            </TransformComponent>
                        </TransformWrapper>
                            
                            </div>
                    </div>
                </div>
            )}
            <img
                onClick={isLoading ? null : onClick ? onClick : bigDisplay ? () => setIsBigDisplay(true) : null}
                src={img}
                alt={alt}
                ref={imgRef}
                loading="lazy"
                style={style}
                className={`img ${isLoading ? 'loading' : 'loaded'}${className ? ` ${className}` : ''}`}
            />
        </>
    )
}

export default Img