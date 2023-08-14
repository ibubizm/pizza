import './admin.scss'
import { useState } from 'react'
import { Checkbox } from '../components/checkbox/checkbox'
import { Input } from '../components/input/input'
import { Button } from '../components/button/button'
import { createProduct } from '../auth/fetch'
import {
  defaultProduct,
  doughList,
  sizesList,
  category,
  drinkSize,
} from './props'
import { useHistory } from 'react-router-dom'
import { useInput } from '../hooks/form'

export const Admin = () => {
  const [disButton, setDisButton] = useState(true)
  const name = useInput('', { isEmpty: true, minLength: 2 })
  const imageUrl = useInput('', { isEmpty: true })
  const [product, setProduct] = useState(defaultProduct)
  const [toppings, setToppings] = useState(sizesList)
  const [drink, setDrink] = useState(drinkSize)
  const [dough, setDough] = useState(doughList)

  const history = useHistory()

  const updateCheckStatus = (setter, list, index) => {
    setter(
      list.map((topping, currentIndex) =>
        currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping
      )
    )
  }

  const updatePrice = (e, index, list, setter) => {
    console.log(e.target.value)
    setter(
      list.map((list, currentIndex) =>
        currentIndex === index ? { ...list, price: e.target.value } : list
      )
    )
  }

  const priceBlock = (list, setter) => {
    return (
      <div>
        {list.map((i, index) => {
          if (i.checked)
            return (
              <input
                className="auth__input auth__input__gap"
                key={i.name}
                onChange={(e) => updatePrice(e, index, list, setter)}
                placeholder={`price for ${i.name}`}
              />
            )
        })}
      </div>
    )
  }

  const checkboxBlock = (list, setter) => {
    return (
      <div className="checkbox">
        {list.map((i, index) => (
          <Checkbox
            key={i.name}
            isChecked={i.checked}
            label={i.name}
            checkHandler={() => updateCheckStatus(setter, list, index)}
            index={index}
          />
        ))}
      </div>
    )
  }
  const checkCategory = () => {
    let sizes = []
    let types = []
    let price = []
    switch (product.category) {
      case '4':
        drink.map((i) => {
          if (i.checked) {
            sizes.push(i.name)
            price.push(Number(i.price))
            types = []
          }
        })
        return [sizes, types, price]

      default:
        toppings.map((i) => {
          if (i.checked) {
            sizes.push(i.name)
            price.push(Number(i.price))
            types = []
          }
        })
        dough.map((i) => {
          if (i.checked) {
            types.push(i.name)
          }
        })
        return [sizes, types, price]
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const [sizes, types, price] = checkCategory()
    const form = new FormData()
    form.append('imageUrl', imageUrl.value)
    form.append('name', name.value)
    form.append('types', types)
    form.append('sizes', sizes)
    form.append('price', price)
    form.append('category', product.category)
    form.append('rating', product.rating)
    form.append('description', product.description)

    createProduct(form)
    history.push('/')
  }

  return (
    <div className="wrapper">
      <div className="form__content">
        <form onSubmit={onSubmit}>
          <Input
            field={imageUrl}
            value={imageUrl.value}
            fieldName={'imageUrl'}
            // obj={product}
            // onChange={setProduct}
            placeholder={'url image'}
            icon={'image'}
          />
          <Input
            field={name}
            value={name.value}
            fieldName={'name'}
            // obj={product}
            // onChange={setProduct}
            placeholder={'name of product'}
            icon={'pizza'}
          />
          <select
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            name="category"
            id="category"
          >
            {category.map((cat) => (
              <option key={cat.name} value={cat.value}>
                {cat.name}
              </option>
            ))}
          </select>
          {product.category !== '4' ? (
            <>
              {checkboxBlock(dough, setDough)}
              {checkboxBlock(toppings, setToppings)}
              {priceBlock(toppings, setToppings)}
            </>
          ) : (
            <>
              {checkboxBlock(drink, setDrink)}
              {priceBlock(drink, setDrink)}
            </>
          )}
          <textarea
            type="textarea"
            placeholder={'description'}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />

          <Button disabled={disButton} className="registration__btn">
            create product
          </Button>
        </form>
      </div>
    </div>
  )
}
