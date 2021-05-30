import React from "react";
import useForm from './useForm';

const Insert = () => {
    const { handleChange, values , handleSubmit} = useForm();
    return (
        <div className="container">
            <div className="row">
                <form className="form-inline" onsubmit={handleSubmit} >
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" value={values.firstName} onChange={handleChange}  />
                        </div>

                        <div className="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name"  value={values.lastName} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email ID"  value={values.email} onChange={handleChange}/>
                        </div>

                        <div className="form-group">
                            <label for="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Enter Address"  value={values.address} onChange={handleChange} />
                        </div>

                        <div className="form-group mb-3">
                            <label for="city">City</label>
                            <input type="text" className="form-control" id="city" placeholder="Enter City Name"  value={values.city} onChange={handleChange}/>
                        </div>
                        <div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Insert;