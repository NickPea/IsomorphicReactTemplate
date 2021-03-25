//

import { app } from "./app";
import { config } from "../config/app";

const port = config.port;

app.listen(port, () => console.log(`\n-- Express Listening on Port: ${port} --`));
