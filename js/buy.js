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
        src: 'https://lh3.googleusercontent.com/dAXoNqw3vsDc248a0vR4XFgWSt4_-7NhS2jg9nqZQ1P8aZ_ergDebflIsTSQANDAGqgLmUrnb2qWAhUSU5RqznRAAdvtARWN3_ZqSS-rjILr7RpuQCjVKYxGRCHCUoiJw7e3iOam_rVuVEWpCEXyRAe4Gut4Qb50mHJob6vKbLPXB930ydUJ_XTsprWdv4GM0DWbf_P9N02sTMTspbS937T7xQ8wR49LG69Be4EF4s30Eji5swU3OfqkABiRjbtAstcRpPmVcqqhWBSEmVE-3IEEFANrmdgrwwJ2OkDT2yihtsCqZlfAmAqbSUbYbYtrj2sgVgCEDtk_qhqr3M39lr9laGPNOujgkY5uwdAEWcn4Wk8jIFWa_v3Rc-o1N7F-CcifxxvIZpPiFVOs3x13oiTyjb6w1c9x4qE8r-p75O-mwlAvIpQfUUlWYKN5X6JZKWokfb65TEdLPoYNTkvleS49qK8p2sM9gMdsyzIdpfyAVoiP1Ryi84vci9-T21lwvjtSpWbQpRMEmMUVsN2gBfQ2Gukezt1rsnPESHIO9oTnbZ_auXbMJ2Rfw2UWgZvaG2LHHb9j9Hq_jUGNuz7hzO6rq6CF4J2KcDTAS82kObv4deR93Veq9yqzMfePxEk1Di2Fu5NjoUMSPbJ-XN5bTq-qfeHZ4d0=w1000-h1498-no',
        price: 1490,
    }, {
        name: 'Футболка Корги',
        id: '01002',
        src: 'https://lh3.googleusercontent.com/9pEXD3L4aVnPKJPSPnEM9Ep7B7SL5r8S2ZOf2H9tJ0jOB7ZMFIsk7WIJmq2aFdfzfvM3jG00sfcBxxUAOyKHehpNHtaZ5mQ7zMvFXU2oS8G4ZIfB7a_u6wt7OCbdULyFBBV-inhIM1TO-uUT25J9v6uzgV7cnlE8GEM4I2e7aAIWFKPYpY2IIS6_ckjrpy0ChpOnoXeJmvFq_Uzp42KksTaMKlLpTqtpD9Aig6PlaRPU471c_muwMHniJDDFxB3p1a-0N2dN3KEU3jKodTh831lDsFpPcDg14_oWv6GWAMxBGs6qMYatr4O_aYihN6_3eyrvOkUGKerxd00VChxjck-HpHN9Ooc1X3Z0JEslkdlUCU84gu0UfvFplIUikAY-qhbCtDYIn9XwFTCVzLmb7i7CNHtFZw1-ENKekT3yeIjm8ETVhckS-hll91wlCxX_b1vtEhSoWnTxLgrvh64f97d1Ku1qJ1-MhUI0JDuFxvLS92tDIMIouQtyUIaXSAi6lQ88zkw0oKfD8Gqmd83qxg03pWM-AnadOGn-4jYXMIcusOh8pS78Q6-VTiiOI1z5ZTEKqz2gCpkR02JR27CA2Cp8S_MpbfdXRruqFIUpfGw-bq_rb_Bri80oIwxc5TbSPKKVgKJL1lxrM0Cnw2Qsw2g5ZxNFQ_0=w1000-h1498-no',
        price: 1490,
    }, {
        name: 'Футболка Мопс',
        id: '01003',
        src: 'https://lh3.googleusercontent.com/3otZeKdNAQHM3xW6Al5XI0bE8_tczhTZGyx66c_2rSMe7r8572oqAzuqYNAKJWLLLAUZz4vgHG5h-JnQ22yEbotYz-ghOFcKQggkfg43OrTI58KRVCEiJeSog6T3rUj11NCgF-aGPub9if4TPCpfWH4NAARRSxlvqvjwKKH8c47Xea5lewBz2Dyq5mFdEVo_obg5694RTe20_4FHukhl1vM11Jjv8g6CB_5dlCifaM2c-V6TOXY4VxoWINFIDdUiNOOU1VX3egJOwxf1xYXV5nrfZFXeWQ7Cd-woTpUa_W_gd-RRIr7JuZDXybHXyIowj1guuwZMOgaTii9vAO7QCKNLMgxgcKP0cCt3UDv8UoPG3oJYVkyHX1lK2TqzQwOeYMlKmnbc315HgoUBxrmtewmCJoYsicRcZrctCFYgtjoIhjkC94P_mhP36AtcrrhHWHsrA8vgdULSu4JQPb_2rQtBWPett-YYP-Hnf9IOGDd3lr2uytmwAGFygPsXcj4Kj53kGzkWaSAwNP4hWOFT9qfz4G_TTihy6SeU4EVFHTIiAdO5sh8R9oE_coMITT6chlRx7O_-wDEiEGTFN4WXNsxTsiNJFdTKsvyHrA_-CkkipmPSLkVLf5q7MEWWYG-UM6zqZxNCsHHQin1HAO07Uq5OOC9aCdc=w1000-h1498-no',
        price: 1490,
    }, {
        name: 'Футболка Счастье',
        id: '01004',
        src: 'https://lh3.googleusercontent.com/acGkxtVRAkP3h4BZ3CqH8CjvEe7k7GgSBNB4PO7huGqcudnneiy5ns5DoH6HnNXGtO8B7GObDaR0abI-CN-87mUFQRpYLiJ5CLhRTJHunO_DWzbHeooyFLrd8MsXiIO5CPn0v23QLptt9aXJX9M08w2rMbpgxT_9Rruyqc2Q0sxtPKEtuSVemzSrfTL7JHEoiZnnJZoAh0DpBOm3bRxcJDeGOVeM8-X0mw7Fim__Iyws1wa6zK5m_0OfRxI_IcRzv4xJcVzznfsew-0AUgE2J0BRDo3I-LF-EV9vs6FjSK17IkNu9wL0LuTU1XYpuPGoB7bFTLLgHpRGGwEV8P6GBOzVDdkZS-6ybL1D3HpeBeUE5XPLsTlR3qzJ9V2l8hinOdpVIs-DtmT6mBzn2R85Tssjo9RakclWcZifVaFQMaaEGpRPc5X75myidax-CDGe9OUHrlj5r18O_JrYGAvswEq-wqtMBK3HeI9_a1yGcYbnkM0S8PFejjJOtzDAB4vAYPU2_apSsZG7kXYMfVcJz4dqGjA1uh1iAUhMayzOqQ0n25c3TRafRP-i1ht4WM1nA2VirE6zzdNhuCz5hjBBze8XTv3xayQHNi75kRS4rGBgATaYNm110u3-sBFFPUd7iHxNF3w7rVYcUQ8517NMC_JArVWujhQ=w1000-h1498-no',
        price: 1490,
    },];
}

