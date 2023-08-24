import { Pendidikan, AkademikItem, BioItem } from "../../../dataMh";
import ListItem from "./listbtn";
import React, { useState } from "react";

export default function BioDataComponent() {
  const [visibleElement, setVisibleElement] = useState(1);

  const ShowBio = () => {
    setVisibleElement(1);
  };
  const ShowAkademik = () => {
    setVisibleElement(2);
  };
  const ShowPendidikan = () => {
    setVisibleElement(3);
  };

  const [activeButton, setActiveButton] = useState(true);

  return (
    <>
      <div className="flex items-left flex-col ">
        <div className="flex px-2">
          <a onClick={ShowBio}>
            <ListItem
              itemContent="Biodata"
              buttonNumber={1}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </a>
          <a onClick={ShowAkademik}>
            <ListItem
              itemContent="Akademik"
              buttonNumber={2}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </a>
          <a onClick={ShowPendidikan}>
            <ListItem
              itemContent="Pendidikan"
              buttonNumber={3}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </a>
        </div>
        {visibleElement === 2 && <AkademikComponent />}
        {visibleElement === 1 && <BioComponent />}
        {visibleElement === 3 && <PendidikanComponent />}
      </div>
    </>
  );
}

const BioComponent = () => {
  return (
    <table>
      {BioItem.map((item) => (
        <React.Fragment key={item.id}>
          {/* Menggunakan komponen ItemListList dengan prop yang sesuai */}
          <ItemListList th="jenisKelamin" td={item.jenisKelamin} />
          <ItemListList th="agama" td={item.agama} />
          <ItemListList th="Tempat Tgl Lahir" td={item.tempatlahir} />
          <ItemListList th="Golongan Darah" td={item.goldarah} />
          <ItemListList th="kota" td={item.kota} />
          <ItemListList th="Email" td={item.email} />
          <ItemListList th="Status Perkawinan" td={item.nikah} />
        </React.Fragment>
      ))}
    </table>
  );
};

const AkademikComponent = () => {
  return (
    <table>
      {AkademikItem.map((item) => (
        <React.Fragment key={item.id}>
          {/* Menggunakan komponen ItemListList dengan prop yang sesuai */}
          <ItemListList th="Sistem" td={item.sistem} />
          <ItemListList th="Jalur" td={item.jalur} />
          <ItemListList th="Status Masuk" td={item.stsmasuk} />
          <ItemListList th="Kemampuan" td={item.kemampuan} />
        </React.Fragment>
      ))}
    </table>
  );
};

const PendidikanComponent = () => {
  return (
    <table>
      {Pendidikan.map((item) => (
        <React.Fragment key={item.id}>
          {/* Menggunakan komponen ItemListList dengan prop yang sesuai */}
          <ItemListList th="Asal Sekolah" td={item.asalsekolah} />
          <ItemListList th="Alamat Sekolah" td={item.alamatsekolah} />
          <ItemListList th="Provinsi" td={item.provinsi} />
          <ItemListList th="Kota Sekolah" td={item.kota} />
        </React.Fragment>
      ))}
    </table>
  );
};

const ItemListList = (props) => (
  <tr className="text-white text-xs text-left w-full  ">
    <div className="bio-list py-1 px-2 flex justify-between items-center ">
      <th className="px-2 py-1">{props.th}</th>
      <td className="w-[120px] py-1 px-1 text-white">{props.td}</td>
    </div>
  </tr>
);
