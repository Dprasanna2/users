export default function Validation(values) {
    let errors = {}

    if(!values.firstName.trim()){
        errors.firstName = "First Name required"
    }

    if(!values.lastName.trim()){
        errors.lastName = "Last Name required"
    }

    if(!values.email){
        errors.email = "Email required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.address.trim()){
        errors.address = "Last Name required"
    }else if(!/^[a-zA-Z0-9]*$/i.test(values.address)){
        errors.address = "Address name is invalid"
    }

    if(!values.city.trim()){
        errors.city = "Last Name required"
    }else if(!/^[a-zA-Z]*$/i.test(values.city)){
        errors.city = "City name is invalid"
    }
}
