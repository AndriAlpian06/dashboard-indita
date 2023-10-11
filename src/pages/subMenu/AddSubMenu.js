import React, { useState, Fragment } from 'react'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import { Dialog, Transition } from '@headlessui/react'

const AddSubMenu = () => {
    const [subMenu, setSubMenu] = useState(null)
    
    const [error, setError] = useState(null);
    const [subMenuExists, setSubMenuExists] = useState(false); // Menambah state untuk menyimpan status kategori sudah ada
    const [inputList, setInputList] = useState([{ subMenu: '' }]);
    const [subMenus, setSubMenus] = useState([]);
    const [id_subMenu, setIdSubMenu] = useState(0)
    const [deskripsiSubMenu, setDeskripsiMenu] = useState('')
    const [message, setMessage] = useState('');
    const [modalIsAllDuplikat, setModalIsAllDuplikat] = useState(false);
    const [modalIsError, setModalIsError] = useState(false);

    const navigate = useNavigate()
    
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { subMenu: ''}]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //console.log(inputList)

        try {
            // Periksa apakah kategori sudah ada di database
            const response = await axios.post('https://api-indita.vercel.app/multiCheckSubMenu', {
                
                  subMenus: inputList.map((item) => item.subMenu)
                }
            );

            //console.log(response.data.results)

            const allExist = response.data.results.every((results) => results.exists)
            const anyExist = response.data.results.some((results) => results.exists)

            if (allExist) {
                //setSubMenuExists(true);
                setMessage('subMenu sudah ada di database.');
                setModalIsAllDuplikat(true)
                // console.log(allExist)
            } else if (anyExist) {
                setMessage('Beberapa subMenu sudah ada di database.');
                setModalIsAllDuplikat(true)
                // console.log(message)
                //console.log(anyExist)
            } else {
                //Kategori belum ada, lanjutkan dengan menambahkannya
                const subMenuData = inputList.map((item) => ({ subMenu: item.subMenu }));

                console.log(subMenuData)

                for (const subMenuItem of inputList){
                    
                    try{

                        const response = await axios.post('https://api-indita.vercel.app/addSubMenu', {
                            subMenu: subMenuItem.subMenu,
                            deskripsi_subMenu: deskripsiSubMenu,
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json'
                              },
                        });
                        if (response.status === 200) {
                            // console.log(`SubMenu "${subMenuItem.subMenu}" berhasil ditambahkan.`);
                            navigate('/menu')
                        } else {
                            setMessage(`Gagal menambahkan SubMenu "${subMenuItem.subMenu}".`);
                            setModalIsError(message)
                        }

                    } catch (err) {
                        //console.error(`Terjadi kesalahan saat menambahkan SubMenu "${subMenuItem.subMenu}":`, err);
                        setMessage(`Terjadi kesalahan saat menambahkan SubMenu "${subMenuItem.subMenu}":`, err);
                        setModalIsError(message)
                    }
                }

                // const addSubMenu = await axios.post('http://localhost:3000/addSubMenu', {
                //     subMenu: subMenuData,
                //     deskripsi_subMenu: deskripsiSubMenu,
                // },
                // {
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                // });

                // if (addSubMenu.status === 200) {
                //     navigate('/menu');
                // } else {
                //     setSubMenuExists(true);
                //     setError('Gagal menambahkan Sub Menu.');
                //     console.log(error)
                // }
            }
        } catch (err) {
            setError(err.error);
            console.log(error);
            
        }
    }

    const openModal = () => {
        setModalIsAllDuplikat(true);
    };

    const closeModal = () => {
        setModalIsAllDuplikat(false);
    };

    const closeModalError = () => {
        setModalIsError(false);
    };

  return (
    <>
        <SideBar />
        <div className="p-4 xl:ml-80">
            <Navbar />
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                        <div>
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Add Menu</h6>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="p-6 overflow-x-scroll px-0 pt-4 pb-2">
                            {inputList.map((x, i) => (
                            <div className="flex items-center space-x-3 w-full ml-4 mt-4 px-8 mb-4" key={i}>
                                <div className="relative h-10 flex-grow min-w-[200px]">
                                    
                                <>
                                    <input
                                        type="text"
                                        name="subMenu"
                                        value={x.subMenu}
                                        onChange={(e) => handleInputChange(e, i)}
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Enter Sub Menu
                                    </label>
                                </>
                                    
                                </div>
                                {inputList.length !== 1 && (
                                    <button
                                    className="rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-dark="true"
                                    onClick={() => handleRemoveClick(i)}
                                    >
                                    Remove
                                    </button>
                                )}
                                {inputList.length - 1 === i && (
                                    <button
                                    className="rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-dark="true"
                                    onClick={handleAddClick}
                                    >
                                    Add
                                    </button>
                                )}
                            </div>
                            ))}
                        </div>
                        <div className="w-5/6 px-8 ml-4 py-4">
                            <div className="relative w-full min-w-[200px]">
                                <input
                                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                    id="deskripsiSubMenu"
                                    value={deskripsiSubMenu} 
                                    name="deskripsiSubMenu"
                                    onChange={(e) => setDeskripsiMenu(e.target.value)}
                                    required
                                ></input>
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Deskripsi Sub Menu
                                </label>
                            </div>
                        </div>
                        <div className="w-5/6 px-8 ml-4 py-4">
                            <div className="relative w-full min-w-[200px]">
                                <button
                                    className="w-full middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-light="true"
                                    >
                                Simpan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {modalIsAllDuplikat && (
                  <Transition appear show={true} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={() => setModalIsAllDuplikat(false)}>
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
                                        Sub Menu
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                        {message}
                                        </p>
                                    </div>
                                    <div className="pt-2 space-x-4">
                                        <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
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
                {modalIsError && (
                  <Transition appear show={true} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={() => setModalIsError(false)}>
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
                                        Sub Menu
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                        {message}
                                        </p>
                                    </div>
                                    <div className="pt-2 space-x-4">
                                        <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
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
            <Footer />
                
        </div>
    </>
  )
}

export default AddSubMenu