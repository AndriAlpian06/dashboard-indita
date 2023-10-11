// import React, { useState, useEffect } from 'react'
// import SideBar from '../../components/SideBar'
// import Navbar from '../../components/Navbar'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import Footer from '../../components/Footer'

// const AddIntent2 = () => {
//     const [intent, setIntent] = useState('')
//     const [deskripsi, setDeskripsi] = useState('')
//     const [inputList, setInputList] = useState([{ inputKeywordId: 1, keyword: '', inputKeywordExistingId: '' }]);
//     const [keyword, setKeyword] = useState([])
//     const [keywordId, setKeywordId] = useState('')

//     const navigate = useNavigate()

//     useEffect(() => {
//         // Mengambil data subMenu dari API atau database
//         // Gantilah ini dengan logika pengambilan data yang sesuai
//         axios.get('http://localhost:3000/keyword')
//         .then((response) => {
//             setKeyword(response.data.data)
//             //setInputList(initialInputList);
//         })

//         const keywordIdExisting = keyword[keyword.length - 1]?.id
//         //console.log(keywordIdExisting)

//         setKeywordId(keywordIdExisting)

//     }, []);

    

//     // handle input change
//     const handleInputChangeIdExisting = (e, index) => {
        
//         const { value } = e.target;
//         console.log(`Input inputKeywordExistingId : ${value}`); 
//         const list = [...inputList];
//         list[index].inputKeywordExistingId = parseInt(value, 10);
//         setInputList(list);
//     };


//     // handle input change
//     const handleInputChange = (e, keywordId) => {
        
//         const { value } = e.target;
//         // console.log(`Input inputSubMenuId : ${value}`); 
//         const list = [...inputList];
//         list[keywordId].inputKeywordId = parseInt(value, 10);
//         setInputList(list);
//     };

//     // handle input subMenu change
//     const handleInpuKeywordChange = (e, index) => {
//         const { name, value } = e.target;
//         const list = [...inputList];
//         list[index][name] = value;
//         setInputList(list);
//     };
    
//     const handleRemoveClick = (index) => {
//         const list = [...inputList];
//         list.splice(index, 1);
//         setInputList(list);
//     };

//     const handleAddClick = () => {
//         const newKeywordId = inputList.length + 1;
//         const newKeywordExistingId = inputList.length + keywordId + 1;
//         setInputList([...inputList, { keyword: '', inputKeywordId: newKeywordId, inputKeywordExistingId:  newKeywordExistingId}]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();        
        
//         if(!keyword || keyword.length === 0){

//             const addKeyword = await axios.post('http://localhost:3000/keyword', {
//                 keywordData: inputList.map((item) => ({
//                     keyword: item.keyword // Jika ada deskripsi
//                 }))
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//             })

//             try{

//                 const addIntent = await axios.post('http://localhost:3000/intent', {
//                     intent,
//                     deskripsi,
//                     id_keyword: inputList.map((item) => parseInt(item.inputKeywordId)),
//                 },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 if (addIntent.status === 200) {
//                     navigate('/keyword');
//                 } else {
//                     <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
//                         An error alert for showing message.
//                     </div>
                    
//                 }
//             } catch (error){
//                 console.error(error)
//             }

//         } else {

//             try{

//                 const addMenu = await axios.post('http://localhost:3000/intent', {
//                     intent,
//                     deskripsi,
//                     id_subMenu: inputList.map((item) => item.selectedSubMenuId),
//                 },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
    
//                 if (addMenu.status === 200) {
//                     navigate('/menu2');
//                 } else {
//                     <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
//                         An error alert for showing message.
//                     </div>
                    
//                 }
//             } catch (error){
//                 console.error(error)
//             }
//         }

        
//     }

//   return (
//     <>
       
        
//         <div className="p-4 xl:ml-80">
           
//                 <div className="">
//                     <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
//                         <div>
//                             <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Add Intent</h6>
//                         </div>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <div className="w-5/6 px-8 ml-4 py-6">
//                             <div className="relative h-10 w-full min-w-[200px]">
//                                 <input
//                                 className="bg-blue-300"
//                                 placeholder=" "
//                                 id="intent"
//                                 type="text"
//                                 value={intent}
//                                 name="intent"
//                                 onChange={(e) => setIntent(e.target.value)}
//                                 required
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-5/6 px-8 ml-4 py-4">
//                             <div className="relative w-full min-w-[200px]">
//                                 <textarea
//                                 className="bg-blue-300"
//                                 placeholder=" "
//                                 id="deskripsi"
//                                 value={deskripsi} 
//                                 name="deskripsi"
//                                 onChange={(e) => setDeskripsi(e.target.value)}
//                                 required
//                                 ></textarea>
//                             </div>
//                         </div>
//                         <div className="p-6 overflow-x-scroll px-0 pt-4 pb-2">
//                             {inputList.map((x, index) => (
//                             <div className="" key={index}>
                                
