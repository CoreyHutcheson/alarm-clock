import React from "react";
import { storiesOf } from "@storybook/react";

import { Clock } from "./Clock.jsx";

storiesOf("Clock", module).add("Basic clock", () => <Clock />);
