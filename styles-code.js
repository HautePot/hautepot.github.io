(function () {
  console.log("styles-code");
  let pinItBtnStyles = "a#ccm-pinit,.ccm-card a[class^='PIN'],a.cmm-pinit-btn{all:unset!important;font-size:0!important;position:absolute!important;top:-19px!important;left:-17px!important;z-index:3!important;width:36px!important;height:36px!important;border-radius:50%!important;cursor:pointer!important;background:#cb1f27 url(https://assets.adwantech.com/pinterest.svg) no-repeat center/50%!important;border:2px solid #fff!important;box-shadow:0 0 10px #aaa!important}";
  let allStyles = `
    <style id='commonStyles'>
    .ccm-wrapper,
    .ccm-wrapper * {
      box-sizing: border-box;
    }

    .ccm-wrapper h3 {
      margin: 0;
    }

    .ccm-show {
      display: block !important;
    }

    a.ccm-link, .ccm-section a, .ccm-notes a {
      color: #4193f0;
    }

    .ccm-wrapper {
      color: #000;
      max-width: 620px;
      position: relative;
      padding: 20px 20px 0;
      margin: 20px auto;
      background: #f2f2f2;
      border: 6px double #6672E5;
    }

    .ccm-name {
      all: unset;
      display: block;
      font-size: 20px !important;
      font-weight: 700 !important;
      letter-spacing: 0px !important;
    }

    .ccm-info {
      position: relative;
      font-size: 14px;
      margin-bottom: 20px;
      text-transform: capitalize;
    }

    .ccm-author,
    .ccm-yield {
      display: inline-block;
    }
    
    .ccm-wrapper img {
      margin: 0 !important;
      padding: 0 !important;
      max-width: 100%;
    }

    .ccm-btns-wrapper {
      position: relative;
    }

    #ccm-printbutton {
      margin: 0;
      color: #fff;
      padding: 0 20px;
      font-size: 14px;
      border-radius: 3px;
      cursor: pointer;
      height: 35px;
      background: #555;
      border: 0 !important;
      outline: 0 !important;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .ccm-print-options {
      display: none;
      white-space: nowrap;
      position: absolute;
      top: 32px;
      right: 0;
      z-index: 2;
      background: #fff;
      border: 1px solid #ccc;
    }

    .ccm-print-options button {
      display: block;
      background: 0 0;
      border: 0;
      cursor: pointer;
      padding: 10px;
      width: 100%;
      text-align: left;
    }

    .ccm-print-options button:hover {
      color: #fff;
      background: #555;
    }

    .ccm-head {
      color: #000;
      font-size: 20px !important;
      font-weight: 700 !important;
      margin: 30px 0 0 !important;
      text-transform: uppercase !important;
    }

    .ccm-section-title {
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 10px;
    }

    .ccm-section {
      padding-left: 20px;
      line-height: 1.7;
      margin: 10px 0 30px;
    }

    .ccm-section-items {
      margin: 0 !important;
      padding: 0 0 0 30px !important;
    }

    .ccm-section li {
      margin: 0 0 6px !important;
      padding: 0 !important;
    }

    .ccm-section-steps li {
      line-height: 1.6;
      margin-bottom: 10px !important;
    }

    .ccm-posturl {
      padding: 15px 0;
      border-top: 1px solid #ccc;
    }

    .ccm-posturl a {
      font-size: 13px;
    }

    .ccm-notes {
      line-height: 1.7;
    }

    .ccm-notes-inner {
      padding-top: 10px;
    }

    .ccm-notes p {
      margin-bottom: 0 !important;
      display: block;
      text-align: left;
    }

    .ccm-copyright {
      font-size: 13px;
      font-style: italic;
      line-height: 1.6;
      padding: 15px 0;
      border-top: 1px solid #ccc;
    }

    .ccm-credit {
      font-size: 12px;
      padding: 10px;
      text-align: center;
      background: #fff;
      margin: 0 -20px !important;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top: 1px solid rgba(0, 0, 0, 0.15);
      display:none
    }

    .ccm-credit a {
      text-decoration: none;
    }

    .ccm-keywords,
    .ccm-categories,
    .ccm-cuisine,
    .ccm-video,
    .ccm-section>br,
    .ccm-time br {
      display: none;
    }
  </style>
  <style class='styles-to-include styles-products'>
    .ccm-products {
      display: flex;
      flex-wrap: wrap;
    }

    .ccm-products .ccm-head {
      width: 100%;
    }

    .ccm-product {
      width: calc(33.333% - 10px);
      margin: 5px;
      text-align: center;
    }

    .ccm-product-name {
      display: block !important;
      font-size: 14px !important;
      color: #6672e5;
      margin: 10px 0 !important;
    }

    .ccm-product-image {
      width: 100% !important;
      height: 170px !important;
      -o-object-fit: contain;
      object-fit: contain;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 5px;
    }

    .ccm-product:hover .ccm-product-image {
      box-shadow: 0 0 10px #ccc;
    }
  </style>
  <style class='styles-to-include styles-similar-posts'>
    .ccm-similar-posts-wrapper {
      margin: 0 -5px;
      padding-bottom: 15px;
      display: flex !important;
      flex-wrap: wrap;
    }

    .ccm-similar-post {
      all: unset;
      width: 140px;
      min-width: 120px;
      max-width: 220px;
      border-radius: 7px;
      margin: 10px 5px !important;
      flex-grow: 1;
      text-align: center;
      background: #fff;
      overflow: hidden;
      cursor: pointer;
      border: 1px solid #eee;
      transition: all 0.3s;
    }

    .ccm-similar-post:hover {
      box-shadow: 0 0 10px 5px #bbb;
    }

    .ccm-similar-post-name {
      font-size: 16px !important;
      font-weight: 700 !important;
      line-height: 1.5 !important;
      margin: 15px 10px !important;
    }

    .ccm-similar-post-image {
      display: block !important;
      width: 100% !important;
      height: 170px !important;
      -o-object-fit: cover;
      object-fit: cover;
      background: #eee;
    }
  </style>
  <style class='styles-to-include styles-nutrition'>
    .ccm-nutrition-info {
      font-size: 0;
      padding: 15px 0;
      margin: 0 0 20px;
    }

    .ccm-nutrition-info>div {
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      width: calc(20% - 10px);
      min-width: 100px;
      text-align: center;
      margin: 10px 5px;
    }

    .ccm-nutrition-info>div:nth-child(5)~div {
      margin-top: 20px;
    }

    .ccm-nutrition-info>div p {
      margin-top: 0;
      margin-bottom: 7px;
      display: block;
      text-align: left;
    }

    .ccm-nut-notes {
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      background: #f7edb8;
    }

    .ccm-nut-notes p {
      margin: 0;
    }
  </style>
  <style class='styles-to-include styles-time'>
    .ccm-time {
      text-transform: uppercase;
      font-size: 12px;
      text-align: center;
      background: #fff;
      padding: 10px 0;
      margin-bottom: 20px;
    }

    .ccm-time-child {
      padding: 10px;
      display: inline-block;
      white-space: nowrap;
    }

    .ccm-time-child:not(:last-child) {
      background: linear-gradient(90deg, currentColor 1px, transparent 0) no-repeat right center / 1px 10px;
    }
  </style>
  <style class='styles-to-include styles-summary'>
    .ccm-summary {
      text-align: center;
      margin: 20px 0;
      line-height: 1.7;
      font-style: italic;
    }
  </style>
  <style class='styles-to-include styles-instagram-credit'>
    .ccm-instagram-credit {
      background: #6E3B5C;
      padding: 20px 15px;
      margin: 0 -20px;
      color: #fff;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }

    .ccm-instagram-credit:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .ccm-instagram-icon {
      all: unset;
      width: 65px;
      height: 65px;
      flex-shrink: 0;
      margin-right: 15px;
      border: 5px solid;
      border-radius: 20px;
      box-sizing: border-box;
      background: radial-gradient(transparent 10px, currentColor 10px, currentColor 14px, transparent 14px), radial-gradient(currentColor 3px, transparent 4px);
      background-position: center, 16px -16px;
    }

    .ccm-instagram-credit h5 {
      font-size: 24px !important;
      line-height: 1 !important;
      margin: 0 0 12px !important;
    }

    .ccm-instagram-credit a {
      color: inherit !important;
    }
  </style>
  <style class='styles-to-include styles-as-checkboxes'>
    .ccm-as-checkboxes .ccm-section-items {
      padding: 0 0 0 12px !important;
      list-style: none !important;
    }

    .ccm-as-checkboxes label {
      display: inline-flex;
      align-items: baseline;
      cursor: default;
    }

    .ccm-as-checkboxes .ccm-chkbox:checked~* {
      text-decoration: line-through;
      text-decoration-color: rgba(0, 0, 0, 0.25);
    }

    .ccm-as-checkboxes a {
      text-decoration-color: rgba(0, 0, 0, 0.25);
    }

    .ccm-chkbox {
      flex-shrink: 0;
      -webkit-appearance: auto !important;
      appearance: auto !important;
      margin: 0 10px 0 0 !important;
    }
  </style>
  <style class='styles-to-include styles-side-by-side'>
    .ccm-side-by-side {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -20px;
    }

    .ccm-side-by-side .ccm-section-ingredients,
    .ccm-side-by-side .ccm-section-instructions {
      margin: 0;
      padding: 0 20px 20px;
      flex-grow: 1;
    }

    .ccm-side-by-side .ccm-section-ingredients {
      width: 40%;
      min-width: 200px;
    }

    .ccm-side-by-side .ccm-section-instructions {
      width: 60%;
    }

    .ccm-side-by-side .ccm-section {
      padding-left: 0;
    }

    .ccm-side-by-side .ccm-section-items {
      padding-left: 0 !important;
      list-style-position: inside !important;
    }
  </style>
    `; // allStyles variable

  var styles = [];
  styles[0] = "[data-ccmcardnum='1'] .ccm-wrapper{border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.25);}.ccm-image{text-align:center;height:300px;margin:-20px!important;overflow:hidden;border-bottom:3px solid #6672E5;}.ccm-image img{width:100%;height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-top-left-radius:10px;border-top-right-radius:10px;}.ccm-btns-wrapper{text-align:center;}#ccm-printbutton{border-radius:25px;width:120px;height:40px;font-weight:700;text-transform:uppercase;background:#6672E5;}.ccm-print-options{right:calc(50% - 53px);}.ccm-name{text-align:center!important;margin:40px 0 20px!important;text-transform:capitalize;}.ccm-info{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:center;align-items:center;}.ccm-time{border-right:0;border-left:0;margin:0 -20px;border-top:1px dashed #000;border-bottom:1px dashed #000;}.ccm-summary{margin-bottom:25px;}.ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px;}.ccm-yield + .ccm-author{margin-left: 30px;}";
  styles[1] = "[data-ccmcardnum='2'] .ccm-wrapper{border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.25);}.ccm-image{height:380px;overflow:hidden;border-bottom-left-radius:50%;margin:-20px -20px 0!important;border-bottom:7px solid #6672E5;}.ccm-image img{width:100%;height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-top-left-radius:10px;border-top-right-radius:10px;}.ccm-btns-wrapper{position:absolute;top:15px;right:0;}#ccm-printbutton{height:40px;font-weight:700;background:#6672E5;text-transform:uppercase;border-bottom-left-radius:50px;border-top-left-radius:50px;}.ccm-name{text-align:center!important;margin:40px 0 20px!important;text-transform:capitalize;}.ccm-info{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:center;align-items:center;}.ccm-time{border-right:0;border-left:0;margin:0 -20px;border-top:1px dashed #000;border-bottom:1px dashed #000;}.ccm-summary{margin-bottom:25px;}.ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px;}.ccm-yield + .ccm-author{margin-left: 30px;}";
  styles[2] = "[data-ccmcardnum='3'] .ccm-wrapper{border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.25);}.ccm-name{text-align:center!important;text-transform:capitalize;margin:-20px -20px 0!important;background:#fff;padding:20px;border-bottom:2px solid #6672E5;border-top-left-radius:10px;border-top-right-radius:10px;}.ccm-btns-wrapper{text-align:center;margin-bottom:25px;}#ccm-printbutton{font-weight:700;background:#6672E5;text-transform:uppercase;border-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;}.ccm-print-options{right:calc(50% - 53px);}.ccm-image{height:250px;width:250px;overflow:hidden;margin:40px auto;}.ccm-image img{all:unset;width:100% !important;height:100% !important;min-height:100% !important;-o-object-fit:cover !important;object-fit:cover !important;-o-object-position:50% 50%;object-position:50% 50%;border-radius:50% !important;}.ccm-info{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:center;align-items:center;}.ccm-time{border-right:0;border-left:0;margin:0 -20px;border-top:1px dashed #000;border-bottom:1px dashed #000;}.ccm-summary{margin-bottom:25px;}.ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px;}.ccm-yield + .ccm-author{margin-left: 30px;}";
  styles[3] = "[data-ccmcardnum='4'] .ccm-wrapper{border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.25);}.ccm-name{text-align:center!important;text-transform:capitalize;margin:40px -20px!important;background:#fff;padding:20px;box-shadow:inset 0 -9px 4px -8px #bbb,inset 0 9px 4px -8px #bbb;}.ccm-image{height:250px;width:250px;overflow:hidden;margin:-20px auto 30px;}.ccm-image img{width:100%;height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border:3px solid #6672E5;border-top:0;border-bottom-left-radius:50%;border-bottom-right-radius:50%;}.ccm-image~.ccm-btns-wrapper{text-align:center;position:absolute;top:170px;right:calc(50% - 123px);}#ccm-printbutton{width:60px;height:60px;padding:0;font-weight:700;background:#6672E5;text-transform:uppercase;border-radius:50%;border:3px solid #f2f2f2 !important;}.ccm-info{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:center;align-items:center;}.ccm-time{background:none;}.ccm-summary{margin-bottom:25px;}.ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px;}.ccm-yield + .ccm-author{margin-left: 30px;}";
  styles[4] = "[data-ccmcardnum='5'] .ccm-info{padding:0 90px 25px 0;border-bottom:2px solid #000;}.ccm-btns-wrapper{position:absolute;top:0;right:0;}.ccm-flex-b{display: flex;flex-wrap: wrap;justify-content: space-between; margin: -1% -1% 0;}.ccm-flex-b > *{padding: 1%;min-width: 150px;flex-grow: 1;}.ccm-image{width:40%;}.ccm-info-wrapper{width: 60%;}.ccm-name{margin-bottom:10px!important;line-height:1.6;text-transform:uppercase;margin-top:0;letter-spacing:1px;text-align:center;}.ccm-summary{line-height:1.7;font-style:italic;}.ccm-time{background:#fff;margin-top:25px;;border:1px solid rgba(0,0,0,0.15);}.ccm-instagram-credit{border-radius:0!important;}.ccm-yield + .ccm-author{margin-left: 30px;}";
  styles[5] = "[data-ccmcardnum='6'] .ccm-info{padding:0 90px 25px 0;border-bottom:2px solid #000;}.ccm-btns-wrapper{position:absolute;top:0;right:0;}.ccm-image{width:150px;height:150px;text-align:center;margin:25px auto;}.ccm-image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-radius:50%;}.ccm-name{margin:20px 0!important;text-align:center;}.ccm-time{clear:both;border-top:1px dotted #000;border-bottom:1px dotted #000;border-right:0;border-left:0;}.ccm-instagram-credit{border-radius:0!important;}.ccm-yield + .ccm-author{margin-left: 30px;}";
  styles[6] = "[data-ccmcardnum='7'] .ccm-info{padding:0 90px 25px 0;border-bottom:2px solid #000;}.ccm-btns-wrapper{position:absolute;top:0;right:0;}.ccm-image{text-align:center;margin-bottom:25px;}.ccm-image img{max-width:100%;}.ccm-name{line-height:1.6;text-transform:uppercase;margin-top:0!important;letter-spacing:1px;text-align:center;margin-bottom:20px;}.ccm-time{border-top:1px dashed #000;border-bottom:1px dashed #000;border-right:0;border-left:0;}.ccm-summary{margin-bottom:30px;}.ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px;}.ccm-instagram-credit{border-radius:0!important;}.ccm-yield + .ccm-author{margin-left: 30px;}";
  styles[7] = "[data-ccmcardnum='8'] .ccm-wrapper{max-width:900px;border: 1px solid rgba(0,0,0,0.15)!important;background: transparent;}.ccm-image{height:400px;margin:-20px -20px 0;}.ccm-image img{width:100% !important;height:100% !important;min-height:100% !important;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;}.ccm-btns-wrapper{text-align:center;margin-bottom: 20px;}#ccm-printbutton{border-radius:0;text-transform:uppercase;background:#6672E5;}.ccm-print-options{right:calc(50% - 53px);}.ccm-name{text-align: center;margin: 0!important;text-transform:capitalize;padding: 25px 0;}.ccm-info{display:-webkit-box;display:flex;flex-wrap: wrap;text-align: center;font-size: 14px;}.ccm-info-child{flex: 1;padding: 20px 5px;min-width: 120px;display:block !important;}.ccm-info-child > :first-child {display:block;font-weight: 700;text-transform: uppercase;margin-bottom: 10px;}.ccm-summary{position:relative;margin: 0 auto;padding: 30px;max-width: 800px;}.ccm-summary::before{content:'';width:100px;height:100px;position:absolute;top:-20px;left:calc(50% - 50px);opacity:.05;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOS45ODMgM3Y3LjM5MWMwIDUuNzA0LTMuNzMxIDkuNTctOC45ODMgMTAuNjA5bC0uOTk1LTIuMTUxYzIuNDMyLS45MTcgMy45OTUtMy42MzggMy45OTUtNS44NDloLTR2LTEwaDkuOTgzem0xNC4wMTcgMHY3LjM5MWMwIDUuNzA0LTMuNzQ4IDkuNTcxLTkgMTAuNjA5bC0uOTk2LTIuMTUxYzIuNDMzLS45MTcgMy45OTYtMy42MzggMy45OTYtNS44NDloLTMuOTgzdi0xMGg5Ljk4M3oiLz48L3N2Zz4=);background-repeat:no-repeat;background-size:contain;pointer-events:none}.ccm-sections-wrapper{display: flex;flex-wrap: wrap;margin: 0 -20px;border-top: 1px solid rgba(0,0,0,0.15);}.ccm-sections-wrapper:not(:last-child) {margin-bottom: 20px;border-bottom: 1px solid rgba(0,0,0,0.15);}.ccm-section-ingredients,.ccm-section-instructions{padding: 0 25px 25px;margin: 0;flex-grow: 1;}.ccm-section-ingredients{width: 40%;min-width: 200px;}.ccm-section-instructions{width: 60%;}.ccm-section{padding-left: 0;}.ccm-section-items{padding-left: 0!important;list-style-position: inside!important;}.ccm-notes{margin-bottom:20px;}.ccm-instagram-credit{border-radius:0!important;}";
  styles[8] = "[data-ccmcardnum='9'] .ccm-wrapper{max-width:900px;border: 1px solid rgba(0,0,0,0.15)!important;background: transparent;border-radius: 10px;}.ccm-flex-b{display: flex;flex-wrap: wrap;justify-content: space-between;margin: -1% -1% 0;}.ccm-image{height: 420px;width: 68%;flex-grow: 1;padding: 1%;}.ccm-image img{border-radius: 10px;width:100% !important;height:100% !important;min-height:100% !important;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;}.ccm-info-wrapper{width: 30%;min-width: 200px;display: flex;flex-direction: column;flex-grow: 1;padding: 1%;}.ccm-info{border: 1px solid rgba(0,0,0,0.15);border-radius: 10px;padding: 5px 20px;margin-bottom:0;flex-grow: 1;display: flex;flex-direction: column;font-size: 14px;}.ccm-info-child{flex: 1;padding: 10px 0;display: flex;align-items: center;justify-content: space-between;}.ccm-info-child > :first-child {flex-shrink: 0;font-weight: 700;text-transform: uppercase;}.ccm-info-child > :last-child{text-align:right;}#ccm-printbutton{border-radius: 10px;text-transform: uppercase;background: #6672E5;width: 100%;height: 40px;margin-top:20px !important;}.ccm-name{text-align: center;margin: 0!important;text-transform:capitalize;padding: 25px 0;}.ccm-summary{margin:0 0 30px;}.ccm-sections-wrapper{display: flex;flex-wrap: wrap;margin: 0 -20px;border-top: 1px solid rgba(0,0,0,0.15);}.ccm-sections-wrapper:not(:last-child) {margin-bottom: 20px;border-bottom: 1px solid rgba(0,0,0,0.15);}.ccm-section-ingredients,.ccm-section-instructions{padding: 0 25px 25px;margin: 0;flex-grow: 1;}.ccm-section-ingredients{width: 40%;min-width: 200px;border-right: 1px solid rgba(0,0,0,0.15);}.ccm-section-instructions{width: 60%;}.ccm-section{padding-left: 0;}.ccm-section-items{padding-left: 0!important;list-style-position: inside!important;}.ccm-notes{margin-bottom:20px;}.ccm-instagram-credit{margin: 0 0 20px;border-radius: 10px;}";
  var card = document.querySelector(".ccm-card");
  var cardStyles = document.querySelector(".ccm-card-styles");
  var cardNum = Number(card.getAttribute("data-ccmcardnum"));
  allStyles = allStyles.replace(/<style .+?>/g, "").replace(/<\/style>/g, "");
  var allStylesTogether = allStyles + pinItBtnStyles + styles[cardNum - 1];
  if (cardStyles) {
    cardStyles.innerHTML = allStylesTogether;
  } else {
    let style = document.createElement("style");
    style.innerHTML = allStylesTogether;
    style.className = "ccm-card-styles";
    document.head.appendChild(style);
  }
  //     for (var i = 0; i < cardStyles.length; i++) {
  //       cardStyles[i].remove();
  //     }
  //allStyles = allStyles.replace(/<style .+?>/g, "").replace(/<\/style>/g, "");
  //ccmAllStyles = allStyles + styles[cardNum - 1] + pinItBtnStyles;
})();
