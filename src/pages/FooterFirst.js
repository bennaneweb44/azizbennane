import { saveAs } from "file-saver"
import React from 'react'
import '../App.scss'
import MyCV from '../documents/my-cv.pdf'

const saveFile = () => {
  saveAs(
    MyCV,
    "cv_aziz_bennane.pdf"
  );
}

function FooterFirst() {
  return (    
    <div>
      <section className="location text-light py-5">
        <div className="container"  >        
            <div className="my-3 text-center">
              <button className="btn form-control-submit-button" title="Format PDF" onClick={saveFile}>
                Télécharger mon CV
              </button>
            </div>         
        </div>
      </section>
    </div>
  );
}

export default FooterFirst;
