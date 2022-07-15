import {useState} from 'react';

const useForm = validate => {

    const [values, setValues] = useState({
        firstName:'',
        lastName:'',
        BirthDay:'None',
        BirthMonth:'None',
        BirthYear:'None',
        gender:'',
        phoneNumber:'',
        address:'',
        town:'',
        postCode:'',
        country:'',
        emailAddress:'',
        password1:'',
        password2:''
    })
    
    const [errors, setErrors] = useState({});
    
    const handleChange = e => {
        const { name,value } = e.target
        setValues({
            ...values,
            [name]: value 
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
    };

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;