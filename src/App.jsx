import { useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({firstName:"",lastName:"", email:"", officeCountry:"", address:"", city:"", state:"", ZIP:"", comments:false, candidates: false, offers:false, notification:""})

  const changeHandler = (e) => {
    const {type, name, value, checked} = e.target
    setForm((form) => {
      return {
        ...form, 
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(form);
  }

  return (
    <div className='forms'>
      <form action="" onSubmit={submitHandler}>

        <div className="firstName">
          <label htmlFor="">First Name</label>
          <input 
          onChange={changeHandler}
          type="text"
          name='firstName'
          placeholder='enter first name'
          value={form.firstName}
            />
        </div>

        <div className="lastName">
          <label htmlFor="">Last Name</label>
          <input 
          onChange={changeHandler}
          type="text"
          name='lastName'
          placeholder='enter last name'
          value={form.lastName}
            />
        </div>

        <div className="email">
          <label htmlFor="">Email address</label>
          <input 
          onChange={changeHandler}
          type="email"
          name='email'
          placeholder='abc@xyz.com'
          value={form.email}
            />
        </div>

        <div className="country">
          <label htmlFor="">Country</label>
          <select 
          onChange={changeHandler}
          name="officeCountry" 
          id="officeCountry">
            <option value="Bangladesh">Bangladesh</option>
            <option value="UAE">UAE</option>
            <option value="Singapore">Singapore</option>
            <option value="Saudi Arab">Saudi Arab</option>
          </select>
        </div>

        <div className="address">
          <label htmlFor="">Street address</label>
          <input 
          onChange={changeHandler}
          type="text"
          name='address'
          placeholder='1234 Main st'
          value={form.address}
            />
        </div>

        <div className="city">
          <label htmlFor="">City</label>
          <input 
          onChange={changeHandler}
          type="text"
          name='city'
          placeholder='Dhaka'
          value={form.city}
          />
        </div>

        <div className="state">
          <label htmlFor="">State / Province</label>
          <input 
          onChange={changeHandler}
          type="text"
          name='state'
          placeholder='Dhaka'
          value={form.state}
          />
        </div>

        <div className="ZIP">
          <label htmlFor="">ZIP / Postal code</label>
          <input 
          onChange={changeHandler}
          type="text"
          name='ZIP'
          placeholder='1240'
          value={form.ZIP}
          />
        </div> 

        <div className='checkBoxLists'>
          <label htmlFor="">By Email</label>

          <div className="checkBoxList">
            <input 
            onChange={changeHandler}
            type="checkbox" 
            name="comments" 
            id="comments"
            checked={form.comments} />
            <div className="checkBox">
              <label htmlFor="comments">Comments</label>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>


          <div className="checkBoxList">
            <input 
              onChange={changeHandler}
              type="checkbox" 
              name="candidates" 
              id="candidates"
              checked={form.candidates} />
              <div className="checkBox">
                <label htmlFor="candidates">Candidates</label>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
          </div>


          <div className="checkBoxList">
            <input 
              onChange={changeHandler}
              type="checkbox" 
              name="offers" 
              id="offers"
              checked={form.offers} />
              <div className="checkBox">
                <label htmlFor="offers">Offers</label>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
          </div>
        </div>

        <div className="radioLists">

          <div className="ra">
            <label htmlFor="">Push Notifications</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className="radioList">
            <input
            onChange={changeHandler} 
            type="radio" 
            name="notification" 
            value="everything"
            id="everything"
            checked={form.notification === "everything" } />
            <label htmlFor="everything">Everything</label>
          </div>

          <div className="radioList">
            <input
            onChange={changeHandler} 
            type="radio" 
            name="notification" 
            value="same as email"
            id="same-as-email"
            checked={form.notification === "same as email" } />
            <label htmlFor="same-as-email">Same as email</label>
          </div>

          <div className="radioList">
            <input
            onChange={changeHandler} 
            type="radio" 
            name="notification" 
            value="no push notifications"
            id="no-push-notification"
            checked={form.notification === "no push notifications" } />
            <label htmlFor="no-push-notification">No push notifications</label>
          </div>

        </div>

        <button>Save</button>

      </form>
    </div>
  )
}

export default App