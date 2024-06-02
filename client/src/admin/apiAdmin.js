import { API } from '../config'

export const addProduct = async (token, product) => {
    try {
        const response = await fetch(`${API}/product/add/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: product
        })

        return await response.json()

    } catch (error) {
        console.error(error)
    }
}