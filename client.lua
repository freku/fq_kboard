local isKillBoxShown = false

RegisterNetEvent('fq:killBoxAddRecord')
AddEventHandler('fq:killBoxAddRecord', function(infoG)
	SendNUIMessage({
		type = 'ON_RECORD',
		info = infoG
	})
end)

RegisterNetEvent('fq:showKillBox')
AddEventHandler('fq:showKillBox', function(state)
	SendNUIMessage({
		type = 'ON_STATE',
		display = state
	})
	
	isKillBoxShown = state
end)