import { createDrawerNavigator} from '@react-navigation/drawer';

import AssetExample from './AssetExample';
import Logout from './Logout';

const Drawer = createDrawerNavigator();

const Navegacao = () => {

  return (
    <Drawer.Navigator initialRouteName="AssetExample">
      <Drawer.Screen name="AssetExample" component={AssetExample} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default Navegacao;