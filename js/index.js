const state = {
    params: {
        price: 999,
        items: 1,
    }
};

createContent = () => {
    
    setCart();
    setLinks();
}

getBuyUrl = (type) => {
    let params = '?';
    params += 'type=' + type;
    for (let key in state.params) {
        params += '&' + key + '=' + state.params[key];
    }
    return params;
}

setParams = (query) => {
    query = query.slice(1);
    query.split('&').map(param => {
        state.params[param.split('=')[0]] = param.split('=')[1];
    });
    console.log(state.params);
}

setCart = () => {
    $(".item-count").text(state.params.items);
    $(".total-price").text(state.params.price);
}

setLinks = () => {
    $(".t-shirts").attr("href", $(".t-shirts").attr("href") + getBuyUrl("t-shirts"));
    $(".hoodies").attr("href", $(".hoodies").attr("href") + getBuyUrl("hoodies"));
    $(".sweatshirts").attr("href", $(".sweatshirts").attr("href") + getBuyUrl("sweatshirts"));
    console.log('links are set');
}

createContent();