getHoodies = () => {
    return [{
        name: 'Худи Корги',
        id: '02001',
        src: 'https://lh3.googleusercontent.com/7eZMAVbyYmpRCHWdMrYYRL7VHRBhKB0BnRSU5lYYjl9a2cuMj6pjZglAUc1p8aSldn7SelqHU9H6A96256PUQnajWIcqr0uc5kg6roMGtja0W--lJ31jpISi0Dx76kpe7vBrGtRfNmOhVYLG_K-syo7A9KYMecpj-Ujut1ZGkyAFMnb-3c-H2MOxFO2ojnG4DFRQNCG4eIJiQJZLFkdnxQziQxvjt1I0kDsnQ1BEkZIUXurcWGQRiqt4DtsZxD3swDW2Sz1k7MW4GDJWzAOncAwZl2k-6qjOiwBTLL17_WePTiZB3b1-7o94I7n7ofJs-nJEuiJsLbE4yTxlOn3AktiHFKulkVFSmBVANvstblrkgzI8XyDZJnAByKQlFo4zM16dyIVMznmYrbJNeq_11NHZQanePqr6h_lrH01JKUX08s_WgS8H4RooleWVxF_cGLzcyBbMV5D2HgJy9LjCefEWgCpkmYHZfDyAjvVh0ZRlR8oNdSUgqFugNTEbM0bYn0pCXYzhzbZMjyofb0eK9mOU5ldSAXwyhXQzY35qSm0q30VcwLvCrXBvUBTdQONEdldpIeWIYPiKAohWContBGg_iMFBglb71GJbh6q_2QeSG6-0hcUpePe6R0aH31yku9fOC1xvNpnqfQjUngZ0CucNouIaApc=w1000-h1498-no',
        price: 1490,
    }, {
        name: 'Худи Лосев',
        id: '02002',
        src: 'https://lh3.googleusercontent.com/Zo5gtyYOzRFdgiv0sOIXSeXIiRxSIC-dGQQZuhlb2UZESY_SR2zBjZdFc7Xs6kt3wtNQvBmNikxsSXxT-3SuDte7X-rFZp2sBpIvxrB3Ks-iIswQKBjpde-aYpXSbE2d-Ly1OUvmcU7fGxln_pSQN_FZCbwYpVZYN1y5VvAQpArvGs4DR74Y0TQHpgjmcT-IisXxeSMz0t-i7f6HbstN22sxH-YTDFuNobX1SvZcQeK10FK362gIMnUmmeovWD0RLx5VBTU5kJOKj7NhsIKHFKRasJffXPHJrz7risrNYulkWtK4VikAI4XmsO1BC0hW-WrhJjFqZyLW0G0kiHZdOtvCkRvwd7kWAc33oI26xzSFivSBecQc7-CZxhiLVAbMfAy5x884NEkEMPnaQTbvjbMo97f3oDe2t3Ox_C1k1IGUiPimhQuSVgUtvbCEA2wZobOqFdBQ9GOvU37_etP5XrTta59xv35i0Sf606_UxsXty9XJpmzo-vDVKmHkSOOE6T2U9vCjf47OahJLTprBc9c_FQ_KKgfIuoCilvZoHepbIPFMotPK9BELd6TtzhFdvFJ3blh_bQw55cJYIZr04Ho9-d2o0Pauk54Nh0XPxaehTWXDJOFLLsUZV_36LqZSE2oFDLZPRqoo_zZameaqzCmjGhpFfow=w1000-h1498-no',
        price: 1490,
    }, {
        name: 'Худи Мопс',
        id: '02003',
        src: 'https://lh3.googleusercontent.com/FsQEuQKvev-JSRvip_q1uKqJyD9JE6vE-LYqlurW-PvU5zxIWAp0b9byIAMnzAJ-KuOvAp2JXoLRmOSVK04voQ3OYnwsy6U_jdF0eqttnI2Dt1NQA8MX99Pq1a8PgT_7ALHXuTQlewNx7gdpYxjJRqqK6IbHQDEV_0mjD2LaG5pnw1UGvVhW0mRnWVprxI4BHTTfu4I4nXTHu5-ocleaHAW82pvWP8V5ZtRLCGTmDDTQ3grCCZmmGHTrL5TXh-vCBzDC5J1TI23NEinUPscu9Ncur7scRtXm5lnFdwrc3pqX67EYAP5kBBdIXMlN1-EwH34FB75cMNy7oTf0C9zm6WX3Q3VNI4rrbtxSGEsSjCmTlz34ockmkE7VV03wC2W7kMOsIV8dwQK6AUesGmSpZ4eqoE37FFZ_M6YYoT-4vvtXucrJU139M0mMeWG-LGAIIrfkimPypsOFQ90eF4r-BqiWT52d_LhTtauyYzLNCFXTSx6iIE2kW5Iwshb_9JRLvNPYdQGJZQ27gBFcHBnl0Ibc4zlZ2vDoGOyXWaGjn33L6lN0Pjte3disVw3T3KUMSnwfA43FDu4GUJhqQgLRlb5BNMXgPgnzDYWvkVOL5hId80mKdA599RX7dcPCO3nnDTZATIa-GGWgQ8emSVrnQD9MBbSO6tw=w1000-h1498-no',
        price: 1490,
    },];
}

