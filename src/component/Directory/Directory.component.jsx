import CategoryItems from "../Cateogry-item/Category.component"
import './Directory.style.scss'
const Directory = ( ({categories}) => {
    return(
        <div className="directory-container">
  {categories.map( (Category) =>(
    <CategoryItems key={Category.id}  Category={Category}/>
    
  ))}
     
  </div>
    )
})
export default Directory;