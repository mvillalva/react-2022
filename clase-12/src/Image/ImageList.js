import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Image from "./Image";

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
      src: `https://picsum.photos/id/${count}/300/200`,
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
      <div className="row mb-3 mx-5">
        <div className="col-6">
          <Button className="w-100" variant="success" onClick={addImage}> Agregar </Button>
        </div>
        <div className="col-6">
          <Button className="w-100" variant="danger" onClick={removeImage}> Borrar </Button>
        </div>
      </div>
      <div className="row w-100 text-center">
        {
          images.map(img => <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                              <Image src={img.src} label={img.index} css={img.css}/>
                            </div>)
        }
      </div>
    </>
  )
}