import { Box } from "@material-ui/core";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { getTime } from "../api";

export function Time() {
  let { id } = useParams();
  const { data, isLoading } = useQuery(["times", id], () => getTime(id));

  if (isLoading)
    return (
      <Box component="div">
        <BounceLoader />
      </Box>
    );
  return <div>{data?.data.team}</div>;
}
