import React from 'react';
import Navbar from '../../../components/Navbar';
import SidebarMahasiswa from '../../../components/SidebarMahasiswa';
import KatalogBukuKonten from '../Konten/KatalogBukuKonten';

function MahasiswaKatalogBukuPage() {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <div className='flex flex-1 overflow-hidden'>
                <SidebarMahasiswa />
                <div className='flex-1 flex flex-col p-4 bg-gray-100 overflow-y-auto'>
                    <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-3xl font-bold text-black-800'>
                            Peminjaman Buku
                        </h1>
                    </div>
                    <KatalogBukuKonten />
                </div>
            </div>
        </div>
    );
}

export default MahasiswaKatalogBukuPage;
