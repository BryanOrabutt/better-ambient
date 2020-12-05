console.log("better-ambient: Loaded.");

async function renderAmbientSoundConfigHandler(ambientConfig, html)
{
	const data = {
		test: "Test"
	};
	console.log("better-ambient: Updating ambient sound configuration.");
	elem = html.find('button[type="submit"]');
	console.log(elem);
	injection = await renderTemplate('modules/better-ambient/templates/ambient-config.html', data);
	console.log(injection);
	await elem.before(injection);
}

Hooks.on('renderAmbientSoundConfig', renderAmbientSoundConfigHandler);