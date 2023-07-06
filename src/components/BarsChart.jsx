import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var entrada = [20, 50, 10, 65, 40, 100, 23, 28, 75, 60, 22, 50];
var salida = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let datos = [
  {
    mounth: 6,
    cantidad: 10000,
  },
  {
    mounth: 8,
    cantidad: 5000,
  },
  {
    mounth: 9,
    cantidad: 5000,
  },
  {
    mounth: 10,
    cantidad: 4885,
  },
  {
    mounth: 10,
    cantidad: 1360,
  },
];

var misoptions = {
  responsive: false,
  animation: true,
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

var midata = {
  labels: meses,
  datasets: [
    {
      label: "Entrada",
      data: entrada,
      backgroundColor: "rgba(0, 220, 195, 0.5)",
    },
    {
      label: "Salida",
      data: salida,
      backgroundColor: "rgba(0, 195, 50, 0.5)",
    },
  ],
};

export default function BarsComponent() {
  return <Bar data={midata} options={misoptions} />;
}