getSweatshirts = () => {
    return [{
        name: 'Свитшот Мопс',
        id: '03001',
        src: 'https://lh3.googleusercontent.com/CAYO9YeKyyltoBs-yUYXecBhoFBnd5UCBNHVrmsDoMOpgztEveTRUaWTEFXBhtjQDsA6vLnVhsEDhdrEQqaoCD7l5IO3To_NYafP-Z-lVSdjgtgTKSm8ALOe5QRQyk9MLFwIHry6FBLoNVLkB3R1R1gE3zWq_RrbhJVHVQaIDMQoOWle3wmyTHiSdoXPXXgQtT6r9PYRSLoMX2E3N1rui7j_f06e0VRItk7kTrsQZwzASqc0t_dNPb0b-XsivJm2B_qCvfh0yCRsBF7y9x6yrm9HQpPJMYYDEUic4NN6J89rxgy4TjQsEjfuZ6kZ43JNs8xCpkHvEsw7XuNnQPsTyXk9-kE-nkjceLLFSS5qrhbcuiIpeMcpla7ip4BQavV5mgGaDbsEfe1kiX5WSmCJnBvcq4rNF35G6fCju-MxDzj-ck2lBg-V2dsbELS9wWh9a41ZcV221t9gKEYPwyRqq9cUVFLtT2QN1NkO2-l8NlmktYQQ99wAv-aAE0wwkvQX-Zd0Yn1zDRg9E13PMEwo0bKrCNoMpaH-ZIEUjhkPzdBQ4vagAywUs0X7iSJdODBbJoNSXGnTde3dNQcypphD2OJLaPBeRuS0IMw7KjYMQwYq6GZVPjfGiHWBH6d2V4yQeWCfgl7iqP7MpljZA6rQ-jR5mIgW264=w1000-h1498-no',
        price: 1490,
    }, {
        name: 'Свитшот Корги',
        id: '03003',
        src: 'https://lh3.googleusercontent.com/vPlBT4ePzJO3U0PHXD6ahFFwkcpr9Jqf0DvJbY6Ev5TQZD-2UsEDQe2-eLA1bM_OeFB_3FLuyfGVt3vvrNCdGmEB48V7FA1Pk-yEzwaRG5FWscYIiPUtJ_V3hUbHviUm2NRnvLDbqMdH-rSWO7FsKkJim-c4OOVN1oF6FnAS6bAoOQJ80uBFNi4u7JdHf9gf9huhutWMbup-S0WPHwaAqtdBCEwP_BuJyOykqFXTPyAyl5-7tVaYao600-wtSGTu-ya6qwnC69hhC7g30PeY8BFRz_pha1g3DGmFayDeyLEOFMxj2xzfV8YhI1maZn8uJ4kgvAkCzblo2VjmZqtMYe30U41sntcmHST4u1GsBGDIFtRJihJabiwXlQ8c0uJZHz6s1Dz66FQXsFwnktKsXhDMAKNzXVzOW3n2w7UXDo8ZywASRGTmJlAEZSrFlKWlYovgzykpoisNVyXkDPh08PyqJKihgTomLjRkFHZvOJNvkR2AkbRk9bmRhCj4uaoiBg5L9HzHgjHTopeRhJLxXz9HnKpY6lmZMrHjQbDremzj-nlx2M2PztDc3qLJjgIOp7Meg5S65Kh6F167L8bamy-T1GNIxUtVEBbNHfzKRNuaAsc5rH9VmXwuE66ulZN7Nol_LddLBg8EzwGcBfO_uRjN65koHVo=w1000-h1498-no',
        price: 1490,
    }, {
        name: 'Свитшот',
        id: '03002',
        src: 'https://lh3.googleusercontent.com/dqebxv_wr3vygh8OPc2a7u-RsYxxcI61D4NpAedwCO0EvBa8QRpI-vZ_GWom01rC_WvcRsO3mZt0xUOaSIRom5DyiQJQi2D05GAzO3jsmY3PwH0gKgN78bLTNY-WOAG86E3kCFl5jGaWRMYqsQk9fRLgmE5KBgmuPNfcYZ17NY6cgulzAANDfHr9wTUuRPt-aY5DNd2oykcyVbp3gvmf2mlY_2StyfWIkMHM527UjZepBkDzqCMt5ZWWxb3_xZTbtIWxeaH5AjKgGagfTVNTz3swt_7DaGzIiYTAwL5cGam9tuuLZu2ElupK6dI-5M1xvADxu2aACzd0f0wGePzwTanRgqGCJS1XD1u9RzUD_72vlGl9U_b3HXfqDIDC-4mFcoWMAwX9ywlLey51KiDSGq6FKAcO4Ap2tczFKsRKPqdAEe1CUP2hNoLTlaN6BqRyv1CMrSuze69KhcWTAOVuOZxEHHuHL2PUo9s83iHSNm9O9jWTyku6r355XGJWrDGXrhvRdNTCJM_ssrNiI9IiL3gtXrbBt14IVKSrikGB39JRtm2YC21RqDkOlMvEBtU9unvU7QevAp_X_yoKrTmU1_IdkCJpXvH_00pnN2gnM8URt5yJWo4-xtLiB6vYfm4rscyR2mti1IXXTiP4mXMLXrBIa0bAME0=w1000-h1498-no',
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