import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Banner,
	Group,
	Button,
	Header,
	SimpleCell,
	Div,
	RichCell,
	ModalRoot,
	ModalPage,
	ModalPageHeader,
	PanelHeaderClose,
	PanelHeaderButton,
	IconButton,
	Avatar,
	CellButton
} from '@vkontakte/vkui';
import {
	Icon24Dismiss,
	Icon28PhoneOutline,
	Icon28MailOutline,
	Icon28KeyOutline,
	Icon28CheckShieldDeviceOutline,
	Icon28DevicesOutline,
	Icon16MoreVertical
} from '@vkontakte/icons';
import { HOME, JOIN_FRENDS } from '../services/constants/initViews';
import { EventsContext } from '../services/contexts/eventsContext';
import imageUrl from '../img/card_img1.svg';
import persik from '../img/persik.png';
import './Persik.css';




const Event = props => {
	const { events, setEvents } = useContext(EventsContext);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const onClickJoin = () => 
		setEvents(prev => ({ ...prev, join: !prev.join }));
	;

	// const modal = (
	// 	<ModalRoot
	// 	  activeModal={isModalOpened ? MODAL_NAME : null}
	// 	  onClose={() =>  setIsModalOpened(false)}
	// 	>
	// 	  <ModalPage
	// 		id={MODAL_NAME}
	// 		onClose={() =>  setIsModalOpened(false)}
	// 		header={
	// 		  <ModalPageHeader
	// 			left={ <PanelHeaderClose onClick={() =>  setIsModalOpened(false)} />}
	// 			right={<PanelHeaderButton onClick={() =>  setIsModalOpened(false)}><Icon24Dismiss /></PanelHeaderButton>}
	// 		  >
	// 			Group в модальном окне
	// 		  </ModalPageHeader>
	// 		}
	// 	  >
	// 		{renderGroup()}
	// 	  </ModalPage>
	// 	</ModalRoot>
	//   );
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
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						}}
					/>
					}
					asideMode="dismiss"
					actions={<Button mode="overlay_secondary" size="m">АКТИВЕН</Button>}
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
				<Div >
					{events.join ?
						(
							<Button stretched
							mode="secondary"
							onClick={onClickJoin}
								size="l"
							>
									Отменить участие
							</Button>
						) :
						(
							<Button stretched
								onClick={onClickJoin}
								size="l"
							>
									Участвовать
							</Button>
						)
					}
				</Div>
				<Div>
					<Button stretched
						mode="outline"
						size="l"
						disabled={!events.join} 
						onClick={props.go} data-to={JOIN_FRENDS}
					>
						Пригласить друзей
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

