import React, {useState} from "react";
import useMediaQuery from "../../config/useMediaQuery";
import axios from "axios";
const ConstantContactInline = ({text, title, description}) =>{
    const isMobile = useMediaQuery();
    const [isOpen, setIsOpen] = useState(true);
    const [address, setAddress] = useState({});
    const handleSubmit = () => {
        const data  = {
            "create_source":"Account", 
            "email_address": address,
        }
        axios.post("https://api.cc.email/v3/contacts/sign_up_form", data)    
    }
    
    const handleChange=  (e) => {
        setAddress(e.text)
    }
    const toggleOpen = () =>{
        
    }
    return (
    <div >
        <button className="bg-orange-400 rounded " onClick={toggleOpen}>{text}</button>
    {isOpen ?
        <div className="fixed bg-gray-100 v-screen w-screen ">
            <div className="max-w-[30em] max-h-[16em] bg-white rounded">
                <h2>{title}</h2>
                <p>{description}</p>
                <button type="submit"></button>
                </div>
            </div>
    
    :""}
    
    </div>
    
    )
}
export default ConstantContactInline;