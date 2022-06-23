import React  from 'react'

export default function About(props) {
   let myStyle={
       color:props.mode==='dark'?'white':'black',
       backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
   }
  return (
    <>
    <div className="container my-2" style={{ color:props.mode==='dark'?'white':'black'}}>
    <h1 className="container my-2">About Us</h1>
    <div className="container my-2">
              <div className="accordion" id="accordionExample my-1">
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyse Your Text</strong> 
                          </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                          <div className="accordion-body">
                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item my-1">
                      <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free To Use</strong>
                          </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"style={myStyle}>
                          <div className="accordion-body">
                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item ">
                      <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button"  style={ myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>Compatible</strong>
                          </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                      </div>
                  </div>
</div>
    </div>
   {/* <div className="container my-3">
        <button onClick={toggleStyle} className="btn btn-primary mb-3">{btnText}</button>
    </div>*/}
    </div>
    </>
  )
}
