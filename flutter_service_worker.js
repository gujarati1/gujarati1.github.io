'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "82868cb002aef7320a90a6dd5c36a860",
"index.html": "b39a9caa7711138245699b245809ce13",
"/": "b39a9caa7711138245699b245809ce13",
"main.dart.js": "9c05f3a08483c38755524f69a200816f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f9aaa0d83e2afb7a84171aabaf46b8e",
".git/config": "2114d99f5af1849cb5419e57a6f58191",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/50/3959418e39257276c788a542dee397d38399f2": "f5489cee9be30c4ddd23fb025c86ecda",
".git/objects/3b/c64cceaf839bc62f910e428c74052082236d1d": "631972bb15d42118b9da0dc622cc80b9",
".git/objects/6a/69dd1ede57086e5ee9c1056dfffc653bd22a1c": "1b0d09aaa66bbe3a133a50436d78cab0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/56/098f682d785f72c93f88d59ba798f85aa39604": "655b1e89960eb125b28ceeadc792e6f6",
".git/objects/58/43faa80a54231edf3b6fcb467be16d07765f9b": "abc6e2a7917ddbaf366a8cfe0202ace0",
".git/objects/5f/f0ce04e39e11030febf1727d8fdfdc3b6ce2f0": "831967380c8f618368b442b7d135bec3",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/a3/aea956dc4cecc456e7a6d4f14062f0a29445b6": "b257eb0399c999915c67eb84f105e81d",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/df/2d11e6f8aa8340dbdb37d18daba06963147120": "a1099d86667549d4155667c7d02b6bbd",
".git/objects/da/dfea56ce9e49e1f195366a045ba4f5bb0b626d": "334956954a5827b9d711f2d76aaf99de",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/82ddb9bfe70cd02d80db7879f8650009c3d6b2": "a4ec12b377b99483ed6c114e59f8489d",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/47140009a457f2dd0862f2d5ae5faedb420cab": "fb1f5605c9af35a6ec791361386997d2",
".git/objects/d8/8439f7132979284ad2296e8672a2011a70025a": "22a80d6da5d25103be65348bc341fd82",
".git/objects/e5/0219cb18ea1d282db2f48abe5e3622b260bf12": "7b8f30f31f79dc27e62a9835d1990bbd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/4423c78a05bf3309a56a3a8b1a345e95c5380c": "c1728ce9d6f3cd0fa9e5d5581c37aa2f",
".git/objects/e2/71e6e7f971fe3233c943ef516b80699e79aefd": "e5d7bc09431969edb123b51345d583d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/f417f13e0db117006a2df010a99749bc0943a8": "e8f56263d1d0e765620ca80e68be1cd6",
".git/objects/fe/85aa65d39bf6b938f9e824b16fcff34fbde2f6": "e8d0473934ff083f0ac9b695741a5a67",
".git/objects/c8/37d54ca9b521ed21f7c15e62f280b42cb5227c": "46c4ea10d6d0d5bd0d50a7cb5434aab5",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/4b/f10a5fc319fc3bc1c07ca74d8f29e98cfe8ff3": "eef9ee1e3c906e7c4ec9705ed6210c98",
".git/objects/pack/pack-38833a44d4f8faf79650ee767e554ae41024fc6e.idx": "3671d0cfe08bc3c79f9993ac33380789",
".git/objects/pack/pack-38833a44d4f8faf79650ee767e554ae41024fc6e.pack": "b8b2e0b25b3d881bdb0482c4ee5f0db9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/1f/802bfbab0a8cbe050bcc94b9271483be06496a": "ff820272444428605b2e04ec2196c792",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/8f/3223652a9fd5bd9a64f4c53500ff1c97884d74": "431dadd71a4e06b48ab5244636c17b00",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/75/a9160e0433276aaa0752b95e0f7446b4237726": "efaf99e4dd26e45d148501430485c93f",
".git/objects/81/4c613d14bb31cbca31ccf109249b02e68a876b": "d4d295a81168dd89b8b50b93154a8968",
".git/objects/72/b8abdcbf69aae99b29a91c6c7fb3ff5a6a4a19": "fe96e3f803d8ad9e070a71cb1399d4e9",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/bbe2059184c34130088269eb1053aa8c642a3f": "8cd5f3a64096a146a67cc703a6253fa8",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/9a/147b32ea1eee979be5168dc76ec88ff8b2ecc3": "3685d5bd7223521d78629ee289e5cf3e",
".git/objects/36/f7d085a0dd496d538a73dfb61196dba9be8b15": "bba6fd7dc5442152ce1a72f03937bb01",
".git/objects/09/f21e47b14a4f2c983d8e09bd71ceea32b574e7": "eba003ddcdb52fd4d402fba0a10ad948",
".git/objects/30/db88bae892b49f81126bf9461a8801ae703448": "6f4877b77f02594ae1ba9bf8d48c5a2c",
".git/objects/5b/89edd003a1308f7452e11c7fa9963d61be0231": "db2f399d401f8f163ea0326d30e379ac",
".git/objects/6c/4481271c4158ee0627bbd94b8188d969602d0d": "7eeb7896aead3740543305bd4782fa3e",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/55/8b5bc17e13f18690a1d10091f2e59b1d78134c": "6df25dd3da0006aac5f9abc88cb36034",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/a7/68696ff67077aa2d9f116225b0aa06d63a42e6": "34434283fa62e30a1ce54ff34f14c462",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/f614f74dc9423f0c38c51a74c285cf591b23be": "b48a90bcd0dd4f6ded50691f406d8b4d",
".git/objects/a6/029f0fd81c6999300f404f28b0b19630b1f8a0": "dcf26e2b310266806cccb9b5132c45cc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/8ebcd8ab68b7ab14363f9c33bafcb86c624021": "659a0f628fb092070e46fe138c761e84",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/5413a1c418679b6c48da40ac3f13cc2d368449": "3e23d8673dc047dcac7aa7f124b77ade",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e7/43082d97c168dac9f760db73659dc9e2ab9504": "2979ef08ce888367d733d176efbd3f12",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/f808366e614086c35dc4c313d59b78af8036f7": "bd82f08062d96f744a5db5235d7ae81b",
".git/objects/77/1ab103c2226243d9efdc6e97c5526f418194b0": "a3c6bdce1808ec5d593a0e492b8038ca",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/e6a6d5ddf22779dd561196da89b159c818ddd8": "2836b43f3f63858a3e3aa91e16ef55e8",
".git/objects/13/efe2dbc9312b2465b0b26e06c49047c7d07000": "fb2c114a98b5334b0fd7044a7adc821c",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/22/0e4fdf2f555632a448a7f615b2f22efbf9d92c": "b1b6d064ab91435f24f608aa1459104f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "d6f940e4b0953b13ae267e847ff04e00",
".git/logs/refs/heads/master": "2a409d7d46feca79114e1b3310cf91d3",
".git/logs/refs/heads/main": "b26c8ac13a98b922094cf0017fdbb17b",
".git/logs/refs/remotes/origin/master": "f5b430f846a771010f40ed6f0fbb129c",
".git/logs/refs/remotes/origin/main": "d4e5e59cfc5d192f39ebf8805adeb8ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "1ffcc4261d7e6d95ee4865385f0df6e8",
".git/refs/heads/main": "944644cff4e3c47a0610b6b7916e8907",
".git/refs/remotes/origin/master": "1ffcc4261d7e6d95ee4865385f0df6e8",
".git/refs/remotes/origin/main": "944644cff4e3c47a0610b6b7916e8907",
".git/index": "99ab1fd1ad0b7457385fcf89dfa61d35",
".git/COMMIT_EDITMSG": "11c06e76e988c58a17e1f647164c483b",
".git/FETCH_HEAD": "1bbbb933e9bbeeedf94c4a1bbf7ed53c",
"assets/AssetManifest.json": "ee1f4e870832569a6ed2dcdd6a8c2994",
"assets/NOTICES": "070072be88fda3d44b045434bbcf47bd",
"assets/FontManifest.json": "3ba95e877e8d977ed295b7a8efefeff7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/lib/lang/en.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/lib/lang/sr.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/ic_visa.png": "dcc318db3e32948009d28f998c4d341a",
"assets/assets/images/ic_bookmark.png": "3b31cd5c475f8cc506dd0b2c1ebeb4aa",
"assets/assets/images/ic_deselect_payment.png": "0f4f9a9f9009dc7d3e179673116fd3ce",
"assets/assets/images/ic_unbookmark.png": "8ab9e8544501d773082146ed349cb6ab",
"assets/assets/images/ic_paypal.png": "67d6e00df726eb3e5fa7b4ca205cea0c",
"assets/assets/images/ic_bishop_white.png": "f37ae3eb22974b12acaaeb158638310e",
"assets/assets/images/img_no_data_found.png": "4e945a7f39bfeb167da123c6935e7fb3",
"assets/assets/images/ic_church_white.png": "f04fabebcb270258180a7cf23c510ef1",
"assets/assets/images/ic_location_pin_brown.png": "d8e58e21bf5725aeb5b4b88d07700751",
"assets/assets/images/ic_dots_menu.png": "b9a54ec6e4c914bfb5007641506fa190",
"assets/assets/images/ic_select_payment.png": "fbff04346c25a858f3a2442b1c4f4402",
"assets/assets/images/sample_church.png": "ea54c4b3835e36e58b0d196480e9f8e8",
"assets/assets/images/ic_global.png": "3f4a0ea8f1ed053cd555b1ef5fda21ef",
"assets/assets/images/ic_circle_add.png": "0d6686766e27de9c68b1201cd1e6bd44",
"assets/assets/images/ic_website_white.png": "7b2b458e5b2fe41b839ef501d9ee4099",
"assets/assets/images/ic_location_pin.png": "2f9276888ddba1f64c24df75208ee833",
"assets/assets/images/ic_map_white.png": "c411cae42e0a1f6db0a3814aafe825d0",
"assets/assets/json/churchview.json": "cdd36b0db60f2b6664eca47d6993c46a",
"assets/assets/json/eparchyview.json": "d4cbeeb7499a592c574528d16c98fa29",
"assets/assets/json/eparchy.json": "663a44a84ad048a5797aeed40398d59f",
"assets/assets/icon/app_logo.png": "eb41ab066c0093e7dcd875caadd132bb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
