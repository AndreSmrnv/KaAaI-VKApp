import React from 'react';
import { Panel, Group, Div, Text } from '@vkontakte/vkui';
import dota from '../../img/icons/dota.svg';
import wot from '../../img/icons/wot.svg';
import pubg from '../../img/icons/pubg.svg';
import cs from '../../img/icons/cs.svg';
import classes from './GameIconsCarousel.module.css';

const GameIconsCarousel = ({ id }) => {
    return (
        <Group>
            <Div className={classes.container}>
                <Div className={classes.mr25}>
                    <img
                        src={dota}
                        className={classes.slide}
                    />
                    <Text weight="regular" className={classes.txt}>
                        Dota 2
                    </Text>
                </Div>
                <Div className={classes.mr25}>
                    <img src={cs} className={classes.slide} />
                    <Text weight="regular" className={classes.txt}>
                        CS GO
                    </Text>
                </Div>
                <Div className={classes.mr25}>
                    <img
                        src={wot}
                        className={classes.slide}
                    />
                    <Text weight="regular" className={classes.txt}>
                        World <br /> of Tanks
                    </Text>
                </Div>
                <Div>
                    <img
                        src={pubg}
                        className={classes.slide}
                    />
                    <Text weight="regular" className={classes.txt}>
                        PUBG
                    </Text>
                </Div>
            </Div>
        </Group>
    );
};

export default GameIconsCarousel;
