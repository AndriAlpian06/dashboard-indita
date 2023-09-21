import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const Kategori = () => {
  return (
    <>

        {/* Sidabar */}
        <SideBar />

        <div className="p-4 xl:ml-80">
            {/* Navbar */}
            <Navbar />
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                  <div>
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Kategori</h6>
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
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Kategori</p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Created</p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Updated</p>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">1</p>
                        </div>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold'>Pengaduan Kendala</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">2023-09-18 11:26:09</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                        <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">2023-09-18 11:26:09</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">2</p>
                        </div>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold'>Informasi Promo</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">2023-09-18 11:26:09</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                        <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">2023-09-18 11:26:09</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">3</p>
                        </div>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold'>Informasi Paket</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">2023-09-18 11:27:01</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                        <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">2023-09-18 11:27:01</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">4</p>
                        </div>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold'>Tagihan</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">2023-09-18 11:27:11</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                        <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">2023-09-18 11:27:11</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
                {/* <ul className="flex items-center gap-4">
                    <li>
                    <a
                        href="https://www.creative-tim.com"
                        target="_blank"
                        className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                        Creative Tim
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.creative-tim.com/presentation"
                        target="_blank"
                        className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                        About Us
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.creative-tim.com/blog"
                        target="_blank"
                        className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                        Blog
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.creative-tim.com/license"
                        target="_blank"
                        className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                        License
                    </a>
                    </li>
                </ul> */}
                </div>
            </footer>
            </div>
        </div>
    </>
  )
}

export default Kategori