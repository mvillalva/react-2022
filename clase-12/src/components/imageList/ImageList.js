import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Image from "../image/Image";
import './ImageList.css';

export default function ImageList() {
  
  const [images, setImages] = useState([])
  const [count, setCount] = useState(1)

  const addImage = () => {    
    let css = 'text-warning'
    
    if (count % 2 === 0 ) {
      css = 'text-danger'
    }
    
    const img = {
      index: count,
      src: `https://picsum.photos/seed/${count}/250/140`,
      css: css
    }

    setImages([...images, img])
    setCount(count + 1)
  }

  const removeImage = () => {
    if (count > 1){      
      const auxImages = images.filter(img => img.index != count-1)
      setImages(auxImages)
      setCount(count - 1)
    }    
  }
  
  return (
    <>       
      <div className="text-center mb-3">
        <Button className="btn-size me-2" variant="success" onClick={addImage} title="Agregar"><i className="fas fa-circle-plus"></i></Button>        
        <Button className="btn-size" variant="danger" onClick={removeImage} title="Borrar"><i className="fas fa-trash"></i></Button>        
      </div>
      <div className="row mx-2 text-center">
        {
          images.map(img => <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
                              <Image src={img.src} label={img.index} css={img.css}/>
                            </div>)
        }
      </div>
    </>
  )
}