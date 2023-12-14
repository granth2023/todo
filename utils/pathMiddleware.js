import { fileURLToPath } from 'url';
import { dirname } from 'path';

const pathMiddleware = (req, res, next) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    req.basePath = __dirname; // Now req.basePath can be used instead of __dirname
    next();
};

export default pathMiddleware