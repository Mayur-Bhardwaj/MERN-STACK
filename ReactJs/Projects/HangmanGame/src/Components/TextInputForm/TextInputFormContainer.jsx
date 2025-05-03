import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

    let inputType = "password";

    function handleFormSubmit(event){
        event.preventDefault();     //to stop the refresh after click on submit button or jo bhi event aa rha hai
     //    uska jo bhi default behaviour hai usko execute mt karo to form ka default behaviour hai after click on submit button 
     // the page will be refresh to stop it.
        console.log("Form Submitted.");
     }
 
     function handleTextInputChange(event){
         console.log("Text Input Changed.");
         console.log(event.target.value);
     }

     function handleShowHideClick(){
        console.log("Show/Hide Button clicked.");
        if(inputType === "password"){
            inputType ="text";
        }
        else{
            inputType="password";
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


