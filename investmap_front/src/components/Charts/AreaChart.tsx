import { ApexOptions } from "apexcharts";
import React from "react";
import ApexChart from "react-apexcharts";

export function AreaChart(props: any) {
  const options: ApexOptions = {
    chart: {
      defaultLocale: "pt-BR",
      locales: [
        {
          name: "pt-BR",
          options: {
            months: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            shortMonths: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
            ],
            days: [
              "Domingo",
              "Segunda-Feira",
              "Terça-Feira",
              "Quarta-Feira",
              "Quinta-Feira",
              "Sexta-Feira",
              "Sábado",
            ],
            shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            toolbar: {
              download: "Download SVG",
              selection: "Selection",
              selectionZoom: "Selection Zoom",
              zoomIn: "Zoom In",
              zoomOut: "Zoom Out",
              pan: "Panning",
              reset: "Reset Zoom",
            },
          },
        },
      ],
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          const formatedValues = value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });
          return formatedValues;
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    colors: ["#008FFB", "#00E396", "#CED4DC"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    markers: {
      strokeColors: ["#008FFB", "#fff"],
      colors: ["#ffffff"],
      size: 3,
      strokeWidth: 1,
      hover: {
        size: 4,
      },
    },
    // theme: {
    //   palette: "palette1",
    // },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  };

  // VALUES ->
  // OPEN
  // HIGH
  // LOW
  // CLOSE

  const allStockData = props.stockData.map((item: any) => {
    return {
      x: new Date(item.dateTime).getTime(),
      y: [...item.indicesOHLC],
    };
  });

  const series: any = [
    {
      data: [...allStockData],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ApexChart
        options={options}
        series={series}
        type="area"
        width={1200}
        height={600}
      />
    </div>
  );
}
