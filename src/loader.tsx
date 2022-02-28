import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import Designs from "./designs";

export interface LoaderProps extends RouteComponentProps {}

const Loader = (props: LoaderProps) => {
    return <Designs />;
}

export default withRouter(Loader);

  