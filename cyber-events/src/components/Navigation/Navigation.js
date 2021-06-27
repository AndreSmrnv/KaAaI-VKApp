import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Tabs, withAdaptivity, View, PanelHeaderButton, TabsItem, SizeType, List, CellButton, PanelHeaderBack, HorizontalScroll, Counter } from '@vkontakte/vkui';
import { Icon24NewsfeedOutline, Icon24FavoriteOutline, Icon24UserCircleOutline } from '@vkontakte/icons';
import { PanelHeaderContext } from '@vkontakte/vkui/dist/components/PanelHeaderContext/PanelHeaderContext';
import classes from './Navigation.module.css';


class Navigation extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        activePanel: 'panel1',
        contextOpened: false,
        mode: 'all',
        activeTab1: 'events',
        activeTab2: 'favorite',
        activeTab3: 'user-profile',
      };

      this.select = this.select.bind(this);
    }

    select(e) {
      const mode = e.currentTarget.dataset.mode;
      this.setState({ mode, contextOpened: false });
    }

    render () {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="panel1">
            <Group>
              <Tabs>
                <HorizontalScroll>
                  <TabsItem
                    onClick={() => this.setState({ activeTab1: 'events' })}
                    selected={this.state.activeTab1 === 'events'}
                  >
                    <Icon24NewsfeedOutline style={{margin: 'auto'}} />
                    События
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab1: 'favorite' })}
                    selected={this.state.activeTab1 === 'favorite'}
                  >
                    <Icon24FavoriteOutline style={{margin: 'auto'}} />
                    Избранное
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab1: 'user-profile' })}
                    selected={this.state.activeTab1 === 'user-profile'}
                  >
                    <Icon24UserCircleOutline style={{margin: 'auto'}} />
                    Профиль
                  </TabsItem>
                </HorizontalScroll>
              </Tabs>
            </Group>
          </Panel>
        </View>
      )
    }
  }
  
  const AdaptivityExample = withAdaptivity(Navigation, { sizeX: true });

  <AdaptivityExample />

  export default Navigation;