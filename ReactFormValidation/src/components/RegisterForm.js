import './RegisterForm.css';
import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';


export default function RegisterForm() {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
 
    return(
        <div>
            <div className="Register">
                <span className="RegisterText">REGISTER</span>
                <p className="CreateAccountText">Create your account.</p>
                <p className="StarMarked">Fields marked<span className="Star">*</span>are required.</p>
            </div>
        <form className="RegisterForm" onSubmit={handleSubmit}>
                <div className="FirstNameBox">
                    <label htmlFor="firstName" className="NamesLabel">First Name<span className="Star">*</span></label>
                    <input className={`NamesInput ${errors ? 'invalid' : ''}`}
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    />
                </div>
                    {errors.firstName && <p className="errorText">{errors.firstName}</p>}
                <div className="LastNameBox">
                    <label htmlFor="lastName" className="NamesLabel">Last Name<span className="Star">*</span></label>
                    <input className={`NamesInput ${errors ? 'invalid' : ''}`}
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    />
                </div>
                    {errors.lastName && <p className="errorText">{errors.lastName}</p>}
                <div className="DateOfBirthBox">
                    <div>
                        <label className="BirthdayLabel" htmlFor="DobDay">Birthday<span className="Star">*</span></label>
                    </div>
                    <div className="DobDayBox">
                        <select className="Dob" 
                        id="BirthDay" 
                        name="BirthDay"
                        value={values.BirthDay}
                        onChange={handleChange}
                        >
                            <option value="None">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                    </div>
                    <div className="DobDayMonth">
                        <select className="Dob" 
                        id="BirthMonth" 
                        name="BirthMonth"
                        value={values.BirthMonth}
                        onChange={handleChange}
                        >
                            <option value="None">Month</option>
                            <option value="1">January</option>
                            <option value="2">Febuary</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                    <div>
                        <select className="Dob" 
                        id="BirthYear" 
                        name="BirthYear"
                        value={values.BirthYear}
                        onChange={handleChange}
                        >
                            <option value="None">Year</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                        </select>
                    </div>
                </div>
                {errors.DayOfBirth && <p className="errorText">{errors.DayOfBirth}</p>}
            <div className="GenderBox">
                <div>
                    <label className="GenderText">Gender<span className="Star">*</span></label>
                </div>
                <div className="GenderRadioButtons">
                    <div className="MaleRadioBox">
                        <label htmlFor="male" className="MaleFemaleText">Male</label>
                        <input type="radio" 
                        id="gender" 
                        name="gender" 
                        value="male"
                        checked={values.gender === "male" ? true : false}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="female" className="MaleFemaleText">Female</label>
                        <input type="radio" 
                        id="gender" 
                        name="gender"
                        value="female"
                        checked={values.gender === "female" ? true : false}
                        onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
                {errors.gender && <p className="errorText">{errors.gender}</p>}
            <div className="PhoneNumberBox">
                <label htmlFor="phoneNumber" className="PhoneNumberLabel" for="phone">
                    Phone Number<span className="Star">*</span></label>
                <input className={`PhoneNumberInput ${errors ? 'invalid' : ''}`}
                type="number" 
                id="phoneNumber" 
                name="phoneNumber" 
                placeholder="Phone Number"
                value={values.phoneNumber}
                onChange={handleChange}
                />               
            </div>
                {errors.phoneNumber && <p className="errorText">{errors.phoneNumber}</p>}
            <div className="AddressBox">
                <label htmlFor="address" className="AddressLabel" for="address">
                    Address<span className="Star">*</span></label>
                <input className={`AddressInput ${errors ? 'invalid' : ''}`}
                type="text" 
                id="address" 
                name="address" 
                placeholder="Address"
                value={values.address}
                onChange={handleChange}
                />               
            </div>
                {errors.address && <p className="errorText">{errors.address}</p>}
            <div className="TownBox">
                <label htmlFor="town" className="TownLabel" for="town">
                    Town<span className="Star">*</span></label>
                <input className={`TownInput ${errors ? 'invalid' : ''}`} 
                type="text" 
                id="town" 
                name="town" 
                placeholder="Town"
                value={values.town}
                onChange={handleChange}
                />               
            </div>
                {errors.town && <p className="errorText">{errors.town}</p>}
            <div className="PostcodeBox">
                <label htmlFor="postCode" className="PostCodeLabel" for="postcode">
                    Postcode / Zip<span className="Star">*</span></label>
                <input className={`PostcodeInput ${errors ? 'invalid' : ''}`} 
                type="text" 
                id="postCode" 
                name="postCode" 
                placeholder="Postcode"
                value={values.postCode}
                onChange={handleChange}
                />               
            </div>
                {errors.postCode && <p className="errorText">{errors.postCode}</p>}
            <div className="CountryBox">
                <label htmlFor="country" className="CountryLabel">
                    Country<span className="Star">*</span></label>
                <input className={`CountryInput ${errors ? 'invalid' : ''}`} 
                type="text" 
                id="country" 
                name="country" 
                placeholder="Country"
                value={values.country}
                onChange={handleChange}
                />               
            </div>
                {errors.country && <p className="errorText">{errors.country}</p>}
            <div className="EmailBox">
                <label htmlFor="emailAdrress" className="EmailLabel">
                    Email<span className="Star">*</span></label>
                <input className={`EmailInput ${errors ? 'invalid' : ''}`}
                type="email" 
                id="emailAddress" 
                name="emailAddress" 
                placeholder="Email"
                value={values.emailAddress}
                onChange={handleChange}
                />               
            </div>
                {errors.emailAddress && <p className="errorText">{errors.emailAddress}</p>}
            <div className="Password1Box">
                <label htmlFor="password1" className="PasswordLabel">
                    Password<span className="Star">*</span></label>
                <input className={`PasswordInput ${errors ? 'invalid' : ''}`} 
                type="password" 
                id="password1" 
                name="password1" 
                placeholder="Password"
                value={values.password1}
                onChange={handleChange}
                />               
            </div>
                {errors.password1 && <p className="errorText">{errors.password1}</p>}
            <div className="Password2Box">
                <label htmlFor="password2" className="Password2Label">
                    Repeat Password<span className="Star">*</span></label>
                <input className={`Password2Input ${errors ? 'invalid' : ''}`} 
                type="password" 
                id="password2" 
                name="password2" 
                placeholder="Repeat Password"
                value={values.password2}
                onChange={handleChange}
                />               
            </div>
            {errors.password2 && <p className="errorText">{errors.password2}</p>}
            <button type="submit" className="SubmitButton">Register</button>
        </form>
    </div>
    )
}