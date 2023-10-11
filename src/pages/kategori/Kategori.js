import React, { useState, Fragment } from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import axios from 'axios'
import useSwr, { mutate} from 'swr'
import Footer from '../../components/Footer'
import { Dialog, Transition } from '@headlessui/react'


const Kategori = () => {
  const [deleteKategoriId, setDeleteKategoriId] = useState(null)

  const apiUrl = 'https://api-indita.vercel.app/kategori'

  const { data: kategoriData, error } = useSwr(apiUrl, async (url) => {
    
    const response = await axios.get(url);
    return response.data;
  }, {
    
    refreshInterVal: 5000,
  });

  if(error){
    return <div>Error: { error.message }</div>
  }

  if (!kategoriData) {
    return <div role="status" className='px-8 py-8 mx-auto flex items-center justify-center'>
              <svg aria-hidden="true" className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.8710 24.3692 89.8167 20.3480C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.8130 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.8410C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.0830 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>
    // <div>Loading...</div>;
  }

  const handleDeleteKategori = async (e) => {
    e.preventDefault();
    
    try{

      if(deleteKategoriId) {
        
        const apiUrl = `http://localhost:3000/kategori/${deleteKategoriId}`;
        await axios.delete(apiUrl)

        mutate(apiUrl);

        setDeleteKategoriId(null)
      }
    }
    catch (error){
      console.error('Error deleting kategori:', error);
    }
  }

  return (
    <>

        {/* Sidabar */}
        <SideBar />

        <div className="p-4 xl:ml-80">
            {/* Navbar */}
            <Navbar />
              <div className="mt-12 mb-8 flex flex-col gap-12">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                  <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6">
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Data Kategori
                    </h6>
                  </div>
                  <div className='flex py-4'>
                    <div className='ml-4'>
                      <a className="" href="/addKategori">
                        <div className='flex items-center'>
                            <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              data-ripple-light="true">
                              <div className="flex items-center"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Tambah
                              </div>
                            </button>
                        </div>
                      </a>
                    </div>
                    <div className='ml-2'>
                      <div className='flex items-center'>
                        <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                    <table className="w-full min-w-[640px] table-auto">
                      <thead>
                        <tr>
                          <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                            <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Id
                            </p>
                          </th>
                          <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                            <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Katgori
                            </p>
                          </th>
                          <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                            <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                            Action
                            </p>
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                          {kategoriData.data && kategoriData.data.map((kategori, index) => (
                            <tr key={index}>
                              <td className="py-3 px-5 ">
                                <div className="flex items-center gap-4">
                                  <div>
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">{index + 1}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 px-5 ">
                                <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">{kategori.kategori}
                                </p>
                              </td>
                              <td className="py-3 px-5 ">
                                <a href={`/editKategori/${kategori.id}`}
                                  className="antialiased font-sans text-xs font-semibold text-blue-gray-600 inline-flex items-center"
                                  >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                  </svg>
                                </a>
                                <a href="#" 
                                  className="antialiased font-sans text-xs font-semibold text-blue-gray-600 inline-flex items-center"
                                  onClick={() => setDeleteKategoriId(kategori.id)}
                                  >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                  </svg>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
              {deleteKategoriId && (
                <Transition appear show={true} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={() => setDeleteKategoriId(false)}>
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
                                      Delete Kategori
                                  </Dialog.Title>
                                  <div className="mt-2">
                                      <p className="text-sm text-gray-500">
                                      Apakah Anda yakin ingin menghapus kategori ini?
                                      </p>
                                  </div>
                                  <div className="pt-2 space-x-4">
                                      <button
                                      type="button"
                                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                      // onClick={closeModal}
                                      onClick={handleDeleteKategori}
                                      >
                                      Ya
                                      </button>
                                      <button
                                      type="button"
                                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                      onClick={() => setDeleteKategoriId(null)}
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
              <Footer />
        </div>
    </>
  )
}

export default Kategori