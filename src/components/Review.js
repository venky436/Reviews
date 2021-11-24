import React,{useState} from 'react'
import {Card,Image,Row,Col} from 'react-bootstrap'

export const Review = ({person}) => {

     let [index,setIndex] = useState(0)

    
        let {name,text,image} = person[index]

    let change = (number)=>{

        if(number > person.length-1){
            return 0
        }
        if (number < 0){
            return person.length-1
        }
        return number
       
    }
    
    let nextHandle =(index)=>{
        
      setIndex((index)=>{

          let newIndex = index + 1
          return change(newIndex)
      })
    }

    let prvHandle = ()=>{
        setIndex((index)=>{

            let newIndex = index - 1
            return change(newIndex)
        })

    }

     let ramdom = ()=>{
         
        let ram = Math.floor(Math.random() * person.length)
        if(ram === index){

            ram = index +1
           
        }
        setIndex(change(ram))
      
     }
    
    return (
        <div>
            {/* card here ............. */}
            <Row className='d-flex justify-content-center'>
                <Col md={5}>
            <Card className='text-center bg-light p-3'>
                <img src={image} width="100px" height="100px" style={{borderRadius : '100%', margin : 'auto',}} className='p-2'/>
                <h1 style={{textTransform : 'uppercase'}}>{name}</h1>
                <p>{text}</p>
            </Card>
            </Col>
            </Row>

            {/* button here...... */}

            <Row className='d-flex align-items-center justify-content-center bg-light p-3 my-3'>
            <Col md={3}>
            <button className='btn btn-primary  my-3' onClick={nextHandle}>Next</button><br/>
            </Col>
            <Col md={3}>
            <button className='btn btn-primary  my-2' onClick={prvHandle}>Prv </button>
            </Col>
            <Col md={3}>
            <button className='btn btn-primary  my-2' onClick={ramdom}>Ramdom</button>
            </Col>
            </Row>
            
        </div>
    )
}
