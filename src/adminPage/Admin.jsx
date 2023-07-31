import { useState } from 'react'
import { Checkbox } from '../components/checkbox/checkbox'
import { Input } from '../components/input/input'
import { Button } from '../components/button/button'
import './admin.scss'
import { createProduct } from '../auth/fetch'

const sizesList = [
  {
    price: 0,
    name: 23,
    checked: false,
  },
  {
    price: 0,
    name: 30,
    checked: false,
  },
  {
    price: 0,
    name: 40,
    checked: false,
  },
]

const doughList = [
  { name: 'slim', checked: false },
  { name: 'fat', checked: false },
]

export const Admin = () => {
  const [product, setProduct] = useState({
    imageUrl: '',
    name: '',
    types: [],
    sizes: [],
    price: [],
    category: 0,
    rating: 5,
    description: '',
  })
  const [toppings, setToppings] = useState(sizesList)
  const [dough, setDough] = useState(doughList)

  const updateCheckStatus = (setter, list, index) => {
    setter(
      list.map((topping, currentIndex) =>
        currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping
      )
    )
  }

  const updatePrice = (e, index) => {
    console.log(e.target.value)
    setToppings(
      toppings.map((topping, currentIndex) =>
        currentIndex === index ? { ...topping, price: e.target.value } : topping
      )
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData()
    let sizes = []
    let types = []
    let price = []
    toppings.forEach((i) => {
      if (i.checked) {
        sizes.push(Number(i.name))
        price.push(Number(i.price))
      }
    })
    dough.forEach((i) => {
      if (i.checked) {
        types.push(i.name)
      }
    })
    form.append('imageUrl', product.imageUrl)
    form.append('name', product.name)
    form.append('types', types)
    form.append('sizes', sizes)
    form.append('price', price)
    form.append('category', product.category)
    form.append('rating', product.rating)
    form.append('description', product.description)
    createProduct(form)
  }

  return (
    <div className="wrapper">
      <div className="form__content">
        <form onSubmit={onSubmit}>
          <Input
            fieldName={'imageUrl'}
            obj={product}
            onChange={setProduct}
            placeholder={'url image'}
            icon={'image'}
          />
          <Input
            fieldName={'name'}
            obj={product}
            onChange={setProduct}
            placeholder={'name of product'}
            icon={'pizza'}
          />
          <div className="checkbox">
            {dough.map((i, index) => (
              <Checkbox
                key={i.name}
                isChecked={i.checked}
                label={i.name}
                checkHandler={() => updateCheckStatus(setDough, dough, index)}
                index={index}
              />
            ))}
          </div>
          <div className="checkbox">
            {toppings.map((i, index) => (
              <Checkbox
                key={i.name}
                isChecked={i.checked}
                label={i.name}
                checkHandler={() =>
                  updateCheckStatus(setToppings, toppings, index)
                }
                index={index}
              />
            ))}
          </div>

          {toppings.map((i, index) => {
            if (i.checked)
              return (
                <input
                  key={i.name}
                  onChange={(e) => updatePrice(e, index)}
                  // fieldName={'price'}
                  placeholder={`price for ${i.name}`}
                  // icon={'money'}
                />
              )
          })}
          <select
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            name="category"
            id="category"
          >
            <option value="0">grill</option>
            <option value="1">closed</option>
            <option value="2">spicy</option>
            <option value="3">vegan</option>
          </select>
          <textarea
            type="textarea"
            placeholder={'description'}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />

          <Button className="registration__btn">create product</Button>
        </form>
      </div>
    </div>
  )
}
