import React from 'react'

function main() {
    return(
        <div className="container">
            <div className="uprow">
              <div className="col-6 col-md-6">(text)</div>
              <div className="col-3 col-md-3">(<img src="..." alt="bootstrap img" class="img-thumbnail"></img>)</div>
              <div className="col-3 col-md-3">(<img src="..." alt="reactjs img" class="img-thumbnail"></img>)</div>
            </div>
            <div className="downrow">
              <div className="col-9"><h3>Future Project</h3></div>
              <div className="col-4">(<img src="..." alt="JSX:img" class="img-thumbnail"></img> with background color)</div>
              <div className="col-4">(<img src="..." alt="React components:img" class="img-thumbnail"></img> with background color)</div>
              <div className="col-4">(<img src="..." alt="React props:img" class="img-thumbnail"></img> with background color)</div>
            </div>
        </div>

    )
}
export default main