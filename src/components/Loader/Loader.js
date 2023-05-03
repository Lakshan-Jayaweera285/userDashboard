import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: auto auto;
`;

const Loader = ()=>{
    return(
        <div>
            <HashLoader color={"#36D73A"} loading={true} css={override} size={100} />
        </div>
    );
};
export default Loader;