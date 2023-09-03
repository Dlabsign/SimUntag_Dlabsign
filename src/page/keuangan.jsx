import { useState } from "react";
import { Tagihan } from "../../dataMh";
useState

const Keuangan = () => {

  const totalJumlah = Tagihan.reduce((accumulator, item) => {
    if (item.status !== "Lunas") {
      // Cek jika status bukan "Lunas"
      return accumulator + item.Jumlah;
    }
    return accumulator; // Kembalikan accumulator tanpa menambahkan jumlah jika status "Lunas"
  }, 0);

  const formattedTotal = totalJumlah.toLocaleString("id-ID");

  const [showModal, setShowModal] = useState(false);

  const openModal = () => { setShowModal(true) };
  const closeModal = () => { setShowModal(false) };

  return (
    <div className="px-3.5 w-full h-full flex flex-col items-start rounded-lg ">
      {/* DROPDOWNC */}
      <div className="mn-dropdown text-white flex items-center justify-center py-2 px-2 w-full bg-slate-300 rounded-lg">
        <h2 className="text-sm font-bold  mr-2 ml-3 ">Periode</h2>
        <div className="flex-col text-sm font-semibold">
          <select name="" className="dropdown  px-2" id="">
            <option value="">Semester Gasal</option>
            <option value="">Semester Genap</option>
            <option value="">Semester Pendek</option>
          </select>
          <select name="" className="dropdown mt-2 px-2" id="">
            <option value="">2023</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
          </select>
        </div>
      </div>
      {/* DROPDOWN */}
      <div className="banner w-full mt-3  rounded-lg px-2 pb-2.5 pt-4">
        <h2 className="leading-[1.3rem]  text-white px-1.5 font-semibold text-base flex justify-between items-center pb-2 text-left ">
          Detail Keuangan <br /> Mahasiswa
          <select
            name=""
            className="dropdown py-2 px-1 font-bold text-xs flex"
            id=""
          >
            <option value="" disabled>
              Pilih Bank
            </option>
            <option value="">Jatim</option>
            <option value="">BNI</option>
          </select>
        </h2>
        <div className="banner-container rounded pt-2.5 px-3 banner-list">
          <table className=" w-full text-xs text-left mb-1 rounded text-white">
            <thead className="w-full mb-5">
              <th>Bulan</th>
              <th>Jenis</th>
              <th>Tagihan</th>
              <th>Status</th>
            </thead>
            {Tagihan.map((item) => (
              <tbody
                key={item.id}
                className="border-b border-t border-gray-500-slate-600 mt-1"
              >
                <tr className="text-xs">
                  <td>{item.bulan}</td>
                  <td>{item.jenisTagihan}</td>
                  <td>{item.Jumlah.toLocaleString("id-ID")}</td>
                  <td className="font-bold ">{item.status}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <p className="text-white px-1.5 font-medium text-sm flex justify-between items-center pb-2 pt-1">
          Total: <span className="font-bold">Rp {formattedTotal}</span>
        </p>
        <button
          className="w-full py-2 text-white text-sm font-semibold rounded-lg"
          onClick={openModal}
        >
          Cetak Virtual Account
        </button>
      </div>
      <VirtualAccount show={showModal} handleClose={closeModal} />
    </div>
  );
};

export default Keuangan;


const VirtualAccount = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <>
      <div className="va-box rounded-[1.7rem]"></div>
      <div className="va-dropdown w-[70%] py-5 px-5 rounded-lg flex flex-col justify-around">
        <div className="">
          <h2 className="text-sm text-center text-white font-bold">
            Nomor Virtual Account
          </h2>
          <h2 className=" text-center text-white font-bold">
            148729371462200071
          </h2>
        </div>
        <button
          className="w-full  py-2 text-white text-sm font-semibold rounded-lg"
          onClick={handleClose}
        >
          Tutup
        </button>
      </div>
    </>
  );
};