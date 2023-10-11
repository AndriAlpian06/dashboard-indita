import React, { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './components/AuthToken'
import { Dialog, Transition } from '@headlessui/react'

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errModal, setErrModal] = useState(false)
    const [meesage, setMessage] = useState('')
    const navigate = useNavigate()
    const auth = useAuth();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          // Lakukan apa yang Anda inginkan saat tombol "Enter" ditekan di sini
          e.preventDefault();
          handleSubmit();
        }
      };
    

    const handleSubmit = async (e) => {
        
        try{
            const response = await axios.post('https://api-indita.vercel.app/login', {
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            //console.log('status', response)
            const data = response.data;
            
            //console.log('status', data.data.id)
            
            //Memeriksa kode status HTTP
            if(response.status === 200){

                if(data.token && data.data.id){

                    auth.login(data.token, data.data.id);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.data.id);
                    navigate('/dashboard')

                } else {
                    console.log('Invalid response data');
                }

            }else if (response.status === 401){
                setMessage('Email tidak ditemukan')
                setErrModal(true)
                //console.log('Login failed with status code:', response.statusText);

            }else if(response.status === 402){
                setMessage('Password tidak ditemukan')   
                setErrModal(true)

            }else if(response.status === 403){
                setMessage('Password anda tidak match')   
                setErrModal(true)
            }
            else{
                setMessage('Password anda salah')   
                setErrModal(true)
            }

        } catch (error){
            //console.log('log failed login', error)
            setMessage('Username dan Password anda salah')
            setErrModal(true)
        }

    }

  return (
    <>
        <div className="relative min-h-screen w-full">
            <div className="container relative z-40 mx-auto p-4">
                <div className="block w-full basis-full overflow-hidden" style={{height: '0px', opacity: 0}}>

                    <div className="container mx-auto">
                        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900 capitalize">
                            <a className="flex items-center gap-1 p-1 font-normal" href="#/dashboard/home">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px] opacity-50 mr-1">
                            <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd">
                            </path>
                            <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd">
                            </path></svg>dashboard</a>
                        </li>
                        <li className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900 capitalize">
                            <a className="flex items-center gap-1 p-1 font-normal" href="#/dashboard/home">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px] opacity-50 mr-1">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path></svg>profile</a>
                        </li>
                        <li className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900 capitalize">
                            <a className="flex items-center gap-1 p-1 font-normal" href="#/auth/sign-up">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px] opacity-50 mr-1">
                            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path></svg>sign up</a>
                        </li>
                        <li className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900 capitalize">
                            <a className="flex items-center gap-1 p-1 font-normal" href="#/auth/sign-in">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px] opacity-50 mr-1">
                            <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd">
                            </path></svg>sign in</a>
                        </li>
                        </ul>
                        <a href="https://www.creative-tim.com/product/material-tailwind-dashboard-react" target="_blank" className="w-full block lg:hidden">
                        <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full" type="button">free download</button></a>
                    </div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=htmlFormat&amp;fit=crop&amp;w=1950&amp;q=80" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50">
            </div>
            <div className="container mx-auto p-4">
                <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                    <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-4 grid h-28 place-items-center"><h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white">Sign In</h3>
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                        <div className="relative w-full min-w-[200px] h-11">
                            <input type="email" value={email} onChange={handleEmailChange} className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] behtmlFore:content[' '] behtmlFore:block behtmlFore:box-border behtmlFore:w-2.5 behtmlFore:h-1.5 behtmlFore:mt-[6.5px] behtmlFore:mr-1 peer-placeholder-shown:behtmlFore:border-transparent behtmlFore:rounded-tl-md behtmlFore:border-t peer-focus:behtmlFore:border-t-2 behtmlFore:border-l peer-focus:behtmlFore:border-l-2 behtmlFore:pointer-events-none behtmlFore:transition-all peer-disabled:behtmlFore:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 behtmlFore:border-blue-gray-200 peer-focus:behtmlFore:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500 ml-4">Email</label>
                        </div>
                        <div className="relative w-full min-w-[200px] h-11">
                            <input type="password" value={password} onChange={handlePasswordChange} onKeyDown={handleKeyPress} className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] behtmlFore:content[' '] behtmlFore:block behtmlFore:box-border behtmlFore:w-2.5 behtmlFore:h-1.5 behtmlFore:mt-[6.5px] behtmlFore:mr-1 peer-placeholder-shown:behtmlFore:border-transparent behtmlFore:rounded-tl-md behtmlFore:border-t peer-focus:behtmlFore:border-t-2 behtmlFore:border-l peer-focus:behtmlFore:border-l-2 behtmlFore:pointer-events-none behtmlFore:transition-all peer-disabled:behtmlFore:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 behtmlFore:border-blue-gray-200 peer-focus:behtmlFore:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500 ml-4">Password</label>
                        </div>
                        <div className="-ml-2.5">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center cursor-pointer p-3 rounded-full" htmlFor="checkbox">
                                    <input type="checkbox" className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all behtmlFore:content[''] behtmlFore:block behtmlFore:bg-blue-gray-500 behtmlFore:w-12 behtmlFore:h-12 behtmlFore:rounded-full behtmlFore:absolute behtmlFore:top-2/4 behtmlFore:left-2/4 behtmlFore:-translate-y-2/4 behtmlFore:-translate-x-2/4 behtmlFore:opacity-0 hover:behtmlFore:opacity-10 behtmlFore:transition-opacity checked:bg-blue-500 checked:border-blue-500 checked:behtmlFore:bg-blue-500" id="checkbox" />
                                    <div className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </label>
                                <label className="text-gray-700 font-light select-none cursor-pointer mt-px" htmlFor="checkbox">Remember Me
                                </label>
                            </div>
                        </div>
                     </div>
                    <div className="p-6 pt-0">
                        <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full" type="button" onClick={handleSubmit}>Sign In</button>
                    </div>
                </div>
                {errModal && (
                    <Transition appear show={true} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={() => setErrModal(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title 
                                        as="h3" 
                                        className="text-lg font-medium leading-6 text-gray-900">
                                            Alert
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                            {meesage}
                                            </p>
                                        </div>
                                        <div className="pt-2 space-x-4">
                                            <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            onClick={() => setErrModal(null)}
                                            >
                                            Close
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                )}
            </div>
        <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
            <footer className="py-2">
                <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">© 2023, made with by 
                        <a href="https://www.creative-tim.com" target="_blank" className="transition-colors hover:text-blue-500"> Team Indita</a>
                    </p>
                </div>
            </footer>
        </div>
        </div>

        
    </>
  )
}

export default Login