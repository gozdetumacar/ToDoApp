import React, { useState } from 'react';

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
            <h4>Merhaba, bugün {date.toLocaleDateString()}</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="text"
                        placeholder={'Bir not ekleyin'}
                        value={input}
                        onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default TodoInput;