//                             {Array.isArray(keyword) && keyword.length === 0 ? (  
//                                 <div className="relative h-10 flex-grow min-w-[200px] mt-8">
//                                     <> 
//                                         <input
//                                             type="hidden"
//                                             name="inputKeywordId"
//                                             value={x.inputKeywordId}
//                                             onChange={(e) => handleInputChange(e, index)}
//                                             className="bg-blue-300"
//                                             placeholder=" "
//                                             readOnly
//                                         />
                                            
//                                         <input
//                                             type="text"
//                                             name="keyword"
//                                             value={x.keyword}
//                                             onChange={(e) => handleInpuKeywordChange(e, index)}
//                                             className="bg-red-300"
//                                             placeholder=" "
//                                             required
//                                         />
                                
//                                     </>
                                    
//                                 </div>
//                             ) : (
//                                 <div className="relative h-10 flex-grow min-w-[200px] mt-8">
//                                     <> 
//                                         <input
//                                             type="text"
//                                             name="inputKeywordExistingId"
//                                             value={x.inputKeywordExistingId}
//                                             onChange={(e) => handleInputChangeIdExisting(e, index)}
//                                             className="bg-blue-300"
//                                             placeholder=" "
//                                             readOnly
//                                         />
                                            
//                                         <input
//                                             type="text"
//                                             name="keyword"
//                                             value={x.keyword}
//                                             onChange={(e) => handleInpuKeywordChange(e, index)}
//                                             className="bg-red-300"
//                                             placeholder=" "
//                                             required
//                                         />
                                
//                                     </>
                                    
//                                 </div>
//                             )}
//                                 {inputList.length !== 1 && (
//                                     <button
//                                     className="bg-purple-300"
//                                     data-ripple-dark="true"
//                                     onClick={() => handleRemoveClick(index)}
//                                     >
//                                     Remove
//                                     </button>
//                                 )}
//                                 {inputList.length - 1 === index && (
//                                     <button
//                                     className="bg-gray-600"
//                                     data-ripple-dark="true"
//                                     onClick={handleAddClick}
//                                     >
//                                     Add
//                                     </button>
//                                 )}
//                             </div>
//                             ))}
//                         </div>
//                         <div className="w-5/6 px-8 ml-4 py-4">
//                             <div className="relative w-full min-w-[200px]">
//                                 <button
//                                     className=""
//                                     data-ripple-light="true"
//                                     >
//                                 Simpan
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//         </div>
//     </>
//   )
// }

// export default AddIntent2

// import React, { useState, useEffect } from 'react';
// import SideBar from '../../components/SideBar';
// import Navbar from '../../components/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../../components/Footer';

// const AddIntent2 = () => {
//     const [intent, setIntent] = useState('');
//     const [deskripsi, setDeskripsi] = useState('');
//     const [inputList, setInputList] = useState([
//         { inputKeywordId: 1, keyword: '', inputKeywordExistingId: '' },
//     ]);
//     const [keyword, setKeyword] = useState([]);
//     const [keywordId, setKeywordId] = useState('');

//     const navigate = useNavigate();

//     useEffect(() => {
//         // Mengambil data subMenu dari API atau database
//         // Gantilah ini dengan logika pengambilan data yang sesuai
//         axios.get('http://localhost:3000/keyword').then((response) => {
//             setKeyword(response.data.data);

//             // Set inputList dengan data yang sudah ada dari API
//             const existingKeywords = response.data.data.map((item) => ({
//                 inputKeywordId: item.id,
//                 keyword: item.keyword,
//                 inputKeywordExistingId: item.id,
//             }));
//             setInputList(existingKeywords);

//             // Set keywordIdExisting dari data terakhir dalam array keyword
//             const keywordIdExisting =
//                 response.data.data[response.data.data.length - 1]?.id;
//             setKeywordId(keywordIdExisting);
//         });
//     }, []);

//     // handle input change
//     const handleInputChangeIdExisting = (e, index) => {
//         const { value } = e.target;
//         console.log(`Input inputKeywordExistingId : ${value}`);
//         const list = [...inputList];
//         list[index].inputKeywordExistingId = parseInt(value, 10);
//         setInputList(list);
//     };

