import React from 'react';
import { Panel, Group, Div } from '@vkontakte/vkui';
import dota from '../../img/icons/dota.svg';
import wot from '../../img/icons/wot.svg';
import pubg from '../../img/icons/pubg.svg';
import cs from '../../img/icons/cs.svg';

import classes from './GameIconsCarousel.module.css';

const GameIconsCarousel = ({ id }) => {
    return (
        <Group>
            <Div className={classes.container}>
                <img src={dota} className={classes.slide + ' ' + classes.mr10} />
                <img src={wot} className={classes.slide + ' ' + classes.mr10} />
                <img src={pubg} className={classes.slide + ' ' + classes.mr10} />
                <img src={cs} className={classes.slide} />
            </Div>
        </Group>
    );
};

export default GameIconsCarousel;
