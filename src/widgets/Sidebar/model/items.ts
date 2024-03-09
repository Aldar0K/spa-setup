import IconAbout from 'shared/assets/icons/about-20-20.svg';
import IconArticle from 'shared/assets/icons/article-20-20.svg';
import IconMain from 'shared/assets/icons/main-20-20.svg';
import IconProfile from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: typeof IconMain;
  authOnly?: boolean;
};

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: IconMain,
    text: 'Main'
  },
  {
    path: RoutePath.about,
    Icon: IconAbout,
    text: 'About'
  },
  {
    path: RoutePath.profile,
    Icon: IconProfile,
    text: 'Profile',
    authOnly: true
  },
  {
    path: RoutePath.articles,
    Icon: IconArticle,
    text: 'Articles',
    authOnly: true
  }
];
