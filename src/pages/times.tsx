import { Box } from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { BounceLoader } from "react-spinners";
import { getTimes } from "../api";
import TimeCard from "../components/time-card";

export function Times() {
  const { data, isLoading } = useQuery(["times"], getTimes);

  if (isLoading)
    return (
      <Box component="div" width={1} display="flex" justifyContent="center">
        <BounceLoader />
      </Box>
    );
  return (
    <div>
      <Box>
        {data?.data.map((time) => (
          <TimeCard
            key={time.id}
            id={time.id}
            team={time.team}
            amount={time.amount}
          />
        ))}
      </Box>
    </div>
  );
}
