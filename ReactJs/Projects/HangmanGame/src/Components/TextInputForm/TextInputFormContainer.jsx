import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    // let inputType = "password";  // This is not good practice when the page rerender again then the value will not be updated.

    const [inputType, setInputType]=useState("password"); // We also give the initial value, here we give the initial value password. 
    const [value, setValue] = useState();

    const navigate = useNavigate(); //useNavigate is a hook thst return a navigate function
    //Suppose we want when we click on link then after 5 sec we redirect to next page but Link tag or <a> tag is not provide 
    // this functionality so we use Navigate hook. In this function we only give the url of page and without refresh page we go to next page.

    function handleFormSubmit(event){
        event.preventDefault();     //to stop the refresh after click on submit button or jo bhi event aa rha hai
     //    uska jo bhi default behaviour hai usko execute mt karo to form ka default behaviour hai after click on submit button 
     // the page will be refresh to stop it.
        console.log("Form Submitted.",value);
        if(value){
            //If we have valid value then we want to go to the play page.
            setTimeout(()=>{
                navigate("/play");
            },5000);
            // navigate("/play");
        }
     }
 
     function handleTextInputChange(event){
         console.log("Text Input Changed.");
         console.log(event.target.value);
         setValue(event.target.value);
     }

     function handleShowHideClick(){
        console.log("Show/Hide Button clicked.");
        if(inputType === "password"){
            setInputType("text");
        }
        else{
            setInputType("password");
    }
    console.log(inputType);
     }
return (
    <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange ={handleTextInputChange} 
        handleShowHideClick={handleShowHideClick}
    /> 
);
}
export default TextInputFormContainer;


