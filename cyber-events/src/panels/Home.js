import React, { useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import { EventsContext } from '../services/contexts/eventsContext';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Tabs } from '@vkontakte/vkui';
import GameIconsCarousel from '../components/GameIconsCarousel';
import TodayEventsCarousel from '../components/EventsCarousel/TodayEventsCarousel';
import UpcomingEventsCarousel from '../components/EventsCarousel/UpcomingEventsCarousel';
import Navigation from '../components/Navigation';

const Home = ({ id, go, fetchedUser }) => {
	const { events, setEvents } = useContext(EventsContext);

	return (
		<Panel id={id}>
			<PanelHeader>Cyber Events</PanelHeader>

			<GameIconsCarousel />

			<TodayEventsCarousel go={ go } />

			<UpcomingEventsCarousel />

			<Navigation />

			{/* {events.data && events.data[0] && (
				<Group header={<Header mode="secondary"> Data Fetched with Game</Header>}>
					<Cell
						before={events.data[0].image_mobile ? <Avatar src={events.data[0].image_mobile}/> : null}
						description={events.data[0] && events.data[0].description ? events.data[0].description : ''}
					>
						{`${events.data[0].name} ${events.data[0].name}`}
					</Cell>
				</Group>
				)
			} */}

			{/* <GameIconsCarousel /> */}

			{/* <Group header={<Header mode="secondary">Navigation Example</Header>}>
				<Div>
					<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
						Show me the Persik, please
					</Button>
				</Div>
			</Group> */}
		</Panel>
	)
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
