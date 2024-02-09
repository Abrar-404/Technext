import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import '../Styles/form.css';
import '../Styles/toastify.css';

const UserForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const street = form.street.value;
    const city = form.city.value;
    const suite = form.suite.value;
    const address = form.address.value;
    const company = form.company.value;

    const addData = {
      firstName,
      lastName,
      email,
      street,
      city,
      suite,
      address,
      company,
    };

    console.log(addData);

    axios.post('http://localhost:5000/users', addData).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        const Toast = Swal.mixin({
          toast: true,
          color: 'white',
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'success',
          background: '#2F333E',
          color: 'white',
          title: 'User Added successfully',
        });
      }
    });
  };

  return (
    <div id='addUsers'>
      <div className="conta mt-96 m-auto">
        <input id="signup_toggle" className="inpish" type="checkbox" />
        <form onSubmit={handleSubmit} className="formish">
          <div className="formish_front">
            <div className="formish_details">Add Users</div>
            <div className="flex flex-col md:flex-col lg:flex-row gap-7 mx-auto">
              <input
                type="text"
                className="inpish"
                name="firstName"
                placeholder="FirstName"
                required
              />
              <input
                type="text"
                className="inpish"
                name="lastName"
                placeholder="LastName"
                required
              />
              <input
                type="text"
                className="inpish"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row gap-7 mx-auto">
              <input
                type="text"
                className="inpish"
                name="street"
                placeholder="Street"
                required
              />
              <input
                type="text"
                className="inpish"
                name="city"
                placeholder="City"
                required
              />
              <input
                type="text"
                className="inpish"
                name="suite"
                placeholder="Suite"
                required
              />
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row gap-7 mx-auto">
              <input
                type="text"
                className="inpish"
                name="address"
                placeholder="Address"
                required
              />
              <input
                type="text"
                className="inpish"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <button className="bhitu mt-10">ADD</button>
          </div>
          {/* <div className="formish_back">
            <input
              type="text"
              className="inpish"
              name="firstName"
              placeholder="FirstName"
            />
            <input
              type="text"
              className="inpish"
              name="lastName"
              placeholder="LastName"
            />
            <input
              type="text"
              className="inpish"
              name="email"
              placeholder="Email"
            />
            <input
              type="text"
              className="inpish"
              name="street"
              placeholder="Street"
            />
            <input
              type="text"
              className="inpish"
              name="city"
              placeholder="City"
            />
            <input
              type="text"
              className="inpish"
              name="suite"
              placeholder="Suite"
            />
            <input
              type="text"
              className="inpish"
              name="address"
              placeholder="Address"
            />
            <input
              type="text"
              className="inpish"
              name="company"
              placeholder="Company Name"
            />
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default UserForm;
