## 2.4.0 (2020-02-10)

### :rocket: Features

* Upgrade UI Kitten to [v4.4.0](https://github.com/akveo/react-native-ui-kitten/issues/517#issuecomment-584100452)
* Eva material compatibility ([9f73d1a](https://github.com/akveo/kittenTricks/commit/9f73d1a))
* Upgrade React Navigation to v5
* Make runnable in both React Native and Expo environments



## <small>2.4.0-beta.3 (2020-01-22)<small>

### :rocket: Features

* Upgrade UI Kitten to v4.4.0-beta.3

### :bug: Bug Fixes

* Theme switch using system appearance ([8eabc16](https://github.com/akveo/kittenTricks/commit/8eabc16))



## <small>2.4.0-beta.2 (2020-01-16)</small>

### :rocket: Features

* Rewrite with functional components and React hooks
* Upgrade application structure for easier screens reusage
* Upgrade UI Kitten to v4.4.0-beta.2
* Upgrade React Navigation to v5
* Upgrade Expo to SDK 36

Upgrade application structure

## <small>2.0.1 (2019-06-20)</small>

* refactor: adopt to framework changes d80b7dc
* refactor: theme variables b9615b4
* refactor(app): common issues refactor (#137) 49f7d80, closes #137
* refactor(assets): replace remote icons with local 2f5306c
* refactor(build): replace deprecated expo imports 6ef6116
* refactor(components): missing showcases add (#133) 90fcbe0, closes #133
* refactor(components): popover showcase refactor 0b95217
* refactor(components): showcase plain implementation 5f9c1ee
* refactor(core): navigation setup ce412eb
* refactor(core): theme change (#142) 2de4a57, closes #142
* refactor(layout): auth & social 69accef
* refactor(layout): common fixes db0f315
* refactor(layout): component text style 268f382
* refactor(layout): images & keyboard 1fff7be
* refactor(layout): menu layout 69f756b
* refactor(layout): replace containers with scrollable containers 03d37af
* refactor(layout): replace fontWeight with custom fonts 9f378b0
* refactor(layout): text - eva style 4408fef
* refactor(package): adopt to eva (#144) 8b2556a, closes #144
* refactor(package): remove .idea dir c87a2a5
* refactor(package): use theme colors db9f48d
* refactor(script): travis-ci scripts a5c22c6
* refactor(theme): menus icons depending on theme choosing refactor (#143) aa4b6f7, closes #143
* docs(dev): add DEV_DOCS.md bca0ce7
* docs(readme): update README.md b91c094
* fix(app): android status bar fix a5447dd
* fix(app): change name 544a5f5
* fix(app): layouts/analytics/list-showcase  f607474
* fix(app): status bar height on android 82d1681
* fix(app): top-navigation and status bars fix (#127) 0eb19e1, closes #127
* fix(assets): restore compressed images 4bccb6e
* fix(charts): scale and reformat charts 8aea601
* fix(chat): fix baloon width (#23) 2eaaee6, closes #23
* fix(chat): fix emoji cutting on chat screens bcff510
* fix(common): add touchable for aricles4 (#27) a0c0ffd, closes #27
* fix(common): after kitten fixed fixes add (#105) bc92a4f, closes #105
* fix(common): fix expo eject (#48) 9f708ef, closes #48 #47
* fix(common): google analytics id fix a92b1d3
* fix(common): input/button-related fixes 8296333
* fix(common): lock app for portrait orientation a7c24ac
* fix(component): update container-view documentation 164d400
* fix(core): common navigation issues fix 01935e1
* fix(core): status-bar height on android 29a704d
* fix(dashboard): fix scale issues ac30e43
* fix(dashboard): set stroke color to area chart 37a7823
* fix(ecommerce): remove day from date picker on add card form eeaa67d
* fix(layout): add keyboard-avoiding behavior 549868d
* fix(layout): bouncing preventing add e4e90ad
* fix(layout): common issues 8f91da9
* fix(layout): theme values (#132) 5839a76, closes #132
* fix(layout): ui-kitten adopt 08a1e54
* fix(routes): fix walkthrough router (#21) b3c47ed, closes #21
* fix(script): first-time start 9cd370e
* fix(socials): fix avatar badges (#25) c64b40f, closes #25
* fix(theme): fix invisible status bar on android when dark theme is used b621c51
* feat(analytics): google analytics integrate (#123) 72b9e4f, closes #123
* feat(app): add splash screen (#139) c2ef6fd, closes #139
* feat(app): assets linked c48c225
* feat(app): create app navigation 3e644e4
* feat(app): project setup f12dcb6
* feat(article): article v3 add (#92) 9889b0f, closes #92
* feat(assets): dark theme icons add 6a73f6f
* feat(common): custom app-bars add (#114) 7f4d4a6, closes #114
* feat(common): make Kitten Tricks an Expo app 69662cf
* feat(components): add components menu icons 082e273
* feat(components): add simple components showcase 768829b
* feat(components): interactive showcases b196f06
* feat(components): part of showcases add (#110) 0d7e288, closes #110
* feat(container): add settings container 4e965e0
* feat(dashboard): add dashboard layouts 2c60b35
* feat(e-commerce): e-commerce screens add  (#99) 77abb02, closes #99
* feat(layout): add components container d011f72
* feat(layout): add profile containers c44fa0a
* feat(layout): add send message button to chat-1 layout (#169) 50c89c8, closes #169
* feat(layout): add sign in v5 layout 540fb2d
* feat(layout): articles & feed 02fb5d6
* feat(layout): asset images & components adopt 916de74
* feat(layout): auth layouts 5fe1d4b
* feat(layout): ecommerce - rent apartment 260fe0c
* feat(layout): social - profile 137dd1d
* feat(messaging): chats add 896e8be
* feat(messaging): messages list add (#93) 684dd51, closes #93
* feat(theme): create app theme 79a2d47
* feat(theme): theme switch feature add 4ca28e8
* feat(trainings): trainings layout add (#94) cc26dee, closes #94
* build(common): add prod/dev build configurations b0e0b34
* build(common): bump react-native-ui-kitten version 8cc0a6d
* build(common): Link to react-native-ui-kitten/dev c971bbf
* build(common): setup app to watch framework and eva changes 8d196f6
* build(common): setup env configurations 9bb923d
* build(common): update android package-name 03403fb
* build(common): update app.json for expo release build. expo/react-native update (24.0.2/0.51) ec44ad7
* build(common): update eva dependencies b734930
* build(common): update eva dependencies paths 27aa0e5
* build(common): update expo to sdk-33 57e5101
* build(common): update rn/expo versions & eslint integration (#66) 00209b5, closes #66 #62 #55 #65
* build(expo): fix expo build issues f6aa6f6
* release: v2.0.0 af83498
*  fix(auth): forms values applying fix 4581e40
* build(android) Fix android build d9e971c
* build(common) removed unused npm task e0adb97
* build(common) removed unused npm task and fix react-native version bed00a9
* bump  version a97448b
* bump version ce43e7f
* bump version ad25dd3
* bump version 6067d7b
* bump version 4c8eb49
* feat(common) added interaction to social bar 3024d81
* feat(common) Added yarn lock. Navigation small fix. 5e999b6
* feat(common) Fix keyboard issues 2552c9d, closes #11 #12
* feat(data) Add db data for articles 17480db
* feat(data) Add interaction and data to login and profile screens 55df791
* feat(data) add versions table cda09ef
* feat(data) Added card data 57426af
* feat(data) Added data to messaging screens aa45abe
* feat(data) Added realm 8fb1c96
* fix(android) Hide status bar on splash 7add6be, closes #8
* fix(build) Removing signing settings 091e555
* fix(common) Change button text to correct values 9f37907, closes #4
* fix(common) Fix chat screen interaction c8349f7, closes #15
* fix(common) Fix crash on chat 58dfc1d
* fix(common) Remove realm db 1b0f4f0
* fix(data) change conversation data 275e950
* fix(design) added author name on articles v4 0950083
* fix(design) Fix colors after theme switch 81a187b, closes #13
* fix(design) Fix scrolling issue on cards screen 53f5434, closes #14
* fix(design) Fix walkthrough image sizes. 8edb52b, closes #9
* fix(design) Fixed couple design bugs ff91952
* fix(design) fixed separator heights 26f6541
* fix(design) Fixed transition color during navigation 35195d9, closes #10
* refactor(mapping/theme): theme variables refactor 9fc1c6c
* Update README.md 9fee97d
* package(common): update lock file bc59cfe
* package(common): update typing packages versions (#125) 911bde4, closes #125
* chore(common): add github .md files (#46) b95e003, closes #46
* buid(common): fixed version of react-native-ui-kitten ac0fb4d
* fear(forms): Create Add To Card Form view (#29) 5a9863d, closes #29
* fear(forms): Create Add To Card Form view. Integrate date picker f4a78c4



