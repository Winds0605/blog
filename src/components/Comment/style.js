import { bounce } from 'react-animations'
import Radium from 'radium'

export const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}
