import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../css/signupform.css"; // Import your CSS file here

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    emailId: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if(name === "confirmPassword") {
      setFormErrors({
        ...formErrors,
        confirmPassword: value !== formData.password ? "Passwords do not match" : ""
      });
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    // Validate form data before submission
    
    // Additional validation logic can be added here
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, 1 letter and 1 number
   
    if(!values.name){
      errors.name = "Name is required";
    }

    if(!values.contact){
      errors.contact = "Contact number is required";
    }

    if(!phoneRegex.test(values.contact)){
      errors.contact = "Contact number must be 10 digits";
    }

    if(!values.emailId){
      errors.emailId = "Email ID is required";
    }

    if(!regex.test(values.emailId)){
      errors.emailId = "Email ID is invalid";
    }
    if(checkEmailExits(values.emailId)){
      errors.emailId = "Email ID already exists";
    }
    setFormErrors(errors);
    
    return Object.keys(errors).length === 0;
  }

  const checkEmailExits = async (email) => {
    try {
      const response = await fetch("http://L")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex justify-center items-center w-full p-4">
      <div className="bg-orange-50 p-8 rounded-md shadow-md w-full max-w-md h-auto">
        <h1 className="text-2xl font-bold text-center signupheading mb-6">SIGN-UP</h1>
        
        <div>
          <div className="mb-4">
            <label className="block font-medium text-gray-800">
              NAME : 
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border forminput rounded-md"
              />
            </label>
          </div>
          
          <div className="mb-4">
            <label className="block font-medium text-gray-800">
              CONTACT : 
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border forminput rounded-md"
              />
            </label>
          </div>
          
          <div className="mb-4">
            <label className="block font-medium text-gray-800">
              EMAIL ID : 
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border forminput rounded-md"
              />
            </label>
          </div>
          
          <div className="mb-4">
            <label className="block font-medium text-gray-800">
              PASSWORD : 
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border forminput rounded-md"
                />
                <button 
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </label>
          </div>
          
          <div className="mb-6">
            <label className="block font-medium text-gray-800">
              CONFIRM PASSWORD : 
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border forminput rounded-md"
                />
                <button 
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div>
                {formErrors.confirmPassword && (
                  <span className="text-red-500 text-sm">{formErrors.confirmPassword}</span>
                )}
              </div>
            </label>
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 rounded-md signupbtn"
            >
              SIGN-UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}