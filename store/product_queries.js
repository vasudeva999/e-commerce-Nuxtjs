export const queryProduct = (product) => {
    return `
    query {
        product(pk: ${product.id}){
            id
            name
            price
            description
            quantity
            ownerId
            categoryId
            owner{
                username
                email
                password
                lastLogin
                firstName
                lastName
                pk
            }
            pk
        }
      }
    `
}

export const queryProducts = () => {
    return `
    query {
        products{
            id
            name
            price
            description
            quantity
            ownerId
            categoryId
            owner{
                username
                email
                password
                lastLogin
                firstName
                lastName
                pk
            }
            pk
        }
      }
    `
}

export const mutationCreateProduct = (product) => {
    return `
    mutation{
        createProduct(input: {
            name: "${product.name}"
            description: "${product.description}"
            categoryId: ${product.categoryId}
            quantity: ${product.quantity}
            price: ${product.price}
        }){
            product{
                id
                name
                price
                description
                quantity
                ownerId
                categoryId
                owner{
                    username
                    email
                    password
                    lastLogin
                    firstName
                    lastName
                    pk
                }
                pk
            }
            success
            error
        }
    }
    `
}

export const mutationDeleteProduct = (product) => {
    return `
    mutation{
        deleteProduct(id: ${product.id}){
            success
            message
            error
        }
    }
    `
}

export const mutationUpdateProduct = (product) => {
    return `
    mutation{
        updateProduct(id: ${product.id}, input: {
            name: "${product.name}"
            description: "${product.description}"
            categoryId: ${product.categoryId}
            quantity: ${product.quantity}
            price: ${product.price}
        }){
            success
            message
            error
        }
    }
    `
}