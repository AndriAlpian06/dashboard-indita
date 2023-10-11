import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer'

const AddIntent = () => {
    const [intent, setIntent] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [inputList, setInputList] = useState([{ inputKeywordId: 1, keyword: '', idKeywordExisting: null }]);
    const [keyword, setKeyword] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        // Mengambil data subMenu dari API atau database
        // Gantilah ini dengan logika pengambilan data yang sesuai
        axios.get('http://localhost:3000/keyword')
        .then((response) => {
            setKeyword(response.data.data)
            //setInputList(initialInputList);
            
            if(response.data.data.length > 0){
                const lastKeywordId = response.data.data[response.data.data.length - 1].id
                setInputList([{ idKeywordExisting: lastKeywordId + 1 }])
            }
        })
    }, []);

    

    // handle input change
    const handleInputChangeIdExisting = (e, index) => {
        
        const { value } = e.target; 
        const list = [...inputList];
        list[index].idKeywordExisting = value;
        setInputList(list);
    };

    // handle input change
    const handleInputChange = (e, keywordId) => {
        const { value } = e.target;
        // console.log(`Input inputSubMenuId : ${value}`); 
        const list = [...inputList];
        list[keywordId].inputKeywordId = parseInt(value, 10);
        setInputList(list);
    };

    // handle input subMenu change
    const handleInpuKeywordChange = (e, index) => {
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
        const newKeywordId = inputList.length + 1;
        const nextKeywordId = inputList[inputList.length - 1].idKeywordExisting + 1;
        setInputList([...inputList, { keyword: '', inputKeywordId: newKeywordId, idKeywordExisting: nextKeywordId}]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();        
        
        if(!keyword || keyword.length === 0){

            const addKeyword = await axios.post('http://localhost:3000/keyword', {
                keywordData: inputList.map((item) => ({
                    keyword: item.keyword // Jika ada deskripsi
                }))
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            try{

                const addIntent = await axios.post('http://localhost:3000/intent', {
                    intent,
                    deskripsi,
                    id_keyword: inputList.map((item) => parseInt(item.inputKeywordId)),
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (addIntent.status === 200) {
                    navigate('/keyword');
                } else {
                    <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
                        An error alert for showing message.
                    </div>
                    
                }
            } catch (error){
                console.error(error)
            }

        } else {

            const addKeyword = await axios.post('http://localhost:3000/keyword', {
                keywordData: inputList.map((item) => ({
                    keyword: item.keyword // Jika ada deskripsi
                }))
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            try{

                const addIntent = await axios.post('http://localhost:3000/intent', {
                    intent,
                    deskripsi,
                    id_keyword: inputList.map((item) => item.idKeywordExisting),
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (addIntent.status === 200) {
                    navigate('/keyword');
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

  return (
    <>
        <SideBar />
        
        <div className="p-4 xl:ml-80">
            <Navbar />
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                        <div>
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Add Intent</h6>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-5/6 px-8 ml-4 py-6">
                            <div className="relative h-10 w-full min-w-[200px]">
                                <input
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                id="intent"
                                type="text"
                                value={intent}
                                name="intent"
                                onChange={(e) => setIntent(e.target.value)}
                                required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Intent
                                </label>
                            </div>
                        </div>
                        <div className="w-5/6 px-8 ml-4 py-4">
                            <div className="relative w-full min-w-[200px]">
                                <textarea
                                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                id="deskripsi"
                                value={deskripsi} 
                                name="deskripsi"
                                onChange={(e) => setDeskripsi(e.target.value)}
                                required
                                ></textarea>
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Deskripsi
                                </label>
                            </div>
                        </div>
                        <div className="p-6 overflow-x-scroll px-0 pt-4 pb-2">
                            {inputList.map((x, index) => (
                            <div className="flex items-center space-x-3 w-full ml-4 mt-4 px-8 mb-4" key={index}>
                                
                            {Array.isArray(keyword) && keyword.length !== 0 ? (  
                                <div className="relative h-10 flex-grow min-w-[200px] mt-8">
                                    <> 
                                        <input
                                            type="hidden"
                                            name="idKeywordExisting"
                                            value={
                                                x.idKeywordExisting || ''
                                            }
                                            onChange={(e) => handleInputChangeIdExisting(e, index)}
                                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            readOnly
                                        />
                                            
                                        <input
                                            type="text"
                                            name="keyword"
                                            value={x.keyword}
                                            onChange={(e) => handleInpuKeywordChange(e, index)}
                                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            required
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Enter Keyword
                                        </label>
                                
                                    </>
                                
                                </div>
                                
                            ) : (
                                <div className="relative h-10 flex-grow min-w-[200px] mt-8">
                                    <> 
                                        <input
                                            type="hidden"
                                            name="inputKeywordId"
                                            value={x.inputKeywordId}
                                            onChange={(e) => handleInputChange(e, index)}
                                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            readOnly
                                        />
                                            
                                        <input
                                            type="text"
                                            name="keyword"
                                            value={x.keyword}
                                            onChange={(e) => handleInpuKeywordChange(e, index)}
                                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            required
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Enter Keyword
                                        </label>
                                
                                    </>
                                    
                                </div>
                            )}
                                {inputList.length !== 1 && (
                                    <button
                                    className="rounded-lg border border-pink-500 py-3 px-4 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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

export default AddIntent