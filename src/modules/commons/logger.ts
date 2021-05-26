import pino from "pino";
import {useMemo} from "react";

export const logger = pino({
    level: 'info',
    browser: {
        asObject: true
    },
    redact: {
        paths: ['password', 'secret'],
        censor: '****'
    },
    formatters: {
        level (label, number) {
            return { level: label }
        },
        bindings (bindings) {
            return { pid: bindings.pid, host: bindings.hostname }
        }
    }
});

export const useLogger = function(from: string) {
    return useMemo(() => {
        return logger.child({ from })
    }, [from]);
};
