import React, { useEffect, useState } from "react";
import { AreaChart } from "../../components/Charts";
import getStockExchanges from "../../services/getStockExchanges";
import { actionsList } from "../../utils/actionsList";
import { getFullNameAction } from "../../utils/getFullNameAction";

export function Dashboard() {
  const [data, setData] = useState<Array<object>>([]);
  const [actionName, setActionName] = useState("");

  useEffect(() => {
    if (actionName) {
      getStockExchanges(actionName)
        .then(({ metaData, timeSeriesDaily }: any) => {
          console.log("metaData", metaData);
          console.log("timeSeriesDaily", timeSeriesDaily);

          const transTimeToArray = Object.entries(timeSeriesDaily);
          console.log("transTimeToArray", transTimeToArray);

          const adapt = transTimeToArray.map((time: any) => {
            const dateTime = time[0];
            const stockIndices = Object.entries(time[1]);
            const indicesOHLC: string[] = [];
            stockIndices.map((item: any, index: any) => {
              if (index <= 3) return indicesOHLC.push(item[1]);
            });

            return {
              dateTime,
              indicesOHLC,
            };
          });

          setData(adapt);
        })
        .catch((err) => console.error(err));
    }
  }, [actionName]);

  return (
    <>
      <div>
        {/* <SearchInput
          value={actionName}
          onChange={(search: any) => setActionName(search)}
        /> */}
        <select
          onChange={({ target }: any) => setActionName(target.value)}
          value={actionName}
        >
          <option value="" disabled>
            Selecione uma Ação
          </option>
          {actionsList.map((action: any) => (
            <option
              value={action.name}
              key={action.name}
            >{`${action.name} - ${action.company}`}</option>
          ))}
        </select>
      </div>
      {actionName && <h2>{getFullNameAction(actionName)}</h2>}
      <AreaChart stockData={data || []} />
    </>
  );
}
