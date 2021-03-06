
    (function(global, spotify) {
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      global.googletag = googletag;
      (function () {
        var gads = global.document.createElement('script');
        gads.async = true;
        gads.src = 'https://www.googletagservices.com/tag/js/gpt.js';
        var node = global.document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
      })();

      googletag.cmd.push(function() {
        var slot = googletag.defineSlot(spotify.inventoryUnit, [spotify.slotSize], spotify.slotId)
            .addService(googletag.pubads());

        for (var key in spotify.targeting) {
          if (spotify.targeting.hasOwnProperty(key)) {
            slot.setTargeting(key, spotify.targeting[key]);
          }
        }

        googletag.pubads().addEventListener('slotRenderEnded', function (e) {
          if (e.isEmpty) {
            fetch("https://adeventtracker.spotify.com/monitoring?pload=AAALpRJ_8jdS-vrPWcsyNSpYHZr2iKOe_jFnOR88pkaK21MxddUudA8ubakiFoyGiV8KD1-EIp_y1UJOAxvlWa44jEX2cGN7sehqg-Bzn_UfN3go5rU-b_nHvZieIzlk1wjboRcsU90RxUrjMJmm2NhKCasr4m0QGWxM57EAaYz8vsbpnbnM4CMvzMbHyoTKCUXQEbUK1OSMTEyMMjM0jc7ZPJj5hFXUBkMvNcRaesXgCYj0E5PjEklKwxVksD6bXzZNolfP2rpdpW8iUGjCFh8INJtccretImQ9_0Ju50Kz_GFglU7VaxAsWTP4vQThsbHl236XfpFjDcV44ixCHdjuQ-pP2Q&event=monitoring");
          } else {
            fetch("https://adeventtracker.spotify.com/monitoring?pload=AABcMJOYe3M1jpxyZKGh9woI5tcvyKZlw8uItPHRmjm4Wk2xg3NAQL0xw96IicXWDjtmwXBDSddFsT3_Vs-HC2aRIIFHYRZM8_j75zg_YSazamg4FBSKLCwQKJuQyLEC7xN3gD8NEQxkceM9tucHScwUYF2imeQ4stfW3N1N5JbypfeDzghljC30-dyu9cXmKaZootp32hDz_IsivLz5LxswMK39vpQd8NAZHY4SSAB_YcePwsNDXQf8C9Rfx_ikAuvsyvRs2xbz1d0kkNkHRRLnlwsgetgPbi8r3GDX4eUm68MW_eFpZd8d2DkFbLwtn52108spoQGPlG4PHbC67CoLNfAp&event=monitoring");
          }
          window.parent.postMessage({
            type: 'ads-leaderboard-' + (e.isEmpty ? 'failed' : 'rendered'),
            data: {
              creativeId: e.creativeId,
              lineItemId: e.lineItemId,
              slot: spotify.slotId,
              age: spotify.targeting.age || '',
              gender: spotify.targeting.gender || ''
            }
          }, '*');
        });

        googletag.pubads().set('page_url', spotify.pageUrl);
        googletag.pubads().setPublisherProvidedId(spotify.ppid);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().setSafeFrameConfig({
          sandbox: true,
          allowOverlayExpansion: false
        });
        googletag.pubads().setForceSafeFrame(true);
        googletag.pubads().setRequestNonPersonalizedAds("0");
        googletag.pubads().setTagForUnderAgeOfConsent("0");
        googletag.enableServices();
        googletag.display(spotify.slotId);
      });
    })(window, {
      slotId: 'leaderboard',
      inventoryUnit: '/6465052/web',
      slotSize: [728, 90],
      targeting: {
          "country": "us",
          "historicgenre": "hiphop",
          "gender": "male",
          "adbreaklength": "90",
          "eligibletrial": "false",
          "rid": "0c5b3209-ac6c-4eca-b5a5-a91054eb9652",
          "created_from_fb": "false",
          "abtest": "ads-preroll-mvto-ss_Control,premium_18q4_holdiay_video_creative_duration_test_Control,ad-sponsored-playlist-dw_Control,premium_18q3_audio_assertive_android_cta_test_learn_more_companion,2018q2_premium_student_self_id_Control,premium_18q1_guaranteed_ad_load_9_ads,ad_exp_5tile_18,adgen_employee_testing_Control,premium_18q4_holiday_holdouts_email_upsell_quicksilver_filler_guaranteed_perf,premium_18q3_cross_format_creative_concept_test_fastfacts,premium_17q3_ads_creative_refresh_Control,ads_programmatic_banner_exposed,2018q3_premium_latam_winback_treatment,iam_marquee_holdout_1percent_Marquee,ebda_openx_test_exposed,premium_18q1_audio_creative_quantity_test_audio_2ads,Holiday_2017_No Social,2018q1_premiumbusiness_dual_offer_US_Control,premium_18q4_audio_filler_adload_issue_testgroup,ad-sponsored-playlist-dw2_test,premium_18q2_evergreen_showcase_creative_variation_constant_new_concept,premium_19q1_global_filler_content_ad_mix_premium70_content30,premium_18q4_quicksilver_jp_upsell_holdout_treatment,ad-logic-long-term-data-persist_Control,premium_18q4_holiday_winback_guaranteed_Treatment,ads_adserver_alpha_test_Control,premium_18q1_audio_creative_refresh_test_2_New_Narrative,adserver-first_test",
          "streamtimebetweenadbreaks": "810",
          "upsellproduct": "premium",
          "lang": "en",
          "client_version": "web_1.0.0",
          "artistaudience": "55Aa2cqylxrFIXC767Z865,55Aa2cqylxrFIXC767Z865,55Aa2cqylxrFIXC767Z865,55Aa2cqylxrFIXC767Z865,55Aa2cqylxrFIXC767Z865,3TVXtAsR1Inumwj472S9r4,3TVXtAsR1Inumwj472S9r4,3TVXtAsR1Inumwj472S9r4,3TVXtAsR1Inumwj472S9r4,3TVXtAsR1Inumwj472S9r4,45eNHdiiabvmbp4erw26rg,45eNHdiiabvmbp4erw26rg,45eNHdiiabvmbp4erw26rg,45eNHdiiabvmbp4erw26rg,45eNHdiiabvmbp4erw26rg,3zDGjdtoxUiH7YcTWOdtMd,3zDGjdtoxUiH7YcTWOdtMd,3zDGjdtoxUiH7YcTWOdtMd,3zDGjdtoxUiH7YcTWOdtMd,3zDGjdtoxUiH7YcTWOdtMd,04gDigrS5kc9YWfZHwBETP,6l3HvQ5sa6mXTsMTB19rO5,6l3HvQ5sa6mXTsMTB19rO5,6l3HvQ5sa6mXTsMTB19rO5,04gDigrS5kc9YWfZHwBETP,6l3HvQ5sa6mXTsMTB19rO5,04gDigrS5kc9YWfZHwBETP,6l3HvQ5sa6mXTsMTB19rO5,04gDigrS5kc9YWfZHwBETP,04gDigrS5kc9YWfZHwBETP,4xRYI6VqpkE3UwrDrAZL8L,4xRYI6VqpkE3UwrDrAZL8L,4xRYI6VqpkE3UwrDrAZL8L,4xRYI6VqpkE3UwrDrAZL8L,4xRYI6VqpkE3UwrDrAZL8L,1Ffb6ejR6Fe5IamqA5oRUF,1Ffb6ejR6Fe5IamqA5oRUF,1Ffb6ejR6Fe5IamqA5oRUF,1Ffb6ejR6Fe5IamqA5oRUF,1Ffb6ejR6Fe5IamqA5oRUF,40Yq4vzPs9VNUrIBG5Jr2i,40Yq4vzPs9VNUrIBG5Jr2i,40Yq4vzPs9VNUrIBG5Jr2i,40Yq4vzPs9VNUrIBG5Jr2i,40Yq4vzPs9VNUrIBG5Jr2i,3dz0NnIZhtKKeXZxLOxCam,3dz0NnIZhtKKeXZxLOxCam,3dz0NnIZhtKKeXZxLOxCam,3dz0NnIZhtKKeXZxLOxCam,3dz0NnIZhtKKeXZxLOxCam,5p0zkKpBuRguKebwRe0RI2,5p0zkKpBuRguKebwRe0RI2,5p0zkKpBuRguKebwRe0RI2,5p0zkKpBuRguKebwRe0RI2,5p0zkKpBuRguKebwRe0RI2,60d24wfXkVzDSfLS6hyCjZ,60d24wfXkVzDSfLS6hyCjZ,60d24wfXkVzDSfLS6hyCjZ,60d24wfXkVzDSfLS6hyCjZ,60d24wfXkVzDSfLS6hyCjZ,16PI0VvAza9cLZpOY0PZyC,16PI0VvAza9cLZpOY0PZyC,16PI0VvAza9cLZpOY0PZyC,16PI0VvAza9cLZpOY0PZyC,16PI0VvAza9cLZpOY0PZyC,4tZwfgrHOc3mvqYlEYSvVi,4tZwfgrHOc3mvqYlEYSvVi,4tZwfgrHOc3mvqYlEYSvVi,4tZwfgrHOc3mvqYlEYSvVi,4tZwfgrHOc3mvqYlEYSvVi,714O3xvBNiclo82vxBn8Bf,714O3xvBNiclo82vxBn8Bf,714O3xvBNiclo82vxBn8Bf,714O3xvBNiclo82vxBn8Bf,714O3xvBNiclo82vxBn8Bf,6pRi6EIPXz4QJEOEsBaA0m,6pRi6EIPXz4QJEOEsBaA0m,6pRi6EIPXz4QJEOEsBaA0m,6pRi6EIPXz4QJEOEsBaA0m,6pRi6EIPXz4QJEOEsBaA0m,2o5jDhtHVPhrJdv3cEQ99Z,2o5jDhtHVPhrJdv3cEQ99Z,2o5jDhtHVPhrJdv3cEQ99Z,2o5jDhtHVPhrJdv3cEQ99Z,2o5jDhtHVPhrJdv3cEQ99Z,2sf28o6euxEDpYkG9dMtuM,2sf28o6euxEDpYkG9dMtuM,2sf28o6euxEDpYkG9dMtuM,2sf28o6euxEDpYkG9dMtuM,2sf28o6euxEDpYkG9dMtuM,0QaiCsyOUjBgLqsbABu07O,0QaiCsyOUjBgLqsbABu07O,0QaiCsyOUjBgLqsbABu07O,0QaiCsyOUjBgLqsbABu07O,0QaiCsyOUjBgLqsbABu07O,74cb3MG0x0BOnYNW1uXYnM,74cb3MG0x0BOnYNW1uXYnM,74cb3MG0x0BOnYNW1uXYnM,74cb3MG0x0BOnYNW1uXYnM,74cb3MG0x0BOnYNW1uXYnM",
          "age_pr": "20",
          "product": "free",
          "aduserid": "7de7853b94db77f545f2e025cd77cdc2",
          "accountage": "1558",
          "idtype": "adid",
          "leaderboard_refresh_interval": "30000",
          "gender_pr": "male",
          "artistshowcase": "spotify:artist:5p0zkkpburgukebwre0ri2",
          "rdid": "574881a5-98d0-477e-b4d7-d5a93161dcdf",
          "age_dec": "20",
          "age": "20",
      },
      pageUrl: "https://www.spotify.com",
      ppid: '7de7853b94db77f545f2e025cd77cdc2'
    });
//just search on spotify html audio and it should be the 4th option.
  