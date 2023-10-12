import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <label>
        <sup>Password should have at least 8 characters</sup>
    </label>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
    tooShort: true
  });
  const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return (
                firstName && 
                validateEmail(email) && 
                !password.tooShort && 
                role !== "role"
            );
        };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
        value: "",
        isTouched: false,
        tooShort: true
    });
    setRole("role");
  };

  const handleSubmit = () => {
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="flex flex-1 justify-center align-middle" style={{height:"100hv"}}>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col p-4 border border-gray-300 rounded" style={{width:"480px"}}>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input 
                placeholder="First name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input 
                placeholder="Last name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
                placeholder="Password" 
                value={password.value}
                onChange={(e) => {
                        const newValue = e.target.value;
                        const isTooShort = newValue.length < 8;
                        setPassword({
                            ...password, 
                            value: newValue, 
                            tooShort: isTooShort
                        });
                        //console.log(password); 
                    }
                }
                onFocus={(e) => {
                    setPassword({
                        ...password,
                        isTouched: true
                    });
                    //console.log(password);
                }}
                onBlur={(e) => {
                    
                }}
            />
            { password.isTouched && password.tooShort &&
                <PasswordErrorMessage />
            }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
                onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button 
            type="submit" 
            className={`px-4 py-3 w-60 rounded border border-gray-300 bg-blue-500 text-white uppercase text-sm font-bold cursor-pointer ${!getIsFormValid() ? 'border-gray-400 bg-gray-300 text-gray-600 cursor-not-allowed' : ''}`}
            disabled={!getIsFormValid()}
            >
                Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
