"use client"
import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        userEmail: "",
        subject: "",
        message: ""
    })
    const handelSubmit = async e => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/api/sendEmail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            await response.json()
            toast("Wow so easy!")

        } catch (error) {
            console.log(error);
        }
        setData({
            userEmail: "",
            subject: "",
            message: ""
        })

    }

    return <>
        <div className='h-screen flex flex-col justify-center items-center gap-4'>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <form onSubmit={handelSubmit}>
                <div className='flex flex-col gap-3 border-2 p-5 rounded-md'>
                    <div className='flex flex-col gap-2 '>
                        <label className='font-semibold mb-2' htmlFor="userName">UserName</label>
                        <input
                            value={data.userEmail}
                            onChange={e => setData({ ...data, userEmail: e.target.value })}
                            className='border-2 w-full' type="email" placeholder='Enter user Email' id='userName' required />

                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='font-semibold mb-2' htmlFor="subject">Subject</label>
                        <input
                            value={data.subject}
                            onChange={e => setData({ ...data, subject: e.target.value })}
                            className='border-2 w-full' type="text" placeholder='Enter your  subject' id='userName' required />

                    </div>

                    <div className='flex flex-col'>
                        <label className='font-semibold mb-2' htmlFor="id" class="form-label">Enter Message</label>
                        <textarea
                            value={data.message}
                            onChange={e => setData({ ...data, message: e.target.value })}
                            className='border-2 p-1 ' type="text" placeholder='Enter desc' required
                            rows={5} id="id"></textarea>
                    </div>

                    <button type='submit' className='bg-blue-600 text-slate-50 py-2 px-6'>Send</button>
                </div>
            </form>
        </div>
    </>
}

export default Form