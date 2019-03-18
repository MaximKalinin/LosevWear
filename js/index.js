const state = {
    params: {
        price: 999,
        items: 1,
    },
    colors: ["yellow", "red", "purple", "orange"],
};

createContent = () => {
    
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
}

randomColor = () => {
    switch (Math.floor((Math.random() * 4))) {
        case 0:
            return "yellow";
        case 1:
            return "red";
        case 2:
            return "orange";
        case 3:
            return "purple";
        default:
            return "black";
    }
}

shuffle = (array) => {
    let j, x, index;
    for (index = array.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = array[index];
        array[index] = array[j];
        array[j] = x;
    }
    return array;
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