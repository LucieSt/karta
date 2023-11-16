import '../../style.css';
import { useRef } from 'react';

const Form = () => {

    const cardInputRef1 = useRef();
    const cardInputRef2 = useRef();
    const cardInputRef3 = useRef();
    const cardInputRef4 = useRef();

    const handleChange = (e, inputRef) => {
        if (e.target.value.length === 4) {
            if (inputRef === cardInputRef1) {
                cardInputRef2.current.focus()
            } else if (inputRef === cardInputRef2) {
                cardInputRef3.current.focus()
            } else if (inputRef === cardInputRef3) {
                cardInputRef4.current.focus()
            }  
        }
    };

    return (
        <div className='card-container'>
            <input type="text" className="card-input" ref={cardInputRef1} onChange={(e) => handleChange(e, cardInputRef1)}/>
            <input type="text" className="card-input" ref={cardInputRef2} onChange={(e) => handleChange(e, cardInputRef2)}/>
            <input type="text" className="card-input" ref={cardInputRef3} onChange={(e) => handleChange(e, cardInputRef3)}/>
            <input type="text" className="card-input" ref={cardInputRef4} onChange={(e) => handleChange(e, cardInputRef4)}/>
        </div>
    )
};

export default Form;