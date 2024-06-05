// authentication must be added (must be admin to add product)
export const addProduct = async (product) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/product/add/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: product
        })

        return await response.json()

    } catch (error) {
        console.error(error)
    }
}