import React, { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';

const EditKategori = () => {
    const { id } = useParams(); // Mendapatkan ID kategori dari URL menggunakan useParams
    const [kategori, setKategori] = useState('');
    const [error, setError] = useState(null);
    const [kategoriExists, setKategoriExists] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Mengambil detail kategori menggunakan ID dari parameter URL
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api-indita.vercel.app/kategori/${id}`);
                const data = response.data.data;
                //console.log('data', response.data.data)
                if (data) {
                    setKategori(data.kategori);
                } else {
                    setError('Kategori tidak ditemukan');
                }
            } catch (error) {
                console.error('Gagal mendapatkan detail kategori', error);
                setError('Gagal mendapatkan detail kategori');
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
             // Kategori belum ada, lanjutkan dengan menambahkannya
            const addResponse = await axios.patch(`https://api-indita.vercel.app/kategori/${id}`, {
                kategori: kategori
            });

            if (addResponse.status === 200) {
                navigate('/kategori');
            } else {
                setKategoriExists(true);
                setError('Gagal menambahkan kategori.');
            }
      } catch (error) {
          console.error('Gagal menambahkan kategori', error);
          setError('Gagal menambahkan kategori.');
      }
    };

    return (
        <>
            <SideBar />
            <div className="p-4 xl:ml-80">
                <Navbar />
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                        <div>
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Edit Kategori</h6>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-5/6 px-8 ml-4 py-6">
                            <div className="relative h-10 w-full min-w-[200px]">
                                <input
                                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                    id="kategori"
                                    type="text"
                                    value={kategori}
                                    name="kategori"
                                    onChange={(e) => setKategori(e.target.value)}
                                    required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Kategori
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
                    {kategoriExists && (
                        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-red-500">Kategori "{kategori}" sudah ada di database.</p>
                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => setKategoriExists(false)}>Tutup</button>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default EditKategori;
