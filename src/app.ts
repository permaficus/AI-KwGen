import { 
    serverInit, 
    SERVICE_LOCAL_PORT, 
    httpServer,
    NODE_ENV
} from "./libs/service.init";
import chalk from 'chalk'

(() => {
    serverInit();
    httpServer.listen(SERVICE_LOCAL_PORT, () => {
        console.log(
            `-----------------------------------------
            \n${chalk.black.bgGreenBright(`🚀  AI-KwGen is up and running!\n`
            )}\nMode: ${chalk.blueBright(
              `${NODE_ENV}`
            )}\nURL: ${chalk.blueBright(
              `http://localhost:${SERVICE_LOCAL_PORT}`
            )}\nTime: ${chalk.blueBright(
                `${new Date(Date.now()).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}`
            )}\n\n-----------------------------------------`
          );
    })
})()