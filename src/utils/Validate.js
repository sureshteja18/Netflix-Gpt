export const passwordValidate =(email,password)=>{

    const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid && !isPasswordValid) return " 𐄂 Email and Passwrod not valid"

    if(!isEmailValid) return " 𐄂 Email ID is not valid"

    if(!isPasswordValid) return " 𐄂 Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number"

    return null;

}