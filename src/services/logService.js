//import * as Sentry from '@sentry/browser';

function init(){
    //Sentry.init({dsn: "https://66d22500b66141628451be8ff39ad3f9@o383779.ingest.sentry.io/5214166"});
}


function log(error){
    console.error(error)
    //Sentry.captureException(error);
}

export default{
    init,
    log
};