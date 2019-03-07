import Raven from 'raven-js';

function configSentry() {
    return Raven.config('https://53959d8ed831431eb7784443fbcf5667@sentry.io/1410649').install();
}
export default configSentry();
