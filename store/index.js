import axios from 'axios';
import { mutationAuth, mutationRegister, mutationRefreshToken, queryMe } from './user_queries';
import { mutationCreateProduct, queryProduct, queryProducts } from './product_queries';

export const state = () => {
    // @todo
};

export const getters = {
    // @todo
};

export const mutations = {
    isAllDefined: (...params) => {
        for (let i in params[0]) {
            if (!params[0][i]) return false;
        }
        return true;
    },
    getToken: () => {
        token = ""
        return token
    },
    getAxiosOptions: () => {
        return {
            method: null,
            url: "http://127.0.0.1:5000",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json"
            },
            data: {
                query: null
            }
        };
    },
    catchHandler: (err) => {
        console.log(err);
        let message = ""
        if (err.response) {
            const errors = err.response.data.errors
            for (let i in errors) {
                message += errors[i].message + " "
            }
        } else if (err.request) {
            message = err.request
        } else {
            message = err.message
        }
        return message
    }
};

export const actions = {
    createUser: async (state, user) => {
        let response = {
            success: null,
            error: null,
            message: null
        }
        if (!mutations.isAllDefined(user)) {
            response.error = true
            response.message = "user data insufficient"

            return response;
        }
        const options = mutations.getAxiosOptions()
        options.method = 'POST'
        options.data.query = mutationRegister(user)
        await axios.request(options).then(
            (res) => {
                const registerResponse = res.data.data.register
                if (!registerResponse.error) {
                    response.success = registerResponse.success
                    response.message = registerResponse.message
                } else {
                    response.error = registerResponse.error
                }
            }
        ).catch(error => {
            response.error = mutations.catchHandler(error)
        })
        return response;
    },
    authUser: async (state, user) => {
        let response = {
            success: null,
            error: null,
            message: null
        }
        if (!mutations.isAllDefined(user)) {
            response.error = true
            response.message = "user data insufficient"

            return response;
        }
        const options = mutations.getAxiosOptions()
        options.method = 'POST'
        options.data.query = mutationAuth(user)
        await axios.request(options).then(
            (res) => {
                const authResponse = res.data.data.auth
                if (!authResponse.error) {
                    response.success = true
                    response.message = {
                        accessToken: authResponse.accessToken,
                        refreshToken: authResponse.refreshToken
                    }
                } else {
                    response.error = authResponse.error
                }
            }
        ).catch(error => {
            response.error = mutations.catchHandler(error)
        })

        return response
    },
    getUser: async (state) => {
        let response = {
            success: null,
            error: null,
            message: null
        }
        const options = mutations.getAxiosOptions()
        options.method = 'POST'
        options.data.query = queryMe()
        await axios.request(options).then(
            (res) => {
                const currentUserResponse = res.data.data.me
                if (res.data.errors) {
                    let errMsg = ""
                    const errors = res.data.errors
                    for (let i in errors) {
                        errMsg += errors[i].message
                    }
                    response.error = errMsg
                    return response

                }
                if (!currentUserResponse.error) {
                    response.success = true
                    response.message = {
                        user: currentUserResponse
                        // id: currentUserResponse.id,
                        // username: currentUserResponse.username,
                        // email: currentUserResponse.email,
                        // password: currentUserResponse.password,
                        // lastLogin: currentUserResponse.lastLogin,
                        // firstName: currentUserResponse.firstName,
                        // lastName: currentUserResponse.lastName,
                        // pk: currentUserResponse.pk
                    }
                } else {
                    response.error = currentUserResponse.error
                }
            }
        ).catch((error) => {
            response.error = mutations.catchHandler(error)
        })

        return response
    },
    // products
    createProduct: async (state, product) => {
        let response = {
            success: null,
            error: null,
            message: null
        }
        if (!mutations.isAllDefined(product)) {
            response.error = true
            response.message = "product data insufficient"

            return response;
        }
        const options = mutations.getAxiosOptions()
        options.method = 'POST'
        options.data.query = mutationCreateProduct(product)
        await axios.request(options).then(
            (res) => {
                const productResponse = res.data.data.createProduct
                if (res.data.errors) {
                    let errMsg = ""
                    const errors = res.data.errors
                    for (let i in errors) {
                        errMsg += errors[i].message
                    }
                    response.error = errMsg
                    return response

                }
                if (!productResponse.error) {
                    response.success = true
                    response.message = {
                        product: productResponse.product
                    }
                } else {
                    response.error = productResponse.error
                }
            }
        ).catch(error => {
            response.error = mutations.catchHandler(error)
        })

        return response
    },
    getProducts: async (state) => {
        let response = {
            success: null,
            error: null,
            message: null
        }
        const options = mutations.getAxiosOptions()
        options.method = 'POST'
        options.data.query = queryProducts()
        await axios.request(options).then(
            (res) => {
                const productResponse = res.data.data.products
                if (!productResponse.error) {
                    response.success = true
                    response.message = {
                        products: productResponse
                    }
                } else {
                    response.error = productResponse.error
                }
            }
        ).catch(error => {
            response.error = mutations.catchHandler(error)
        })

        return response
    },
    getProduct: async (state, id) => {
        let response = {
            success: null,
            error: null,
            message: null
        }
        const options = mutations.getAxiosOptions()
        options.method = 'POST'
        options.data.query = queryProduct({id: id})
        await axios.request(options).then(
            (res) => {
                const productResponse = res.data.data.product
                if (!productResponse.error) {
                    response.success = true
                    response.message = {
                        product: productResponse[0]
                    }
                } else {
                    response.error = productResponse.error
                }
            }
        ).catch(error => {
            response.error = mutations.catchHandler(error)
        })

        return response
    }
};
