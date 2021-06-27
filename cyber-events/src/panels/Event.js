import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Banner, Group, Button, Header, SimpleCell, Div, RichCell } from '@vkontakte/vkui';
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
			<Group>
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
						backgroundPosition: 'cover',
						backgroundSize: 'auto',
						backgroundRepeat: 'no-repeat',
						}}
					/>
					}
					asideMode="dismiss"
					actions={<Button mode="overlay_primary" size="m">активен</Button>}
				/>
			</Group>
			{/* <Group>
				<SimpleCell>
					<InfoRow header="Родной город">
						Ереван
					</InfoRow>
				</SimpleCell>
			</Group> */}
			<Group>
				{/* <RichCell				
					after="М"
				>
					Формат
				</RichCell>
				<RichCell				
					after="27 июня"
				>
					Дата начала

				</RichCell> */}
				<SimpleCell indicator="M" >
					Формат
				</SimpleCell>
				<SimpleCell indicator="27 июня" >
					Дата начала
				</SimpleCell>
				<SimpleCell indicator="27 июня" >
					Дата окончания
				</SimpleCell>
				<SimpleCell indicator="27 июня" >
					Check in
				</SimpleCell>
				<SimpleCell indicator="47" >
					Количество игроков
				</SimpleCell>
				<Div>
					<Button stretched
						
						size="l">
					Участвовать
					</Button>
      			</Div>
			</Group>

		</Panel>
	)
};

Event.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Event;
