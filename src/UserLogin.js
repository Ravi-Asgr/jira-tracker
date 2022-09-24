import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const UserSearch = () => {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState('ravi.prakash');

    const readData = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    }

    const postData = (event) => {
        console.log(inputText);
        //navigate({pathname:'/dashboard', search: createSearchParams({"id": inputText}).toString()});
        navigate('/dashboard', {state:{name: inputText}});
    }

    return (
        <><Header />
        <article className="container article">
            <section className="home" style={{gridTemplateColumns: "3fr"}}>
                <div className="card-wrapper">
                    <div className="card task-card">
                        <p className="card-title">Username</p>
                       <div>
                        <input type="text" value={inputText} onChange={readData} />
                       </div>
                       <div>
                        <button className="btn btn-primary active" onClick={postData}>Enter</button>
                       </div>  
                    </div>
                </div>
            </section>
        </article>
        <Footer /></>
    );
}


// const userInput = (navigate) => {
//     let userInfo = 
//         <article className="container article">
//             <section className="home" style={{gridTemplateColumns: "3fr"}}>
//                 <div className="card-wrapper">
//                     <div className="card task-card">
//                         <p className="card-title">Username</p>
//                        <div>
//                         <input type="text" value={inputText} />
//                        </div>
//                        <div>
//                         <button onClick={() => navigate('/dashboard')}>Enter</button>
//                        </div>  
//                     </div>
//                 </div>
//             </section>
//         </article>
//     return userInfo;
// }

export default UserSearch;