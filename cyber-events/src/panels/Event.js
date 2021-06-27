import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Banner, Group, Button, Header, SimpleCell, InfoRow, RichCell } from '@vkontakte/vkui';
import { HOME } from '../services/constants/initViews';
import { EventsContext } from '../services/contexts/eventsContext';
import imageUrl from '../img/card_img1.svg';
import persik from '../img/persik.png';
import './Persik.css';

const Event = props => {
	const { events, setEvents } = useContext(EventsContext);

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={props.go} data-to={HOME} />}
			>
				Турнир {events.games.find(item => item.id == events.currEvent.game_id).name}
			</PanelHeader>
			<Group
				header={<Header>{events.currEvent.name}</Header>}
				>
				

				<Banner
					mode="image"
					size="m"
					header={events.currEvent.name}
					subheader={<span>{events.currEvent.description},<br />"Москва · 27 июня"</span>}
					background={
					<div
						style={{
						backgroundColor: '#000',
						backgroundImage: `url(${imageUrl})`,
						backgroundPosition: 'right bottom',
						backgroundSize: 340,
						backgroundRepeat: 'no-repeat',
						}}
					/>
					}
					asideMode="dismiss"
					actions={<Button mode="overlay_primary" size="m">активен</Button>}
				/>
			</Group>
			<Group>
				<SimpleCell>
					<InfoRow header="Родной город">
						Ереван
					</InfoRow>
				</SimpleCell>
			</Group>
			<Group>
				<RichCell				
					after="М"
				>
								Формат
				</RichCell>
			</Group>
		</Panel>
	)
};

Event.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Event;
