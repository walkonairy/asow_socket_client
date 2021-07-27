import React, {useRef} from "react";

type AType = "aaa" | "bbb" | "ccc"

interface Props {
    name?: string
    age?: number
    type?: AType
    likes?: string[]
}

const AccessibilityDemo: React.FC<Props> = (props) => {

    const inputRef = useRef<any>(null);

    const onFocus = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <label htmlFor={'nameInput'}>姓名：</label>
            <input id={'nameInput'} type={'text'} name={'name'} ref={inputRef}
                   aria-required={"true"}
                   aria-labelledby={'first-name-input'}
                   aria-label={'nameInput'}
            />
            <button onClick={onFocus}>
                点我focus
            </button>
        </>
    )
}

export default AccessibilityDemo;


