(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4444)}])},819:function(n,t,e){"use strict";e.d(t,{Z:function(){return r}});var s=e(5893),o=e(9008);function r(n){var t=n.title;return(0,s.jsxs)(o.default,{children:[(0,s.jsxs)("title",{children:[t," | nijoow"]}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/images/favicon.ico"})]})}},4444:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return v}});var s=e(5893),o=e(819),r=e(2790),i=e.n(r);function c(n){var t=n.Icon,e=n.list,o=n.contents,r=n.link,c=void 0===r?null:r;return(0,s.jsxs)("div",{className:i().infomation,children:[(0,s.jsxs)("div",{className:i().subTitle,children:[t?(0,s.jsx)(t,{className:i().icon}):"",(0,s.jsx)("span",{children:e})]}),(0,s.jsx)("div",{className:i().infoContents,children:c?(0,s.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:o}):o})]})}var a=e(7294),l=e(3750),_=e(5666),u=e.n(_),d=e(7673),f=e(2915),h=e(8764).Buffer;function m(n,t,e,s,o,r,i){try{var c=n[r](i),a=c.value}catch(l){return void e(l)}c.done?t(a):Promise.resolve(a).then(s,o)}function x(n){return function(){var t=this,e=arguments;return new Promise((function(s,o){var r=n.apply(t,e);function i(n){m(r,s,o,i,c,"next",n)}function c(n){m(r,s,o,i,c,"throw",n)}i(void 0)}))}}var p=h.from("".concat("42dddd42b71c4353989ba09962e7e9d6",":").concat("01c198d587834a64afb4291934ba20ca")).toString("base64"),j=x(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:"Basic ".concat(p),"Content-Type":"application/x-www-form-urlencoded"},body:d.stringify({grant_type:"refresh_token",refresh_token:"AQB-wt2YxvOj8wdQDsWb0KFsjHfCcXlw0aw_YctmmRtLd2TtZDsyz__r3GEyejydfVirVHQUQn7G1Brp9FkrKgOpEv0h8anGMtAog2GR3hyTDRSsCXPXQTslkxFjKCozaw0"})});case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("HTTP error! status: ".concat(t.status));case 5:return n.abrupt("return",t.json());case 6:case"end":return n.stop()}}),n)})));function g(){var n=(0,a.useContext)(f.S),t=n.dispatch,e=n.recentlyPlayed,o=x(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j();case 2:return e=n.sent.access_token,n.next=5,fetch("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(n){return n.json()})).then((function(n){t({type:"setSong",value:{title:n.item.name,artist:n.item.artists[0].name,albumImageUrl:n.item.album.images[0].url,songUrl:n.item.external_urls.spotify}})})).catch((function(n){r()}));case 5:n.sent;case 6:case"end":return n.stop()}}),n)}))),r=x(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j();case 2:return e=n.sent.access_token,n.next=5,fetch("https://api.spotify.com/v1/me/player/recently-played",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(n){return n.json()})).then((function(n){t({type:"setSong",value:{title:n.items[0].track.name,artist:n.items[0].track.artists[0].name,albumImageUrl:n.items[0].track.album.images[0].url,songUrl:n.items[0].track.external_urls.spotify}})})).catch((function(n){console.log(n)}));case 5:n.sent;case 6:case"end":return n.stop()}}),n)})));return(0,a.useEffect)((function(){o()}),[]),(0,s.jsx)("a",{href:e.songUrl,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsxs)("div",{className:i().song,children:[(0,s.jsx)("div",{className:i().songAlbumImage,children:(0,s.jsx)("img",{src:e.albumImageUrl,width:"130",height:"130"})}),(0,s.jsxs)("div",{className:i().songInfo,children:[(0,s.jsx)("div",{className:i().songTitle,children:e.title}),(0,s.jsx)("div",{className:i().songArtist,children:e.artist})]})]})})}function v(){var n=(0,a.useState)({}),t=(n[0],n[1],(0,a.useContext)(f.S));t.dispatch,t.prefix;return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Z,{title:"Home"}),(0,s.jsx)("section",{children:(0,s.jsx)("div",{className:i().introbox,children:(0,s.jsxs)("div",{className:i().intro,children:["\ubc18\uac11\uc2b5\ub2c8\ub2e4\ud83d\udd90\ud83c\udffb \uc2e0\uc785 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 ",(0,s.jsx)("span",{children:"\uc774\uc6b0\uc9c4"}),"\uc785\ub2c8\ub2e4."]})})}),(0,s.jsx)("section",{children:(0,s.jsxs)("ul",{className:i().introContents,children:[(0,s.jsx)("li",{children:"\ubd80\uc0b0\ub300\ud559\uad50 \ub514\uc790\uc778\ud559\uacfc \ub514\uc790\uc778\uc564\ud14c\ud06c\ub180\ub85c\uc9c0 \uc804\uacf5\uc5d0\uc11c \ub514\uc790\uc778\uacfc \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud559\uc2b5\ud558\uc600\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)("li",{children:"\uc2a4\ud0c0\ud2b8\uc5c5 \uae30\uc5c5\uc5d0\uc11c\uc758 \ud604\uc7a5 \uc2e4\uc2b5\uc744 \ud1b5\ud574 \uc6f9\uac1c\ubc1c\uc5d0 \uad00\uc2ec\uc744 \uac00\uc9c0\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)("li",{children:"\ub208\uc73c\ub85c \ubcf4\uc774\ub294 \uacb0\uacfc\ubb3c\uc744 \uc9c1\uc811 \uc644\uc131\ud574\ub0b4\ub294 \uac83\uc5d0 \ud765\ubbf8\ub97c \ub290\uaef4 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc758 \uafc8\uc744 \ud0a4\uc6b0\uac8c \ub418\uc5c8\uace0, \uc2e4\ub825 \uc788\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uae30 \uc704\ud574 \uace0\ubbfc\ud558\uace0 \ud559\uc2b5\ud558\ub294 \uc911\uc785\ub2c8\ub2e4."}),(0,s.jsx)("li",{children:"\ubd80\uc871\ud55c \ubd80\ubd84\uc774 \uc788\ub354\ub77c\ub3c4 \ud56d\uc0c1 \ubc30\uc6b0\uace0 \uc2b5\ub4dd\ud558\ub824\ub294 \ud0dc\ub3c4\ub97c \uac00\uc9c0\ub824\uace0 \ub178\ub825\ud558\ub294 \uc911\uc785\ub2c8\ub2e4."})]})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{className:i().title,children:"Infomation"}),(0,s.jsx)(c,{Icon:l._Tb,list:"\uc774\ub984",contents:": \uc774\uc6b0\uc9c4"}),(0,s.jsx)(c,{Icon:l.o3f,list:"\uc0dd\ub144\uc6d4\uc77c",contents:": 1996.11.27"}),(0,s.jsx)(c,{Icon:l.Ph1,list:"\ud559\ub825",contents:": \ubd80\uc0b0\ub300\ud559\uad50 \ub514\uc790\uc778\ud559\uacfc \ub514\uc790\uc778\uc564\ud14c\ud06c\ub180\ub85c\uc9c0\uc804\uacf5"}),(0,s.jsx)(c,{Icon:l.dcn,list:"\uc774\uba54\uc77c",contents:": nijoow1127@gmail.com"}),(0,s.jsx)(c,{Icon:l.rFR,list:"\uae43\ud5c8\ube0c",contents:": @nijoow",link:"https://github.com/nijoow"}),(0,s.jsx)(c,{Icon:l.Gzp,list:"\ud504\ub85c\ud544\ub9c1\ud06c",contents:": @nijoow",link:"https://prfl.link/@nijoow"})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{className:i().title,children:"Recently Played Music"}),(0,s.jsx)(g,{})]})]})}},2790:function(n){n.exports={introbox:"Contents_introbox__o5FV5",intro:"Contents_intro__7uh2B",introContents:"Contents_introContents___2He7",title:"Contents_title__C__Xp",workTitle:"Contents_workTitle__OZNyV",infomation:"Contents_infomation__F2swT",subTitle:"Contents_subTitle__X8Jfv",icon:"Contents_icon__vzLd9",infoContents:"Contents_infoContents__zeTtu",underLine:"Contents_underLine__fK31V",song:"Contents_song__rUbDM",songAlbumImage:"Contents_songAlbumImage__yGKyp",songInfo:"Contents_songInfo__CW92q",songTitle:"Contents_songTitle__v_xH3",songArtist:"Contents_songArtist__t_6dl",imageContainer:"Contents_imageContainer__oR2nC",skill:"Contents_skill__jdV9F",skillName:"Contents_skillName__k9qGB",gridContainer:"Contents_gridContainer__TryG_",card:"Contents_card__gZwtO",cardImg:"Contents_cardImg__3AJi8",cardOverlay:"Contents_cardOverlay__kxgwq",cardMini:"Contents_cardMini__u810P",workInfomation:"Contents_workInfomation__gs30o",list:"Contents_list__U_pGD",content:"Contents_content__OcYDL",btn:"Contents_btn__X4NgT"}}},function(n){n.O(0,[13,677,774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);