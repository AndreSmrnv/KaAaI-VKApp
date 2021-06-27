import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import dataEvents from './services/db/events';
import { EventsContext } from './contexts/eventsContext';
import { INITIAL_EVENTS } from './constants/initEvents';



const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [events, setEvents] = useState(INITIAL_EVENTS);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
		setPopout(null);  // TODO потом убрать блок спинера загрузки данных
		setEvents(prev=> ({...prev, data: dataEvents}));
	}, []);
	//console.log(dataEvents);
	console.log(events.data);
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<EventsContext.Provider value={{ events, setEvents }}>
				<AppRoot>
					<View activePanel={activePanel} popout={popout}>
						<Home id='home' fetchedUser={fetchedUser} go={go} />
						<Persik id='persik' go={go} />
					</View>
				</AppRoot>
			</EventsContext.Provider>	
		</AdaptivityProvider>
	);
}

export default App;
