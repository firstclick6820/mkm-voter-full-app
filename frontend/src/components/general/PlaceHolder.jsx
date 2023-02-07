import React from 'react'

const PlaceHolder = ({placeholder}) => {




  return (
    <>
        <main id='content'>
            <div className="section relative z-0 mt-20">
                <div className="container mx-auto text-left">
                    {placeholder}
                </div>
            </div>
        </main>
    </>
  )
}

export default PlaceHolder