import PlaceHolder from "./PlaceHolder";
interface Designation {

  title:string,
  role:string,
  description: string
}

const Designation : React.FC<Designation> = ({title,role, description}) =>{
    return (
        <>
          <PlaceHolder text={`${title} Careers – ${role}`} />
        </>
    )
}
export default Designation;