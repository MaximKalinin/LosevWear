const state = {
    params: {
        price: 0,
        items: 0,
    },
};

createContent = () => {

    setParams(window.location.search);
    
    setCart();
    setLinks();

    $(".menu-button").click(() => {
        console.log($(".menu-items").hasClass("active"));
        if ($(".menu-items").hasClass("active")) {
            $(".menu-items").removeClass("active");
            $(".cart").removeClass("active");
            $(".menu-button").find("img").attr("src", "images/menu.svg");
        } else {
            $(".menu-items").addClass("active");
            $(".cart").addClass("active");
            $(".menu-button").find("img").attr("src", "images/close.svg");
        }
    });
    
    $(".menu-element").each(function() { $(this).addClass(randomColor()) });
    $(".feature").each(function() { $(this).addClass(randomColor()) });
    $(".cart").click(function() {
        state.params.price = 0;
        state.params.items = 0;
        setCart();
        setLinks();
    });
}

randomColor = () => {
    switch (Math.floor((Math.random() * 3))) {
        case 0:
            return "yellow";
        case 1:
            return "red";
        case 2:
            return "purple";
        default:
            return "black";
    }
}

getBuyUrl = (type) => {
    let params = '?';
    params += 'type=' + type;
    params += '&price=' + state.params.price;
    params += '&items=' + state.params.items;
    return params;
}

getHomeUrl = () => {
    let params = '?';
    params += '&price=' + state.params.price;
    params += '&items=' + state.params.items;
    return params;
}

setParams = (query) => {
    query = query.slice(1);
    query.split('&').map(param => {
        state.params[param.split('=')[0]] = param.split('=')[1];
    });
}

setCart = () => {
    $(".item-count").text(state.params.items);
    $(".total-price").text(state.params.price);
}

setLinks = () => {
    $(".t-shirts").attr("href", $(".t-shirts").attr("href") + getBuyUrl("t-shirts"));
    $(".hoodies").attr("href", $(".hoodies").attr("href") + getBuyUrl("hoodies"));
    $(".sweatshirts").attr("href", $(".sweatshirts").attr("href") + getBuyUrl("sweatshirts"));

    $(".home").each(function() {
        $(this).attr("href", "index.html" + getHomeUrl());
    });
}

createContent();