import React, { useState } from 'react';
import './styles.css'
import { AiFillPlusCircle } from 'react-icons/ai';



function TodoInput(props) {

    var date = new Date();

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    };




    return (

        <div>
            <h4 className="welcomeText">Merhaba, bugün {date.toLocaleDateString()}</h4>

            <form className="firstContainer" onSubmit={handleSubmit}>
                <div >

                    <label >

                    <input
                            className="inputForm"
                        type="text"
                        name="text"
                        placeholder={'Bir not ekleyin'}
                        value={input}
                        onChange={handleChange} />
                    </label></div>
                <div>
                    <button
                        className="submitButton"
                        type="submit"
                    >
                        <AiFillPlusCircle className="submitIcon" />
                    </button></div>

            </form>
        </div>

    )
}


export default TodoInput;
