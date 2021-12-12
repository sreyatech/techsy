import { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

const Slider1 = () => {
    const images =[
        "photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
"photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
"photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80",
"photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
"photo-1542382257-80dedb725088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80",
    ]

    const [position, setPosition] = useState(0)
    const transitions = useTransition(position,{
        from : {opacity: 0},
        enter : {opacity: 1},
        leave : {opacity: 0},
        config : {duration : 2000}
  })

  useEffect(()=>{
    setInterval(()=>{
            setPosition((index)=>(index + 1)%images.length)
        },2000)
  },[])


    return (
        <>
          <div className="container-slider border">

                {transitions((style,index)=>(
                  <animated.div
                      style = {{
                          ...style,
                          position: 'absolute',
                          width : '100vw',
                          height : '100vh',
                          backgroundPosition : 'center',
                          backgroundSize : 'cover',
                          top : 0,
                          left : 0,
                          backgroundAttachment: 'fixed',
                          backgroundImage : `url(https://images.unsplash.com/${images[index]})`,

                      }}
                  />
              ))}
        </div>

        </>
    )
}

export default Slider1
