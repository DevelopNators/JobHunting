import PlaceHolder from "./PlaceHolder";

import { Editor } from 'primereact/editor';
        
interface ApplyInstruction{
    appyInstructions :string,
    organizationName:string,
}
const HowToApply:React.FC<ApplyInstruction> = ({appyInstructions,organizationName}) =>{
    return (
        <>
        <PlaceHolder text = {`How to Apply For ${organizationName}  Hiring?`}/>
        <h2 style={{color:'black'}}> 
       

        <Editor  headerTemplate={<div className=""></div>}  className="mt-4" value={appyInstructions} readOnly style={{ height: 'auto', fontSize:'1rem' }} />
       
        </h2>
        </>
    )
}
export default HowToApply;