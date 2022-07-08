import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import config from '../config';


function AddProductForm() {
    const [submitDisable, setSubmitDisable] = useState(true);

    const [values, setValues] = useState({
        title: '',
        price: 0,
/*         stock: '',
        description: '',
        image: '' */
    });

    function handleChange(e){
        setValues(oldValues => ({
            ...oldValues,
            [e.target.id]: e.target.value
        }));;        
    }

    useEffect(() => {
        disableSubmit();
    },[values])

    function handleSubmit(event) {
        event.preventDefault();
        let res = fetch(config.backendURL + "/products", {
            method: "POST",
            body: JSON.stringify({ values })
        })
    }

    const disableSubmit = () => {
        var emptyFound = false;
        for (let value in values) {
            if (values[value] === ''){
                emptyFound = true;
                break;
            }
        }
        setSubmitDisable(emptyFound)
    }

    /*     function setData(text){
            console.log(text);
            switch(text){
                case '':
                    setSubmitDisable(true);
                    handleChange(text);
                    break;
                default:
                    handleChange(text);
                    console.log(price)
                    switch(price){
                        case "0":
                            break;
                        default:
                            setSubmitDisable(false);
                            break;
                    }
            }
        } */

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" value={values.title} onChange={e => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" min="0" value={values.price} onChange={e => handleChange(e)} />
                </div>

                <Button type="submit" disabled={submitDisable} variant="primary">Submit</Button>

            </form>
        </div>
    )
}

export default AddProductForm