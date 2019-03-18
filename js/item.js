const state = {
    items: [
        {
            id: '01001',
            name: 'Футболка Корги',
            price: 1490,
            src: [
                'images/tshirts/corgi/0.jpg',
                'images/tshirts/corgi/1.jpg',
                'images/tshirts/corgi/2.jpg',
                'images/tshirts/corgi/3.jpg',
            ],
        },
        {
            id: '01002',
            name: 'Футболка Корги',
            price: 1490,
            src: [
                'images/tshirts/corgi2/1.jpg',
                'images/tshirts/corgi2/2.jpg',
                'images/tshirts/corgi2/3.jpg',
            ],
        },
        {
            id: '01003',
            name: 'Футболка Мопс',
            price: 1490,
            src: [
                'images/tshirts/mops/1.jpg',
                'images/tshirts/mops/2.jpg',
                'images/tshirts/mops/3.jpg',
            ],
        },
        {
            id: '01004',
            name: 'Футболка Счастье',
            price: 1490,
            src: [
                'images/tshirts/schastie/1.jpg',
                'images/tshirts/schastie/2.jpg',
                'images/tshirts/schastie/3.jpg',
            ],
        },
        {
            id: '02001',
            name: 'Худи Корги',
            price: 1490,
            src: [
                'images/tshirts/corgi/0.jpg',
                'images/tshirts/corgi/1.jpg',
                'images/tshirts/corgi/2.jpg',
                'images/tshirts/corgi/3.jpg',
            ],
        },
        {
            id: '02002',
            name: 'Худи Лосев',
            price: 1490,
            src: [
                'images/tshirts/losev/1.jpg',
                'images/tshirts/losev/2.jpg',
                'images/tshirts/losev/3.jpg',
                'images/tshirts/losev/4.jpg',
            ],
        },
        {
            id: '02003',
            name: 'Худи Мопс',
            price: 1490,
            src: [
                'images/tshirts/mops/1.jpg',
                'images/tshirts/mops/2.jpg',
                'images/tshirts/mops/3.jpg',
                'images/tshirts/mops/4.jpg',
                'images/tshirts/mops/5.jpg',
            ],
        },
        {
            id: '03001',
            name: 'Свитшот Мопс',
            price: 1490,
            src: [
                'images/tshirts/mops/1.jpg',
                'images/tshirts/mops/2.jpg',
                'images/tshirts/mops/3.jpg',
                'images/tshirts/mops/4.jpg',
            ],
        },
        {
            id: '03002',
            name: 'Свитшот',
            price: 1490,
            src: [
                'images/tshirts/sweatshirt/1.jpg',
                'images/tshirts/sweatshirt/2.jpg',
                'images/tshirts/sweatshirt/3.jpg',
                'images/tshirts/sweatshirt/4.jpg',
            ],
        },
        {
            id: '03003',
            name: 'Свитшот Корги',
            price: 1490,
            src: [
                'images/tshirts/corgi/1.jpg',
                'images/tshirts/corgi/2.jpg',
                'images/tshirts/corgi/3.jpg',
                'images/tshirts/corgi/4.jpg',
            ],
        },
    ],
    params: {},
}

setParams = (query) => {
    query = query.slice(1);
    query.split('&').map(param => {
        state.params[param.split('=')[0]] = param.split('=')[1];
    });
    state.params.price = parseInt(state.params.price);
    state.params.items = parseInt(state.params.items);
}

setCart = () => {
    $(".item-count").text(state.params.items);
    $(".total-price").text(state.params.price);
}

createContent = () => {
    $(".no-js").remove();

    $(".menu-button").click(() => {
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

    setParams(window.location.search);

    setCart();
    setLinks();
}

setLinks = () => {
    $(".t-shirts").attr("href", "buy.html" + getBuyUrl("t-shirts"));
    $(".hoodies").attr("href", "buy.html" + getBuyUrl("hoodies"));
    $(".sweatshirts").attr("href", "buy.html" + getBuyUrl("sweatshirts"));

    $(".home").each(function() {
        $(this).attr("href", "index.html" + getHomeUrl());
    });
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

arrangeItems = () => {
    const item = state.items.find(item => item.id === state.params.id);
    item.src.map((src, index) => {
        if (index === 0) {
            $(".content").append("<div class='container items'></div>");
        }
        if (index % 3 === 0) {
            $(".container.items").append("<div class='row'></div>");
        }
        const element = 
        "<div class='col-sm menu-element'>" + 
            "<img src='" + src + "' alt='" + item.id + "'>" + 
        "</div>";
        $(".container.items").find(".row").last().append(element);
    });
    const element = "<div class='col-sm menu-element'></div>";
    while ($(".container.items").find(".row").last().find(".col-sm").length < 3) {
        $(".container.items").find(".row").last().append("<div class='col-sm'></div>");
    }
}

$(document).ready(() => {
    createContent();

    $(".size").click(function() {
        $(".size").removeClass("active");
        $(this).addClass("active");
    });

    $(".buy").click(() => {
        state.params.price += state.items.find(elem => elem.id === state.params.id).price;
        state.params.items += 1;

        setCart();
        setLinks();
    });
});