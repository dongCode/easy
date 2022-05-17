import { SubMenuProps } from 'apusic-ui';

export const useSubMenu = () => {
  const subMenuProps = (
    key: React.Key,
    title: Pick<SubMenuProps, 'title'>['title'],
    onTitleClick: Pick<SubMenuProps, 'onTitleClick'>['onTitleClick'],
  ) => {
    return {
      key: key,
      title: title,
      onTitleClick: (e: any) => {
        onTitleClick!(e);
      },
    };
  };
  return subMenuProps;
};
