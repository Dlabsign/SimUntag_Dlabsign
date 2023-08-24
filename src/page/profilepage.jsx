import { BioMhs } from "../../dataMh";
import ProfileComponent from "../components/profile/biodata";

const ProfilePage = () => {
  return (
    <div className="biodata text-black px-3.5 w-full h-full flex flex-col items-center mb-36 rounded-lg">
      <div className="biodata flex flex-col items-center ">
        <div className="biodata-img mb-2.5 rounded-full">
          <img src="/src/assets/img/_DSC0024.JPG" alt="" />
        </div>
        <h2 className=" font-bold text-base">Daniel Kurnia Putra</h2>
        <h2 className=" opacity-7p5 font-normal text-sm">Mahasiswa Aktif</h2>
      </div>
      <table className=" flex flex-col w-full mt-4 border-blue-600">
        {BioMhs.map((bio) => (
          <tr key={bio.id}>
            <ItemListList th="NIM" td={bio.nim} />
            <ItemListList th="Nama Mahasiswa" td={bio.namamhs} />
            <ItemListList th="Dosen Wali" td={bio.doswali} />
            <ItemListList th="Fakultas" td={bio.fakultas} />
            <ItemListList th="Prdi" td={bio.prodi} />
            <ItemListList th="Semester" td={bio.semester} />
          </tr>
        ))}
      </table>

      <div className="biodata-item flex flex-col w-full mt-4 py-4 rounded-lg ">
        <ProfileComponent />
      </div>
    </div>
  );
};
export default ProfilePage;

const ItemListList = (props) => (
  <div className="bio-list text-xs py-1 px-2 flex justify-between items-center ">
    <th className="px-2 ">{props.th}</th>
    <td className="w-[120px] py-1 px-1 text-white">{props.td}</td>
  </div>
);
