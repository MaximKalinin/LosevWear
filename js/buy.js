const state = {
    products: [],
    params: {
        type: 't-shirts',
        price: 0,
        items: 0,
    },
}

setParams = (query) => {
    query = query.slice(1);
    query.split('&').map(param => {
        state.params[param.split('=')[0]] = param.split('=')[1];
    });
    state.params.price = parseInt(state.params.price);
    state.params.items = parseInt(state.params.items);
    setActiveNav();
}

setCart = () => {
    $(".item-count").text(state.params.items);
    $(".total-price").text(state.params.price);
}

getTShirts = () => {
    return [{
        name: 'Футболка Корги',
        id: '01001',
        src: 'images/tshirts/corgi/0.jpg',
        price: 1490,
    }, {
        name: 'Футболка Корги',
        id: '01002',
        src: 'images/tshirts/corgi2/1.jpg',
        price: 1490,
    }, {
        name: 'Футболка Мопс',
        id: '01003',
        src: 'images/tshirts/mops/1.jpg',
        price: 1490,
    }, {
        name: 'Футболка Счастье',
        id: '01004',
        src: 'images/tshirts/schastie/1.jpg',
        price: 1490,
    },];
}

getHoodies = () => {
    return [{
        name: 'Худи Корги',
        id: '02001',
        src: 'images/hoodies/corgi/0.jpg',
        price: 1490,
    }, {
        name: 'Худи Лосев',
        id: '02002',
        src: 'images/hoodies/losev/1.jpg',
        price: 1490,
    }, {
        name: 'Худи Мопс',
        id: '02003',
        src: 'images/hoodies/mops/0.jpg',
        price: 1490,
    },];
}

getSweatshirts = () => {
    return [{
        name: 'Свитшот Мопс',
        id: '03001',
        src: 'images/sweatshirts/mops/1.jpg',
        price: 1490,
    }, {
        name: 'Свитшот Корги',
        id: '03003',
        src: 'images/sweatshirts/corgi/1.jpg',
        price: 1490,
    }, {
        name: 'Свитшот',
        id: '03002',
        src: 'images/sweatshirts/sweatshirt/1.jpg',
        price: 1490,
    },];
}

createContent = () => {
    $(document.body).hide();
    $(".no-js").remove();

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

    setParams(window.location.search);

    setCart();

    switch(state.params.type) {
        case 't-shirts':
            state.items = getTShirts();
            break;
        case 'sweatshirts':
            state.items = getSweatshirts();
            break;
        case 'hoodies':
            state.items = getHoodies();
            break;
        default:
            break;
    }
    
    arrangeItems();

    setLinks();

    $(".menu-element").each(function() { $(this).addClass(randomColor()) });
    $(document.body).show();
}

setLinks = () => {
    $(".t-shirts").attr("href", $(".t-shirts").attr("href") + getBuyUrl("t-shirts"));
    $(".hoodies").attr("href", $(".hoodies").attr("href") + getBuyUrl("hoodies"));
    $(".sweatshirts").attr("href", $(".sweatshirts").attr("href") + getBuyUrl("sweatshirts"));

    $(".menu-element").each(function() {
        $(this).attr("href", $(this).attr("href") + getItemUrl($(this).prop("id")));
    });

    $(".home").each(function() {
        $(this).attr("href", $(this).attr("href") + getHomeUrl());
    });
}

getBuyUrl = (type) => {
    let params = '?';
    params += 'type=' + type;
    params += '&price=' + state.params.price;
    params += '&items=' + state.params.items;
    return params;
}

getItemUrl = (id) => {
    let params = '?';
    params += 'id=' + id + '&';
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
    state.items.map((item, index) => {
        if (index === 0) {
            $(".content").append("<div class='container items'></div>");
        }
        if (index % 3 === 0) {
            $(".container.items").append("<div class='row'></div>");
        }
        const element = 
        "<a href='item.html' class='col-sm menu-element' id='" + item.id + "' >" + 
            "<img src='" + item.src + "' alt='" + item.id + "'>" + 
            "<div class='description'>" +
                "<div class='name'>" + item.name + "</div>" +
                "<div class='price'>" + item.price + " р.</div>" +
            "</div>" +
        "</a>";
        $(".container.items").find(".row").last().append(element);
    });
    while ($(".container.items").find(".row").last().find(".col-sm").length < 3) {
        $(".container.items").find(".row").last().append("<div class='col-sm'></div>");
    }
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

setActiveNav = () => {
    document.getElementsByClassName('menu')[0].getElementsByClassName('menu-item ' + state.params.type)[0].classList.add('active');
}

$(document).ready(() => {
    createContent();

    $(".lookbook").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive : {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            700: {
                items: 3,
            },
        },
    });
});



// switch (param) {
//     case 't-shirts':
//         document.g
// }