//     // handle input change
//     const handleInputChange = (e, keywordId) => {
//         const { value } = e.target;
//         const list = [...inputList];
//         list[keywordId].inputKeywordId = parseInt(value, 10);
//         setInputList(list);
//     };

//     // handle input subMenu change
//     const handleInpuKeywordChange = (e, index) => {
//         const { name, value } = e.target;
//         const list = [...inputList];
//         list[index][name] = value;
//         setInputList(list);
//     };

//     const handleRemoveClick = (index) => {
//         const list = [...inputList];
//         list.splice(index, 1);
//         setInputList(list);
//     };

//     const handleAddClick = () => {
//         const newKeywordId = inputList.length + 1;
//         const newKeywordExistingId =
//             inputList.length + 1;
//         setInputList([
//             ...inputList,
//             {
//                 keyword: '',
//                 inputKeywordId: newKeywordId,
//                 inputKeywordExistingId: newKeywordExistingId,
//             },
//         ]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             if (!keyword || keyword.length === 0) {
//                 const addIntent = await axios.post(
//                     'http://localhost:3000/intent',
//                     {
//                         intent,
//                         deskripsi,
//                         id_keyword: inputList.map(
//                             (item) => item.inputKeywordExistingId || keywordId
//                         ),
//                     },
//                     {
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                     }
//                 );

//                 if (addIntent.status === 200) {
//                     navigate('/keyword');
//                 } else {
//                     // Tampilkan pesan kesalahan jika diperlukan
//                 }
//             } else {
//                 // ...
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <div className="p-4 xl:ml-80">
//                 <div className="">
//                     <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
//                         <div>
//                             <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
//                                 Add Intent
//                             </h6>
//                         </div>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <div className="w-5/6 px-8 ml-4 py-6">
//                             <div className="relative h-10 w-full min-w-[200px]">
//                                 <input
//                                     className="bg-blue-300"
//                                     placeholder=" "
//                                     id="intent"
//                                     type="text"
//                                     value={intent}
//                                     name="intent"
//                                     onChange={(e) =>
//                                         setIntent(e.target.value)
//                                     }
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-5/6 px-8 ml-4 py-4">
//                             <div className="relative w-full min-w-[200px]">
//                                 <textarea
//                                     className="bg-blue-300"
//                                     placeholder=" "
//                                     id="deskripsi"
//                                     value={deskripsi}
//                                     name="deskripsi"
//                                     onChange={(e) =>
//                                         setDeskripsi(e.target.value)
//                                     }
//                                     required
//                                 ></textarea>
//                             </div>
//                         </div>
//                         <div className="p-6 overflow-x-scroll px-0 pt-4 pb-2">
//                             {inputList.map((x, index) => (
//                                 <div className="" key={index}>
//                                     {Array.isArray(keyword) &&
//                                     keyword.length === 0 ? (
//                                         <div className="relative h-10 flex-grow min-w-[200px] mt-8">
//                                             <>
//                                                 <input
//                                                     type="hidden"
//                                                     name="inputKeywordId"
//                                                     value={x.inputKeywordId}
//                                                     onChange={(e) =>
//                                                         handleInputChange(
//                                                             e,
//                                                             index
//                                                         )
//                                                     }
//                                                     className="bg-blue-300"
//                                                     placeholder=" "
//                                                     readOnly
//                                                 />

//                                                 <input
//                                                     type="text"
//                                                     name="keyword"
//                                                     value={x.keyword}
//                                                     onChange={(e) =>
//                                                         handleInpuKeywordChange(
//                                                             e,
//                                                             index
//                                                         )
//                                                     }
//                                                     className="bg-red-300"
//                                                     placeholder=" "
//                                                     required
//                                                 />
//                                             </>
//                                         </div>
//                                     ) : (
//                                         <div className="relative h-10 flex-grow min-w-[200px] mt-8">
//                                             <>
//                                                 <input
//                                                     type="text"
//                                                     name="inputKeywordExistingId"
//                                                     value={
//                                                         x.inputKeywordExistingId
//                                                     }
//                                                     onChange={(e) =>
//                                                         handleInputChangeIdExisting(
//                                                             e,
//                                                             index
//                                                         )
//                                                     }
//                                                     className="bg-blue-300"
//                                                     placeholder=" "
//                                                     readOnly
//                                                 />

