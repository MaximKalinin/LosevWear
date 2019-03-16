const state = {
    cart: {
        price: 0,
        items: 0,
    },
    products: [],
    params: {},
}

setParams = (query) => {
    query = query.slice(1);
    query.split('&').map(param => {
        state.params[param.split('=')[0]] = param.split('=')[1];
    });
    console.log(state.params);
    setActiveNav();
}

getTShirts = () => {
    return [{
        name: 'Футболка корги',
        id: '01001',
        src: 'images/tshirts/corgi/0.jpg',
    }, {
        name: 'Футболка корги',
        id: '01002',
        src: 'images/tshirts/corgi2/1.jpg',
    }, {
        name: 'Футболка Мопс',
        id: '01003',
        src: 'images/tshirts/mops/1.jpg',
    }, {
        name: 'Футболка Счастье',
        id: '01004',
        src: 'images/tshirts/schastie/1.jpg',
    },];
}

getTShirts = () => {
    return [{
        name: 'Футболка корги',
        id: '01001',
        src: 'images/tshirts/corgi/0.jpg',
        price: 1490,
    }, {
        name: 'Футболка корги',
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
        price: 990,
    },];
}

createContent = () => {
    $(".no-js").remove();

    setParams(window.location.search);

    state.items = getTShirts();
    arrangeItems();
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
        "<div class='col-sm menu-element'>" + 
            "<img src='" + item.src + "' alt='" + item.id + "'>" + 
            "<div class='description'>" +
                "<div class='name'>" + item.name + "</div>" +
                "<div class='price'>" + item.price + " р.</div>" +
            "</div>" +
        "</div>";
        $(".container.items").find(".row").last().append(element);
    });
    while ($(".container.items").find(".row").last().find(".col-sm").length < 3) {
        $(".container.items").find(".row").last().append("<div class='col-sm'></div>");
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
    });
});



// switch (param) {
//     case 't-shirts':
//         document.g
// }