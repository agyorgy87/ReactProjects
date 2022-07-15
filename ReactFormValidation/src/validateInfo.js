export default function validateInfo(values) {
    let errors = {}

    if(!values.firstName) {
        errors.firstName = "Please enter your First Name"
    }

    if(!values.lastName) {
        errors.lastName = "Please enter your Last Name"
    }

    if(values.BirthDay === "None" && values.BirthMonth === "None" && values.BirthYear === "None"){
        errors.DayOfBirth = "Please enter your Birthday"
    }else if(values.BirthDay === "None" && values.BirthMonth !== "None" && values.BirthYear !== "None"){
        errors.DayOfBirth = "You missed the day, please select it"
    }else if(values.BirthDay !== "None" && values.BirthMonth === "None" && values.BirthYear !== "None"){
        errors.DayOfBirth = "You missed the month, please select it"
    }else if(values.BirthDay !== "None" && values.BirthMonth !== "None" && values.BirthYear === "None"){
        errors.DayOfBirth = "You missed the year, please select it"
    }else if(values.BirthDay === "None" && values.BirthMonth === "None" && values.BirthYear !== "None"){
        errors.DayOfBirth = "You missed the day and the month, please select them"
    }else if(values.BirthDay === "None" && values.BirthMonth !== "None" && values.BirthYear === "None"){
        errors.DayOfBirth = "You missed the day and the year, please select them"
    }else if(values.BirthDay !== "None" && values.BirthMonth === "None" && values.BirthYear === "None"){
        errors.DayOfBirth = "You missed the month and the year, please select them"
    }
    

    if(!values.gender) {
        errors.gender = "Please enter your Gender"
    }

    if(!values.phoneNumber) {
        errors.phoneNumber = "Please enter your Phone Number"
    }else if(values.phoneNumber.length < 7 || values.phoneNumber.length > 7) {
        errors.phoneNumber = "Please enter a 7 digit phone number"
    }

    if(!values.address) {
        errors.address = "Please enter your Address"
    }

    if(!values.town) {
        errors.town = "Please enter your Town"
    }

    if(!values.postCode) {
        errors.postCode = "Please enter your Postcode"
    }else if(values.postCode.length < 4 || values.postCode.length > 4) {
        errors.postCode = "Please enter a 4 digit Postcode"
    }

    if(!values.country) {
        errors.country = "Please enter your Country"
    }

    if(!values.emailAddress) {
        errors.emailAddress = "Please enter your Email address"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)) {
        errors.emailAddress = "Email address is invalid"
    }
    
    if(!values.password1) {
        errors.password1 = 'Password is required'
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(values.password1)) {
        errors.password1 = 'The password must contain 8 characters and 1 number'
    }
    
    if(!values.password2) {
        errors.password2 = 'Password is required'
    } else if(values.password2 !== values.password1) {
        errors.password2 = 'Passwords do not match'
    }

    return errors
}