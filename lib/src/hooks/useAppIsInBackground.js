import { useState, useEffect, useRef } from 'react';
import { AppState } from 'react-native';
export function useAppIsInBackground() {
    const [state, setState] = useState('active');
    const eventListener = useRef(undefined);
    useEffect(() => {
        const onStateChange = (nextState) => {
            setState(nextState);
        };
        eventListener.current = AppState.addEventListener('change', onStateChange);
        return () => {
            eventListener.current?.remove();
        };
    }, []);
    return state === 'background';
}
