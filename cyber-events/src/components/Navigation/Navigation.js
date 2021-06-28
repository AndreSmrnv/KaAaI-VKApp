import React from 'react';
import { Panel, Tabs, View, TabsItem, Text } from '@vkontakte/vkui';
import {
    Icon24NewsfeedOutline,
    Icon24FavoriteOutline,
    Icon24UserCircleOutline,
} from '@vkontakte/icons';
import classes from './Navigation.module.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'panel1',
            activeTab1: 'events',
            activeTab2: 'favorite',
            activeTab3: 'user-profile',
        };
    }

    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <Panel id="panel1">
                    <Tabs>
                        <TabsItem
                            onClick={() =>
                                this.setState({ activeTab1: 'events' })
                            }
                            selected={this.state.activeTab1 === 'events'}
                        >
                            <Icon24NewsfeedOutline style={{ margin: 'auto' }} />
                            <Text className={classes.txt}>События</Text>
                        </TabsItem>
                        <TabsItem
                            onClick={() =>
                                this.setState({ activeTab1: 'favorite' })
                            }
                            selected={this.state.activeTab1 === 'favorite'}
                        >
                            <Icon24FavoriteOutline style={{ margin: 'auto' }} />
                            <Text className={classes.txt}>Избранное</Text>
                        </TabsItem>
                        <TabsItem
                            onClick={() =>
                                this.setState({ activeTab1: 'user-profile' })
                            }
                            selected={this.state.activeTab1 === 'user-profile'}
                        >
                            <Icon24UserCircleOutline
                                style={{ margin: 'auto' }}
                            />
                            <Text className={classes.txt}>Профиль</Text>
                        </TabsItem>
                    </Tabs>
                </Panel>
            </View>
        );
    }
}

export default Navigation;
