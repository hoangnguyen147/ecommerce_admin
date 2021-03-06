// material icon
import AddIcon from '@material-ui/icons/Add';
import ShopIcon from '@material-ui/icons/Shop';
import ViewListIcon from '@material-ui/icons/ViewList';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';

// configs
import { PATH_NAME, DRAWER_MENU_LABEL } from 'configs';

export const navBarCommon = [
  // {
  //   subheader: 'Application',
  //   items: [
  //     {
  //       title: 'Report',
  //       href: PATH_NAME.DASHBOARD,
  //       icon: DashboardIcon,
  //       label: DRAWER_MENU_LABEL.DASHBOARD,
  //     },
  //     {
  //       title: 'Playbackground',
  //       href: PATH_NAME.PLAY_BACKGROUND,
  //       icon: SportsEsportsIcon,
  //       label: DRAWER_MENU_LABEL.PLAY_BACKGROUND,
  //     },
  //   ],
  // },
  {
    subheader: 'Dashboard',
    items: [
      {
        title: 'Product',
        icon: ShopIcon,
        href: PATH_NAME.PRODUCT,
        label: DRAWER_MENU_LABEL.PRODUCT,
        items: [
          {
            title: 'Add Product',
            icon: AddIcon,
            href: PATH_NAME.PRODUCT_ADD,
            label: DRAWER_MENU_LABEL.PRODUCT_ADD,
          },
          {
            title: 'List Product',
            icon: ViewListIcon,
            href: PATH_NAME.PRODUCT_LIST,
            label: DRAWER_MENU_LABEL.PRODUCT_LIST,
          },
        ],
      },
      {
        title: 'Category',
        icon: ShopTwoIcon,
        href: PATH_NAME.CATEGORY,
        label: DRAWER_MENU_LABEL.CATEGORY,
        items: [
          {
            title: 'Add Category',
            icon: AddIcon,
            href: PATH_NAME.CATEGORY_ADD,
            label: DRAWER_MENU_LABEL.CATEGORY_ADD,
          },
          {
            title: 'List Category',
            icon: ViewListIcon,
            href: PATH_NAME.CATEGORY_LIST,
            label: DRAWER_MENU_LABEL.CATEGORY_LIST,
          },
        ],
      },
      {
        title: 'Order',
        href: PATH_NAME.ORDER,
        icon: LocalShippingIcon,
        label: DRAWER_MENU_LABEL.ORDER,
      },
    ],
  },
  {
    subheader: 'Users',
    items: [
      {
        title: 'Users',
        icon: PeopleIcon,
        href: PATH_NAME.USERS,
        label: DRAWER_MENU_LABEL.USERS,
      },
    ],
  },
];
