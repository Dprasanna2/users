import {useState , useEffect} from 'react'

const useForm = () => {
    const [values, setValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: ''
    })
    const [errors,setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValue({
            ...values,
            [name]:value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return {handleChange, values , handleSubmit} ;
};

export default useForm;