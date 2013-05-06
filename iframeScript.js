for(var i=0; i< document.querySelectorAll('cmatch[url]').length; i++){

if(document.querySelectorAll('cmatch[url]')[i].getAttribute('url') === 'NONE'){
            console.log(document.querySelectorAll('cmatch[url]')[i-1].getAttribute('url'));
    return;
}
}