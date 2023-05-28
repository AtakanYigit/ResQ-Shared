const domain = "http://13.48.13.201:5000/api";

const Configurations = {
    signIn:         `${domain}/Auth/loginStaff`,
    forgotPassword: `${domain}/Auth/forgotPassword`,
    logout:         `${domain}/Auth/logout`,
    getEmergencies: `${domain}/Post/getall`,
}

export default Configurations;