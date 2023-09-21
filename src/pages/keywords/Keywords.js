import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import axios from 'axios'
import useSwr, { mutate} from 'swr'


const Keywords = () => {
  const [deleteKeywordId, setDeleteKeywordId] = useState(null)

  const apiUrl = 'http://localhost:3000/keyword'

  const { data: keywordData, error } = useSwr(apiUrl, async (url) => {
    
    const response = await axios.get(url);
    return response.data;
  }, {
    
    refreshInterVal: 5000,
  });

  if(error){
    return <div>Error: { error.message }</div>
  }

  if (!keywordData) {
    return <div role="status" className='px-8 py-8 mx-auto flex items-center justify-center'>
              <svg aria-hidden="true" className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.8710 24.3692 89.8167 20.3480C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.8130 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.8410C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.0830 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>
    // <div>Loading...</div>;
  }

  const handleDeleteKeyword = async () => {
    try{

      if(deleteKeywordId) {
        
        const apiUrl = `http://localhost:3000/deleteKeyword/${deleteKeywordId}`;
        await axios.delete(apiUrl)

        mutate(apiUrl);

        setDeleteKeywordId(null)
      }
    }
    catch (error){
      console.error('Error deleting keyword:', error);

    }
  }

  return (
    <>

        {/* Sidabar */}
        <SideBar />

        <div className="p-4 xl:ml-80">
            {/* Navbar */}
            <Navbar />
              {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                  <div>
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Keywords</h6>
                  </div>
                  <div>
                    <a className="" href="/addKeyword">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
                    </a>
                  </div>
                </div>
                <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                  <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Id</p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Intent</p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Deskripsi</p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Total keyword</p>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                      {keywordData.data && keywordData.data.map((keyword, index) => (
                        <tr key={index}>
                          <td className="border-b border-blue-gray-50 py-3 px-6 text-left">{index + 1}</td>
                          <td className="border-b border-blue-gray-50 py-3 px-6 text-left">{keyword.intent}</td>
                          <td className="border-b border-blue-gray-50 py-3 px-6 text-left">{keyword.deskripsi}</td>
                          <td className="border-b border-blue-gray-50 py-3 px-6 text-left">{keyword.keyword.length}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                </div>
              </div> */}
              <div className="mt-12 mb-8 flex flex-col gap-12">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                  <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6">
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Data Keyword
                    </h6>
                  </div>
                  <div className='flex py-4'>
                    <div className='ml-4'>
                      <a className="" href="/addKeyword">
                        <div className='flex items-center'>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                              <path strokeLinecap="round" stroklinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Tambah
                          </button>
                        </div>
                      </a>
                    </div>
                    <div className='ml-2'>
                      <a className="" href="/addKeyword">
                      <div className='flex items-center'>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" stroklinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                          </svg>
                            Import
                          </button>
                        </div>
                      </a>
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
                            <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Intent
                            </p>
                          </th>
                          <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                            <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Deskripsi
                            </p>
                          </th>
                          <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                            <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Total Keyword
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
                          {keywordData.data && keywordData.data.map((keyword, index) => (
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
                                <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">{keyword.intent}
                                </p>
                              </td>
                              <td className="py-3 px-5 ">
                                <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">{keyword.deskripsi}
                                </p>
                              </td>
                              <td className="py-3 px-5 ">
                                <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">{keyword.keyword.length}
                                </p>
                              </td>
                              <td className="py-3 px-5 ">
                                <a href="#" 
                                  className="block antialiased font-sans text-xs font-semibold text-blue-gray-600 inline-flex items-center"
                                  // onClick={() => setDeleteKeywordId(keyword.id)}
                                  >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                  </svg>
                                </a>
                                <a href="#" 
                                  className="block antialiased font-sans text-xs font-semibold text-blue-gray-600 inline-flex items-center"
                                  onClick={() => setDeleteKeywordId(keyword.id)}
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
              {deleteKeywordId && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold mb-4">Apakah Anda yakin ingin menghapus keyword ini?</p>
                    <div className="flex justify-end">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                        onClick={handleDeleteKeyword}
                      >
                        Ya
                      </button>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() => setDeleteKeywordId(null)}
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="text-blue-gray-600">
              <footer className="py-2">
                  <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                  <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
                      © 2023, made with{" "}
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="-mt-0.5 inline-block h-3.5 w-3.5"
                      >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>{" "}
                      by{" "}
                      <a
                      href="https://www.creative-tim.com"
                      target="_blank"
                      className="transition-colors hover:text-blue-500"
                      >
                      Indita Tim
                      </a>
                  </p>
                  </div>
              </footer>
              </div>
        </div>
    </>
  )
}

export default Keywords