const state = {
    items: [
        {
            id: '01001',
            name: 'Футболка Корги',
            price: 1490,
            src: [
                'https://lh3.googleusercontent.com/dAXoNqw3vsDc248a0vR4XFgWSt4_-7NhS2jg9nqZQ1P8aZ_ergDebflIsTSQANDAGqgLmUrnb2qWAhUSU5RqznRAAdvtARWN3_ZqSS-rjILr7RpuQCjVKYxGRCHCUoiJw7e3iOam_rVuVEWpCEXyRAe4Gut4Qb50mHJob6vKbLPXB930ydUJ_XTsprWdv4GM0DWbf_P9N02sTMTspbS937T7xQ8wR49LG69Be4EF4s30Eji5swU3OfqkABiRjbtAstcRpPmVcqqhWBSEmVE-3IEEFANrmdgrwwJ2OkDT2yihtsCqZlfAmAqbSUbYbYtrj2sgVgCEDtk_qhqr3M39lr9laGPNOujgkY5uwdAEWcn4Wk8jIFWa_v3Rc-o1N7F-CcifxxvIZpPiFVOs3x13oiTyjb6w1c9x4qE8r-p75O-mwlAvIpQfUUlWYKN5X6JZKWokfb65TEdLPoYNTkvleS49qK8p2sM9gMdsyzIdpfyAVoiP1Ryi84vci9-T21lwvjtSpWbQpRMEmMUVsN2gBfQ2Gukezt1rsnPESHIO9oTnbZ_auXbMJ2Rfw2UWgZvaG2LHHb9j9Hq_jUGNuz7hzO6rq6CF4J2KcDTAS82kObv4deR93Veq9yqzMfePxEk1Di2Fu5NjoUMSPbJ-XN5bTq-qfeHZ4d0=w1000-h1498-no',
                'https://lh3.googleusercontent.com/Qso5qjK19m9GKzBUcwclZmqO4CH885UJy4lNfMMjqTJWrPY-QjrdNjbVyrOmZA0k3r_YrH45j-3v6taeH1i2IDclFe8Can2nmhIdP7MX0DmxNWcOYkiLNqwwUJSNT2RZAcBj_OhrVoXuRHXoesM4OGOOFaybdzb1kARV2eTaeFcsqp380Rh8goVJ59JA_beijVnUoPhrePb6yls3NZ7QgHrfyoHnLSc5iQO31AFTUBVjgywtyuJJIuNtHbbr0NFw_v8eXiHqixAVrJBSlVKwTPRGFYj46I0R930QVDRLFZutgwDb6yayzqDIU1C3AqMMmwA_HV7Yt1N0Ir9GMWwwBmbsvb_cRlGMsozjLp7Nwz01y5nIxIMmt7129IN5femy-7Kv-PMdBAPU1-jO3hiCXXSeEWVt1OoCKc3ERsqe-NOAnJyzv3pL_nXT1Y6Xs2Ufmw2eMMDUFMUbh-rQBk6lp9wvDAZCl5zATbzAs_xDQWCyl92yYKLhqcax6qN5Lm1-IKdw-lxvnuxQu8giGCJNdRo0hybAGXHFIIoDgFVGl3egdkxCEHD8nElby3nY-Jy5_LcQGoxl5j67EuWF3CHgSn0Dh5hTyPmWHVS4zWX8WnWFtmCMl16ruxteIWoDeKXgKXcGdhUcgGFi4LMzyLi1HmlWbGZeeNw=w1000-h1498-no',
                'https://lh3.googleusercontent.com/gFU9hfIXLl6AGcZ8P0ecX2KY0ZMZlYLOFqNvNbu8-w4wcoraaJPtNprOBO_qKNhXuz5TwUDtSLul0hUAe5167D9VNUv9CAf7HA0dpjb2jEiCytNe3IpOqtvnXYwa4ZuQXonw1uLLzi8EfOD1uuE7miht-MLacem_WFLwiaK1PNyYhZ5Ym_ClnO0J3DZbGTWd9nhCMBDyltXcyftyDLHHYFRL4Ozu1VE_O49IuYYO0RGQqlfue6uedv6sFFqR2lWJXceEfnQIZMD8OcrJglqAUanNIvQUOrp_imw2mGW_ojyqCeH7asO9E7yZyG_BIrq1r2aEeYGH5pTgH1yeXaOGM5503O_7HXXmqWk3id_aHSIV6h6w9_F3AHnhou4scob1UrfTSYC2Hlkkp2HCXOzZC6aaI1hMa1Gy4vuO_8hlfzoiIEvyr8_6i4hM9aXU_602Vq8Cwvde4qaUHkzsbO9xVWGDi3px3j-kYKUTUAmjff-mD_YeP7lHeJI7Yb2ROXf4LU8jqcfy5QdYai3lbowgfA1tIuTItvMcQwvLcFF31xWioRTGf46rqvlVpjuZ4IXT1WyoCL2g14EqUp3F-AU-TIzZX0J0R8eUSuTXQU5XtXAhIiFEpNoqlIwRCQyGNskRo04O1xjKLsSMDwOWxGKVrjyugpiA1u8=w1000-h1498-no',
                'https://lh3.googleusercontent.com/UHq_I0mLg1azJ-ncUUuFqyl3uFqrNn6px2aQAX1Y6UhwbpWdcWYhu9oc5Gu8IFXrucGr7x83CefY91rVSTRbPSsAqwPGx0h-LQuF-Y-hfnCQ4rIThEO2JQjbPczPeMOlIXwA-Yvyy_2RZ9O8OTVDqj7II10gl-1K5FxHKzPxhhkTxmnDY-9xHlRnYPCeT43B_jVrcOZ5WoO8-zemqdxSjs89qho2CgtwkO_wrYqFz7oTrxDqA499pOxzjIs3lUgUBCZRWdoLxVaInBCqgoTbl_xkD5Ym2jO4Tasi258ueCaPDAfmkjPoC7kfc6ZT5SacYfPns1mG5FpdNszCa-4nBb1t1fwWKkQJLxGn4EI9gyQWBfpKD-fNPZRGX_z0NDU2kBG6U7tu8ei98axtsQ1Gm5SjiN4I1I1VwMIlT1u9ydVtWvBqpGFs6BQe4x_yinnU7iR54opDz_6Dp5PEhnW_UmClaRNaiO1PyDNXkurs_8kIBLG3XGqFsW69G8_cBFKd6Qsrdtq-dhcTgYsjcn6A06JnsOf9uJy23dWzq9CnBtPhbNzW9GfpPa8VyLa86-Z9OUexb5XtqUxOrSUm9NQObVwQDF9cj7ZBjmJtHYn6Q8jYaQVZaHqk3vH8LdSAdPjnNfbVS2eJDd6PQt_yYniKviviAURSzUQ=w1000-h1498-no',
            ],
        },
        {
            id: '01002',
            name: 'Футболка Корги',
            price: 1490,
            src: [
                'https://lh3.googleusercontent.com/9pEXD3L4aVnPKJPSPnEM9Ep7B7SL5r8S2ZOf2H9tJ0jOB7ZMFIsk7WIJmq2aFdfzfvM3jG00sfcBxxUAOyKHehpNHtaZ5mQ7zMvFXU2oS8G4ZIfB7a_u6wt7OCbdULyFBBV-inhIM1TO-uUT25J9v6uzgV7cnlE8GEM4I2e7aAIWFKPYpY2IIS6_ckjrpy0ChpOnoXeJmvFq_Uzp42KksTaMKlLpTqtpD9Aig6PlaRPU471c_muwMHniJDDFxB3p1a-0N2dN3KEU3jKodTh831lDsFpPcDg14_oWv6GWAMxBGs6qMYatr4O_aYihN6_3eyrvOkUGKerxd00VChxjck-HpHN9Ooc1X3Z0JEslkdlUCU84gu0UfvFplIUikAY-qhbCtDYIn9XwFTCVzLmb7i7CNHtFZw1-ENKekT3yeIjm8ETVhckS-hll91wlCxX_b1vtEhSoWnTxLgrvh64f97d1Ku1qJ1-MhUI0JDuFxvLS92tDIMIouQtyUIaXSAi6lQ88zkw0oKfD8Gqmd83qxg03pWM-AnadOGn-4jYXMIcusOh8pS78Q6-VTiiOI1z5ZTEKqz2gCpkR02JR27CA2Cp8S_MpbfdXRruqFIUpfGw-bq_rb_Bri80oIwxc5TbSPKKVgKJL1lxrM0Cnw2Qsw2g5ZxNFQ_0=w1000-h1498-no',
                'https://lh3.googleusercontent.com/v2cPyS9I-zIQQr2woGYjUtPZsVl-TMwSDXEtPPqdOpJ_sOPqSkT0FV2wFjWQy66bEXtdLpETUP1EbG2RZj9j2P_FA7JKt_SIHc0OdIHu1bo9DC84exFxEpc-TpNOwg819dhB2ETsAOM-CMxjkWATnexFQQ3yZI6RrPBkmN45psjkSD-15Kr6ovkUI5bVKj5gbvW7J_BSXs4wvJ3zw22P3rNo6VGRa52OrCfbfLUdg3IppBKV8mZhzv9S6DEpVSGUjsjgF2VJq7k_hso-9bsAKm7MJkcOptW5NbLsgPWGH_xT55wULGVpGYJP_FX8ZS1s4PDElg1W8DnFIxKQXwg7028XxrPg3_Hcsvv2gH9GGncNxui7gO6eWoSar44lQqYg4hTbuauEucQ5TEAuwxKSWVebL0vDDwEn-RzvhKDIznJgU3YZUinurvY4629BizWcEXrDr8AMqcoDglGN3umFLG49AS0tSWi_gUdmh1ac5qIKZO-bsj5SBJqgP0mAUQl3-ISHIAuIBCYxn16iiiIThiUmo5sgaDzSxryKI_95kwdyN6h3EdehAowPlEL2bVfk0qrhu3jT25kDJbzD7o8RUltpY8xDn0Eh-r1XYIozHU4gooqfCKElcpPaQx1hPobCrCFbwkr5_K38zjLV1C2yd_rz-7xPJBQ=w1000-h1498-no',
                'https://lh3.googleusercontent.com/KKKyXxwZAfr4oDmg0W-aUnONmIVgV9qQ0eJR4XVSmU30ic-Jgm3xyFCjLH2mNUheknh79AXEPWqcbHWP7_1V3qFvGdSN1NW4GE4pxkbqj0B1757xHdniL-TSGFhFI1Khfa6UfxZxSUHmEyemPz4bpT20H5mNF6C1jRR6r7arGRThgQ6eGoU0zbWLD00VoFkNxJFm07fdjS2NymkHsUihJ5W6fux1rBSBxcF4GOxVr1-9ql6qGDRZf7kMPFBPd7p_cfhHObK1pLZrJTp7XrZbJv4n5TPR_5mdkItBuA-w8tremxjCSkdMFLl57jYB1mPEdboLYSkrCEiLCCCGVMteGk3cGVo-27A9YfzEET3AZVGFP7g1DDOq9Fx-D3HWb8H_QZ6MTxH6lE1p4Lc3FJIFyIR-3mM-iuvdmrnG6ZQ2lXNInPIz-kPKdnJ8LwWRtK5lUEsSb9Ko9QGN91Eu-sQmmQORj0R5z14Eaml3JTI5nq6aGj51iuEmhDjYfiemW_VkypDjH4Pk7lcwbYPVJMreCo59nQd-ZRes9X7dj5YQzeqgg3ybxguJOzFwOmnCx-yjYkptRZb6fKbtOICr0_aPd60iJXRMwtiriq9kbtWtLirsWgSp851Xv0b8XQM1giK7Z7eJ2g_OiJxxAQQa-FB77TrA-hWubvg=w1000-h1498-no',
            ],
        },
        {
            id: '01003',
            name: 'Футболка Мопс',
            price: 1490,
            src: [
                'https://lh3.googleusercontent.com/3otZeKdNAQHM3xW6Al5XI0bE8_tczhTZGyx66c_2rSMe7r8572oqAzuqYNAKJWLLLAUZz4vgHG5h-JnQ22yEbotYz-ghOFcKQggkfg43OrTI58KRVCEiJeSog6T3rUj11NCgF-aGPub9if4TPCpfWH4NAARRSxlvqvjwKKH8c47Xea5lewBz2Dyq5mFdEVo_obg5694RTe20_4FHukhl1vM11Jjv8g6CB_5dlCifaM2c-V6TOXY4VxoWINFIDdUiNOOU1VX3egJOwxf1xYXV5nrfZFXeWQ7Cd-woTpUa_W_gd-RRIr7JuZDXybHXyIowj1guuwZMOgaTii9vAO7QCKNLMgxgcKP0cCt3UDv8UoPG3oJYVkyHX1lK2TqzQwOeYMlKmnbc315HgoUBxrmtewmCJoYsicRcZrctCFYgtjoIhjkC94P_mhP36AtcrrhHWHsrA8vgdULSu4JQPb_2rQtBWPett-YYP-Hnf9IOGDd3lr2uytmwAGFygPsXcj4Kj53kGzkWaSAwNP4hWOFT9qfz4G_TTihy6SeU4EVFHTIiAdO5sh8R9oE_coMITT6chlRx7O_-wDEiEGTFN4WXNsxTsiNJFdTKsvyHrA_-CkkipmPSLkVLf5q7MEWWYG-UM6zqZxNCsHHQin1HAO07Uq5OOC9aCdc=w1000-h1498-no',
                'https://lh3.googleusercontent.com/ltlU3QZD-Y-vZbMpJF70_ab5cBtIZuMg5NsPjcGSBC4zlpwpskPb-XzR6c1gYz8KJSYFY3Lv8GTNlgAz2TCrXv9mNNorGm6hQ21GnlNYuF5QbKCMhQ8POPvh2AiAzGTFtEpK4dUJmL0xTYYgObhFpTs5AIa3LSmwqc-9Zk0M2NZVClVCiwfawdyvpH_o8HG78AlUeMs8Kfp_8Ij5jps6mOW20Uw6LjWy2YrPmtJE-18N_khV_QFvTZAm52CC0QpOaBvA6S-m0J_YhQQJLOC8PZoVNjftlgteIfGvqeH48u4OgEBLl7ZnuOwWabIN_wCBlng3jFc0XFg0pphB3hhMsiIZNof-nEYOJVsnIi3thJCTwtxJCPWB39VXpNe7utxx7KQPtqdN5Iwp1z4h8GA272PSOtjzko14sZGFnGmOdLyxEG43ivROBGpofuJBSCsXPja3GSnXvYX-dlCbDK7fPFSn19GOuxeKfyu2QNAEgC9fzVrS-QyDHB1TnZOZFEDpwxz5TNdirMg8biOAzCHjXlw4QJKZR65ngVvP_dwj9b2AjNSwzLb4PLBHhT3rfUp23I0goM1A8Fbv_IZJRqUpMAmRNgBOvc88GNuGWtk-pSQIbgKbX4hMzouSwd8qyjZodLfny9urBWst9V5ubunLi5sfhXSzZbU=w1000-h1498-no',
                'https://lh3.googleusercontent.com/qARjllcMxlF0RCnq9gnfcnn7GjapW4vjepRapeC8uwzORTEf5DMy_sCT7WL5S3CdTCW5pH2hlu8fRg8RyVLRrgSxXgnYH-pqxdstlFfPcFhG_QbSPpzs-d7y79i8oWcsZ6AHyIw_Xo3p557iwQBhGcZO8apsiakqrKLweU1dPeZ2CdDpH_M114_uo6fxHYmre1gYHIgo7kPaMxr86yexuRVBMUE3TLDnvj29gR8-sTpKkPBJMJH05JCbGk6NwuI-NCOjVkxTX6AYPRZge5f5N_R0Qw6FbKg5xMritvmNJqFuMcYAiJVmJOJaqBz54-xXFR19wdcWHuChmXm3KmF1Mt0hHpFV5SWRnYNLKjQ2U3WkDU88odbMbNbZZnPIApdUG-l89BF2OSb9WPxdWgUNcVM2BvfrgTlqjtD2-sz-ptj24IRf06k8bFfB1yGB-9shINQG0sp02Hs9kb-45UfNVqcjaYp5j5pkr8yGpPikKRz7E4_mjS5t-vqa6Uf5BPo41G58OB2ShF1NaNBsMw_KBXfJpJ9qwdaJ1aQrNYsqeul9yJzZGWMjveFU-AhA-dyyIe_4qseKqUfTv76cXfjyk_GMNyZshqTQx51LJQdHJ6E_9rYV0p3yMCYxPq57L8WaHSRt8JEzSgdC8rXBJE1Kd04XBnjLDgM=w1000-h1498-no',
            ],
        },
        {
            id: '01004',
            name: 'Футболка Счастье',
            price: 1490,
            src: [
                'https://lh3.googleusercontent.com/acGkxtVRAkP3h4BZ3CqH8CjvEe7k7GgSBNB4PO7huGqcudnneiy5ns5DoH6HnNXGtO8B7GObDaR0abI-CN-87mUFQRpYLiJ5CLhRTJHunO_DWzbHeooyFLrd8MsXiIO5CPn0v23QLptt9aXJX9M08w2rMbpgxT_9Rruyqc2Q0sxtPKEtuSVemzSrfTL7JHEoiZnnJZoAh0DpBOm3bRxcJDeGOVeM8-X0mw7Fim__Iyws1wa6zK5m_0OfRxI_IcRzv4xJcVzznfsew-0AUgE2J0BRDo3I-LF-EV9vs6FjSK17IkNu9wL0LuTU1XYpuPGoB7bFTLLgHpRGGwEV8P6GBOzVDdkZS-6ybL1D3HpeBeUE5XPLsTlR3qzJ9V2l8hinOdpVIs-DtmT6mBzn2R85Tssjo9RakclWcZifVaFQMaaEGpRPc5X75myidax-CDGe9OUHrlj5r18O_JrYGAvswEq-wqtMBK3HeI9_a1yGcYbnkM0S8PFejjJOtzDAB4vAYPU2_apSsZG7kXYMfVcJz4dqGjA1uh1iAUhMayzOqQ0n25c3TRafRP-i1ht4WM1nA2VirE6zzdNhuCz5hjBBze8XTv3xayQHNi75kRS4rGBgATaYNm110u3-sBFFPUd7iHxNF3w7rVYcUQ8517NMC_JArVWujhQ=w1000-h1498-no',
                'https://lh3.googleusercontent.com/Gw96PuMUHL0o513QH62SBF5SQGrsXmtL6q0nYAytYoRfYkdHeMop9Mt6ikfxK84GjpSTHHCzv-xpj4F-7aubs5FJtW99pwy_Cmns0fyEnFqfGzr_oKwrevLDnrGw1r-l7cJK6jTNvrT4xE_Q0UbO7B60ULkqo5B7No_Lylhl2VL74fvkPWASK-Qc9UOUI_7DZQr2ncstfQjjZU1BoOLcFhHnyZvIY55mqMlDx7-3R4DFN1C-n_bzvqLfP9Rd29GjhgiDCvFY6rlfCmxGplJIoXj6Io_25_twuohRg33gMJUt8mnnW0OMMh3DC9gSM4pd2nQ2N2LBfLb5EIneo3PTWGsmXyC2tpLZCb9DItYZ18iksYwrpYfNocYzQs86ZO5GAWydusbJR8OCfBHI69sLlanMfQZ7v7c536Ddk-9s_MdVQs7fT_w8IDc_Z-CDRTKoCltNGIGWn1FDfeZO-uet051TnQHRK_LWA8BzGNDT42sPovvyg1fB3nEcDUuCSjKGehlHP3XyAey2495QdGzZFFs8ed8cBQk0tmYUfQFRFyvub4fo6_tzXK9n7zafHm_BIEHAGWvNasBucbDZwJH8sBYVwbCaWLI171EqSlDMQNOo8GoZzlcmEORMe6HiXkoru3vfroU_9l0KjlXH69iMpUtf_5b9s-w=w1000-h1498-no',
                'https://lh3.googleusercontent.com/-7ZbkzaC35HpYloDCQDXdnuU9XJfi4XdiItxHzeo7kREUBxu6FuWFX5vWP0phdrrVQWMLdrPkobRzjDxfLknUTOBaUG7sDDjMU-PhSK1JknDPoCxCVBAX3qruH1aD8VGjmNohyxDx9Gz0BZxTynwYoiEHJUF4QKLOgorUAVgbl5lg7e0wI0UmsoOxx9QihtktwDaU9QPfur0mpFYedbQa33Lgsqpgz1KiUnTJnoxZt8oDmp92B70OCkDjj-Ko4Ny9Iab764KK0rEMx1OcI0Ybafh1BNLEVVpIScmHwsLd3k1Kq3RYpemRzAa-tZ-nahY_rORMYnQ5KeM2ussIuIp6ZkfYCu8wvybPLK7w4J2_3Efz-EZQy3G14QXanaJo8iPaMFYzNUnUDb_OkMIjlFQx2tXaQvB_rqxvDZnX_1vdRnlrSuPDikwinrUxmYcsKNPpLNGB_XcOVfx-omgAbCVVZwu2dvmu6_buDyYXqL4Paw9acpDcLMoJabdT8HOIkQNUctmrkM2wUVREknAcA7ZKkwMuOxPvgS4ycNXiowSdKSzXYRauIhz08DfI7dRsHV29RqGKrjIk5ftMy8bqjcJJC0T3eE4YdtytMkDoUsjW_t-ka04Kt0gs4-DSO-xJntp3fcGgbRD26uW9ZCgpiKhbgemdR79gjM=w1000-h1498-no',
            ],
        },
        {
            id: '02001',
            name: 'Худи Корги',
            price: 1490,
            src: [
                'https://lh3.googleusercontent.com/7eZMAVbyYmpRCHWdMrYYRL7VHRBhKB0BnRSU5lYYjl9a2cuMj6pjZglAUc1p8aSldn7SelqHU9H6A96256PUQnajWIcqr0uc5kg6roMGtja0W--lJ31jpISi0Dx76kpe7vBrGtRfNmOhVYLG_K-syo7A9KYMecpj-Ujut1ZGkyAFMnb-3c-H2MOxFO2ojnG4DFRQNCG4eIJiQJZLFkdnxQziQxvjt1I0kDsnQ1BEkZIUXurcWGQRiqt4DtsZxD3swDW2Sz1k7MW4GDJWzAOncAwZl2k-6qjOiwBTLL17_WePTiZB3b1-7o94I7n7ofJs-nJEuiJsLbE4yTxlOn3AktiHFKulkVFSmBVANvstblrkgzI8XyDZJnAByKQlFo4zM16dyIVMznmYrbJNeq_11NHZQanePqr6h_lrH01JKUX08s_WgS8H4RooleWVxF_cGLzcyBbMV5D2HgJy9LjCefEWgCpkmYHZfDyAjvVh0ZRlR8oNdSUgqFugNTEbM0bYn0pCXYzhzbZMjyofb0eK9mOU5ldSAXwyhXQzY35qSm0q30VcwLvCrXBvUBTdQONEdldpIeWIYPiKAohWContBGg_iMFBglb71GJbh6q_2QeSG6-0hcUpePe6R0aH31yku9fOC1xvNpnqfQjUngZ0CucNouIaApc=w1000-h1498-no',
                'https://lh3.googleusercontent.com/zg3UDUTnhOCb0qmceY6ZYskLhBbKVf742qhsm7tCKrYRUtrA3lFt00qWgvo9-OQzEN_orPY3fcHV4Q2RwBAHNxdldQNJb2pOFa1GpVu-PeicEc8q_WmUobEhfAv5FG6Uvvb4ht2tIo68WqBJYYik-1nPghm7kfZeY4yDXtLP4f2T1hhlaWLfbP6zeKezINfOSOTG22Y3g3ZQ7_EJoKrQx5Mgdvaj0Q54P-oncqo6DJuIZri3Ykpes74iONw3bYAToR6_U3frQV0R2fHDnRHD0vGNL6L3lV2gXmnqiyJUEnE8wgXMuSFmUOrXvtRi55MMiSeFxP4t5DFZQ-_x-oCr8bWac2Mv2axK0DS4R3YI5f4H09G7Cll5797weF9qmUt5bQdB4Ypov8KZ6No4Gjd-r_wJfw7GsKh_-SEPmvCPxMXWGS5eMfXCFFJCP-Z5fHVKhYMwLZaDrglXJEfkEMMelOrhr3st6TzxZdw6zLjFsgo7j7uQa2xcQqDBQAWTAa99DYbhlDV0Y0KxF2H0gNtrSq3-cxO9pL7_x-0MtUbT8zTNwndiPYQaGzVjs9MR9KB9K5rSLpac8sLk8MZpheLMs4lHI74ZA3YEEi_g1j4TrqysVn5Sk_l6D7F-RgXU8IVKA9Y3J8Cgt3LQCSE18cLFMeKoiSHDQnw=w1000-h1498-no',
                'https://lh3.googleusercontent.com/Tyjwr3VMvBKS-07VeMPr3iWkNSwGMreVQd5V5LQkOkmaxgbm4MH5MPl7l9laJTJTiTL4yrJHtX3WGG0UTPVm0cv3pAbCdNC5BB00L2DNBthD04mlAWHyNzw9whbPyCv_Wrwlaff66gPA5Oxx341G_Ii2dcf3N-bqDVuZbgQBi58hc7hDMJzH3zwJ5tAWC-sKzc6_3jq7sOzYcCGxUlNTHGpf5--VsWg0cucyE59t4ehBf51lArHvr-SvhztfhdYkNXZHLZdEx_PLKXHhii5Se99gZzI6s8QK1-VlVdiA8W1L3i3NXw0cXoEY1D6d-PTz7rfD-c8Ey7GfgiPoslrygRPUIKDxh4BMuH-ODgve55GnaIk1BbK7xK6Cdn1h2n6_252ECAT3JkEJF68I5WH8twYyqwdYaqzCZKNNyM1SfKkTGIqk7v21r4XM0tFUx5og3tYFb0GDKfL0aqHjabfnbE7Bwdro6FgK93RKoVHN5h7IzJUbwESn_avukVjAFS7dLah2af_-08H5JxNFzDLhn2NtJdCrbfLH03Zmdp70PQQMdiYIYWYYnlpZchUO-3Vc-XDNdh1FSJyy6wpeM4GdE_I7q5_ycC8xhqxFM--7PovnftePQWfv0DQpT57MuF08Ups9IfRHvYBEe4AOF_89KmFiXx2_hDM=w1000-h1498-no',
                'https://lh3.googleusercontent.com/F_rnwgYrrQa3JCmJ4o6ZMOQ--uiZGZVoFSPfSFcFVTRmT9W1RLf3VFBGahKzDHDPdg8af54xgEtYGfyNvDp5fWjsm3puOdUzj4FvHvb3sCX2hHw_cxBq1YJRwU15CYIA_dxOQT4u7yD7_CjPU173nVbSHwe2qzY-qaQ_sF0_d8x8UkaN9tNX7E1EkCrkmxpfDXnF6jMcU1Hhegt6MwwDf0s6kj-wfHD8EGInsTRnYcVoNf0jvz4suqa5Z7qT94Epdf1vzGGFRpQWBBnbQZbTfj4M8dbUk515BNPqDalJWuQvqLisDqB0IpJ469kpa5DhczXMgVoOLlZ1yRwBkK2h7qL4eynhlqfFybMu5CfcSlxWiu93DOWIvMRsALpPwkbTHECPOlrg1ICiA98SVLWWJTBKS703E4KwcXQ1QnR84U8OyOPRnWRLBKX0egW6YyhQet1FG-kHHgfkdZVYPDDGbsNN8Ky0Wp61yzcmqhcUe_YIrxOcmgYAYQ40be6pUaatAVjBBVuiHztoZuCGmJ9mDO6L3XL5VRVxBbrHBp5UxtkUdHq8jG3rssy_sy9dIvgNPsXDmxMM2gXnPrQaJAnG-rqwXNvip6vp-YC25cxygYoXWZDUWsRblrE3YeusD_Wg32yJp4w0DTQo8Fks6B0i7J6WMXWZ-k8=w1000-h1498-no',
                'https://lh3.googleusercontent.com/j9IvlgLJXTUJyTpRDLhUiYNqIk0V9ji97FBv217MT5ybQKO_C7mfd9iv3-jtsW0wFTzqclvdV0S3R3d_ixo89J8zLkRsOZgikAA3WRT1CgbuKAb03rsdntEo4y5zSjgYWy5MhUztKpSZDWryurDu-iDt7cZeer_PenqBYBlxQ_Hatv-iiAzqsYcLKILCLKxLRKnjLU_RiY4o8L_R4fSdUGFCsyDBQ5QnCGZHphujbnwBw3ys4kaEFy4_FlY4BBQOUpJjq9qTc_ftYEfCf5rXoQQag7DIkMimBYCR9bKye8b6uZ9MVOZcErGoqdBfSsXHpLLKIR83X2AV-sCNAoepZHoFq6h3mFzl91dLRsWpI_eF6no79MlE9kgjMtjc8K3PmhWrJEP42FCADQijXJNZhFyrE86vWQzeJDMkWRGdXgX3RzEzCh2Lzs43OITvZyn_PehW_zn-EJs9z3dIPRJq6LHx8IdtuN2MpcQZv4_iV_BddJjIrIFq2DQ31l87NBnVRagqx6Rd25M3ojRrg_EfqriR4qmNtQYq2R10RK-Y8ZaBRj9S4oTjvDBjqwVNvO9v6WkXlBRIh_jVbTnzS6cr9NMEBIqVyCWiaET26Vw0eJu9pKTnjhRdDRZRC_qKcT-5jCaooBwFZ9U44foekhptne9iKRYgfT8=w1000-h1498-no',
            ],
        },
        {
            id: '02002',
            name: 'Худи Лосев',
            price: 1490,
            src: [
                'https://lh3.googleusercontent.com/Zo5gtyYOzRFdgiv0sOIXSeXIiRxSIC-dGQQZuhlb2UZESY_SR2zBjZdFc7Xs6kt3wtNQvBmNikxsSXxT-3SuDte7X-rFZp2sBpIvxrB3Ks-iIswQKBjpde-aYpXSbE2d-Ly1OUvmcU7fGxln_pSQN_FZCbwYpVZYN1y5VvAQpArvGs4DR74Y0TQHpgjmcT-IisXxeSMz0t-i7f6HbstN22sxH-YTDFuNobX1SvZcQeK10FK362gIMnUmmeovWD0RLx5VBTU5kJOKj7NhsIKHFKRasJffXPHJrz7risrNYulkWtK4VikAI4XmsO1BC0hW-WrhJjFqZyLW0G0kiHZdOtvCkRvwd7kWAc33oI26xzSFivSBecQc7-CZxhiLVAbMfAy5x884NEkEMPnaQTbvjbMo97f3oDe2t3Ox_C1k1IGUiPimhQuSVgUtvbCEA2wZobOqFdBQ9GOvU37_etP5XrTta59xv35i0Sf606_UxsXty9XJpmzo-vDVKmHkSOOE6T2U9vCjf47OahJLTprBc9c_FQ_KKgfIuoCilvZoHepbIPFMotPK9BELd6TtzhFdvFJ3blh_bQw55cJYIZr04Ho9-d2o0Pauk54Nh0XPxaehTWXDJOFLLsUZV_36LqZSE2oFDLZPRqoo_zZameaqzCmjGhpFfow=w1000-h1498-no',
                'https://lh3.googleusercontent.com/JUNaEchod2Z7YoGB8aehXGKlgKnfxT-DYAxkCKDmYhX2zNnD5WpbtfCbg0zqwQMyOwv1HWlOc1d3FcfE0fe9DPSSBg3fFvWdwVobiZTjx5j9QoWxfWuCzWOhTtLjvyB_oYvTV4muPqduToG6nyl0QsoRrkMB5zJsmdW4TrAyPBzt5DbWmIJ89aLIHe3ukPuzAmu3d11L39Hj1aRF8nZhFZJKvtz9RsiBUzEI4R3PtyJ8Ylk3ssfzy9wpgJS_M4z8MeBBqq0XtJ6OI8_BeVkesmSIphLUPOHFyjeo-DQEBqFaXDJE0zC25PHl9krIutI93XmrH4XNOeNEq0NeLELcTmWpOgruv-5Iq3vjV7zZbVHJXZVtgSIIIbanZmxkn-YO5Ler4HmlHteG_rO97e4Xvl7_41p59jE80F6QE2l4AoTEpP6lZFHaLW5V-UdO_w_C_l9J6jHKwVilUpIZ8kxU2ZEwSu8FdCano3otQedh7JHglNOUteyECXNjCLk6ffN0LbpU5CGDuKr3XoxbMzAVeROVjESe58tx5VQJjfZKaoAXpfDMrwdsnTVj-FAjtKFRVn29nu6UuOn-G6tiVmKitufnr4piNhXRvPLSYwm9-st5VE3xdxcDBzKuxOss64R-xKWl2euM_Ab3E5gwCB9P66aT1bz86FE=w1000-h1498-no',
                'https://lh3.googleusercontent.com/UIhSFDn_4XOHES7GrNdi4PcjNElzFLwWYLaEEyxBrMSGhLzRvP9rLiC8MoIu4uy9nLF5hxqMr5lZtBFl4hJD8lmD00-2_oOdMLQCqvJBFFUvX4ZtpyJHmqewI4HUv00KPaoTn7oRXhxIXfASLIPfWJszZT7C_pRc_4oNyHiAkl0mix6tOpSwUbrCQDRoT5nk1NRYA-unzxxubF1eEDSOEahBCKOTV5vWHb29YnmOmxR45mBZN6PwIj4eYrgEy85Y7hNbyLx-vHX3cPLFsivjDKYQSAG8yG9Ayn2RP6Z_gqBcPtUitv5xjnlgQ_GG1tQODVidlQjU1yHmscB3Qo33-J81-uP-mZYBbihDzYNHomBSihE2ORAfKPxpP3PRfs6dmHJGI7acyoyz8Fx8B_znXct1zCCGOrWDbxRdjPDCjriYLk2Qamul3qtAdnc2TtXGV8llVOkfPEPnyDavh0dRzjAteeI8btxEggYccmyRpmhNXD2kHu1ktIcph1AUpWmpeDY1gTDBRbIS_70EMs6CzqeiBARQ70-qWe-OmCM-M6wWz0SMCzTPTNemGhg68v1r264O-3m_lhOfh22zHQBypbhpmKm-K26nlwdvUvsxbS74siFt0dzOJ_epR9UwHZyLA2OdL9uebQNTla2UfRXKFMogtM8n3Sw=w1000-h1498-no',
                'https://lh3.googleusercontent.com/Fdy8ZAYYWCXDQoc80yf6Rzd9kPg7HKaOhEuJuHA1Fj1TgHWomIeNnpTtfQbWNtZmceI06tYGZ7qF2UucZ7u22MXgYNnOh546qrg5WBEPJ-XALH3qWWomeZkwD22FdgxeZPiYtPU3R0BfY7BIckRT_PCAua8qZjaDBQaW4qA1-m5OWIRlKy8iz7UVt2Ad2Z3QrNR5ZFM216luWrDd6cqzCNQ7ztSr0IZ5hdbETAaa2jSGnHS02ryNV4DF15pbL8pbNfZdceSwttYVu4z56d2nTgyAjaD2_d8iB24UeoXknGMM7nbwczfqdwFbWad2LFiWPvUvsKqMiW6JoiOxdVHyWT_N8rw_v06NnCK-FyrmlitfpGZtKx_teezZPWi1ZBLQy3grk-3DIdhYL2H586vlQGGca3jZUDIYb6uT0JHjakj3-jP593FmH8Z2H22Rso8H_EFWT1fTY1fMBJUeQvr4GspeONXXzuaH0FlxpIuppXTmyH7KKPfmbdt3w1vgajryd9juiTplHVFUmRoRs3mZ9bxLCvYCGN-grcbiGZANTfilw7AmPGqHSn9Stm9A5xSnO0ONkL4L_vVSlBl7P44Gf-cwhxntOOsnBlIsx8Iz48_bujb9wX-_SJ2x3_rD0VSGMB8LIGDWgCOy85QUF1scRn9jgcPMzJE=w1000-h1498-no',
            ],
        },
        {
            id: '02003',
            name: 'Худи Мопс',
            price: 1490,
            src: [
                'https://lh3.googleusercontent.com/FsQEuQKvev-JSRvip_q1uKqJyD9JE6vE-LYqlurW-PvU5zxIWAp0b9byIAMnzAJ-KuOvAp2JXoLRmOSVK04voQ3OYnwsy6U_jdF0eqttnI2Dt1NQA8MX99Pq1a8PgT_7ALHXuTQlewNx7gdpYxjJRqqK6IbHQDEV_0mjD2LaG5pnw1UGvVhW0mRnWVprxI4BHTTfu4I4nXTHu5-ocleaHAW82pvWP8V5ZtRLCGTmDDTQ3grCCZmmGHTrL5TXh-vCBzDC5J1TI23NEinUPscu9Ncur7scRtXm5lnFdwrc3pqX67EYAP5kBBdIXMlN1-EwH34FB75cMNy7oTf0C9zm6WX3Q3VNI4rrbtxSGEsSjCmTlz34ockmkE7VV03wC2W7kMOsIV8dwQK6AUesGmSpZ4eqoE37FFZ_M6YYoT-4vvtXucrJU139M0mMeWG-LGAIIrfkimPypsOFQ90eF4r-BqiWT52d_LhTtauyYzLNCFXTSx6iIE2kW5Iwshb_9JRLvNPYdQGJZQ27gBFcHBnl0Ibc4zlZ2vDoGOyXWaGjn33L6lN0Pjte3disVw3T3KUMSnwfA43FDu4GUJhqQgLRlb5BNMXgPgnzDYWvkVOL5hId80mKdA599RX7dcPCO3nnDTZATIa-GGWgQ8emSVrnQD9MBbSO6tw=w1000-h1498-no',
                'https://lh3.googleusercontent.com/EnRDfn06rhzwgqBlxQf-gMZxSMVXbgfaL3ge_fOCnxhZofUh0u1EG9JluKm5ZGC_zPZt9IPsP_ccYBAWR_APztXgeK1JMbzTkDFdGsl7kUJKOCi8fQc5XW97GNEjX593Pkmx_yY3zPCltJX7MyLdqZd-Mz5_TExQilV6HNTYnCo8kKgIe_u-wV4DhRYmUPgXIOZEmNvaugJDLh87Bf2ZU-tJ4Wa1KPwoi1U7Kz_N2z4qTC5Rqp9Cc2Z-vVoRsYRAgld-hYEoxxB5oWWLxMsicWZHiffFv1pXLvICOmIy8Qy3Zn9gJAnTYXyTfo3GAdlex_mHK25hwTrBk4_L-976j00YfTSZcM318c0FG18BMryU339yB30TyOMCOPcQ5OuB14wFC1Ild1nwuyWr8u-qE4T6QIqUarNMJzXGWxEKGPcKI6a9QrzGmbVXuHDIVjTyCECWj2jxmdBjSHFcPoz8YLj340HKYjAkyH-H8xKyW6Iw5VQw8QNPQi9OYVMB9ThujX81N6ZdNiHvLLrnfSfPWlhHoAgWq2rA0p_aZLKQIXKkoi0lCRNLMUNrzlZKF6aQLtjktqPvtTNwR4X9bvhfo_U8eTcYUwheNGo8a4XJ0vr4V6gMC6eRtSRGKtRaURvYlo8KV9nNf07bSw1KTPE3qRimqk59cxY=w1000-h1498-no',
                'https://lh3.googleusercontent.com/yCvZEIsw8e8I0M84Dc1vQNu8KKPO3iu0g7kUI9mGt4OwR2BSIfwl5I9HbnCvCYpO7K1ZG3y3lkXJPfSMwftnMakN3NpDBNR2cM20VmomBRIboqK0lv9UU2gjehrP5To3G9onffa722QCLOkA1eBIXDpWbxIXT6HawhqLEuKFsQZ64ZZDLZe-swW0vfpT3jrStdEt3OD_0AGuI1vLuxjM88jOWkP-bvGFeKOWkpotacsp5fsazSSJvCfRB8r4mVJmmVR80o3HUT4kgp_prMvXy2hcnZWGIFtGe6jPFt89zHQDXotJemLbsJ8Q7SdbTYwJRxIFG6mLDYuiXz1rC2pU4uRm6fMR176TAOZvowUMq9N___c3bC_cGXTid_-BsTmcsPuop41TlCBPKOW1MnFH5U8wlNVgrw9kakXXcZzI6--TtFfGiHkANWHy2BNRZv0qlqsM_5mezEmdkr8j-6_nu82CvB_zQIvrrN-nWfvARcfGwDCir0NAQ-Awqfp0gsvyrULfcromw87pE0ntQl2BlIluony4oI1L5GZCViCEJgNzpAp7A1CvyK4k7m4yiCmSTH6MFxed1V87PwgEtKZo0aV-ZVDJDeV3FwupDaXliGuEcmSLDn2DlSDlfG-D3VanosN2MNMAyZJl5c0Gax5wbUhDQZIRW84=w1000-h1498-no',
                'https://lh3.googleusercontent.com/sIzBGiHJcOlBoiUrqcLhSLl3Q83K97mk3KO5MMwkz-1DutaJJdXvGtllDd1dN9b8nbbW_nknP_0_7X_mfyPpCSaNgjClXTGxQbBNnO3B7GaGvZ2D8ojg5Cpl6Cj7dR-Bw_hmSXyt_xaZgZMc5hMnZEbe3kkHgKERXTuUU_wFmf6Kv6_7miS6zPTYsIZypOOIdMqqyX_-7MnArKIc67znljqhwrS3PEKxAjNS-503j29jKdtv6tvnH9lLCN9rWOJmJOdw9JoQio9L9fgx88JIF3GARrka_H_y1Er-c_ePBODy97JmGZfgHb6E8yYfOeWum6MZQ6qlmD0lnOqWG51Quon5OqcpvgxmJRP3b4KmG5xN6b6nM2vFybrzg6pOZYvpwXvc89qyktWGw2Bio3zHPfwHD3qD_LVFlBIS9_BAmzzNLuOrHMWkkDVgOKDdvQ3ws9tFp8zAN9MDEXZdHrQgFQKPhnw8982Y1OzNsubSiP54kmlm2EOHiR5VezF7lUL-5ArZzpu1EDvpfo7-aMr_Q5kzR6qEZxY8ffs2xBEBi9tvnA9C2yu1pJqtRreIvu580Mk0Tr6zEFGp6H5UurNpNXx3mQTsu53PWgL_vqovnNsakuqPgKQ9y8-tGsXohZ7R_kh4tOTbrql4vZzLL8EBoMmEdiws-Do=w1000-h1498-no',
                'https://lh3.googleusercontent.com/mzYt1E8JNqy8i1js7UuCkXbiFz52HyXznPiMQTy_7hXAVR-LDanGO43SAJVMT5Kem37Y1Hih3RrEc0Tvwkls0r5m5UAOKzcKmOuc0Ia8BzmhO_NTucxqXI7XnttrL5N70DE0Ka6ud2nUuVYiqXwNv_NeHcAwGrXuQO5iCc44cXRLL_nCECUtovamZ-HN1a7Cl0Tv0LwRYEuM-HULA5tjukaqUmyObBtP8hzzZGAaY8HAp_Pkq2gVYvQFb9-Nsa2PG0vGnpddSYyHrbVdmN5kjN6SLRYhJgRtO7yeQZ41kTvWMX31_PGKUR3CQzVHPmZ6grdmWtIa6i-qyni2OvE4v1ojQoMGHD5nHFCUkIXF-yst0xo-uZ3wKPUnVMM3uRDM96TLp3WV43TbKLBRwASmzuQ0gQI4IYTwZRaXI74aicPSGaFI3-jSoLteTIZq8NlIlTuClJLgKPJMY3Snk5LnGhU7jo7aK5qkC7AMb1sRqLDLwShVzkX1VNAoZ_FNlxgre1ZvZ3r-gJxpRlxj-hRad_BGz5-weMjMMnmcmcRV1Ok0PBWJttz0jkRSpvx0M4dEnCsQVXh_RJFPY_xt1EWWfzCGCrvI4TQJ-H73n2IdveW6S93EzDDSpHJIK6_sw6sblJWtzUfIaCHE0MWRyGADZjpWpet3hq0=w1000-h1498-no',
            ],
        },
        {
            id: '03001',
            name: 'Свитшот Мопс',
            price: 1490,
            src: [
                'images/sweatshirts/mops/1.jpg',
                'images/sweatshirts/mops/2.jpg',
                'images/sweatshirts/mops/3.jpg',
                'images/sweatshirts/mops/4.jpg',
            ],
        },
        {
            id: '03002',
            name: 'Свитшот',
            price: 1490,
            src: [
                'images/sweatshirts/sweatshirt/1.jpg',
                'images/sweatshirts/sweatshirt/2.jpg',
                'images/sweatshirts/sweatshirt/3.jpg',
                'images/sweatshirts/sweatshirt/4.jpg',
            ],
        },
        {
            id: '03003',
            name: 'Свитшот Корги',
            price: 1490,
            src: [
                'images/sweatshirts/corgi/1.jpg',
                'images/sweatshirts/corgi/2.jpg',
                'images/sweatshirts/corgi/3.jpg',
                'images/sweatshirts/corgi/4.jpg',
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
    $(document.body).hide();
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

    arrangeItems();

    setCart();
    setLinks();
    $(document.body).show();
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
    const item = state.items.find(elem => elem.id == state.params.id);
    $(".item-image").each(function(index) {
        $(this).attr("src", item.src[index]);
    });

    $(".description").find(".name").text(item.name);
    $(".description").find(".price").text(item.price);

    // const item = state.items.find(item => item.id === state.params.id);
    // item.src.map((src, index) => {
    //     if (index === 0) {
    //         $(".content").append("<div class='container items'></div>");
    //     }
    //     if (index % 3 === 0) {
    //         $(".container.items").append("<div class='row'></div>");
    //     }
    //     const element = 
    //     "<div class='col-sm menu-element'>" + 
    //         "<img src='" + src + "' alt='" + item.id + "'>" + 
    //     "</div>";
    //     $(".container.items").find(".row").last().append(element);
    // });
    // const element = "<div class='col-sm menu-element'></div>";
    // while ($(".container.items").find(".row").last().find(".col-sm").length < 3) {
    //     $(".container.items").find(".row").last().append("<div class='col-sm'></div>");
    // }
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