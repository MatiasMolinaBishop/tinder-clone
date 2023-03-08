import { useState } from "react"
import Nav from "../components/Nav"

const Onboarding = () => {

    const [formData, setFormData] = useState({
        user_id:'',
        first_name:'',
        dob_day:'',
        dob_month:'',
        dob_year:'',
        show_gender:'false',
        gender_identity:'man',
        gender_interest:'woman',
        email:'',
        url:'',
        about:'',
        matches:[]
    })

    const handleChange = (e) => {
        //Because checkboc does returns checkd and not a value we check its type to then conditionally assign its value
        const value = e.target.type === 'checkbox' ? e.target.checked:e.target.value
        const name = e.target.name
        setFormData((prevSatate) => ({
            ...prevSatate,
            [name]:value
        }))    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited')

    }

    console.log(formData)

    return(
        <>
         <Nav minimal={true} 
              setShowModal={() => {}} 
              showModal={false} 
            />
        <div className="onboarding">
            <h2>CREATE ACCOUNT</h2>

            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor='first-name'>First Name</label>
                    <input
                        id='first-name'
                        type='text'
                        name='first_name'
                        placeholder="First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                    <label htmlFor='dob-day'>Birthday</label>
                    <div className="multiple-input-container">
                    <input
                        id='dob-day'
                        type='number'
                        name='dob_day'
                        placeholder="DD"
                        required={true}
                        value={formData.dob_day}
                        onChange={handleChange}
                    />
                     <input
                        id='dob-month'
                        type='number'
                        name='dob_month'                        
                        placeholder="MM"
                        required={true}
                        value={formData.dob_month}
                        onChange={handleChange}
                    />
                    <input
                        id='dob-year'
                        type='number'
                        name='dob_year'                        
                        placeholder="MM"
                        required={true}
                        value={formData.dob_yea}
                        onChange={handleChange}
                    />
                    </div>
                    <label>Gender?</label>
                    <div className="multiple-input-container">
                        <input
                        id='man-gender-identity'
                        type='radio'
                        name='gender_identity'                        
                        value='man'
                        onChange={handleChange}
                        checked={formData.gender_identity === 'man'}
                    />
                    <label htmlFor="man-gender-identity">Man</label>
                     <input
                        id='woman-gender-identity'
                        type='radio'
                        name='gender_identity'                        
                        value='woman'
                        onChange={handleChange}
                        checked={formData.gender_identity === 'woman'}
                        
                    />
                     <label htmlFor="woman-gender-identity">Woman</label>
                    <input
                        id='more-gender-identity'
                        type='radio'
                        name='gender_identity'                        
                        value='more'
                        onChange={handleChange}
                        checked={formData.gender_identity === 'more'}
                    />
                    <label htmlFor="more-gender-identity">More</label>
                    </div>
                    <div className="show-gender">
                    <label htmlFor="show-gender">Show my gender to other profiles?</label>
                    <input
                        id='show-gender'
                        type='checkbox'
                        name='show_gender'                        
                        onChange={handleChange}
                        checked={formData.show_gender}
                    />
                    </div>
                    <label htmlFor="show-me">Show Me</label>
                    <div className="multiple-input-container">

                        <input
                        id='man-gender-interest'
                        type='radio'
                        name='gender_interest'                        
                        value='man'
                        onChange={handleChange}
                        checked={formData.gender_interest === 'man'}
                    />
                    <label htmlFor="man-gender-interest">Man</label>
                     <input
                        id='woman-gender-interest'
                        type='radio'
                        name='gender_interest'                        
                        value='woman'
                        onChange={handleChange}
                        checked={formData.gender_interest === 'woman'}
                    />
                     <label htmlFor="woman-gender-interest">Woman</label>
                    <input
                        id='everyone-gender-interest'
                        type='radio'
                        name='gender_interest'                        
                        value='everyone'
                        onChange={handleChange}
                        checked={formData.gender_interest === 'everyone'}
                    />
                    <label htmlFor="everyone-gender-interest">Everyone</label>
                    </div>
                    <label htmlFor='about'>About me</label>
                    <input
                    id='about'
                    type='text'
                    name='about'
                    required={true}
                    placeholder='I like coding..'
                    value={formData.about}
                    onChange={handleChange}
                    />
                    <input type='submit'/>
                </section>
                
                <section>
                    <label htmlFor="url">Profile Photo URL</label>
                    <input
                    type='url'
                    id='url'
                    name='url'
                    onChange={handleChange}
                    required={true}
                    />
                    <div className="photo-container">
                        <img src={formData.url} alt='profile-img-preview'/>
                    </div>

                </section>
            </form>
        </div>
        </>
    )
}

export default Onboarding