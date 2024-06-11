import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory) ) return;


    
    setCategories([newCategory,...categories ])

    console.log(categories)

   // setCategories.push(newCategory)
    {/* insertando valores dentro de un array con react*/}
    //setCategories([newCategory, ...categories])
  }

  return(
<>
    <h1>
      Gif Expert App
    </h1>
      
    <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
        currentCategories={ categories }
          />
    
    
      {categories.map( (category) => ( <GifGrid key={category} category={category}/> ) )}
</>

  )

}

