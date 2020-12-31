import logger from "./logger";

export let info = (messages: string) => {
    logger.info(messages);
};

export let error = (messages: string) => {
    logger.error(messages);
};