//                                                 <input
//                                                     type="text"
//                                                     name="keyword"
//                                                     value={x.keyword}
//                                                     onChange={(e) =>
//                                                         handleInpuKeywordChange(
//                                                             e,
//                                                             index
//                                                         )
//                                                     }
//                                                     className="bg-red-300"
//                                                     placeholder=" "
//                                                     required
//                                                 />
//                                             </>
//                                         </div>
//                                     )}
//                                     {inputList.length !== 1 && (
//                                         <button
//                                             className="bg-purple-300"
//                                             data-ripple-dark="true"
//                                             onClick={() =>
//                                                 handleRemoveClick(index)
//                                             }
//                                         >
//                                             Remove
//                                         </button>
//                                     )}
//                                     {inputList.length - 1 === index && (
//                                         <button
//                                             className="bg-gray-600"
//                                             data-ripple-dark="true"
//                                             onClick={handleAddClick}
//                                         >
//                                             Add
//                                         </button>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="w-5/6 px-8 ml-4 py-4">
//                             <div className="relative w-full min-w-[200px]">
//                                 <button
//                                     className=""
//                                     data-ripple-light="true"
//                                 >
//                                     Simpan
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AddIntent2;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddIntent2 = () => {
    const [intent, setIntent] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [inputList, setInputList] = useState([{ keyword: '', inputKeywordId: null },]);
    const [keyword, setKeyword] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Mengambil data keyword dari API atau database
        axios.get('http://localhost:3000/keyword').then((response) => {
            setKeyword(response.data.data);

            // Set the inputKeywordId to the last keyword ID + 1 if there are existing keywords
            if (response.data.data.length > 0) {
                const lastKeywordId = response.data.data[response.data.data.length - 1].id;
                setInputList([{ keyword: '', inputKeywordId: lastKeywordId + 1 }]);
            }
        });
    }, []);

    const handleInputChangeIdExisting = (e, index) => {

        const { value } = e.target;
        const list = [...inputList];
        list[index].inputKeywordId = value;
        setInputList(list);
    };

    const handleInpuKeywordChange = (e, index) => {
        const { value } = e.target;
        const list = [...inputList];
        list[index].keyword = value;
        setInputList(list);
    };

    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        const nextKeywordId = inputList[inputList.length - 1].inputKeywordId + 1;
        setInputList([...inputList, { keyword: '', inputKeywordId: nextKeywordId }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const addIntent = await axios.post(
                'http://localhost:3000/intent',
                {
                    intent,
                    deskripsi,
                    id_keyword: inputList.map((item) => item.inputKeywordId),
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (addIntent.status === 200) {
                navigate('/keyword');
            } else {
                // Handle error or display an error message if needed
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="p-4 xl:ml-80">
                <div className="">
                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                        <div>
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                                Add Intent
                            </h6>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-5/6 px-8 ml-4 py-6">
                            <div className="relative h-10 w-full min-w-[200px]">
                                <input
                                    className="bg-blue-300"
                                    placeholder=" "
                                    id="intent"
                                    type="text"
                                    value={intent}
                                    name="intent"
                                    onChange={(e) =>
                                        setIntent(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-5/6 px-8 ml-4 py-4">
                            <div className="relative w-full min-w-[200px]">
                                <textarea
                                    className="bg-blue-300"
                                    placeholder=" "
                                    id="deskripsi"
                                    value={deskripsi}
                                    name="deskripsi"
                                    onChange={(e) =>
                                        setDeskripsi(e.target.value)
                                    }
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-6 overflow-x-scroll px-0 pt-4 pb-2">
                            {inputList.map((x, index) => (
                                <div className="" key={index}>
                                    <div className="relative h-10 flex-grow min-w-[200px] mt-8">
                                        <>
                                            <input
                                                type="text"
                                                name="inputKeywordId"
                                                value={
                                                    x.inputKeywordId || ''
                                                }
                                                onChange={(e) =>
                                                    handleInputChangeIdExisting(
                                                        e,
                                                        index
                                                    )
                                                }
                                                className="bg-blue-300"
                                                placeholder=" "
                                                readOnly
                                            />

                                            <input
                                                type="text"
                                                name="keyword"
                                                value={x.keyword}
                                                onChange={(e) =>
                                                    handleInpuKeywordChange(
                                                        e,
                                                        index
                                                    )
                                                }
                                                className="bg-red-300"
                                                placeholder=" "
                                                required
                                            />
                                        </>
                                    </div>
                                    {inputList.length !== 1 && (
                                        <button
                                            className="bg-purple-300"
                                            data-ripple-dark="true"
                                            onClick={() =>
                                                handleRemoveClick(index)
                                            }
                                        >
                                            Remove
                                        </button>
                                    )}
                                    {inputList.length - 1 === index && (
                                        <button
                                            className="bg-gray-600"
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
                                    className=""
                                    data-ripple-light="true"
                                >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddIntent2;






