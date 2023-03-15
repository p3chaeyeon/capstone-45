import { Layout } from 'antd';
import { useRecoilValue } from 'recoil';
import { headerTitleState } from '../../states/uiState';
import { cssMainHeaderStyle } from './MainHeader.styles';
import { ReactComponent as BackArrow } from '../../assets/images/icons/header-back-arrow.svg';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const MainHeader = () => {
  const navigate = useNavigate();
  const headerTitle = useRecoilValue(headerTitleState);
  const handleClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <Layout.Header css={cssMainHeaderStyle}>
      <BackArrow onClick={handleClickBack} />
      <span className="header-title">{headerTitle}</span>
    </Layout.Header>
  );
};

export default MainHeader;
