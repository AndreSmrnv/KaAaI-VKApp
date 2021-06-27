import React from 'react';
import PropTypes from 'prop-types';
import avt from '../img/tXRPBqQb2X4.jpg';
import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Card,
	Avatar,
	UsersStack,
	Button,
	Div
} from '@vkontakte/vkui';
import { HOME, JOIN_FRENDS, EVENT } from '../services/constants/initViews';


import './Persik.css';

const Frends = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to={EVENT}/>}
		>
			Пригласить друзей
		</PanelHeader>
		<Card			
				icon={<Avatar src={avt} size={72} />}
				header="Баскетбол на выходных"
				subheader="Приглашение в беседу"
				actions={(
					<Button key="join" size="l" mode="primary" >
					Присоединиться
					</Button>
				)}
				
				>
				<UsersStack
					photos={[
						avt,
						avt,
						avt,
						avt,
						avt,
						avt,
					]}
					size="m"
					count={3}
					layout="vertical"
			>Алексей, Илья, Михаил<br />и ещё 3 человека</UsersStack>
			<Div>
				<Button stretched key="join" size="l" mode="primary" onClick={props.go} data-to={EVENT}>
					Присоединиться
					</Button>
					</Div>	
		</Card>
	</Panel>
);

Frends.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Frends;
