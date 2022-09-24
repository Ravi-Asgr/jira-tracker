import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import {ThreeDots} from "react-loader-spinner";
import "./spinner.css";

export const Spinner = (props) => {
    const { promiseInProgress } = usePromiseTracker({area: props.area});
  
    return (
      promiseInProgress && (
        <div className="spinner">
          <ThreeDots color="#2BAD60" />
        </div>
      )
    );
};