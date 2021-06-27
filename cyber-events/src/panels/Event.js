import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { HOME } from '../services/constants/initViews';
import { EventsContext } from '../services/contexts/eventsContext';

import persik from '../img/persik.png';
import './Persik.css';

const Event = props => {
	const { events, setEvents } = useContext(EventsContext);

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={props.go} data-to={HOME} />}
			>
				Турнир { }
			</PanelHeader>
			<img className="Persik" src={persik} alt="Persik The Cat" />
		</Panel>
	)
};

Event.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Event;
