import { useEffect, useRef } from "react";
import { Chart } from "tw-elements";

const IpkChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    // Chart data and options
    const dataBarHorizontal = {
      type: "bar",
      data: {
        labels: ["Smstr 1", "Smstr 2", "Smstr 3", "Smstr 4", "Smstr 5"],
        datasets: [
          {
            label: "IPK MAHASISWA",
            data: [3.59, 3.64, 3.7, 4, 1, 4],
            backgroundColor: ["#ff9a12", "#ff9a12", "#ff9a12"],
            borderWidth: 1,
            hoverBackgroundColor: [
              "#f0f0f0", // Warna saat dihover pertama (Merah)
              "#f0f0f0", // Warna saat dihover kedua (Biru)
              "#f0f0f0", // Warna saat dihover ketiga (Kuning)
            ],
          },
        ],
      },
    };

    const optionsBarHorizontal = {
      options: {
        indexAxis: "y",
        scales: {
          x: {
            stacked: true,
            grid: {
              display: true,
              borderDash: [1],
              zeroLineColor: "#fafafa",
              zeroLineBorderDash: [1],
              zeroLineBorderDashOffset: [1],
            },
            ticks: {
              color: "#fafafa",
              font: {
                size: 9.5, // Ubah ukuran font di sini
              },
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              color: "#fafafa",
              font: {
                size: 9.5, // Ubah ukuran font di sini
              },
            },
          },
        },
      },
    };

    // Create the chart when the component mounts
    new Chart(
      chartContainerRef.current,
      dataBarHorizontal,
      optionsBarHorizontal
    );
  }, []);

  return (
    <div className="chart-con mt-2 rounded-lg mx-auto w-full px-2 py-3 text-xs h-auto">
      <h2 className="text-base ml-2 text-white">IPK MAHASISWA</h2>
      <canvas id="bar-chart-horizontal" ref={chartContainerRef}></canvas>
    </div>
  );
};

export default IpkChart;
