import { addProduct } from "./apiAdmin"
import { useState } from "react"

const CreateProduct = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        error: '',
        createdProduct: '',
        formData: ''
    })

    // const { user, token } = isAuthenticated()

    const {
        name,
        description,
        price,
        categories,
        category,
        shipping,
        quantity,
        error,
        createdProduct,
        formData
    } = values


const clickSubmit = e => {
    e.preventDefault()
    setValues({ ...values, error: '' })

    addProduct(formData).then((data) => {
        if (data.error) {
            setValues({ ...values, error: data.error })
        } else {
            setValues({
                ...values,
                name: '',
                description: '',
                photo: '',
                price: '',
                quantity: '',
                createdProduct: data.name,
            })
        }
    })
}

const handleChange = name => e => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value 
    formData.set(name, value)
    setValues({...values, [name]: value})
}

const addProductForm = () => (
    <form onSubmit={clickSubmit}>
        <h4>Product Photo</h4>
        <div>
            <label>
                <input onChange={handleChange('photo')}
                    type='file'
                    name='photo'
                    accept='image/*'
                />
            </label>
        </div>

        <div>
            <label>Name</label>
            <input onChange={handleChange('name')}
                type="text"
                value={name}
            />
        </div>

        <div>
            <label>Description</label>
            <textarea
                onChange={handleChange('description')}
                value={description}
            />
        </div>

        <div>
            <label>Price</label>
            <input onChange={handleChange('price')}
                type='number'
                value='price' />
        </div>
        <div>
            <label>Category</label>
            <select onChange={handleChange('category')}>
                <option>Please select</option>
                {categories &&
                    categories.map((c, i) => (
                        <option key={i} value={c._id}>
                            {c.name}
                        </option>
                    ))}
            </select>
        </div>
        <div>
            <label>Shipping</label>
            <select onChange={handleChange('shipping')}></select>
            <option>Please select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
        </div>
        <div>
            <label>Quantity</label>
            <input onChange={handleChange('quantity')}
                type='number'
                value={quantity} />
        </div>
        <button>Add Product</button>
    </form>
)

return (
    <div>
        {addProductForm()}
    </div>
)
}

export default CreateProduct