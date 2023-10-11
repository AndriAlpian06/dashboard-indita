import React, { useState, useEffect, Fragment } from 'react'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer'

const AddMenu = () => {
    const [nama_menu, setNamaMenu] = useState('')
    const [deskripsi_menu, setDeskripsiMenu] = useState('')
    // const [id_kategori, setIdKategori] = useState('')
    const [id_subMenu, setIdSubMenu] = useState(0)
    const [inputList, setInputList] = useState([{ subMenu: '', selectedSubMenuId: '', inputSubMenuId: 1 }]);
    const [subMenus, setSubMenus] = useState([]);
    const [deskripsiList, setDeskripsiList] = useState([{ deskripsi: '' }]); 
    const [deskripsi_subMenu, setDeskripsiSubMenu] = useState('')
    // const [inputList, setInputList] = useState([{ keyword: "" }]);
    const navigate = useNavigate()

    useEffect(() => {
        // Mengambil data subMenu dari API atau database
        // Gantilah ini dengan logika pengambilan data yang sesuai
        axios.get('https://api-indita.vercel.app/subMenu/')
        .then((response) => {
            setSubMenus(response.data.data)
            //setInputList(initialInputList);
        })
         
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!subMenus || subMenus.length === 0){

            const addSubMenu = await axios.post('https://api-indita.vercel.app/addSubMenu2', {
                subMenuData: inputList.map((item) => ({
                    subMenu: item.subMenu,
                    deskripsi_subMenu: item.deskripsi_subMenu // Jika ada deskripsi
                }))
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            //console.log(addSubMenu)

            try{

                const addMenu = await axios.post('https://api-indita.vercel.app/addMenu2', {
                    nama_menu,
                    deskripsi_menu,
                    id_kategori: 1,
                    id_subMenu: inputList.map((item) => parseInt(item.inputSubMenuId)),
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(id_subMenu)
                if (addMenu.status === 200) {
                    navigate('/menu2');
                } else {
                    <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
                        An error alert for showing message.
                    </div>
                    
                }
            } catch (error){
                console.error(error)
            }

        } else {

            try{

                const addMenu = await axios.post('https://api-indita.vercel.app/addMenu2', {
                    nama_menu,
                    deskripsi_menu,
                    id_kategori: 1,
                    id_subMenu: inputList.map((item) => item.selectedSubMenuId),
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (addMenu.status === 200) {
                    navigate('/menu2');
                } else {
                    <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
                        An error alert for showing message.
                    </div>
                    
                }
            } catch (error){
                console.error(error)
            }
        }

        
    }

    const handleSelectChange = (e, index) => {
        const { value } = e.target;
        const list = [...inputList];
        list[index].selectedSubMenuId = parseInt(value, 10);
        setInputList(list);
    };
    
    // handle input change
    const handleInputChange = (e, index) => {
        const { value } = e.target;
        //console.log(`Input inputSubMenuId : ${value}`); 
        const list = [...inputList];
        list[index].inputSubMenuId = parseInt(value, 10);
        setInputList(list);
    };

    // handle input subMenu change
    const handleInpuSubMenuChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleDeskripsiChange = (e, index) => {
        const { value } = e.target;
        const list = [...deskripsiList];
        list[index].deskripsi = value; // Perubahan nilai deskripsi
        setDeskripsiList(list);
    };
    
    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
        const deskripsiListCopy = [...deskripsiList];
        deskripsiListCopy.splice(index, 1); // Hapus input teks deskripsi yang sesuai
        setDeskripsiList(deskripsiListCopy);
    };

    const handleAddClick = () => {
        const newSubMenuId = inputList.length + 1;
    
        setInputList([...inputList, { subMenu: '', selectedSubMenuId: '', inputSubMenuId: newSubMenuId}]);
        // setInputList([
        //     ...inputList,
        //     { subMenu: '', selectedSubMenuId: '', inputSubMenuId: newSubMenuId }
        // ]);
        setDeskripsiList([...deskripsiList, { deskripsi: deskripsi_subMenu }]); // Tambahkan deskripsi ke dalam deskripsiList
        setDeskripsiSubMenu('');
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
                        <div className="w-5/6 px-8 ml-4 py-6">
                            <div className="relative h-10 w-full min-w-[200px]">
                                <input
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                id="namaMenu"
                                type="text"
                                value={nama_menu}
                                name="nama_menu"
                                onChange={(e) => setNamaMenu(e.target.value)}
                                required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Menu
                                </label>
                            </div>
                        </div>
                        <div className="w-5/6 px-8 ml-4 py-4">
                            <div className="relative w-full min-w-[200px]">
                                <input
                                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                id="deskripsiMenu"
                                value={deskripsi_menu} 
                                name="deskripsi_menu"
                                onChange={(e) => setDeskripsiMenu(e.target.value)}
                                required
                                ></input>
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Deskripsi
                                </label>
                            </div>
                        </div>
                        <div className="p-6 overflow-x-scroll px-0 pt-4 pb-2">
                            {inputList.map((x, index) => (
                            <div className="flex items-center space-x-3 w-full ml-4 mt-4 px-8 mb-4" key={index}>
                                <div className="relative h-10 flex-grow min-w-[200px] mt-8">
                                    {/* // Tampilkan input text deskripsi jika setSubMenus kosong, undefined, atau subMenus kosong */}
                                    <>     
                                        <input
                                            type="hidden"
                                            name="inputSubMenuId"
                                            value={x.inputSubMenuId}
                                            onChange={(e) => handleInputChange(e, index)}
                                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            readOnly
                                        />
                                            
                                        <input
                                            type="text"
                                            name="subMenu"
                                            value={x.subMenu}
                                            onChange={(e) => handleInpuSubMenuChange(e, index)}
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
                                    onClick={() => handleRemoveClick(index)}
                                    >
                                    Remove
                                    </button>
                                )}
                                {inputList.length - 1 === index && (
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
                        {!subMenus || subMenus.length === 0 ? (
                            <div className="w-5/6 px-8 ml-4 py-4">
                                <div className="relative w-full min-w-[200px]">
                                    <input
                                        type="text"
                                        className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        id="deskripsi_subMenu"
                                        value={deskripsi_subMenu} 
                                        name="deskripsi_subMenu"
                                        onChange={(e) => setDeskripsiSubMenu(e.target.value)}
                                        required
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Deskripsi Sub Menu
                                    </label>
                                </div>
                            </div>
                        ): (
                            <div>

                            </div>
                        )}
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
            <Footer />
        </div>
    </>
  )
}

export default AddMenu