import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const Charts = (props) =>{
    const { allUsers , verify , unVerify , totalAdmin } = props;
    const data = {
        labels: ['Total User',"Verified","Not Verified","Total Admin"],
        datasets: [
          {
            label: '# of Votes',
            data: [allUsers?.length, verify?.length, unVerify?.length, totalAdmin?.length],
            backgroundColor: [
              '#2C74B3',
              '#13005A',
              '#FB2576',
              '#0F0E0E',
            ],
            borderWidth: 1,
          },
        ],
      };
    return(
        <>
        <Doughnut data={data} />
        </>
    )
}
export default Charts;