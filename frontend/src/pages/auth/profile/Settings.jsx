import React from 'react'



import SettingsForm from './SettingsForm'



const Settings = () => {
  return (
    <>
        <main id='content' className="grid grid-cols-1">
            <div className=" min-h-screen pt-2 font-mono my-16">
                <div className="container mx-auto">
                    <div className="inputs w-full max-w-6xl p-6 mx-auto">
                        <SettingsForm />   
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Settings