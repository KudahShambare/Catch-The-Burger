if(!self.define){let e,a={};const i=(i,_)=>(i=new URL(i+".js",_).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(_,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let f={};const s=e=>i(e,r),m={module:{uri:r},exports:f,require:s};a[r]=Promise.all(_.map((e=>m[e]||s(e)))).then((e=>(c(...e),f)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"background.jpeg",revision:"5f3b8ad2f7de11ef74c3d345ceeebbe0"},{url:"Bob.jpeg",revision:"c2a3b55c10366d09d0a30b71f0e4a821"},{url:"Burger.jpeg",revision:"2a0891536eb3ba6a1bbdc712bf33425c"},{url:"Character Collision.mp3",revision:"812579bdf95a46904f3c7f40b9acba68"},{url:"Eats burger sounds effect cartoon.mp3",revision:"41fa4260067f44afdf1a221f26d379b6"},{url:"Game Music/2._nomcebo_zikode_ft_master_kg_xola_moya_wami_mp3_78924.mp3",revision:"acb5ff37e69fd22751a2253c8bb41fed"},{url:"Game Music/admire_kasenga_ngosimbi_crew_pamuchato_wa_tobias_mp3_199.mp3",revision:"0982ec063d3153a25f9ddad1af55244c"},{url:"Game Music/big_nuz_feat._dj_yamza_ngeke_official_music_video_mp3_86038.mp3",revision:"084fa0be34525c0202e359ece61ebf92"},{url:"Game Music/bob_marley_jammin_mp3_86382.mp3",revision:"7c08ac18a971a966a212c2c7079bc834"},{url:"Game Music/davido_coolest_kid_in_africa_official_video_ft._nasty_c_mp3_686.mp3",revision:"2c18980a46a3d181172876b89eeb3656"},{url:"Game Music/dbn_gogo_x_uncle_waffles_jagermeister_ft._tnk_musiq_mellow_sleazy_mp3_85990.mp3",revision:"58fccc63d8394056fd895b3c81bff265"},{url:"Game Music/french_montana_unforgettable_ft._swae_lee_mp3_333.mp3",revision:"96a4ec44a82dba1d2fc833543880422c"},{url:"Game Music/holy_ten_michael_magz_ucharamba_uchipisa_ft._poptain_mp3_86184.mp3",revision:"0764b8a1258bb15ef48517daefdf7d07"},{url:"Game Music/holy_ten_musatinetse_mp3_86151.mp3",revision:"4896f927d8b56dd101110a818130ef67"},{url:"Game Music/holy_ten_pressure_official_video_ft._mr._candy_michael_magz_mp3_295.mp3",revision:"4ba55151656c0d58b1d326eff1ee1389"},{url:"Game Music/holy_ten_wakatuka_amai_mp3_1964.mp3",revision:"561d09ac129a22052d764bff485d192e"},{url:"Game Music/lil_durk_all_my_life_ft._j._cole_official_video_mp3_85703.mp3",revision:"cf7023a20afdeccd234da44e6a2963c5"},{url:"Game Music/malaika_destiny_mp3_490.mp3",revision:"df734617b5bdeac409ab0927d758db95"},{url:"Game Music/mary_j._blige_be_without_you_mp3_85927.mp3",revision:"066f577508faad8e2a8ea33514aeefcc"},{url:"Game Music/master_kg_skeleton_move_feat._zanda_zakuza_official_music_video_mp3_606.mp3",revision:"3f582ca88bd907a24423f41006905faa"},{url:"Game Music/mi_casa_jika_mp3_665.mp3",revision:"6b58b835e7adf493ecf1af5096a3ce9a"},{url:"Game Music/nasty_c_ft_rowlene_sma_lyrics_mp3_99.mp3",revision:"7e9cdb9bc54a48939d73df84d4384c7c"},{url:"Game Music/Nelly - Dilemma (Official Music Video) ft. Kelly Rowland.mp3",revision:"f5134e57f197f4f8c959bd7e2c2216b2"},{url:"Game Music/Oliver Mtukudzi - Mutserendende.mp3",revision:"e682f043119d9dd8c98eac4a5fd2b8bd"},{url:"Game Music/poptain_sota_official_music_video_mp3_86252.mp3",revision:"93596a0fdfc34cc7a17c4b3a1460c6f0"},{url:"Game Music/Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z.mp3",revision:"6df399bc589bab2db38187214d3f5bf0"},{url:"Game Music/shashl_chegore_riye_matenga_na_gudo_riddim_mp3_574.mp3",revision:"4ebf233ab0f42ab6065d4e698df7b4f2"},{url:"Game Music/shine_your_light_feat._akon_mp3_640.mp3",revision:"805f871f22c8ef916f7c9d1ad70b3467"},{url:"Game Music/the_script_hall_of_fame_ft._will.i.am_mp3_79044.mp3",revision:"ffe6287d17595da1ec4eba64b36f4acd"},{url:"Game Music/these_streets_know_my_name_official_music_video_mp3_85775.mp3",revision:"e7b817e156da13a6f74fdb6f0ec6ab80"},{url:"Game Music/voltz_jt_shamwari_yangu_mp3_86081.mp3",revision:"7b52fe11e82def2b6af9d5ebf768b23b"},{url:"howto.html",revision:"2de7db23f03e1e118f6c5725e32c43c3"},{url:"index.html",revision:"16b68554fd218afe6de7446e43544251"},{url:"leaderboard.html",revision:"722a3731ef1761621c46d9aa80a03791"},{url:"manifest.json",revision:"3cb680c9f7b5607afeb47ef2ab781d2d"},{url:"mixkit-arcade-game-jump-coin-216.wav",revision:"2c405a25ff2a9c46712886b69435cb4f"},{url:"package-lock.json",revision:"34096db76714b38cacc188c01340325a"},{url:"package.json",revision:"dacb5afca395b8654b9a418826636c40"},{url:"README.md",revision:"d0a8839adc26b486d75005b09ba331d3"},{url:"script.js",revision:"52e0f14a28f8b911871c6e864b87c30d"},{url:"server/index.js",revision:"6a7336cf7ba0262b35f1aaabaa148359"},{url:"server/package-lock.json",revision:"33634141ee4890aef555552bcc3dd117"},{url:"server/package.json",revision:"baa198baf7d5775b4de0a9cfb486f9b4"},{url:"style.css",revision:"7725a55d5b4dd9a9d2978d14d7f98646"},{url:"Wall Crash.mp4",revision:"f4c21f9eb33ab3fb5976c2848c32985a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
