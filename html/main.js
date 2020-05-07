window.onload = function(e) {
    // $('#main').hide();

    var isShown = false;
    var num = 0;
    var gangIdColor = {
        1: 'ballas-c',
        2: 'family-c',
        3: 'vagos-c',
        4: 'triads-c'
    }

    var list = {
        0x1B06D571: "pistol.png",
        0x1D073A89: "PumpShotgun.png",
        0x2BE6766B: "SMG.png",
        0x3AABBBAA: "HeavyShotgun.png",
        0x4DD2DC56: "GrenadeLauncher.png",
        0x5EF9FEC4: "CombatPistol.png",
        0x5FC3C11: "SniperRifle.png",
        0x6A6C02E0: "MarksmanRifle.png", // mk2 version
        0x6D544C99: "Railgun.png",
        0x7F229F94: "BullpupRifle.png",
        0x7F7497E5: "Firework.png",
        0x7FD62962: "CombatMG.png",
        0x9D07F764: "MG.png",
        0x9D61E50F: "BullpupShotgun.png",
        0x12E82D3D: "Autoshotgun.png",
        0x22D8FE39: "APPistol.png",
        0x42BF8A85: "Minigun.png",
        0x63AB0442: "HomingLauncher.png",
        0x78A97CD0: "SMG.png", // mk2 ver
        0x83BF0278: "CarbineRifle.png",
        0x84D6FAFD: "BullpupRifle.png", // mk2 ver
        0x97EA20B8: "Doubleaction.png",
        0x99AEEB3B: "Pistol50.png",
        0x394F415C: "AssaultRifle.png", // mk2 ver
        0x476BF155: "Raycarbine.png",
        0x555AF99A: "PumpShotgun.png", // mk2 ver
        0x624FE830: "CompactRifle.png",
        0x781FE4A: "Compactlouncher.png",
        0x969C3D67: "SpecialCarbine.png", // mk2 ver
        0x3656C8C1: "StunGun.png",
        0x7846A318: "SawnoffShotgun.png",
        0x83839C4: "VintagePistol.png",
        0x13532244: "MicroSMG.png",
        0x47757124: "FlareGun.png",
        0x61012683: "Gusenberg.png",
        0x88374054: "SNSPistol.png", // mk2 ver
        0xA3D4D34: "PDW.png",
        0xA89CB99E: "Musket.png",
        0xA284510B: "GrenadeLauncher.png",
        0xA914799: "HeavySniper.png", // mk2 ver
        0xAF113F99: "AdvancedRifle.png",
        0xAF3696A1: "Raypistol.png",
        0xB1CA77B1: "RPG.png",
        0xB62D1F67: "rayminigun.png",
        0xBD248B55: "minismg.png",
        0xBFD21232: "SNSPistol.png",
        0xBFE256D4: "pistol.png", // mk2 ver
        0xBFEFFF6D: "AssaultRifle.png",
        0xC0A3098D: "SpecialCarbine.png",
        0xC1B3C3D1: "Revolver.png",
        0xC472FE2: "HeavySniper.png",
        0xC734385A: "MarksmanRifle.png",
        0xCB96392F: "Revolver.png", // mk2 ver
        0xD205520E: "HeavyPistol.png",
        0xDB1AA450: "MachinePistol.png",
        0xDBBD7280: "CombatMG.png", // mk2 ver
        0xDC4DB296: "MarksmanPisto.png",
        0xE284C527: "AssaultShotgun.png",
        0xEF951FBB: "DoubleBarrelShotgun.png",
        0xEFE7E2DF: "AssaultSMG.png",
        0xFAD1F1C9: "CarbineRifle.png", // mk2 ver
    }
    
    window.addEventListener("message", (event) => {
        var item = event.data;
        if (item !== undefined) {
            switch(item.type) {
                case 'ON_STATE':
                    if(item.display === true) {
                        $('#main').show();
                        isShown = true;
                    } else {
                        $('#main').hide();
                        isShown = false;
                    }
                    break;
                case 'ON_RECORD':
                    if (item.info !== undefined) {
                        var v = item.info;
                        if (v.killerName != undefined && v.killedName != undefined) {
                            addKillInfo(v.killerName, v.killedName, v.killerGangId, v.killedGangId, v.weaponHash);
                        }
                    }
                default:
                    break;
            }
        }
    })

    window.addKillInfo = function(killerName, killedName, killerGangId, killedGangId, weapoHash) {
        var el = document.createElement('div');
        
        var text = "<span class='player-name "+gangIdColor[killerGangId]+"'>" + killerName +"</span>" +
            "<img src='weapons/"+list[weapoHash]+"' class='gun-img'>" +
            "<span class='player-name "+gangIdColor[killedGangId]+"'>"+ killedName +"</span>";

        $(el).attr('test', num);
        
        $(el).addClass('element')
            .html(text)
            .appendTo($('.container'));
        
        removeMsg(num);
        num++;
        var elLen = document.getElementsByClassName('element');
        
        if (elLen.length >= 8) {
            $(elLen[0]).remove();
        }
    }

    window.removeMsg = function(n) {
    	setTimeout(
        	() => $("div[test='" + n +"']").remove()
        , 2500);
    }
}