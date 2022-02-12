import { useEffect, useState } from "react";


function Content(){
    const [avatar , setAvatar] = useState();

    useEffect(()=>{
        return () =>{
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])
    const handlePreviewAvatar = (e) =>{
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        //URL.createObjectURL
        setAvatar(file)
       
   }
    return(
        <div>
         <input type="file"
                multiple
                onChange={handlePreviewAvatar}
             />
        {avatar &&  <img src={avatar.preview} alt="" />}
       
        </div>
        
    )
    
}
export default Content;