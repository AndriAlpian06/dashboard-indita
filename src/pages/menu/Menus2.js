import React, { useMemo, useState, useEffect, Fragment } from 'react';
import { useTable } from 'react-table';
import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import axios from 'axios'
import useSwr, { mutate} from 'swr'
import { Dialog, Transition } from '@headlessui/react'

// Define your columns properly as an array of column objects
// const columns = [
//   {
//     Header: 'ID',
//     accessor: 'id',
//   },
//   {
//     Header: 'Name',
//     accessor: 'nama_menu',
//   },
//   {
//     Header: 'Kategori',
//     accessor: 'id_kategori',
//     Cell: ({ value }) => {
//       // Temukan nama kategori berdasarkan ID kategori
//       const kategori = kategoriData.find(k => k.id === value);
//       return kategori ? kategori.nama_kategori : 'Tidak Diketahui';
//     },
//   },
//   {
//     Header: 'Deskripsi',
//     accessor: 'deskripsi_menu',
//   },
//   // Add more columns as needed
// ];

const Menus2 = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [submenuData, setSubmenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [kategoriData, setKategoriData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteMenuId, setDeleteMenuId] = useState(null)
  const [menuId, setMenuId] = useState(null);
  const [subMenuDisabled, setSubMenuDisabled] = useState(null)

  const navigate = useNavigate()
  
  // State to store data from the API
  const columns =  useMemo(
    () => [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'nama_menu',
    },
    {
      Header: 'Kategori',
      accessor: 'id_kategori',
      Cell: ({ value }) => {
        // Temukan nama kategori berdasarkan ID kategori
        const kategori = kategoriData.find(k => k.id === value);
        return kategori ? kategori.kategori : 'Tidak Diketahui';
      },
    },
    {
      Header: 'Deskripsi',
      accessor: 'deskripsi_menu',
    },
    {
      Header: 'Action',
      accessor: 'menuId', // Menggunakan accessor ID untuk mengidentifikasi menu
      Cell: ({ row }) => {
        const menuId = row.original.id
        
        return (
          <div>
            <a href={`editMenu/${row.original.id}`} 
              className="antialiased font-sans text-xs font-semibold text-blue-gray-600 inline-flex items-center"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </a>
            <a href="#"
              className="antialiased font-sans text-xs font-semibold text-blue-gray-600 inline-flex items-center"
              onClick={() => {
                setMenuId(menuId); 
                setDeleteMenuId(menuId); // Set menuId sesuai dengan yang akan dihapus
              }}
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </a>
          </div>
        );
      },
    },
    // Add more columns as needed
  ],
  [kategoriData]
  );
  // Memoize the columns so they don't change on re-renders
  // const dataColumns = useMemo(() => columns, []);

  // useEffect(() => {
  //   // Fetch data from the API
  //   fetch('http://localhost:3000/menu')
  //     .then(response => response.json())
  //     .then(apiData => {
  //       // Check if the retrieved data is an array
  //       // console.log(apiData.data)
  //       if (Array.isArray(apiData.data)) {
  //         setData(apiData.data); // Set the API data in the state
  //       } else {
  //         console.error('API data is not an array:', apiData);
  //       }// Set the API data in the state
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // Gunakan useSWR untuk mengambil data menu
  const { data: apiData, errorMenu } = useSwr('https://api-indita.vercel.app/menu', (url) =>
    fetch(url).then((response) => response.json())
  );

  // Set data jika telah diambil
  useEffect(() => {
    if (apiData && Array.isArray(apiData.data)) {
      setData(apiData.data);
    }
  }, [apiData]);

  // Tangani error jika ada
  useEffect(() => {
    if (errorMenu) {
      console.error('Error fetching data:', errorMenu);
    }
  }, [errorMenu]);

  useEffect(() => {
    if (selectedMenuId !== null) {
      setIsLoading(true);
      setError(null);
  
      fetch(`https://api-indita.vercel.app/menuToSubMenu/${selectedMenuId}/subMenu`)
        .then(response => response.json())
        .then(data => {
          // console.log(data)
          setSubmenuData(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, [selectedMenuId]); // This effect runs once when the component mounts

  useEffect(() => {
    fetch('https://api-indita.vercel.app/kategori') // Ganti URL sesuai dengan endpoint kategori Anda
      .then(response => response.json())
      .then(data => {
        setKategoriData(data.data);
        // console.log(data)
      })
      .catch(error => {
        console.error('Error fetching kategori data:', error);
      });
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns, // Use the memoized columns
    data,
  });

  const handleDelete = async (menuId) => {
    try{

      // console.log(menuId)
      if(deleteMenuId) {
        
        
        const apiUrl = `https://api-indita.vercel.app/deleteMenu/${menuId}`;
        await axios.delete(apiUrl)
        
        mutate(apiUrl);

        setMenuId(null); 
        setDeleteMenuId(null)
      }
    }
    catch (error){
      console.error('Error deleting Menu:', error);

    }
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addMenu = () => {
    navigate('/addMenu2');
  };

  const addSubMenu = () => {
    navigate('/addSubMenu');
  };

  useEffect(() => {
    // Mengambil data subMenu dari API atau database
    // Gantilah ini dengan logika pengambilan data yang sesuai
    axios.get('https://api-indita.vercel.app/subMenu/')
    .then((response) => {
        // console.log(response.data.data);
        setSubMenuDisabled(response.data.data)
    })
     
  }, []);

  return (
    <>
      <SideBar />
      <div className="p-4 xl:ml-80">
        <Navbar />
          <div className="mt-12 mb-8 flex flex-col gap-12">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Data Menu
                </h6>
              </div>
              <div className='flex py-4'>
                <div className='ml-4'>
                  <div className='flex items-center'>
                    <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={openModal}
                      data-ripple-light="true">
                      <div className="flex items-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Tambah
                      </div>
                    </button>
                  </div>
                </div>
                <div className='ml-2'>
                  <div className='flex items-center'>
                    <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={openModal}
                      data-ripple-light="true">
                      <div className="flex items-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                          <path strokeLinecap="round" stroklinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                        </svg>
                        Import
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-100">
                    {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th
                            {...column.getHeaderProps()}
                            className="py-2 px-4 text-left font-semibold"
                          >
                            {column.render('Header')}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {rows.map(row => {
                      prepareRow(row);
                      return (
                        <React.Fragment key={row.id}>
                          <tr
                            {...row.getRowProps()}
                            className="hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setSelectedItem(row.original);
                              setSelectedMenuId(row.original.id);
                              setSubmenuVisible(!submenuVisible);
                            }}
                          >
                            {row.cells.map(cell => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className="py-2 px-4 border-t"
                                >
                                  {cell.render('Cell')}
                                </td>
                              );
                            })}
                          </tr>
                          {selectedItem === row.original && (
                            <tr>
                              {submenuVisible && (
                              <td
                                colSpan={columns.length}
                                className="py-2 px-4 border-t"
                              >
                                {isLoading ? (
                                  <div>Loading...</div>
                                ) : error ? (
                                  <div className="text-red-600">Error: {error.message}</div>
                                ) : (
                                  <div>
                                    <strong>Detail:</strong>
                                    <table className="min-w-full border border-gray-200 mt-2">
                                      <thead className="bg-gray-100">
                                        <tr>
                                          <th className="py-2 px-4 text-left font-semibold">Submenu</th>
                                          <th className="py-2 px-4 text-left font-semibold">Description</th>
                                          {/* Add more columns as needed */}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {submenuData.map(submenuItem => (
                                          <tr key={submenuItem.id}>
                                            <td className="py-2 px-4 border-t">{submenuItem.subMenu.subMenu}</td>
                                            <td className="py-2 px-4 border-t">{submenuItem.subMenu.deskripsi_subMenu}</td>
                                            {/* Add more columns as needed */}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                )}
                              </td>
                              )}
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {deleteMenuId && (
            <Transition appear show={true} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={() => setDeleteMenuId(false)}>
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
                                  Delete Menu
                              </Dialog.Title>
                              <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                  Apakah Anda yakin ingin menghapus Menu ini?
                                  </p>
                              </div>
                              <div className="pt-2 space-x-4">
                                  <button
                                  type="button"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                  onClick={() => handleDelete(menuId)}
                                  >
                                  Ya
                                  </button>
                                  <button
                                  type="button"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                  onClick={() => setDeleteMenuId(null)}
                                  >
                                  Tidak
                                  </button>
                              </div>
                            </Dialog.Panel>
                        </Transition.Child>
                      </div>
                  </div>
              </Dialog>
            </Transition>
          )}
          {modalIsOpen && (
            <Transition appear show={true} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={() => setModalIsOpen(false)}>
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
                                  Menu
                              </Dialog.Title>
                              <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                  Pilih Kategori yang akan di buat
                                  </p>
                              </div>
                              <div className="pt-2 space-x-4">
                                <button
                                  type="button"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                  onClick={addMenu}
                                  >
                                  Menu Utama
                                  </button>
                                  {!subMenuDisabled || subMenuDisabled.length === 0 ? (
                                    <button
                                    type="button"
                                    className='inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-gray-500 text-white hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                    // onClick={closeModal}
                                    disabled={1}
                                    >
                                    Sub Menu
                                    </button>
                                  ):(
                                    <button
                                    type="button"
                                    className='inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-blue-500 text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                    onClick={addSubMenu}
                                    >
                                    Sub Menu
                                    </button>
                                  )}
                                  <button
                                  type="button"
                                  className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                  onClick={closeModal}
                                  >
                                  Batal
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
  );  
};

export default Menus2;