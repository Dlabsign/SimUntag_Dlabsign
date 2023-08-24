import { dataMh } from "../../../dataMh";

const Schedule = () => {
  return (
    <>
      <div className="banner w-full mt-3  rounded-lg px-2 pb-2.5 pt-4">
        <h2 className="text-white px-1.5 font-medium text-base flex justify-between items-center pb-2 text-left ">
          JADWAL KULIAH
          <i className="fa-solid fa-print text-sm " />
        </h2>
        <div className="banner-container rounded">
          <table className="text-white flex flex-col ">
            {dataMh.map((item) => (
              <tr
                key={item.id}
                className="banner-list py-1 px-2 text-xs text-left mb-1 rounded"
              >
                <th className="text-xs font-semibold">{item.desc}</th>
                <div className=" flex justify-between items-center mt-[-3px]">
                  <td className="text-xs opacity-75 font-medium">{item.jam}</td>
                  <td className="text-xs opacity-75 font-medium">{item.sks}</td>
                </div>
              </tr>
            ))}
          </table>
        </div>
        <p className="text-white px-1.5 border-t font-medium text-xs flex justify-between items-center pb-2 pt-1">
          Total sks <span className="font-bold">24</span>
        </p>
      </div>
    </>
  );
};

export default Schedule;
