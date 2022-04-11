export const queryMe = () => {
    return `
    query{
        me{
            id
            username
            email
            password
            lastLogin
            firstName
            lastName
            pk
        }
    }
    `
}

export const mutationRegister = (user) => {
    return `
        mutation {
            register(
                firstName: "${user.firstName}",
                lastName: "${user.lastName}",
                username: "${user.username}",
                email: "${user.email}",
                password1: "${user.password1}",
                password2: "${user.password2}"
            ){
                success
                message
                error
            }
        }
        `
}
export const mutationAuth = (user) => {
    return `
        mutation {
            auth(
                email: "${user.email}",
                password: "${user.password}"
            ){
                accessToken
                refreshToken
                error
            }
        }
        `
}

export const mutationRefreshToken = (refreshToken) => {
    return `
    mutation{
        refresh(refreshToken: "${refreshToken}"){
            newToken
        }
    }
    `
}

export const mutationUpdateUser = (user) => {
    return `
    mutation{
        updateUser(
            email: "${user.email}"
            firstName: "${user.firstName}"
            lastName: "${user.lastName}"
            password1: "${user.password1}"
            password2: "${user.password2}"
            username: "${user.username}"
        ){
            success
            message
            error
        }
    }
    `
}

export const mutationDeleteUser = () => {
    return `
    mutation{
        deleteUser{
            success
            message
            error
        }
    }
    `
}