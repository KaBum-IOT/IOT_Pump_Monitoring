import { Chart } from "primereact/chart";

interface Dataset {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
}

interface ClimateDataProps {
    labels: string[];
    datasets: Dataset[];
    xlabel: string;
    ylabel: string;
}

const ClimateChart: React.FC<ClimateDataProps> = ({labels, datasets}) => {
    const data = {labels, datasets};
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Data e Hora'
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Valor'
                }
            }
        }
    }

    return (
        <div>
            <Chart type="line" data={data} options={options}/>
        </div>
    );
}

export default ClimateChart;