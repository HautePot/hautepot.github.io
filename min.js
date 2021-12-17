! function() {
    console.log("RG f"), HTMLElement.prototype.attr = HTMLElement.prototype.getAttribute;
    const t = b(".ccm-card"),
        n = parseInt(t.attr("data-ccmcardnum")),
        i = t.attr("data-ccmcardid"),
        e = t.attr("data-ccme"),
        c = b(".ccm-schema");
    let o = [],
        r = {
            "@context": "http://schema.org",
            "@type": "Recipe"
        };
    c && (r = JSON.parse(c.innerHTML));
    let a = {};
    const s = {
        data: {},
        get: function(t, n) {
            return t = "card-word-" + t, void 0 === s.data[t] || "undefined" === s.data[t] ? n : s.data[t]
        }
    };
    let l = fetch("https://hautepot.github.io/styles-code.js");

    function m(t) {
        return document.createElement(t)
    }

    function d(t) {
        let n = m("script");
        n.src = t, document.head.appendChild(n)
    }
    let u = {};
    fetch(`https://us-central1-recipes-generator.cloudfunctions.net/getCardData?id=${e}&cardid=${i}`).then(t => t.json()).then(t => {
        u = JSON.parse(t), a = JSON.parse(u.cardContent), o = a.features || [], console.log(o), console.log(u), localStorage.setItem("cardWords", u.cardWords), s.data = JSON.parse(u.cardWords)
    }).then(function() {
        let i = function() {
                let t = a.image;
                return t && (r.image = t), t ? `<div class='ccm-image' style='display:none'><img loading='lazy' src='${t}' draggable='false' alt='${a.name}' title='${a.name}'/></div>` : ""
            }(),
            e = function() {
                let t = a.name;
                return r.name = t, t ? "<h3 class='ccm-name' style='display:none'>" + t + "</h3>" : ""
            }(),
            video = function(){
                let t = a.videoUrl;
                var lastSegment = t.split("/").pop();
                return r.video = t, t ? `<divstyle='height: 0px; left: 0px; overflow: hidden; padding-bottom: 56.3%; position: relative; width: 100%; margin-bottom: 20px;"><iframeallow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen=""class="BLOG_video_class"frameborder="0"height="266"src="https://www.youtube.com/embed/"${lastSegment}"?autoplay=1&mute=1"style="height: 100%; left: 0px; min-width: 100%; position: absolute; top: 0px; width: 100%; width: 1px;"width="320"youtube-src-id="${lastSegment}"></iframe></div>` : ""
            }(),
            l = h(),
            m = function() {
                let t = a.summary;
                return t && (r.description = t), t ? "<div class='ccm-summary'>" + t + "</div>" : ""
            }(),
            f = function(t) {
                var n = "";
                let i = a.yields;
                if (i) {
                    let e = s.get("yield", "Yield");
                    n = t ? t.replace("LABEL", e).replace("DATA", i) : "<div class='ccm-yield ccm-info-child'><strong>" + e + ": </strong><span class='ccm-yield__amount'>" + i + "</span></div>", r.yield = i
                }
                return n
            }(),
            v = function(t) {
                var n = "";
                if (a.author) {
                    let i = s.get("author", "Author");
                    n = t ? t.replace("LABEL", i).replace(">DATA", ">" + a.author) : "<div class='ccm-author ccm-info-child'><strong>" + i + ": </strong><span><span>" + a.author + "</span></span></div>", r.author = {
                        "@type": "Person",
                        name: a.author
                    }
                }
                return n
            }(),
            b = function() {
                let t = a.postUrl;
                return t && (r.url = t), t ? "<div class='ccm-posturl'><a href=" + t + ">" + t + "</a></div>" : ""
            }(),
            y = function() {
                let t = a.copyright;
                return t ? "<div class='ccm-copyright ccm-hide-on-print'>" + t + "</div>" : ""
            }(),
            T = function() {
                let t = a.notes;
                return t ? "<div class='ccm-notes'><h3 class='ccm-head'>" + s.get("notes", "notes") + ":</h3><div class='ccm-notes-inner'>" + t + "</div></div>" : ""
            }();
        var S = function() {
            let t = "";
            if (o.indexOf("pin-it-button") > -1) {
                let n = `http://pinterest.com/pin/create/button/?url=${a.postUrl}&description=${a.name}&media=${a.image}`;
                n = encodeURI(n), t = `<a id="ccm-pinit" class="cmm-pinit-btn ccm-hide-on-print" target="_blank" href="${n}"></a>`
            }
            return t
        }();
        let w = function() {
                let t = a.keywords;
                return t && (r.keywords = t), t ? "<div class='ccm-keywords ccm-hide-on-print'>" + t + "</div>" : ""
            }(),
            x = function() {
                let t = a.categories;
                return t && (r.recipeCategory = t), t ? "<div class='ccm-categories ccm-hide-on-print'>" + t + "</div>" : ""
            }(),
            $ = function() {
                let t = a.cuisine;
                return t && (r.recipeCuisine = t), t ? "<div class='ccm-cuisine ccm-hide-on-print'>" + t + "</div>" : ""
            }(),
            k = function() {
                var t = "";
                r.video = {}, a.videoTitle && (t += "<span class='ccm-video-title'>" + a.videoTitle + "</span>", r.video.name = a.videoTitle);
                a.videoUrl && (t += "<span class='ccm-video-url'>" + a.videoUrl + "</span>", r.video.contentUrl = a.videoUrl);
                a.videoDescription && (t += "<span class='ccm-video-desc'>" + a.videoDescription + "</span>", r.video.description = a.videoDescription);
                a.videoThumbnail && (t += "<span class='ccm-video-thumb'>" + a.videoThumbnail + "</span>", r.video.thumbnailUrl = a.videoThumbnail);
                a.videoUploadDate && (t += "<span class='ccm-video-date'>" + a.videoUploadDate + "</span>", r.video.uploadDate = a.videoUploadDate);
                t ? (t = "<div class='ccm-video ccm-hide-on-print'>" + t + "</div>", r.video["@type"] = "VideoObject") : r.video = null;
                return t
            }(),
            L = g("ingredients", a.ings),
            P = g("instructions", a.ins),
            I = function() {
                let t = "",
                    n = a.products;
                if (n && (n.forEach(n => {
                        let i = n.productName,
                            e = n.productLink,
                            c = n.productImage,
                            o = "",
                            r = "";
                        e && i && (o = `<a class='ccm-product-name' href='${e}' target='_blank' rel='nofollow'>${i}</a>`), e && c && (r = `<a href='${e}' target='_blank' rel='nofollow'><img class='ccm-product-image' src='${c}'></a>`), e && (i || c) && (t += `<div class='ccm-product'>${r+o}</div>`)
                    }), t)) {
                    let n = s.get("recommended-products", "Recommended Products");
                    t = `<div class='ccm-products ccm-hide-on-print'><h3 class='ccm-head' style='margin:30px 0 20px!important'>${n}:</h3>${t}</div>`
                }
                return t
            }(),
            H = function() {
                let t = "",
                    n = a.similarPosts;
                if (n && (n.forEach(n => {
                        let i = n.name,
                            e = n.link,
                            c = n.image,
                            o = "",
                            r = "";
                        i && (o = `<h3 class='ccm-similar-post-name'>${i}</h3>`), c && (r = `<img class='ccm-similar-post-image' src='${c}'>`), e && (i || c) && (t += `<a class='ccm-similar-post' href='${e}' target='_blank'>${r+o}</a>`)
                    }), t)) {
                    let n = s.get("similar-posts", "Similar Recipes");
                    t = `<div class='ccm-similar-posts ccm-hide-on-print'><h3 class='ccm-head'>${n}</h3><div class='ccm-similar-posts-wrapper'>${t}</div></div>`
                }
                return t
            }(),
            A = function() {
                let t = "",
                    n = s.get("instagram1", "Did you make this recipe?"),
                    i = s.get("instagram2", "Tag"),
                    e = s.get("instagram3", "on instagram and hashtag it");
                a.instagramCreditAccount && (t = `<div class="ccm-instagram-credit ccm-hide-on-print"><div class="ccm-instagram-icon"></div><div><h5>${n}</h5><div>${i} <a href="https://www.instagram.com/${a.instagramCreditAccount}" target="_blank">@${a.instagramCreditAccount}</a>${e} #${a.instagramCreditHash}</div></div></div>`);
                return t
            }(),
            N = function() {
                var t = "";
                r.nutrition = {}, a.nutCalories && (t += "<div><p>" + s.get("nut-cal", "Calories") + "</p>" + a.nutCalories + "</div>", r.nutrition.calories = a.nutCalories);
                a.nutFat && (t += "<div><p>" + s.get("nut-fat", "Fat") + "</p>" + a.nutFat + " g.</div>", r.nutrition.fatContent = a.nutFat);
                a.nutSatFat && (t += "<div><p>" + s.get("nut-sat-fat", "Sat. Fat") + "</p>" + a.nutSatFat + " g.</div>", r.nutrition.saturatedFatContent = a.nutSatFat);
                a.nutCarbs && (t += "<div><p>" + s.get("nut-carbs", "Carbs") + "</p>" + a.nutCarbs + " g.</div>", r.nutrition.carbohydrateContent = a.nutCarbs);
                a.nutFiber && (t += "<div><p>" + s.get("nut-fiber", "Fiber") + "</p>" + a.nutFiber + " g.</div>", r.nutrition.fiberContent = a.nutFiber);
                a.nutNetCarbs && (t += "<div><p>" + s.get("nut-net-carbs", "Net carbs") + "</p>" + a.nutNetCarbs + "</div>");
                a.nutSugar && (t += "<div><p>" + s.get("nut-sugar", "Sugar") + "</p>" + a.nutSugar + " g.</div>", r.nutrition.sugarContent = a.nutSugar);
                a.nutProtein && (t += "<div><p>" + s.get("nut-protein", "Protein") + "</p>" + a.nutProtein + " g.</div>", r.nutrition.proteinContent = a.nutProtein);
                a.nutSodium && (t += "<div><p>" + s.get("nut-sodium", "Sodium") + "</p>" + a.nutSodium + " mg.</div>", r.nutrition.sodiumContent = a.nutSodium);
                a.nutCholesterol && (t += "<div><p>" + s.get("nut-cholesterol", "Cholesterol") + "</p>" + a.nutCholesterol + " g.</div>", r.nutrition.cholesterolContent = a.nutCholesterol);
                t ? (t = "<div><h3 class='ccm-head'>" + s.get("nut-info-heading", "Nutrition Facts") + "</h3><div class='ccm-nutrition-info'>" + t + "</div></div>", r.nutrition["@type"] = "NutritionInformation") : delete r.nutrition;
                a.nutNotes && (t += "<div class='ccm-nut-notes'>" + a.nutNotes + "</div>");
                return t
            }(),
            M = i ? `<div class='ccm-print-options'><button id='ccm-printWithImage' onclick='ccmpr(this);'>${s.get("with-image","With Image")}</button><button id='ccm-printWithoutImage' onclick='ccmpr(this);'>${s.get("without-image","Without Image")}</button></div>` : "",
            B = "<button class='ccm-printbutton' id='ccm-printbutton' onclick='ccmpr(this);'>" + s.get("print", "Print") + "</button>",
            W = "<div class='ccm-info'>" + f + v,
            F = "<div class='ccm-btns-wrapper ccm-hide-on-print'>" + B + M + "</div>",
            E = [];
        E[0] = S + i + k + F + e + W + "</div>" + l + m + L + P + T + I + N + H + b + y + w + x + $ + A, E[1] = S + i + k + F + e + W + "</div>" + l + m + L + P + T + I + N + H + b + y + w + x + $ + A, E[2] = S + e + F + i + k + W + "</div>" + l + m + L + P + T + I + N + H + b + y + w + x + $ + A, E[3] = S + i + k + F + e + W + "</div>" + l + m + L + P + T + I + N + H + b + y + w + x + $ + A, E[4] = S + w + x + $ + k + W + F + "</div><div class='ccm-flex-b'>" + i + "<div class='ccm-info-wrapper'>" + e + m + "</div></div>" + l + L + P + T + I + N + H + b + y + A, E[5] = S + w + x + $ + k + W + F + "</div>" + i + e + m + l + L + P + T + I + N + H + b + y + A, E[6] = S + w + x + $ + k + W + F + "</div>" + i + e + l + m + L + P + T + I + N + H + b + y + A;
        let O = '<div class="ccm-info-child"><div>LABEL</div><span>DATA</span></div>';
        E[7] = S + i + k + F + e + "<div class='ccm-info'>" + f.replace(":", "") + v.replace(":", "") + h(O) + "</div>" + m + "<div class='ccm-sections-wrapper'>" + L + P + "</div>" + T + I + N + H + b + y + w + x + $ + A, E[8] = S + "<div class='ccm-flex-b'>" + i + k + "<div class='ccm-info-wrapper'><div class='ccm-info'>" + f.replace(":", "") + v.replace(":", "") + h(O) + "</div>" + F + "</div></div>" + e + m + "<div class='ccm-sections-wrapper'>" + L + P + "</div>" + T + I + N + H + b + y + w + x + $ + A;
        let D = "";
        u.userInfo.noBranding || (D = `<div class='ccm-credit ccm-hide-on-print' style='display:none'>Created using <a href='https://www.recipesgenerator.com?utm_source=${location.href}&utm_campaign=card-credit' target='_blank'>The .js Generator</a></div>`);
        if (t.innerHTML = "<div class='ccm-wrapper'>" + E[n - 1] + D + "</div>", function() {
                let i = a.settings;
                var e;
                i && a.image && (i.imageHeight && (e = i.imageHeight, [1, 2, 8, 9].indexOf(n) > -1 && (t.querySelector(".ccm-image").style.height = e + "px")), i.imagePosition && function(n) {
                    t.querySelector(".ccm-image img").style.objectPosition = "50% " + n + "%"
                }(i.imagePosition))
            }(), c) c.innerHTML = JSON.stringify(r);
        else {
            let t = document.createElement("script");
            t.type = "application/ld+json", t.className = "ccm-schema", t.innerHTML = JSON.stringify(r), document.body.appendChild(t)
        }(function() {
            if (!document.querySelector(".ccm-p-script")) {
                let t = document.createElement("script");
                t.type = "text/javascript", t.innerHTML = 'var ccmPrintWin = null;function ccmpr(btn) {var id = btn.id;function ccmprNow() {if (ccmPrintWin == null || ccmPrintWin.closed) {ccmPrintWin = window.open("", "printwin");} else {ccmPrintWin.close();ccmPrintWin = window.open("", "printwin");}var d = ccmPrintWin.document;d.querySelector("body").innerHTML = btn.closest(".ccm-card").outerHTML + "<style>body{font-family:sans-serif}a#ccm-pinit,.mv-ad-box,.adunit,.adunitlabel,.adunitwrapper,.ccm-hide-on-print,.chicory-order-ingredients,.ccm-stars-frame{display: none!important; position: absolute !important; visibility: hidden !important; opacity: 0 !important; width: 0 !important; height: 0 !important; overflow: hidden !important;}.ccm-wrapper{background:#fff!important;box-shadow:none!important}.ccm-wrapper * {color: #000 !important;}</style>";if (id == "ccm-printWithoutImage") {d.querySelector(".ccm-image").remove();}var n = d.createElement("style");n.innerHTML = document.querySelector(".ccm-card-styles").innerHTML;d.querySelector("head").appendChild(n);ccmPrintWin.print();}if (id === "ccm-printbutton") {var po = btn.closest(".ccm-wrapper").querySelector(".ccm-print-options");po ? po.classList.toggle("ccm-show") : ccmprNow();} else {ccmprNow();}}', document.head.appendChild(t)
            }
        })(), u.userInfo && "z" === u.userInfo.pricing && (o.indexOf("unit-conversion") > -1 && a.parsedIngredients && (p.init(a.parsedIngredients), d("https://common.recipesgenerator.com/uc.js")), o.indexOf("star-ratings") > -1 && d("https://common.recipesgenerator.com/r.js"), o.indexOf("adjustable-servings") > -1 && a.yields && d("https://common.recipesgenerator.com/as.js"));
        ! function(t) {
            t = JSON.parse(t);
            for (let n in t) {
                let i = t[n];
                C[n] && C[n](i)
            }
        }(u.styleSettings)
    }).then(() => {
        l.then(t => t.text()).then(t => (function(t) {
            let n = m("script");
            n.innerHTML = t, document.head.appendChild(n)
        })(t))
    });
    const p = function() {
        let t = /\s+(tablespoon|tbsp|teaspoon|tsp|tbs|tb|cup|c.|ounce|oz|pound|lb|gallon|gal|pint|pt|fluid ounce|fl ounce|fl. ounce|floz|fl.oz|fl oz|fl. oz)[\.s]{0,1}\x20/i;
        return {
            init: function(n) {
                console.log(n);
                let i = y(".ccm-section-ingredients li"),
                    e = ["g", "mg", "l", "ml"];
                n.forEach(n => {
                    let c = n.amount,
                        o = n.unitShort.toLowerCase();
                    if ("" === n.unit || e.indexOf(o) > -1 || !c) return;
                    if ("liquid" === n.consistency && n.nutrition && function(t) {
                            return t = t.toLowerCase(), -1 === ["ml", "milliliter", "milliliters", "liter", "liters", "l"].indexOf(t)
                        }(n.nutrition.weightPerServing.unit)) {
                        let t = n.nutrition.weightPerServing;
                        t.unit = "ml", "cup" === o ? t.amount = 237 * c : "tsp" === o ? t.amount = 4.929 * c : "tbsp" === o ? t.amount = 14.787 * c : "gallon" === o ? t.amount = 3785.41 * c : "fl oz" !== o && "fl. oz." !== o || (t.amount = 29.5735 * c)
                    }
                    let r = c.toString().split(".");
                    if (1 === r.length) n.amountText = r[0];
                    else {
                        let t = n.original.match(/[½¼¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/);
                        r[1] = Number("0." + r[1]).toFixed(2);
                        let i = t ? t[0] : function(t) {
                            "number" == typeof t && (t = t.toFixed(2));
                            let n = [{
                                num: "0.25",
                                fraction: "1/4"
                            }, {
                                num: "0.33",
                                fraction: "1/3"
                            }, {
                                num: "0.50",
                                fraction: "1/2"
                            }, {
                                num: "0.67",
                                fraction: "2/3"
                            }, {
                                num: "0.75",
                                fraction: "3/4"
                            }, {
                                num: "0.94",
                                fraction: "15/16"
                            }, {
                                num: "0.81",
                                fraction: "13/16"
                            }, {
                                num: "0.69",
                                fraction: "11/16"
                            }, {
                                num: "0.56",
                                fraction: "9/16"
                            }, {
                                num: "0.44",
                                fraction: "7/16"
                            }, {
                                num: "0.31",
                                fraction: "5/16"
                            }, {
                                num: "0.19",
                                fraction: "3/16"
                            }, {
                                num: "0.06",
                                fraction: "1/16"
                            }, {
                                num: "0.86",
                                fraction: "6/7"
                            }, {
                                num: "0.71",
                                fraction: "5/7"
                            }, {
                                num: "0.57",
                                fraction: "4/7"
                            }, {
                                num: "0.43",
                                fraction: "3/7"
                            }, {
                                num: "0.29",
                                fraction: "2/7"
                            }, {
                                num: "0.14",
                                fraction: "1/7"
                            }, {
                                num: "0.13",
                                fraction: "1/8"
                            }, {
                                num: "0.38",
                                fraction: "3/8"
                            }, {
                                num: "0.63",
                                fraction: "5/8"
                            }, {
                                num: "0.88",
                                fraction: "7/8"
                            }, {
                                num: "0.20",
                                fraction: "1/5"
                            }, {
                                num: "0.40",
                                fraction: "2/5"
                            }, {
                                num: "0.60",
                                fraction: "3/5"
                            }, {
                                num: "0.80",
                                fraction: "4/5"
                            }, {
                                num: "0.17",
                                fraction: "1/6"
                            }, {
                                num: "0.83",
                                fraction: "5/6"
                            }].find(n => n.num === t);
                            return n ? n.fraction : "0"
                        }(r[1]);
                        "0" === r[0] ? n.amountText = i : n.amountText = r[0] + " " + i
                    }
                    n.amountText = n.amountText.toString().trim();
                    let a = n.original.match(/EL_INDEX=(\d+)/i);
                    if (a) {
                        let e = a[1];
                        ! function(n, i) {
                            let e = i.nutrition ? i.nutrition.weightPerServing.amount : "";
                            if (e) {
                                function c(t, i) {
                                    i = i.toString().trim();
                                    let e = n.attr(t),
                                        c = e ? e + "|" + i : i;
                                    n.setAttribute(t, c)
                                }
                                e.toString().indexOf(".") > -1 && (e = e.toFixed(2)), c("data-amounts-original", i.amountText), c("data-amounts-secondary", e), c("data-units-original", i.original.match(t)[0].trim()), c("data-units-secondary", i.nutrition.weightPerServing.unit)
                            }
                        }(i[e], n)
                    }
                })
            }
        }
    }();
    let f = document.createElement("div");

    function g(t, n) {
        var i, e, c = "",
            o = "recipeInstructions";
        "instructions" === t ? (i = "<ol class='ccm-section-items'>", e = "</ol>") : (i = "<ul class='ccm-section-items'>", e = "</ul>", o = "recipeIngredient"), r[o] = [];
        for (let t = 0; t < n.length; t++) {
            let a = n[t],
                s = a.title ? `<div class='ccm-section-title'>${a.title}</div>` : "",
                l = a.data,
                m = "";
            ! function() {
                f.innerHTML = l;
                let t = f.querySelectorAll("a[href]"),
                    n = [];
                for (let i = 0; i < t.length; i++) {
                    let e = t[i],
                        c = e.textContent.trim();
                    n[i] = [c + "ThisIsALink" + i, e.attr("href")], e.textContent = c + "ThisIsALink" + i
                }
                let i = f.innerText.match(/.+/g);
                if (i)
                    for (let t = 0; t < i.length; t++) {
                        let e = i[t];
                        if ("" !== e.trim()) {
                            if (e.indexOf("ThisIsALink") > -1)
                                for (let t = 0; t < n.length; t++) {
                                    let i = n[t],
                                        c = `<a href='${i[1]}' target='_blank' rel='nofollow' class='ccm-link'>${i[0].replace(/ThisIsALink\d+/,"")}</a>`;
                                    e = e.replace(i[0], c)
                                }
                            m += `<li>${e.trim().replace(/\s{2,}/g," ")}</li>`, r[o].push(e.replace(/<a.+?>/g, "").replace("</a>", ""))
                        }
                    }
            }(), c += "<div class='ccm-section'>" + s + i + m + e + "</div>"
        }
        return c ? "instructions" == t ? `<div class='ccm-section-${t} ${t}'><h3 class='ccm-head'>${s.get("instructions","Instructions")}</h3>${c}</div>` : `<div class='ccm-section-${t} ${t}'><h3 class='ccm-head'>${s.get("ingredients","Ingredients")}</h3>${c}</div>` : ""
    }

    function h(t) {
        let n = "",
            i = a.time;
        if (i) {
            let a = ["ph", "pm", "ch", "cm", "ih", "im"];
            for (let t = 0; t < a.length; t++) i[a[t]] = parseFloat(i[a[t]]) || 0;
            if (!(i.ph || i.pm || i.ch || i.cm || i.ih || i.im)) return "";

            function e(t, n) {
                let i = "";
                return t && n ? i = t + " H & " + n + " M" : t ? i = t + " Hour" : n && (i = n + " Min"), i
            }

            function c(t, n, i) {
                let e = "";
                return t && n ? e = "PT" + t + "H" + n + "M" : t ? e = "PT" + t + "H" : n && (e = "PT" + n + "M"), e
            }
            let l = e(i.ph, i.pm),
                m = e(i.ch, i.cm),
                d = e(i.ih, i.im),
                u = function() {
                    let t = i.ph + i.ch + i.ih,
                        n = i.pm + i.cm + i.im,
                        c = n / 60;
                    if (c >= 1) {
                        let i = Math.floor(c),
                            e = c - i;
                        t += i, n = Math.floor(60 * e)
                    }
                    return {
                        totaltimeHours: t,
                        totaltimeMin: n,
                        totaltimeText: e(t, n)
                    }
                }(),
                p = c(u.totaltimeHours, u.totaltimeMin),
                f = c(i.ch, i.cm),
                g = c(i.ph, i.pm);

            function o(n, i) {
                return i ? t ? t.replace("LABEL", n).replace("DATA", i) : "<span class='ccm-time-child'>" + n + ": " + i + "</span>" : ""
            }
            r.prepTime = g, r.cookTime = f, r.totalTime = p;
            let h = s.get("prep-time", "prep time"),
                v = s.get("cook-time", "cook time"),
                b = s.get("inactive-time", "inactive time"),
                y = s.get("total-time", "total time"),
                C = o(h, l),
                T = o(v, m),
                S = o(b, d),
                w = o(y, u.totaltimeText);
            n = t ? C + T + S + w : "<div class='ccm-time'>" + C + T + S + w + "</div>"
        }
        return n
    }

    function v(t, n, i) {
        if (t)
            for (var e = 0; e < t.length; e++) t[e].style[n] = "#" + i
    }

    function b(t) {
        return document.querySelector(t)
    }

    function y(t) {
        return document.querySelectorAll(t)
    }
    f.style = "position: absolute;width: 0;height: 0;clip: rect(0, 0, 0, 0);transform:scale(0)", f.setAttribute("contenteditable", "true"), document.body.appendChild(f);
    const C = {
        cardWidthSlider: function(t) {
            for (var n = y(".ccm-wrapper"), i = 0; i < n.length; i++) n[i].style.maxWidth = t + "px"
        },
        BorderColor: function(t) {
            v(y(".ccm-wrapper"), "borderColor", t)
        },
        borderStyle: function(t) {
            var n = b(".ccm-wrapper");
            n.style.borderWidth = t.trim().split(" ")[0], n.style.borderStyle = t.trim().split(" ")[1]
        },
        BgColor: function(t) {
            v(y(".ccm-wrapper"), "backgroundColor", t)
        },
        NameTextColor: function(t) {
            v(y(".ccm-name"), "color", t)
        },
        NameBgColor: function(t) {
            v(y('[data-ccmcardnum="3"] .ccm-name'), "background", t), v(y('[data-ccmcardnum="4"] .ccm-name'), "background", t)
        },
        InfoColor: function(t) {
            v(y(".ccm-info"), "color", t)
        },
        InfoBorder: function(t) {
            v(y(".ccm-info"), "borderColor", t)
        },
        PrintBtnBgColor: function(t) {
            v(y(".ccm-printbutton"), "background", t), v(y('[data-ccmcardnum="1"] .ccm-image'), "borderBottomColor", t), v(y('[data-ccmcardnum="2"] .ccm-image'), "borderBottomColor", t), v(y('[data-ccmcardnum="4"] .ccm-image img'), "borderColor", t)
        },
        PrintBtnTextColor: function(t) {
            v(y(".ccm-printbutton"), "color", t)
        },
        TimeTextColor: function(t) {
            v(y(".ccm-time"), "color", t)
        },
        TimeBgColor: function(t) {
            v(y(".ccm-time"), "background", t)
        },
        TimeBordersColor: function(t) {
            v(y(".ccm-time"), "borderColor", t)
        },
        timeBorderStyle: function(t) {
            var n = b(".ccm-time");
            n && (n.style.borderStyle = t)
        },
        SectionsHeadingsColor: function(t) {
            v(y(".ccm-head"), "color", t)
        },
        SectionsTextColor: function(t) {
            v(y(".ccm-section"), "color", t), v(y(".ccm-notes"), "color", t)
        },
        NutritionBgColor: function(t) {
            v(y(".ccm-nutrition-info"), "background", t)
        },
        NutritionTextColor: function(t) {
            v(y(".ccm-nutrition-info"), "color", t)
        },
        NutritionDisclaimerBgColor: function(t) {
            v(y(".ccm-nut-notes"), "background", t)
        },
        NutritionDisclaimerTextColor: function(t) {
            v(y(".ccm-nut-notes"), "color", t)
        },
        InstagramCreditBgColor: function(t) {
            v(y(".ccm-instagram-credit"), "background", t)
        },
        InstagramCreditTextColor: function(t) {
            v(y(".ccm-instagram-credit"), "color", t)
        },
        InstagramCreditIconColor: function(t) {
            v(y(".ccm-instagram-icon"), "color", t)
        },
        SimilarPostsShowEntireImage: function(t) {
            for (var n = y(".ccm-similar-post-image"), i = 0; i < n.length; i++) t ? n[i].style.setProperty("object-fit", "contain", "important") : n[i].style.setProperty("object-fit", "cover")
        },
        SimilarPostsImageHeight: function(t) {
            for (var n = y(".ccm-similar-post-image"), i = 0; i < n.length; i++) n[i].style.setProperty("height", t + "px", "important")
        },
        ingredientsAsCheckboxes: function(t) {
            T(t, "ingredients")
        },
        instructionsAsCheckboxes: function(t) {
            T(t, "instructions")
        },
        sideBySideSections: function(t) {
            let i = b(".ccm-section-ingredients"),
                e = b(".ccm-section-instructions");
            t && i && e && "8" != n && "9" != n && (i.outerHTML = `<div class='ccm-side-by-side'>${i.outerHTML+e.outerHTML}</div>`, e.remove())
        }
    };

    function T(t, n) {
        let i = b(".ccm-section-" + n);
        t && i.classList.add("ccm-as-checkboxes");
        let e = i.querySelectorAll("li");
        for (let n = 0; n < e.length; n++) {
            let i = e[n],
                c = i.innerHTML;
            t && (i.innerHTML = `<label><input class='ccm-chkbox' type='checkbox'><span>${c}</span></label>`)
        }
    }
}();
