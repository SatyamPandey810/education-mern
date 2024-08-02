const backendDomain = "http://localhost:8080"

const summaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    login: {
        url: `${backendDomain}/api/login`,
        method: "post"
    },
    logout: {
        url: `${backendDomain}/api/logout`,
        method: "get"
    },
    userDetails: {
        url: `${backendDomain}/api/user-details`,
        method: "get"
    },
    getAllUser: {
        url: `${backendDomain}/api/all-user`,
        method: "get"
    },
    updateUser: {
        url: `${backendDomain}/api/update-user`,
        method: "post"
    }

}
export default summaryApi