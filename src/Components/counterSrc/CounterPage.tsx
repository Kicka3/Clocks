import React from 'react';
import {incrementAC, resetAC, setCurrentValueAC, setStatusAC} from "../../reducers/CounterReducer";
import {Settings} from "./settings/Settings";
import {Counter} from "./counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";
import './counter.css'


export type counterValue = {
    value: number
}

export const CounterPage: React.FC = () => {
    const counterValue = useSelector<RootReducerType, number>(state => state.counterReducer.counterValue);
    const max = useSelector<RootReducerType, number>(state => state.counterReducer.max);
    const start = useSelector<RootReducerType, number>(state => state.counterReducer.start);

    const dispatch = useDispatch();

    const isValidMax = max <= 0 || max <= start
    const isValidStart = start < 0 || start >= max

    const incBtnHandler = () => {                       //inc counter
        const actionInc = incrementAC(start);
        if (counterValue < max) {
            dispatch(actionInc);

            console.log('inc+')
        }
    }


    const resetCountHandler = () => {
        const action = resetAC();
        dispatch(action);

        console.log('RESET');
    }

    const setSettings = () => {
        // localStorage.setItem('maxValue', `${max}`);                    //Закидываю в storage по нажатию на SET
        // localStorage.setItem('startValue', `${start}`);                //Закидываю в storage по нажатию на SET

        dispatch(setCurrentValueAC(start));
        dispatch(setStatusAC(false));
        console.log(`setSettings - тут закидываю число: ${start} в сторэдж`);
    }

    //Тут будет логика для сохранения числа в инпут
    // useEffect(() => {                                                   //Достаю число из storage для инпут при перезагрузке
    //     let maxFromStorage = localStorage.getItem('maxValue')
    //     if (maxFromStorage) {
    //         let maxValueFromStorage = JSON.parse(maxFromStorage)
    //         setMax(maxValueFromStorage)
    //         console.log(`Достал max число из Storage ` + maxValueFromStorage)
    //     }
    //     let startFromStorage = localStorage.getItem('startValue')
    //     if (startFromStorage) {
    //         let startValueFromStorage = JSON.parse(startFromStorage)
    //         setStart(startValueFromStorage)
    //         console.log(`Достал start число из Storage ` + startValueFromStorage)
    //     }
    // }, []);

    return (
        <div className="counter-wrapper">
            <Settings
                setSettings={setSettings}
                isValidMax={isValidMax}
                isValidStart={isValidStart}
            />
            <Counter
                incBtn={incBtnHandler}
                resetCount={resetCountHandler}
            />
        </div>

    );
}
