(this["webpackJsonpfinal-portfolio"]=this["webpackJsonpfinal-portfolio"]||[]).push([[0],{377:function(n,e,t){"use strict";t.r(e);var r,i=t(1),a=t.n(i),o=t(43),c=t.n(o),s=t(36),l=t(6),d=t(64),m=t(7),b=t.p+"static/media/avatar.91628e53.jpg",j=t(0);var h,p=m.b.nav(r||(r=Object(l.a)(['\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border-right: 1px solid var(--border-color);\n    .avatar{\n        width: 100%;\n        border-bottom: 1px solid var(--border-color);\n        text-align: center;\n        padding: 1rem 0;\n        img{\n            width: 70%;\n            border-radius: 50%;\n            border: 8px solid var(--border-color);\n        }\n    }\n\n    .nav-items{\n        width: 100%;\n        text-align: center;\n        .active-class{\n            background-color: var(--primary-color-light);\n            color: white;\n        }\n        li{\n            display: block;\n            a{\n                display: block;\n                padding: .45rem 0;\n                position: relative;\n                z-index: 10;\n                text-transform: uppercase;\n                transition: all .4s ease-in-out;\n                font-weight: 600;\n                letter-spacing: 1px;\n                &:hover{\n                    cursor: pointer;\n                    color: var(--white-color);\n                }\n                &::before{\n                    content: "";\n                    position: absolute;\n                    bottom: 0;\n                    left: 0;\n                    width: 0;\n                    height: 50%;\n                    background-color: var( --primary-color);\n                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;\n                    opacity: 0.21;\n                    z-index: -1;\n                }\n            }\n\n            a:hover::before{\n                width: 100%;\n                height: 100%;\n            }\n        }\n    }\n\n    footer{\n        border-top: 1px solid var(--border-color);\n        width: 100%;\n        p{\n            padding: 1.3rem 0;\n            font-size: 1.1rem;\n            display: block;\n            text-align: center;\n        }\n    }\n']))),x=function(){return Object(j.jsxs)(p,{children:[Object(j.jsx)("div",{className:"avatar",children:Object(j.jsx)("img",{src:b,alt:""})}),Object(j.jsxs)("ul",{className:"nav-items",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/about",activeClassName:"active-class",exact:!0,children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/resume",activeClassName:"active-class",exact:!0,children:"Resume"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/blogs",activeClassName:"active-class",exact:!0,children:"Blogs"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/contact",activeClassName:"active-class",exact:!0,children:"Contact"})})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{children:["@2021 ",Object(j.jsx)("b",{children:"Amirhossein Mohammadian."})]})})]})};var g=m.b.div(h||(h=Object(l.a)(["\n    width: 16.3rem;\n    position: fixed;\n    height: 100vh;\n    background-color: var(--sidebar-dark-color);\n    overflow: hidden;\n    transition: all .4s ease-in-out;\n    @media screen and (max-width:1200px){\n        transform: translateX(-100%);\n        z-index: 20;\n    }\n"]))),u=function(n){var e=n.navToggle;return Object(j.jsx)(g,{className:"".concat(e?"nav-toggle":""),children:Object(j.jsx)(x,{})})},v=t(117),O=t.n(v),f=t(121),w=t.n(f),y=t(116),k=t.n(y);var N,z=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(k.a,{width:"100%",height:"100vh",params:{particles:{number:{value:109,density:{enable:!0,value_area:1200}},color:{value:"#636e72"},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:6}},line_linked:{enable:!1,distance:150,opacity:.9,width:1,shadow:{enable:!0,color:"#e74c3c",blur:5}},move:{enable:!0,random:!0,speed:.6,attract:{rotateX:600,rotateY:1200}},size:{value:4,random:!0,anim:{speed:40,size_min:.1}},opacity:{value:.8,anim:{speed:1,opacity_min:.1}}}}})})};var F,E=m.b.header(N||(N=Object(l.a)(["\n    width: 100%;\n    height: 100vh;\n    position: relative;\n   \n    .typography{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        text-align: center;\n        width: 80%;\n\n        .icons{\n            display: flex;\n            justify-content: center;\n            margin-top: 1rem;\n            .icon{\n                border: 2px solid var(--border-color);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                border-radius: 50%;\n                transition: all .4s ease-in-out;\n                cursor: pointer;\n                &:hover{\n                    border: 2px solid var(--primary-color);\n                    color: var(--primary-color);\n                }\n                &:not(:last-child){\n                    margin-right: 1rem;\n                }\n                svg{\n                    margin: .5rem;\n                }\n            }\n\n            .i-youtube{\n                &:hover{\n                    border: 2px solid red;\n                    color: red;\n                }\n            }\n            .i-github{\n                &:hover{\n                    border: 2px solid #5F4687;\n                    color: #5F4687;\n                }\n            }\n        }\n    }\n"]))),A=function(){return Object(j.jsxs)(E,{children:[Object(j.jsx)("div",{className:"particle-con",children:Object(j.jsx)(z,{})}),Object(j.jsxs)("div",{className:"typography",children:[Object(j.jsxs)("h1",{children:["Hi, I'm ",Object(j.jsx)("span",{children:"Amirhossein Mohammadian"})]}),Object(j.jsx)("p",{children:"I am Back-End developer for more detail about me,visit my Portfolio :)."}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("a",{href:"https://Telegram.me/Amirhosein_mfk",className:"icon i-telegram",children:Object(j.jsx)(O.a,{})}),Object(j.jsx)("a",{href:"#",className:"icon i-github",children:Object(j.jsx)(w.a,{})})]})]})]})},T=t.p+"static/media/resume.b673f7cf.jpg";var S,C=m.b.a(F||(F=Object(l.a)(['\n    background-color: var(--primary-color);\n    padding: .8rem 2.5rem;\n    color: white;\n    cursor: pointer;\n    display: inline-block;\n    font-size: inherit;\n    text-transform: uppercase;\n    position: relative;\n    transition: all .4s ease-in-out;\n    &::after{\n        content: "";\n        position: absolute;\n        width: 0;\n        height: .2rem;\n        transition: all .4s ease-in-out;\n        left: 0;\n        bottom: 0;\n        opacity: .7;\n    }\n    &:hover::after{\n        width: 100%;\n        background-color: var(--white-color);\n    }\n']))),P=function(n){var e=n.title;return Object(j.jsx)(C,{children:e})};var I,H=m.b.div(S||(S=Object(l.a)(["\n    margin-top: 5rem;\n    display: flex;\n    @media screen and (max-width:1000px){\n        flex-direction: column;\n        .left-content{\n            margin-bottom: 2rem;\n        }\n    }\n    .left-content{\n        width: 100%;\n        img{\n            width: 95%;\n            object-fit: cover;\n        }\n    }\n    .right-content{\n        width: 100%;\n        h4{\n            font-size: 2rem;\n            color: var(--white-color);\n            span{\n                font-size: 2rem;\n            }\n        }\n        .paragraph{\n            padding: 1rem 0;\n        }\n        .about-info{\n            display: flex;\n            padding-bottom: 1.4rem;\n            .info-title{\n                padding-right: 3rem;\n                p{\n                    font-weight: 600;\n                }\n            }\n            .info-title, .info{\n                p{\n                    padding: .3rem 0;\n                }\n            }\n        }\n    }\n"]))),M=function(){return Object(j.jsxs)(H,{children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)("img",{src:T,alt:""})}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsxs)("h4",{children:["I am ",Object(j.jsx)("span",{children:"Amirhossein."})]}),Object(j.jsx)("p",{className:"paragraph",children:"I am a Electronics geek. I also read a lot about physics and sometimes write some code in PHP,Python and JS for fun. Right now, I am starting my Masters in Digital Electronic Systems Design. I am so happy that You are here."}),Object(j.jsxs)("div",{className:"about-info",children:[Object(j.jsxs)("div",{className:"info-title",children:[Object(j.jsx)("p",{children:"Full Name"}),Object(j.jsx)("p",{children:"Age"}),Object(j.jsx)("p",{children:"Nationality "}),Object(j.jsx)("p",{children:"Languages "}),Object(j.jsx)("p",{children:"Location"}),Object(j.jsx)("p",{children:"Service"})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("p",{children:": Amirhossein Mohammadian"}),Object(j.jsx)("p",{children:": Guess ))"}),Object(j.jsx)("p",{children:": Persian "}),Object(j.jsx)("p",{children:": Turkish,Persian,Arabic, French, English "}),Object(j.jsx)("p",{children:": Iran,Tabriz"}),Object(j.jsx)("p",{children:": Any Service,HaHa"})]})]}),Object(j.jsx)(P,{title:"Download Cv"})]})]})};var B,D,L,q=m.b.div(I||(I=Object(l.a)(['\n    position: relative;\n    h2{\n        color: var(--white-color);\n        font-size: 3.1rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        position: relative;\n        padding-bottom: .7rem;\n        @media screen and (max-width: 496px){\n            font-size: 2.8rem;\n        }\n        @media screen and (max-width: 370px){\n            font-size: 2rem;\n        }\n        &::before{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 7.4rem;\n            height: .33rem;\n            background-color: var(--background-light-color-2);\n            border-radius: 15px;\n            left: 0;\n        }\n        &::after{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 3.5rem;\n            height: .33rem;\n            background-color: var(--primary-color);\n            border-radius: 15px;\n            left: 0;\n        }\n        span{\n            font-weight: 900;\n            color: rgba(25,29,43,.44);\n            font-size: 5rem;\n            position: absolute;\n            left: 0;\n            top: 30%;\n            z-index: -1;\n            @media screen and (max-width: 620px){\n                font-size: 4rem;\n            }\n            @media screen and (max-width: 496px){\n                font-size: 3rem;\n            }\n            @media screen and (max-width: 370px){\n                font-size: 2rem;\n            }\n        }\n    }\n']))),J=function(n){var e=n.title,t=n.span;return Object(j.jsx)(q,{children:Object(j.jsxs)("h2",{children:[e," ",Object(j.jsx)("b",{children:Object(j.jsx)("span",{children:t})})]})})},_=m.b.div(B||(B=Object(l.a)(["\n    padding: 5rem;\n    @media screen and (max-width: 642px){\n        padding: 4rem;\n    }\n    /* @media screen and (max-width: 510px){\n        padding: 3rem;\n    } */\n    @media screen and (max-width: 571px){\n        padding: 2rem .4rem;\n    }\n"]))),R=m.b.div(D||(D=Object(l.a)(["\n    padding: 5rem 0;\n"])));var Q,U=m.b.div(L||(L=Object(l.a)(['\n    background-color: var(--background-dark-grey);\n    border-left: 1px solid var(--border-color);\n    border-top: 8px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    transition: all .4s ease-in-out;\n    &:hover{\n        border-top: 8px solid var(--primary-color);\n        transform: translateY(3px);\n    }\n    .container{\n        padding: 1.2rem;\n        h4{\n            color: var(--white-color);\n            font-size: 1.6rem;\n            padding: 1rem 0;\n            position: relative;\n            &::after{\n                content: "";\n                width: 4rem;\n                background-color: var(--border-color);\n                height: 3px;\n                position: absolute;;\n                left: 0;\n                bottom: 0;\n                border-radius: 10px;\n            }\n        }\n\n        p{\n            padding: .8rem 0;\n        }\n    }\n']))),V=function(n){var e=n.image,t=n.title,r=n.paragraph;return Object(j.jsx)(U,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:e,alt:""}),Object(j.jsx)("h4",{children:t}),Object(j.jsx)("p",{children:r})]})})},Y=t.p+"static/media/design.b0dea6a3.svg",G=t.p+"static/media/intelligence.191362ff.svg",X=t.p+"static/media/game-dev.7e1a6c88.svg";var W,K=m.b.section(Q||(Q=Object(l.a)(["\n    .services{\n        margin-top: 5rem;\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-gap: 1.5rem;\n        @media screen and (max-width:1000px){\n            flex-direction: column;\n        }\n        @media screen and (max-width:950px){\n            grid-template-columns: repeat(2, 1fr);\n        }\n        @media screen and (max-width:650px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n       \n    }\n"]))),Z=function(){return Object(j.jsx)(R,{children:Object(j.jsxs)(K,{children:[Object(j.jsx)(J,{title:"Services",span:"services"}),Object(j.jsxs)("div",{className:"services",children:[Object(j.jsx)(V,{image:Y,title:"Schematics Design",paragraph:"I really love Altium designer and Pspice for design and analyze circuits."}),Object(j.jsx)("div",{className:"mid-card",children:Object(j.jsx)(V,{image:G,title:"Digital Electronics",paragraph:"I use C/C++ for write code for microcontrollers. \n really amazing :))"})}),Object(j.jsx)(V,{image:X,title:"Back-end Development",paragraph:"Python-PHP-JS are my loves"})]})]})})};var $,nn=m.b.section(W||(W=Object(l.a)(["\n    \n"]))),en=function(){return Object(j.jsx)(_,{children:Object(j.jsxs)(nn,{children:[Object(j.jsx)(J,{title:"About Me",span:"About Me"}),Object(j.jsx)(M,{}),Object(j.jsx)(Z,{})]})})};var tn,rn=m.b.div($||($=Object(l.a)(["\n    .progress-bar{\n        display: flex;\n        align-items: center;\n        p{\n            padding-right: 1.1rem;\n        }\n        .progress{\n            position: relative;\n            width: 100%;\n            height: .4rem;\n            background-color: var(--border-color);\n            span{\n                position: absolute;\n                left: 0;\n                bottom: 0;\n                height: 100%;\n                background-color: var(--primary-color)\n            }\n        }\n    }\n"]))),an=function(n){var e=n.title,t=n.width,r=n.text;return Object(j.jsxs)(rn,{children:[Object(j.jsx)("h6",{children:e}),Object(j.jsxs)("div",{className:"progress-bar",children:[Object(j.jsx)("p",{children:r}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("span",{style:{width:t}})})]})]})};var on,cn=m.b.section(tn||(tn=Object(l.a)(["\n    .skills{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-row-gap: 2rem;\n        grid-column-gap: 3rem;\n        @media screen and (max-width: 700px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n    }\n"]))),sn=function(){return Object(j.jsxs)(cn,{children:[Object(j.jsx)(J,{title:"My Skills",span:"my skills"}),Object(j.jsx)(R,{children:Object(j.jsxs)("div",{className:"skills",children:[Object(j.jsx)(an,{title:"HTML5",width:"70%",text:"70%"}),Object(j.jsx)(an,{title:"CSS3",width:"90%",text:"90%"}),Object(j.jsx)(an,{title:"JAVASCRIPT",width:"40%",text:"40%"}),Object(j.jsx)(an,{title:"C#",width:"30%",text:"30%"}),Object(j.jsx)(an,{title:"PYTHON",width:"95%",text:"95%"}),Object(j.jsx)(an,{title:"React JS",width:"75%",text:"75%"}),Object(j.jsx)(an,{title:"Laravel",width:"50%",text:"50%"})]})})]})};var ln,dn=m.b.div(on||(on=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    p{\n        padding-right: 1rem;\n        svg{\n            font-size: 3rem;\n        }\n    }\n    h3{\n        color: var(--white-color);\n        font-size: 2rem;\n    }\n"]))),mn=function(n){var e=n.icon,t=n.title;return Object(j.jsxs)(dn,{children:[Object(j.jsx)("p",{children:e}),Object(j.jsx)("h3",{children:t})]})},bn=t(122),jn=t.n(bn),hn=t(123),pn=t.n(hn);var xn,gn=m.b.div(ln||(ln=Object(l.a)(['\n    display: flex;\n    @media screen and (max-width: 421px){\n        p, h5, h6{\n            font-size: 80%;\n        }\n    }\n    &:not(:last-child){\n        padding-bottom: 3rem;\n    }\n    .left-content{\n        width: 50%;\n        padding-left: 20px;\n        position: relative;\n        &::before{\n            content: "";\n            position: absolute;\n            left: -10px;\n            top: 5px;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            border: 2px solid var(--border-color);\n            background-color: var(--background-dark-color);\n        }\n        p{\n            display: inline-block;\n        }\n    }\n    .right-content{\n        padding-left: 5rem;\n        position: relative;\n        &::before{\n            content: "";\n            position: absolute;\n            left: 0;\n            top: 15px;\n            height: 2px;\n            width: 3rem;\n            background-color: var(--border-color);\n        }\n        h5{\n            color: var(--primary-color);\n            font-size: 2rem;\n            padding-bottom: .4rem;\n        }\n        h6{\n            padding-bottom: .6rem;\n            font-size: 1.5rem;\n        }\n    }\n']))),un=function(n){var e=n.year,t=n.title,r=n.subTitle,i=n.text;return Object(j.jsxs)(gn,{children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)("p",{children:e})}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)("h5",{children:t}),Object(j.jsx)("h6",{children:r}),Object(j.jsx)("p",{children:i})]})]})};var vn=m.b.section(xn||(xn=Object(l.a)(["\n    .small-title{\n        padding-bottom: 3rem;\n    }\n    .u-small-title-margin{\n        margin-top: 4rem;\n    }\n\n    .resume-content{\n        border-left: 2px solid var(--border-color);\n    }\n"]))),On=function(){var n=Object(j.jsx)(jn.a,{}),e=Object(j.jsx)(pn.a,{});return Object(j.jsxs)(vn,{children:[Object(j.jsx)(J,{title:"Resume",span:"resume"}),Object(j.jsxs)(R,{children:[Object(j.jsx)("div",{className:"small-title",children:Object(j.jsx)(mn,{icon:n,title:"Working Experience"})}),Object(j.jsx)("div",{className:"resume-content",children:Object(j.jsx)(un,{year:"2021",title:"Python Backend developer (FastAPI)",subTitle:"Borna Mehr fan",text:"Very nice place. "})}),Object(j.jsx)("div",{className:"small-title u-small-title-margin",children:Object(j.jsx)(mn,{icon:e,title:"Educational Qualifications"})}),Object(j.jsxs)("div",{className:"resume-content ",children:[Object(j.jsx)(un,{year:"2017 - 2021",title:"Electrical Engineering Degree",subTitle:"IAUT University",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "}),Object(j.jsx)(un,{year:"2013 - 2017",title:"Mathematics and Physics",subTitle:"Ferdosi HighSchool",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "})]})]})]})};var fn,wn=function(){return Object(j.jsxs)(_,{children:[Object(j.jsx)(sn,{}),Object(j.jsx)(On,{})]})},yn=t.p+"static/media/blog1.aa2f074c.svg",kn=t.p+"static/media/blog3.969725e8.svg",Nn=t.p+"static/media/blog2.df7996bd.svg",zn=t.p+"static/media/blog4.60aa6cec.svg",Fn=[{id:1,title:"How To Work from Home",date:"01",month:"April",image:yn},{id:2,title:"How To Use SEO Efficiently",date:"01",month:"April",image:Nn},{id:3,title:"How to choose a programming Language",date:"01",month:"April",image:kn,link:"https://www.google.co.uk/"},{id:4,title:"How To Tse SEO Efficiently",date:"01",month:"April",image:zn},{id:5,title:"How To Tse SEO Efficiently",date:"01",month:"April",image:zn}];var En,An=m.b.div(fn||(fn=Object(l.a)(["\n    .blog{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 2rem;\n        grid-row-gap: 3rem;\n        @media screen and (max-width: 770px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n        .blog-item{\n            background-color: var(--background-dark-grey);\n            padding: 1rem 1rem;\n        }\n        .image{\n            width: 100%;\n            overflow: hidden;\n            padding-bottom: .5rem;\n            img{\n                width: 100%;\n                height: 90%;\n                object-fit: cover;\n                transition: all .4s ease-in-out;\n                &:hover{\n                    cursor: pointer;\n                    transform: rotate(3deg) scale(1.1);\n                }\n            }\n        }\n\n        .title{\n            a{\n                font-size: 1.8rem;\n                padding: 2rem 0;\n                color: var(--white-color);\n                cursor: pointer;\n                transition: all .4s ease-in-out;\n                &:hover{\n                    color: var(--primary-color);\n                }\n            }\n        }\n    }\n"]))),Tn=function(){return Object(j.jsx)(_,{children:Object(j.jsxs)(An,{children:[Object(j.jsx)(J,{title:"Blogs",span:"Blogs"}),Object(j.jsx)(R,{className:"blog",children:Fn.map((function(n){return Object(j.jsxs)("div",{className:"blog-item",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:n.image,alt:""})}),Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("a",{href:n.link,children:n.title})})]},n.id)}))})]})})},Sn=t(124),Cn=t.n(Sn),Pn=t(125),In=t.n(Pn),Hn=t(126),Mn=t.n(Hn);var Bn,Dn=m.b.div(En||(En=Object(l.a)(["\n    padding:1.5rem 2rem;\n    background-color: var(--background-dark-grey);\n    display: flex;\n    align-items: center;\n    &:not(:last-child){\n        margin-bottom: 2.5rem;\n    }\n    .left-content{\n        padding: 1.5rem;\n        border: 1px solid var(--border-color);\n        font-size: 2rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1.5rem;\n        svg{\n            font-size: 2.3rem;\n        }\n    }\n\n    .right-content{\n        h6{\n            color: var(--white-color);\n            font-size: 1.2rem;\n            padding-bottom: .6rem;\n        }\n        p{\n            padding: .1rem 0;\n        }\n    }\n"]))),Ln=function(n){var e=n.title,t=n.icon,r=n.cont1,i=n.cont2;return Object(j.jsxs)(Dn,{children:[Object(j.jsx)("div",{className:"left-content",children:t}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)("h6",{children:e}),Object(j.jsx)("p",{children:r}),Object(j.jsx)("p",{children:i})]})]})};var qn,Jn=m.b.section(Bn||(Bn=Object(l.a)(["\n    .contact-section{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 2rem;\n        @media screen and (max-width: 978px){\n            grid-template-columns: repeat(1, 1fr);\n            .f-button{\n                margin-bottom: 3rem;\n            }\n        }\n        .right-content{\n            display: grid;\n            grid-template-columns: repeat(1, 1fr);\n            @media screen and (max-width: 502px){\n                width: 70%;\n            }\n        }\n        .contact-title{\n            h4{\n                color: var(--white-color);\n                padding: 1rem 0;\n                font-size: 1.8rem;\n            }\n        }\n        .form{\n            width: 100%;\n            @media screen and (max-width: 502px){\n                width: 100%;\n            }\n            .form-field{\n                margin-top: 2rem;\n                position: relative;\n                width: 100%;\n                label{\n                    position: absolute;\n                    left: 20px;\n                    top: -19px;\n                    display: inline-block;\n                    background-color: var(--background-dark-color);\n                    padding:0 .5rem;\n                    color: inherit;\n                }\n                input{\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    background: transparent;\n                    height: 50px;\n                    padding:0 15px;\n                    width: 100%;\n                    color: inherit;\n                }\n                textarea{\n                    background-color: transparent;\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    color: inherit;\n                    width: 100%;\n                    padding: .8rem 1rem;\n                }\n            }\n\n            \n        }\n    }\n"]))),_n=function(){var n=Object(j.jsx)(Cn.a,{}),e=Object(j.jsx)(In.a,{}),t=Object(j.jsx)(Mn.a,{});return Object(j.jsxs)(_,{children:[Object(j.jsx)(J,{title:"Contact",span:"Contact"}),Object(j.jsx)(Jn,{children:Object(j.jsxs)(R,{className:"contact-section",children:[Object(j.jsxs)("div",{className:"left-content",children:[Object(j.jsx)("div",{className:"contact-title",children:Object(j.jsx)("h4",{children:"Get In Touch"})}),Object(j.jsxs)("form",{className:"form",children:[Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Enter your name*"}),Object(j.jsx)("input",{type:"text",id:"name"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Enter your email*"}),Object(j.jsx)("input",{type:"email",id:"email"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"subject",children:"Enter your subject"}),Object(j.jsx)("input",{type:"text",id:"subject"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"text-area",children:"Enter your Message*"}),Object(j.jsx)("textarea",{name:"textarea",id:"textarea",cols:"30",rows:"10"})]}),Object(j.jsx)("div",{className:"form-field f-button",children:Object(j.jsx)(P,{title:"Send Email"})})]})]}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)(Ln,{title:"Phone",icon:n,cont1:"+989147563229",cont2:"Call Me."}),Object(j.jsx)(Ln,{title:"Email",icon:e,cont1:"amirmh1975988@gmail.com",cont2:"amirmh197598888@gmail.com"}),Object(j.jsx)(Ln,{title:"Address",icon:t,cont1:"Iran",cont2:"Tabriz"})]})]})})]})},Rn=t(127),Qn=t.n(Rn),Un=t(128),Vn=t.n(Un),Yn=t(10),Gn=t(396),Xn=t(395);var Wn,Kn=m.b.main(qn||(qn=Object(l.a)(["\n  position: relative;\n  margin-left: 16.3rem;\n  min-height: 100vh;\n  @media screen and (max-width:1200px){\n    margin-left: 0;\n  }\n  .lines{\n    position: absolute;\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    opacity: 0.4;\n    z-index: -1;\n    .line-1, .line-2, .line-3, .line-4{\n      width: 1px;\n      min-height: 100vh;\n      background-color: var(--border-color);\n    }\n  }\n"]))),Zn=function(){var n=Object(i.useState)("dark-theme"),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(!1),o=Object(d.a)(a,2),c=o[0],s=o[1],l=Object(i.useState)(!1),m=Object(d.a)(l,2),b=m[0],h=m[1];return Object(i.useEffect)((function(){document.documentElement.className=t}),[t]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{navToggle:b}),Object(j.jsx)("div",{className:"theme",children:Object(j.jsxs)("div",{className:"light-dark-mode",children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)(Qn.a,{})}),Object(j.jsx)("div",{className:"right-content",children:Object(j.jsx)(Gn.a,{value:"",checked:c,inputProps:{"aria-label":""},size:"medium",onClick:function(){"light-theme"===t?(r("dark-theme"),s(!1)):(r("light-theme"),s(!0))}})})]})}),Object(j.jsx)("div",{className:"ham-burger-menu",children:Object(j.jsx)(Xn.a,{onClick:function(){return h(!b)},children:Object(j.jsx)(Vn.a,{})})}),Object(j.jsxs)(Kn,{children:[Object(j.jsxs)("div",{className:"lines",children:[Object(j.jsx)("div",{className:"line-1"}),Object(j.jsx)("div",{className:"line-2"}),Object(j.jsx)("div",{className:"line-3"}),Object(j.jsx)("div",{className:"line-4"})]}),Object(j.jsxs)(Yn.c,{children:[Object(j.jsx)(Yn.a,{path:"/",exact:!0,children:Object(j.jsx)(A,{})}),Object(j.jsx)(Yn.a,{path:"/about",exact:!0,children:Object(j.jsx)(en,{})}),Object(j.jsx)(Yn.a,{path:"/resume",exact:!0,children:Object(j.jsx)(wn,{})}),Object(j.jsx)(Yn.a,{path:"/blogs",exact:!0,children:Object(j.jsx)(Tn,{})}),Object(j.jsx)(Yn.a,{path:"/contact",exact:!0,children:Object(j.jsx)(_n,{})})]})]})]})},$n=Object(m.a)(Wn||(Wn=Object(l.a)(["\n/* :root{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n\n} */\n\n.light-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #ff7675;\n    --background-dark-color: #F1F1F1;\n    --background-dark-grey: #e4e4e4;\n    --border-color: #cbced8;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #151515;\n    --font-light-color: #313131;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #E4E4E4;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n.dark-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    text-decoration: none;\n    font-family: 'Nunito', sans-serif;\n    font-size: 1.1rem;\n    \n}\n\nbody{\n    background-color: var(--background-dark-color);\n    color: var(--font-light-color);\n    transition: all .4s ease-in-out;\n}\n\nbody::-webkit-scrollbar{\n    width: 9px;\n    background-color: #383838;\n}\nbody::-webkit-scrollbar-thumb{\n    border-radius: 10px;\n    background-color: #6b6b6b;\n}\nbody::-webkit-scrollbar-track{\n    border-radius: 10px;\n    background-color: #383838;\n}\n\ntextarea{\n    max-width: 100%;\n}\na{\n    font-family: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-size: 1rem;\n}\n\nh1{\n    font-size: 4rem;\n    color: var(--white-color);\n    span{\n        font-size: 4rem;\n        @media screen and (max-width: 502px){\n            font-size: 3rem\n        }\n    }\n    @media screen and (max-width: 502px){\n        font-size: 3rem\n    }\n}\n\nspan{\n    color: var(--primary-color);\n}\nh6{\n    color: var(--white-color);\n    font-size: 1.2rem;\n    padding-bottom: .6rem;\n}\n\n//Utilities\n.u-margin-bottom{\n    margin-bottom: 4rem;\n}\n\n\n//Floting Toggler\n.light-dark-mode{\n    position: fixed;\n    right: 0;\n    top: 50%;\n    background-color: var(--background-light-color-2);\n    width: 6.5rem;\n    height: 2.5rem;\n    z-index: 15;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg{\n      display: flex;\n      align-items: center;\n      font-size: 1.7rem;\n      color: var(--white-color);\n    }\n  }\n\n  //Nav Toggler\n  .ham-burger-menu{\n      position: absolute;\n      right: 5%;\n      top: 3%; \n      display: none;\n      z-index: 15;\n      svg{\n          font-size: 3rem;\n      }\n    }\n\n    .nav-toggle{\n        transform: translateX(0);\n        z-index: 20;\n    }\n  @media screen and (max-width:1200px){\n    .ham-burger-menu{\n        display: block;\n    }\n  }\n\n\n//Global Media Queries\n\n\n\n"])));c.a.render(Object(j.jsxs)(a.a.StrictMode,{children:[Object(j.jsx)($n,{}),Object(j.jsx)(s.a,{children:Object(j.jsx)(Zn,{})})]}),document.getElementById("root"))}},[[377,1,2]]]);
//# sourceMappingURL=main.ab036189.chunk.js.map